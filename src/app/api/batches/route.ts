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
    const [batches] = await connection.query('SELECT * FROM batches')
    connection.release()

    return NextResponse.json({ batches }, { status: 200 })
  } catch (error) {
    console.error('Get batches error:', error)
    return NextResponse.json({ error: 'Failed to fetch batches' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { courseId, startDate, endDate, instructor, schedule, capacity } = await request.json()

    const connection = await pool.getConnection()

    await connection.query(
      'INSERT INTO batches (courseId, startDate, endDate, instructor, schedule, capacity) VALUES (?, ?, ?, ?, ?, ?)',
      [courseId, startDate, endDate, instructor, schedule, capacity]
    )

    connection.release()

    return NextResponse.json({ message: 'Batch created successfully' }, { status: 201 })
  } catch (error) {
    console.error('Create batch error:', error)
    return NextResponse.json({ error: 'Failed to create batch' }, { status: 500 })
  }
}
