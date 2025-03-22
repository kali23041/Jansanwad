import { useState } from "react"
import { ArrowRight, Calendar, Clock, Eye, Facebook, Home, Mail, MessageCircle, Twitter, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"

export default function MainPostSection() {
  return (
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
  )
} 