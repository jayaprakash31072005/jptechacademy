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
    const { name, email, phone, subject, message } = await request.json()

    const connection = await pool.getConnection()

    // Insert contact message
    await connection.query(
      'INSERT INTO contact_messages (name, email, phone, subject, message, created_at) VALUES (?, ?, ?, ?, ?, NOW())',
      [name, email, phone, subject, message]
    )

    connection.release()

    return NextResponse.json({ message: 'Message sent successfully' }, { status: 201 })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
