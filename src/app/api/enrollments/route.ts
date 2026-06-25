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
    const { batchId, studentId } = await request.json()

    const connection = await pool.getConnection()

    // Check if already enrolled
    const [enrollment] = await connection.query(
      'SELECT * FROM enrollments WHERE batchId = ? AND studentId = ?',
      [batchId, studentId]
    )

    if (enrollment.length > 0) {
      connection.release()
      return NextResponse.json({ error: 'Already enrolled' }, { status: 400 })
    }

    // Insert enrollment
    await connection.query(
      'INSERT INTO enrollments (batchId, studentId, enrolledAt) VALUES (?, ?, NOW())',
      [batchId, studentId]
    )

    connection.release()

    return NextResponse.json({ message: 'Enrollment successful' }, { status: 201 })
  } catch (error) {
    console.error('Enrollment error:', error)
    return NextResponse.json({ error: 'Failed to enroll' }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get('token')?.value

    if (!token) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
    }

    const decoded = JSON.parse(Buffer.from(token, 'base64').toString())

    const connection = await pool.getConnection()
    const [enrollments] = await connection.query(
      'SELECT e.*, b.*, c.* FROM enrollments e JOIN batches b ON e.batchId = b.id JOIN courses c ON b.courseId = c.id WHERE e.studentId = ?',
      [decoded.id]
    )
    connection.release()

    return NextResponse.json({ enrollments }, { status: 200 })
  } catch (error) {
    console.error('Get enrollments error:', error)
    return NextResponse.json({ error: 'Failed to fetch enrollments' }, { status: 500 })
  }
}
