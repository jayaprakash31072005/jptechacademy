import Link from 'next/link'
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">JP Tech Academy</h3>
            <p className="text-gray-400 mb-4">Learn modern technology from industry experts</p>
            <div className="flex gap-4">
              <FiFacebook className="text-2xl cursor-pointer hover:text-blue-400" />
              <FiTwitter className="text-2xl cursor-pointer hover:text-blue-400" />
              <FiLinkedin className="text-2xl cursor-pointer hover:text-blue-400" />
              <FiInstagram className="text-2xl cursor-pointer hover:text-pink-400" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/courses" className="hover:text-white transition">Courses</Link></li>
              <li><Link href="/batches" className="hover:text-white transition">Batches</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex gap-2 items-center">
                <FiPhone /> +91 9999 999 999
              </div>
              <div className="flex gap-2 items-center">
                <FiMail /> hello@jptechacademy.com
              </div>
              <div className="flex gap-2 items-center">
                <FiMapPin /> Bangalore, India
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 JP Tech Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
