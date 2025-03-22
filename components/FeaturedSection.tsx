import { Clock, Eye, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

export default function FeaturedSection() {
  return (
    <div className="bg-gray-100 py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Link href="#" className="block">
              <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 group">
                <div className="md:w-1/2 relative overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Featured news"
                    width={400}
                    height={300}
                    className="w-full h-56 md:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-red-400 mb-2 shadow-sm">प्रमुख बातमी</Badge>
                  </div>
                </div>
                <div className="md:w-1/2 p-5 flex flex-col justify-between border-t md:border-t-0 md:border-l border-gray-100">
                  <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-indigo-900 transition-colors">
                      सायन्स लॅबचा भविष्यात उपयोग होईल – प्रा. शब्बीर नालबंद
                    </h2>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      खंडाळा – ग्रामीण भागातील विद्यार्थ्यांना या निमी सायन्स लॅबचा भाही आयुष्यात नक्कीच उपयोग होईल, असा विश्वास विद्यालयाचे आचार्य शब्बीर नालबंद यांनी व्यक्त केला.
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="w-3 h-3 mr-1" />
                      <span>2 days ago</span>
                      <Eye className="w-3 h-3 ml-3 mr-1" />
                      <span>183 views</span>
                    </div>
                    <span className="text-indigo-900 text-sm font-medium flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                      Read More <ArrowRight className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="flex flex-col space-y-6">
            {[
              {
                category: "राजकारण",
                title: "अमेरि रक्षा शास्त्र दुसरी भोपाळ घोडेगा घ्यास...",
                days: 3
              },
              {
                category: "सामाजिक",
                title: "लेखाड्याच्या सुरक्षा निर्माण कार्यालयात विरोधी कक्ष",
                days: 4
              },
              {
                category: "कृषी",
                title: "मुद्री घसरून अधिकतम आर्थिक गरजा पातळीवर",
                days: 5
              }
            ].map((item, index) => (
              <Link href="#" key={index} className="block">
                <article className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 group">
                  <div className="flex p-0">
                    <div className="w-1/3 max-w-[96px] relative">
                      <Image
                        src={`/placeholder.svg?height=100&width=100&text=${index + 1}`}
                        alt="News thumbnail"
                        width={100}
                        height={100}
                        className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    
                    <div className="w-2/3 p-3 flex flex-col justify-between">
                      <div>
                        <Badge className="bg-indigo-900 text-xs">{item.category}</Badge>
                        <h3 className="font-medium mt-2 text-sm leading-snug line-clamp-2 group-hover:text-indigo-900 transition-colors">
                          {item.title}
                        </h3>
                      </div>
                      
                      <div className="flex items-center justify-between text-gray-500 text-xs mt-2">
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          <span>{item.days} days ago</span>
                        </div>
                        <span className="text-indigo-900 font-medium flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                          Read <ArrowRight className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 