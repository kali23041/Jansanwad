"use client"

import { useState } from "react"
import {
  ArrowRight,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  Eye,
  Facebook,
  FlameIcon as Fire,
  Home,
  Instagram,
  List,
  Mail,
  MessageCircle,
  Phone,
  Search,
  Twitter,
  User,
  Youtube,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import Header from "@/components/Header"
import FeaturedSection from "@/components/FeaturedSection"

export default function NewsWebsite() {
  const [currentDate] = useState("Saturday, 22 March 2025")

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <FeaturedSection />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
        {/* Article Section */}
        <div className="md:col-span-2 border p-4 rounded-lg shadow-sm">
          {/* Breadcrumb */}
          <div className="flex items-center text-sm text-gray-600 mb-4">
            <Home className="w-4 h-4 mr-1" />
            <span>Home / लेखांश / सायन्स लॅबचा भविष्यात उपयोग होईल – प्रा. शब्बीर नालबंद</span>
          </div>

          {/* Categories */}
          <div className="flex space-x-2 mb-4">
            <span className="bg-indigo-900 text-white px-2 py-1 text-xs rounded">राष्ट्रीय</span>
            <span className="bg-indigo-900 text-white px-2 py-1 text-xs rounded">शैक्षणिक</span>
          </div>

          {/* Article Title */}
          <h1 className="text-3xl font-bold text-gray-800 mb-4">सायन्स लॅबचा भविष्यात उपयोग होईल – प्रा . शब्बीर नालबंद</h1>

          {/* Author and Meta */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-300 mr-2 flex items-center justify-center">
                <User className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <div className="font-medium">Team Jansanwad</div>
                <div className="text-sm text-gray-500">2 days ago</div>
              </div>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Eye className="w-4 h-4 mr-1" />
              <span className="mr-2">183</span>
              <Clock className="w-4 h-4 mr-1" />
              <span>1 minute read</span>
            </div>
          </div>

          {/* Social Share */}
          <div className="flex space-x-2 mb-6">
            <Button variant="outline" size="sm" className="bg-blue-600 text-white">
              <Facebook className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm" className="bg-blue-400 text-white">
              <Twitter className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm" className="bg-blue-500 text-white">
              <MessageCircle className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm" className="bg-gray-800 text-white">
              <Mail className="w-4 h-4" />
            </Button>
          </div>

          {/* Article Image */}
          <div className="mb-6">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-22%20at%2011.41.25%E2%80%AFPM-yPoCWVx2E9cvuhRCjdiK4oOkF3c3OW.png"
              alt="Article image"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg"
            />
            <p className="text-sm text-gray-500 mt-2 italic">खंडाळा – ग्रामीण भागातील विद्यार्थ्यांना सायन्स लॅबचा उपयोग</p>
          </div>

          {/* Article Content */}
          <div className="prose max-w-none">
            <p className="font-medium mb-4">
              खंडाळा – ग्रामीण भागातील विद्यार्थ्यांना या निमी सायन्स लॅबचा भाही आयुष्यात नक्कीच उपयोग होईल,असा विश्वास विद्यालयाचे
              आचार्य शब्बीर नालबंद यांनी व्यक्त केला.
            </p>
            <p className="mb-4">
              खंडाळ्यातील राजेंद्र विद्यालयाचे विश्वक येथील टी.ई कॉम्प्लेक्सटी व सर्मथन ट्रस्ट फॉर डि हेलपल यांच्या सौजन्याने टी.ई.कॉम्प्लेक्सटी
              कंपनीचे एच.आर.मॅनेजर संजय होण व प्रोडक्शन मॅनेजर शिवानी कुपटे व सर्मन्वयक अजित देशमुख व सहाय्यक समन्वयक सायेक कांबळे यांच्या
              सहकार्यातून लॅब उभारण्यात आली. यावेळी शाळेचे मुख्याध्यापक प्रा.शब्बीर नालबंद यांनी विद्यार्थ्यांना मार्गदर्शन केले.
            </p>
            <p className="mb-4">
              या प्रसंगी शाळेचे शिक्षक श्री. राजेश पाटील, श्री. संतोष शिंदे, श्री. विजय काळे, श्रीमती सुनीता जाधव, श्रीमती अनिता पवार
              आणि इतर शिक्षक उपस्थित होते. विद्यार्थ्यांनी या नवीन सायन्स लॅबचा अभ्यासासाठी चांगला उपयोग करावा असे आवाहन प्राचार्य
              नालबंद यांनी केले.
            </p>
            <p className="mb-4">
              सायन्स लॅबमध्ये अत्याधुनिक उपकरणे आणि प्रयोगशाळा साहित्य उपलब्ध करून देण्यात आले आहे. यामुळे विद्यार्थ्यांना प्रात्यक्षिक शिक्षण घेणे
              सोपे होणार आहे. ग्रामीण भागातील विद्यार्थ्यांना शहरी भागातील विद्यार्थ्यांप्रमाणे सुविधा मिळाव्यात या उद्देशाने ही लॅब
              उभारण्यात आली आहे.
            </p>
          </div>

          {/* Tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            <Badge variant="outline" className="bg-gray-100">
              सायन्स लॅब
            </Badge>
            <Badge variant="outline" className="bg-gray-100">
              शिक्षण
            </Badge>
            <Badge variant="outline" className="bg-gray-100">
              ग्रामीण विकास
            </Badge>
            <Badge variant="outline" className="bg-gray-100">
              विद्यार्थी
            </Badge>
          </div>

          {/* Author Box */}
          <div className="mt-8 bg-gray-50 p-4 rounded-lg flex items-start">
            <div className="w-16 h-16 rounded-full bg-gray-300 mr-4 flex items-center justify-center">
              <User className="w-8 h-8 text-gray-600" />
            </div>
            <div>
              <h3 className="font-bold">Team Jansanwad</h3>
              <p className="text-sm text-gray-600 mt-1">
                जनसंवाद टीम हे विविध विषयांवर माहितीपूर्ण आणि अद्ययावत बातम्या देण्यासाठी कटिबद्ध आहे. आमचे पत्रकार सत्य आणि निष्पक्षपणे
                माहिती देण्यासाठी प्रयत्नशील आहेत.
              </p>
              <div className="flex mt-2 space-x-2">
                <Link href="#" className="text-indigo-900 hover:underline text-sm">
                  View all posts
                </Link>
                <Link href="#" className="text-indigo-900 hover:underline text-sm">
                  Follow
                </Link>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">संबंधित बातम्या</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=150&width=300"
                  alt="Related news"
                  width={300}
                  height={150}
                  className="w-full h-40 object-cover"
                />
                <div className="p-3">
                  <h3 className="font-medium line-clamp-2">शिक्षणात नवीन तंत्रज्ञानाचा वापर वाढवण्याची गरज</h3>
                  <div className="flex items-center text-gray-500 text-xs mt-1">
                    <Clock className="w-3 h-3 mr-1" />
                    <span>5 days ago</span>
                  </div>
                </div>
              </div>
              <div className="border rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=150&width=300"
                  alt="Related news"
                  width={300}
                  height={150}
                  className="w-full h-40 object-cover"
                />
                <div className="p-3">
                  <h3 className="font-medium line-clamp-2">ग्रामीण शाळांमध्ये डिजिटल शिक्षणाचा प्रसार</h3>
                  <div className="flex items-center text-gray-500 text-xs mt-1">
                    <Clock className="w-3 h-3 mr-1" />
                    <span>1 week ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
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
      </div>

      {/* Category Tabs Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Tabs defaultValue="national" className="w-full">
          <TabsList className="bg-indigo-900 p-0 mb-6">
            <TabsTrigger
              value="national"
              className="data-[state=active]:bg-red-400 data-[state=active]:text-white py-2 px-4"
            >
              राष्ट्रीय
            </TabsTrigger>
            <TabsTrigger
              value="politics"
              className="data-[state=active]:bg-red-400 data-[state=active]:text-white py-2 px-4"
            >
              राजकारण
            </TabsTrigger>
            <TabsTrigger
              value="education"
              className="data-[state=active]:bg-red-400 data-[state=active]:text-white py-2 px-4"
            >
              शैक्षणिक
            </TabsTrigger>
            <TabsTrigger
              value="social"
              className="data-[state=active]:bg-red-400 data-[state=active]:text-white py-2 px-4"
            >
              सामाजिक
            </TabsTrigger>
          </TabsList>

          <TabsContent value="national" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="border rounded-lg overflow-hidden shadow-sm">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="News"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <Badge className="bg-indigo-900 mb-2">राष्ट्रीय</Badge>
                    <h3 className="font-bold mb-2">सायन्स लॅबचा भविष्यात उपयोग होईल – प्रा. शब्बीर नालबंद</h3>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                      खंडाळा – ग्रामीण भागातील विद्यार्थ्यांना या निमी सायन्स लॅबचा भाही आयुष्यात नक्कीच उपयोग होईल,असा विश्वास
                      विद्यालयाचे आचार्य शब्बीर नालबंद यांनी व्यक्त केला.
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-xs text-gray-500">
                        <Clock className="w-3 h-3 mr-1" />
                        <span>2 days ago</span>
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <Eye className="w-3 h-3 mr-1" />
                        <span>183</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="politics" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="border rounded-lg overflow-hidden shadow-sm">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="News"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <Badge className="bg-indigo-900 mb-2">राजकारण</Badge>
                    <h3 className="font-bold mb-2">अमेरि रक्षा शास्त्र दुसरी भोपाळ घोडेगा घ्यास...</h3>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                      अमेरि रक्षा शास्त्र दुसरी भोपाळ घोडेगा घ्यास यांच्या नेतृत्वाखाली झालेल्या बैठकीत महत्वपूर्ण निर्णय घेण्यात आले.
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-xs text-gray-500">
                        <Clock className="w-3 h-3 mr-1" />
                        <span>3 days ago</span>
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <Eye className="w-3 h-3 mr-1" />
                        <span>145</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="education" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="border rounded-lg overflow-hidden shadow-sm">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="News"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <Badge className="bg-indigo-900 mb-2">शैक्षणिक</Badge>
                    <h3 className="font-bold mb-2">शिक्षणात नवीन तंत्रज्ञानाचा वापर वाढवण्याची गरज</h3>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                      शिक्षणात नवीन तंत्रज्ञानाचा वापर वाढवण्याची गरज असून, याबाबत शिक्षण विभागाने महत्वपूर्ण निर्णय घेतले आहेत.
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-xs text-gray-500">
                        <Clock className="w-3 h-3 mr-1" />
                        <span>5 days ago</span>
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <Eye className="w-3 h-3 mr-1" />
                        <span>120</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="social" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="border rounded-lg overflow-hidden shadow-sm">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="News"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <Badge className="bg-indigo-900 mb-2">सामाजिक</Badge>
                    <h3 className="font-bold mb-2">लेखाड्याच्या सुरक्षा निर्माण कार्यालयात विरोधी कक्ष</h3>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                      लेखाड्याच्या सुरक्षा निर्माण कार्यालयात विरोधी कक्ष स्थापन करण्यात आला असून, याबाबत अधिक माहिती देण्यात आली.
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-xs text-gray-500">
                        <Clock className="w-3 h-3 mr-1" />
                        <span>4 days ago</span>
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <Eye className="w-3 h-3 mr-1" />
                        <span>98</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
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
    </div>
  )
}

