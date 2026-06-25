import mysql from 'mysql2/promise'

const pool = mysql.createPool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
})

async function setupDatabase() {
  try {
    const connection = await pool.getConnection()

    // Create tables
    await connection.query(`
      CREATE TABLE IF NOT EXISTS students (
        id INT AUTO_INCREMENT PRIMARY KEY,
        firstName VARCHAR(100) NOT NULL,
        lastName VARCHAR(100) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        phone VARCHAR(20),
        course VARCHAR(100),
        batch VARCHAR(100),
        experience VARCHAR(50),
        password VARCHAR(255),
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)

    await connection.query(`
      CREATE TABLE IF NOT EXISTS courses (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        duration VARCHAR(50),
        level VARCHAR(50),
        price DECIMAL(10, 2),
        category VARCHAR(100),
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)

    await connection.query(`
      CREATE TABLE IF NOT EXISTS batches (
        id INT AUTO_INCREMENT PRIMARY KEY,
        courseId INT NOT NULL,
        startDate DATE,
        endDate DATE,
        instructor VARCHAR(100),
        schedule VARCHAR(255),
        capacity INT DEFAULT 30,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (courseId) REFERENCES courses(id)
      )
    `)

    await connection.query(`
      CREATE TABLE IF NOT EXISTS enrollments (
        id INT AUTO_INCREMENT PRIMARY KEY,
        batchId INT NOT NULL,
        studentId INT NOT NULL,
        enrolledAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (batchId) REFERENCES batches(id),
        FOREIGN KEY (studentId) REFERENCES students(id)
      )
    `)

    await connection.query(`
      CREATE TABLE IF NOT EXISTS contact_messages (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        email VARCHAR(255),
        phone VARCHAR(20),
        subject VARCHAR(255),
        message TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)

    await connection.query(`
      CREATE TABLE IF NOT EXISTS certificates (
        id INT AUTO_INCREMENT PRIMARY KEY,
        studentId INT NOT NULL,
        certificateNumber VARCHAR(255) UNIQUE,
        issuedDate DATE,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (studentId) REFERENCES students(id)
      )
    `)

    console.log('✅ Database tables created successfully')
    connection.release()
  } catch (error) {
    console.error('❌ Database setup error:', error)
  }
}

setupDatabase()
