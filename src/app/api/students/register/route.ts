import mysql from 'mysql2/promise'
import { NextRequest, NextResponse } from 'next/server'

const pool = mysql.createPool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
})

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, phone, course, batch, experience, password } = await request.json()

    const connection = await pool.getConnection()

    // Check if email already exists
    const [existingUser] = await connection.query('SELECT * FROM students WHERE email = ?', [email])
    if (existingUser.length > 0) {
      connection.release()
      return NextResponse.json({ error: 'Email already registered' }, { status: 400 })
    }

    // Hash password (simplified - use bcrypt in production)
    const hashedPassword = Buffer.from(password).toString('base64')

    // Insert student
    await connection.query(
      'INSERT INTO students (firstName, lastName, email, phone, course, batch, experience, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [firstName, lastName, email, phone, course, batch, experience, hashedPassword]
    )

    connection.release()

    return NextResponse.json({ message: 'Registration successful' }, { status: 201 })
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json({ error: 'Registration failed' }, { status: 500 })
  }
}
