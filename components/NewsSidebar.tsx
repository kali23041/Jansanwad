import { ArrowRight, Clock, Eye, FlameIcon as Fire, Home, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"

export default function NewsSidebar() {
  return (
    <div className="md:col-span-1 space-y-6">
      {/* Recent Posts */}
      <div className="border rounded-lg shadow-sm overflow-hidden">
        <div className="bg-indigo-900 text-white p-3 font-medium">Recent Posts</div>
        <div className="p-4">
          <ul className="space-y-4">
            <li className="flex">
              <ArrowRight className="w-4 h-4 mr-2 flex-shrink-0 mt-1 text-indigo-900" />
              <span className="text-sm">सायन्स लॅबचा भविष्यात उपयोग होईल – प्रा. शब्बीर नालबंद</span>
            </li>
            <li className="flex">
              <ArrowRight className="w-4 h-4 mr-2 flex-shrink-0 mt-1 text-indigo-900" />
              <span className="text-sm">अमेरि रक्षा शास्त्र दुसरी भोपाळ घोडेगा घ्यास...</span>
            </li>
            <li className="flex">
              <ArrowRight className="w-4 h-4 mr-2 flex-shrink-0 mt-1 text-indigo-900" />
              <span className="text-sm">लेखाड्याच्या सुरक्षा निर्माण कार्यालयात विरोधी कक्ष</span>
            </li>
            <li className="flex">
              <ArrowRight className="w-4 h-4 mr-2 flex-shrink-0 mt-1 text-indigo-900" />
              <span className="text-sm">मुद्री घसरून अधिकतम आर्थिक गरजा पातळीवर</span>
            </li>
            <li className="flex">
              <ArrowRight className="w-4 h-4 mr-2 flex-shrink-0 mt-1 text-indigo-900" />
              <span className="text-sm">अनुकूलेच्या निर्णयक सभारंभूण देश विकसित – डॉ.पी.जे.एम</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Trending News */}
      <div className="border rounded-lg shadow-sm overflow-hidden">
        <div className="bg-indigo-900 text-white p-3 font-medium flex items-center">
          <Fire className="w-4 h-4 mr-2" />
          Trending News
        </div>
        <div className="p-4">
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-indigo-900 text-white rounded-full flex items-center justify-center font-bold mr-3">
                1
              </div>
              <span className="text-sm">सायन्स लॅबचा भविष्यात उपयोग होईल – प्रा. शब्बीर नालबंद</span>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-indigo-900 text-white rounded-full flex items-center justify-center font-bold mr-3">
                2
              </div>
              <span className="text-sm">अमेरि रक्षा शास्त्र दुसरी भोपाळ घोडेगा घ्यास...</span>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-indigo-900 text-white rounded-full flex items-center justify-center font-bold mr-3">
                3
              </div>
              <span className="text-sm">लेखाड्याच्या सुरक्षा निर्माण कार्यालयात विरोधी कक्ष</span>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-indigo-900 text-white rounded-full flex items-center justify-center font-bold mr-3">
                4
              </div>
              <span className="text-sm">मुद्री घसरून अधिकतम आर्थिक गरजा पातळीवर</span>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-indigo-900 text-white rounded-full flex items-center justify-center font-bold mr-3">
                5
              </div>
              <span className="text-sm">अनुकूलेच्या निर्णयक सभारंभूण देश विकसित – डॉ.पी.जे.एम</span>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="border rounded-lg shadow-sm overflow-hidden">
        <div className="bg-indigo-900 text-white p-3 font-medium">Categories</div>
        <div className="p-4">
          <div className="grid grid-cols-2 gap-2">
            <Link
              href="#"
              className="bg-gray-100 p-2 rounded text-center text-sm hover:bg-indigo-100 transition-colors"
            >
              राष्ट्रीय
            </Link>
            <Link
              href="#"
              className="bg-gray-100 p-2 rounded text-center text-sm hover:bg-indigo-100 transition-colors"
            >
              राजकारण
            </Link>
            <Link
              href="#"
              className="bg-gray-100 p-2 rounded text-center text-sm hover:bg-indigo-100 transition-colors"
            >
              शैक्षणिक
            </Link>
            <Link
              href="#"
              className="bg-gray-100 p-2 rounded text-center text-sm hover:bg-indigo-100 transition-colors"
            >
              सामाजिक
            </Link>
            <Link
              href="#"
              className="bg-gray-100 p-2 rounded text-center text-sm hover:bg-indigo-100 transition-colors"
            >
              कृषी
            </Link>
            <Link
              href="#"
              className="bg-gray-100 p-2 rounded text-center text-sm hover:bg-indigo-100 transition-colors"
            >
              क्रीडा
            </Link>
            <Link
              href="#"
              className="bg-gray-100 p-2 rounded text-center text-sm hover:bg-indigo-100 transition-colors"
            >
              व्यापार
            </Link>
            <Link
              href="#"
              className="bg-gray-100 p-2 rounded text-center text-sm hover:bg-indigo-100 transition-colors"
            >
              आरोग्य
            </Link>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="border rounded-lg shadow-sm overflow-hidden">
        <div className="bg-indigo-900 text-white p-3 font-medium">Subscribe to Newsletter</div>
        <div className="p-4">
          <p className="text-sm text-gray-600 mb-3">
            Get the latest news and updates delivered directly to your inbox.
          </p>
          <div className="space-y-2">
            <Input placeholder="Your Email" className="w-full" />
            <Button className="w-full bg-indigo-900 hover:bg-indigo-800">Subscribe</Button>
          </div>
        </div>
      </div>

      {/* Popular Tags */}
      <div className="border rounded-lg shadow-sm overflow-hidden">
        <div className="bg-indigo-900 text-white p-3 font-medium">Popular Tags</div>
        <div className="p-4">
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="bg-gray-100">
              सायन्स लॅब
            </Badge>
            <Badge variant="outline" className="bg-gray-100">
              शिक्षण
            </Badge>
            <Badge variant="outline" className="bg-gray-100">
              राष्ट्रीय
            </Badge>
            <Badge variant="outline" className="bg-gray-100">
              विद्यार्थी
            </Badge>
            <Badge variant="outline" className="bg-gray-100">
              ग्रामीण
            </Badge>
            <Badge variant="outline" className="bg-gray-100">
              तंत्रज्ञान
            </Badge>
            <Badge variant="outline" className="bg-gray-100">
              विकास
            </Badge>
          </div>
        </div>
      </div>

      {/* Weather Widget */}
      <div className="border rounded-lg shadow-sm overflow-hidden">
        <div className="bg-indigo-900 text-white p-3 font-medium">Weather</div>
        <div className="p-4 text-center">
          <h3 className="font-bold">खंडाळा</h3>
          <div className="flex justify-center my-2">
            <div className="text-4xl font-bold">28°C</div>
          </div>
          <p className="text-sm text-gray-600">Partly Cloudy</p>
          <div className="grid grid-cols-3 gap-2 mt-3 text-xs">
            <div className="bg-gray-100 p-2 rounded">
              <div>Mon</div>
              <div className="font-bold">29°C</div>
            </div>
            <div className="bg-gray-100 p-2 rounded">
              <div>Tue</div>
              <div className="font-bold">30°C</div>
            </div>
            <div className="bg-gray-100 p-2 rounded">
              <div>Wed</div>
              <div className="font-bold">27°C</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 