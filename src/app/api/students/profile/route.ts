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

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get('token')?.value

    if (!token) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
    }

    // Decode token (simplified)
    const decoded = JSON.parse(Buffer.from(token, 'base64').toString())

    const connection = await pool.getConnection()
    const [students] = await connection.query('SELECT * FROM students WHERE id = ?', [decoded.id])
    connection.release()

    if (students.length === 0) {
      return NextResponse.json({ error: 'Student not found' }, { status: 404 })
    }

    const student = students[0]
    return NextResponse.json({ student }, { status: 200 })
  } catch (error) {
    console.error('Get profile error:', error)
    return NextResponse.json({ error: 'Failed to get profile' }, { status: 500 })
  }
}
