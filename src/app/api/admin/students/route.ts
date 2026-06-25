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
    const connection = await pool.getConnection()
    const [students] = await connection.query('SELECT id, firstName, lastName, email, phone, course, enrolledAt FROM students')
    connection.release()

    return NextResponse.json({ students }, { status: 200 })
  } catch (error) {
    console.error('Get students error:', error)
    return NextResponse.json({ error: 'Failed to fetch students' }, { status: 500 })
  }
}
