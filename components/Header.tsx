import { useState } from "react"
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Instagram,
  List,
  Mail,
  MessageCircle,
  Phone,
  Search,
  Twitter,
  Youtube,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function Header() {
  const [currentDate] = useState("Saturday, 22 March 2025")

  return (
    <>
      {/* Top Bar with Contact and Social */}
      <div className="bg-indigo-900 text-white text-xs py-1 px-4 hidden md:flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <Phone className="w-3 h-3 mr-1" />
            <span>+91 1234567890</span>
          </div>
          <div className="flex items-center">
            <Mail className="w-3 h-3 mr-1" />
            <span>info@jansanwadnews.in</span>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Facebook className="w-3 h-3" />
          <Twitter className="w-3 h-3" />
          <Youtube className="w-3 h-3" />
          <Instagram className="w-3 h-3" />
        </div>
      </div>

      {/* Date and Breaking News Bar */}
      <div className="bg-indigo-900 text-white flex items-center">
        <div className="flex items-center p-2">
          <Calendar className="w-4 h-4 mr-1 hidden sm:inline" />
          <span className="text-xs">{currentDate}</span>
        </div>
        <div className="bg-red-400 text-white px-4 py-2 font-medium">Breaking News</div>
        <div className="flex-1 overflow-hidden whitespace-nowrap px-4 py-2 text-sm">
          <span className="inline-block animate-marquee">
            सायन्स लॅबचा भविष्यात उपयोग होईल – प्रा. शब्बीर नालबंद | अमेरि रक्षा शास्त्र दुसरी भोपाळ घोडेगा घ्यास | लेखाड्याच्या सुरक्षा
            निर्माण कार्यालयात विरोधी कक्ष
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-2 px-4">
          <ChevronLeft className="w-4 h-4" />
          <ChevronRight className="w-4 h-4" />
          <Facebook className="w-4 h-4" />
          <Twitter className="w-4 h-4" />
          <Youtube className="w-4 h-4" />
          <Instagram className="w-4 h-4" />
          <MessageCircle className="w-4 h-4" />
          <List className="w-4 h-4" />
        </div>
      </div>

      {/* Logo and Search */}
      <div className="flex items-center justify-center py-8 px-6">
        {/* Logo container - properly centered */}
        <div className="text-center">
          <style jsx global>{`
            @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi:ital@0;1&display=swap');
            
            .marathi-logo {
              font-family: 'Tiro Devanagari Marathi', serif;
              font-weight: 900;
              text-shadow: 3px 3px 6px rgba(0,0,0,0.2);
              background: linear-gradient(135deg, #312e81 0%, #4338ca 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              letter-spacing: 1px;
              padding-top: 10px;
              display: inline-block;
            }
            
            .tagline {
              font-family: 'Tiro Devanagari Marathi', serif;
              font-weight: 500;
            }
          `}</style>
          <h1 className="text-7xl font-black marathi-logo">जनसंवाद</h1>
          <p className="text-sm text-gray-600 tagline mt-2">आपला आवाज, आपली बातमी</p>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-indigo-900 text-white sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2 overflow-x-auto">
          <div className="flex space-x-6">
            <Link href="#" className="font-medium whitespace-nowrap hover:text-red-300 transition-colors">
              राष्ट्रीय
            </Link>
            <Link href="#" className="font-medium whitespace-nowrap hover:text-red-300 transition-colors">
              राजकारण
            </Link>
            <Link href="#" className="font-medium whitespace-nowrap hover:text-red-300 transition-colors">
              शैक्षणिक
            </Link>
            <Link href="#" className="font-medium whitespace-nowrap hover:text-red-300 transition-colors">
              सामाजिक
            </Link>
            <Link href="#" className="font-medium whitespace-nowrap hover:text-red-300 transition-colors">
              कृषी
            </Link>
            <Link href="#" className="font-medium whitespace-nowrap hover:text-red-300 transition-colors">
              क्रीडा
            </Link>
            <Link href="#" className="font-medium whitespace-nowrap hover:text-red-300 transition-colors">
              व्यापार
            </Link>
            <Link href="#" className="font-medium whitespace-nowrap hover:text-red-300 transition-colors">
              आरोग्य
            </Link>
          </div>
          <Button variant="ghost" className="text-white hidden md:flex">
            <span className="mr-1">Follow</span>
            <span>+</span>
          </Button>
        </div>
      </div>
    </>
  )
} 