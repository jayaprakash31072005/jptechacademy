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
    const [courses] = await connection.query('SELECT * FROM courses')
    connection.release()

    return NextResponse.json({ courses }, { status: 200 })
  } catch (error) {
    console.error('Get courses error:', error)
    return NextResponse.json({ error: 'Failed to fetch courses' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { name, description, duration, level, price, category } = await request.json()

    const connection = await pool.getConnection()

    await connection.query(
      'INSERT INTO courses (name, description, duration, level, price, category) VALUES (?, ?, ?, ?, ?, ?)',
      [name, description, duration, level, price, category]
    )

    connection.release()

    return NextResponse.json({ message: 'Course created successfully' }, { status: 201 })
  } catch (error) {
    console.error('Create course error:', error)
    return NextResponse.json({ error: 'Failed to create course' }, { status: 500 })
  }
}
