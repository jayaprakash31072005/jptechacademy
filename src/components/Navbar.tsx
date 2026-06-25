'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: 'Batches', href: '/batches' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="text-3xl font-bold text-blue-600">JP</div>
            <div className="text-sm font-semibold text-gray-900">Tech Academy</div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {navItems.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 font-semibold hover:text-blue-600 transition duration-200"
              >
                {item.name}
              </Link>
            ))}
            <Link href="/register" className="btn-primary">
              Register
            </Link>
            <Link href="/login" className="btn-secondary">
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 text-2xl"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            {navItems.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-700 font-semibold hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex gap-2 mt-4">
              <Link href="/register" className="flex-1 btn-primary text-center">
                Register
              </Link>
              <Link href="/login" className="flex-1 btn-secondary text-center">
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
