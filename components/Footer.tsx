import { Facebook, Twitter, Youtube, Instagram, Phone, Mail, Home } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-indigo-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">जनसंवाद</h2>
            <p className="text-sm mb-4">
              जनसंवाद हे एक प्रमुख मराठी वृत्तपत्र आहे जे सत्य, निष्पक्षपणे आणि विश्वासार्हतेने बातम्या देण्यासाठी वचनबद्ध आहे.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-red-300">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-red-300">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-red-300">
                <Youtube className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-red-300">
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-red-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-300">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-red-300">
                  राष्ट्रीय
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-300">
                  राजकारण
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-300">
                  शैक्षणिक
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-300">
                  सामाजिक
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-300">
                  कृषी
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+91 1234567890</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>info@jansanwadnews.in</span>
              </li>
              <li className="flex items-start">
                <Home className="w-4 h-4 mr-2 mt-1" />
                <span>123, Main Street, खंडाळा, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-indigo-800 mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} जनसंवाद. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
} 