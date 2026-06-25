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
    const { studentId, certificateNumber, issuedDate } = await request.json()

    const connection = await pool.getConnection()

    // Get student info
    const [students] = await connection.query('SELECT * FROM students WHERE id = ?', [studentId])

    if (students.length === 0) {
      connection.release()
      return NextResponse.json({ error: 'Student not found' }, { status: 404 })
    }

    const student = students[0]

    // Insert certificate record
    await connection.query(
      'INSERT INTO certificates (studentId, certificateNumber, issuedDate, createdAt) VALUES (?, ?, ?, NOW())',
      [studentId, certificateNumber, issuedDate]
    )

    connection.release()

    return NextResponse.json(
      {
        message: 'Certificate generated',
        certificate: {
          studentName: `${student.firstName} ${student.lastName}`,
          course: student.course,
          certificateNumber,
          issuedDate,
        },
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Certificate error:', error)
    return NextResponse.json({ error: 'Failed to generate certificate' }, { status: 500 })
  }
}
