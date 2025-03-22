import { ArrowRight, Clock, Eye, FlameIcon as Fire, Home, Mail, TagIcon, Umbrella, MenuSquare, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"

export default function NewsSidebar() {
  return (
    <div className="md:col-span-1 space-y-8">
      {/* Recent Posts */}
      <div className="rounded-xl shadow-md overflow-hidden border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-300">
        <div className="bg-indigo-900 text-white p-4 font-semibold flex items-center">
          <Clock className="w-4 h-4 mr-2" />
          <span>Recent Posts</span>
        </div>
        <div className="p-5">
          <ul className="space-y-4">
            {[
              "सायन्स लॅबचा भविष्यात उपयोग होईल – प्रा. शब्बीर नालबंद",
              "अमेरि रक्षा शास्त्र दुसरी भोपाळ घोडेगा घ्यास...",
              "लेखाड्याच्या सुरक्षा निर्माण कार्यालयात विरोधी कक्ष",
              "मुद्री घसरून अधिकतम आर्थिक गरजा पातळीवर",
              "अनुकूलेच्या निर्णयक सभारंभूण देश विकसित – डॉ.पी.जे.एम"
            ].map((title, index) => (
              <li key={index} className="group">
                <Link href="#" className="flex hover:bg-gray-50 rounded-lg p-2 -mx-2 transition-colors">
                  <ArrowRight className="w-4 h-4 mr-3 flex-shrink-0 mt-1 text-indigo-900 group-hover:translate-x-1 transition-transform" />
                  <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">{title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Trending News */}
      <div className="rounded-xl shadow-md overflow-hidden border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-300">
        <div className="bg-indigo-900 text-white p-4 font-semibold flex items-center">
          <Fire className="w-4 h-4 mr-2" />
          <span>Trending News</span>
        </div>
        <div className="p-5">
          <div className="space-y-5">
            {[
              "सायन्स लॅबचा भविष्यात उपयोग होईल – प्रा. शब्बीर नालबंद",
              "अमेरि रक्षा शास्त्र दुसरी भोपाळ घोडेगा घ्यास...",
              "लेखाड्याच्या सुरक्षा निर्माण कार्यालयात विरोधी कक्ष",
              "मुद्री घसरून अधिकतम आर्थिक गरजा पातळीवर",
              "अनुकूलेच्या निर्णयक सभारंभूण देश विकसित – डॉ.पी.जे.एम"
            ].map((title, index) => (
              <Link href="#" key={index}>
                <div className="flex items-center group hover:bg-gray-50 p-2 -mx-2 rounded-lg transition-colors">
                  <div className="w-9 h-9 bg-gradient-to-br from-indigo-900 to-indigo-700 text-white rounded-full flex items-center justify-center font-bold mr-3 shadow-sm group-hover:shadow transition-shadow">
                    {index + 1}
                  </div>
                  <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">{title}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="rounded-xl shadow-md overflow-hidden border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-300">
        <div className="bg-indigo-900 text-white p-4 font-semibold flex items-center">
          <MenuSquare className="w-4 h-4 mr-2" />
          <span>Categories</span>
        </div>
        <div className="p-5">
          <div className="grid grid-cols-2 gap-3">
            {[
              "राष्ट्रीय", "राजकारण", "शैक्षणिक", "सामाजिक",
              "कृषी", "क्रीडा", "व्यापार", "आरोग्य"
            ].map((category, index) => (
              <Link
                href="#"
                key={index}
                className="bg-gray-50 hover:bg-indigo-50 p-3 rounded-lg text-center text-sm font-medium text-gray-700 hover:text-indigo-900 border border-gray-100 hover:border-indigo-100 transition-all shadow-sm hover:shadow"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="rounded-xl shadow-md overflow-hidden border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-300">
        <div className="bg-indigo-900 text-white p-4 font-semibold flex items-center">
          <Send className="w-4 h-4 mr-2" />
          <span>Subscribe to Newsletter</span>
        </div>
        <div className="p-5">
          <p className="text-sm text-gray-600 mb-4">
            Get the latest news and updates delivered directly to your inbox.
          </p>
          <div className="space-y-3">
            <Input 
              placeholder="Your Email" 
              className="w-full border-gray-200 focus:border-indigo-300 rounded-lg" 
            />
            <Button className="w-full bg-indigo-900 hover:bg-indigo-800 font-medium shadow-sm hover:shadow transition-shadow rounded-lg py-2 h-auto">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Popular Tags */}
      <div className="rounded-xl shadow-md overflow-hidden border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-300">
        <div className="bg-indigo-900 text-white p-4 font-semibold flex items-center">
          <TagIcon className="w-4 h-4 mr-2" />
          <span>Popular Tags</span>
        </div>
        <div className="p-5">
          <div className="flex flex-wrap gap-2">
            {[
              "सायन्स लॅब", "शिक्षण", "राष्ट्रीय", "विद्यार्थी",
              "ग्रामीण", "तंत्रज्ञान", "विकास"
            ].map((tag, index) => (
              <Badge 
                key={index}
                variant="outline" 
                className="bg-gray-50 hover:bg-indigo-50 border border-gray-200 hover:border-indigo-200 px-3 py-1 text-sm rounded-lg text-gray-700 hover:text-indigo-900 transition-colors cursor-pointer"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Weather Widget */}
      <div className="rounded-xl shadow-md overflow-hidden border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-300">
        <div className="bg-indigo-900 text-white p-4 font-semibold flex items-center">
          <Umbrella className="w-4 h-4 mr-2" />
          <span>Weather</span>
        </div>
        <div className="p-5 text-center">
          <h3 className="font-bold text-gray-800">खंडाळा</h3>
          <div className="flex justify-center items-center my-4">
            <div className="text-5xl font-bold text-indigo-900">28°C</div>
            <div className="ml-3 bg-yellow-100 p-2 rounded-full h-12 w-12 flex items-center justify-center">
              <span className="text-yellow-600">☀️</span>
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-4">Partly Cloudy</p>
          <div className="grid grid-cols-3 gap-3 mt-3">
            {[
              { day: "Mon", temp: "29°C" },
              { day: "Tue", temp: "30°C" },
              { day: "Wed", temp: "27°C" }
            ].map((forecast, index) => (
              <div key={index} className="bg-gray-50 p-3 rounded-lg shadow-sm border border-gray-100">
                <div className="text-xs font-medium text-gray-500">{forecast.day}</div>
                <div className="font-bold text-gray-800">{forecast.temp}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 