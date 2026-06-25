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
    const { email, password } = await request.json()

    const connection = await pool.getConnection()

    // Find student by email
    const [students] = await connection.query('SELECT * FROM students WHERE email = ?', [email])

    if (students.length === 0) {
      connection.release()
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    const student = students[0]

    // Verify password (simplified - use bcrypt in production)
    const hashedPassword = Buffer.from(password).toString('base64')
    if (student.password !== hashedPassword) {
      connection.release()
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    connection.release()

    // Create JWT token (simplified)
    const token = Buffer.from(JSON.stringify({ id: student.id, email: student.email })).toString('base64')

    const response = NextResponse.json(
      { message: 'Login successful', token, student: { id: student.id, email: student.email, firstName: student.firstName } },
      { status: 200 }
    )

    // Set cookie
    response.cookies.set('token', token, { httpOnly: true, maxAge: 7 * 24 * 60 * 60 })

    return response
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json({ error: 'Login failed' }, { status: 500 })
  }
}
