import { useState } from "react"
import { ArrowRight, Calendar, Clock, Eye, Facebook, Home, Mail, MessageCircle, Twitter, User, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"

export default function MainPostSection() {
  return (
    <div className="md:col-span-2">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Martel+Devanagari:wght@300;400;600;700;800&display=swap');
        
        .article-heading {
          font-family: 'Martel Devanagari', serif;
          font-weight: 700;
          letter-spacing: -0.01em;
          line-height: 1.3;
        }
        
        .article-text {
          font-family: 'Martel Devanagari', serif;
          font-weight: 400;
        }
        
        .article-lead {
          font-family: 'Martel Devanagari', serif;
          font-weight: 600;
          line-height: 1.6;
        }
        
        .article-meta {
          font-family: 'Martel Devanagari', serif;
          font-weight: 400;
        }
        
        .article-caption {
          font-family: 'Martel Devanagari', serif;
          font-style: italic;
          font-weight: 400;
        }
        
        .article-quote {
          font-family: 'Martel Devanagari', serif;
          font-style: italic;
          font-weight: 500;
        }
        
        .article-tag {
          font-family: 'Martel Devanagari', serif;
          font-weight: 600;
        }
      `}</style>
      
      <article className="bg-white border border-gray-200 p-6 rounded-xl shadow-md">
        {/* Breadcrumb */}
        <nav className="flex items-center text-sm text-gray-500 mb-5 pb-3 border-b border-gray-100 article-meta">
          <Link href="/" className="flex items-center hover:text-indigo-900 transition-colors">
            <Home className="w-4 h-4 mr-1" />
            <span>Home</span>
          </Link>
          <span className="mx-2">/</span>
          <Link href="/category" className="hover:text-indigo-900 transition-colors">लेखांश</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">सायन्स लॅबचा भविष्यात उपयोग होईल</span>
        </nav>

        {/* Categories */}
        <div className="flex space-x-2 mb-5">
          <Badge className="bg-indigo-900 hover:bg-indigo-800 text-white px-3 py-1 text-xs rounded-full transition-colors shadow-sm article-tag">
            राष्ट्रीय
          </Badge>
          <Badge className="bg-indigo-900 hover:bg-indigo-800 text-white px-3 py-1 text-xs rounded-full transition-colors shadow-sm article-tag">
            शैक्षणिक
          </Badge>
        </div>

        {/* Article Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-5 leading-tight article-heading">
          सायन्स लॅबचा भविष्यात उपयोग होईल – प्रा. शब्बीर नालबंद
        </h1>

        {/* Author and Meta */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 pb-5 border-b border-gray-100">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-indigo-100 mr-3 flex items-center justify-center shadow-sm">
              <User className="w-6 h-6 text-indigo-900" />
            </div>
            <div>
              <div className="font-medium text-gray-900 article-meta">Team Jansanwad</div>
              <div className="text-sm text-gray-500 flex items-center article-meta">
                <Calendar className="w-3 h-3 mr-1" />
                <span>March 22, 2025</span>
              </div>
            </div>
          </div>
          <div className="flex items-center text-sm text-gray-500 space-x-4">
            <div className="flex items-center">
              <Eye className="w-4 h-4 mr-1 text-indigo-800" />
              <span>183 views</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1 text-indigo-800" />
              <span>1 minute read</span>
            </div>
          </div>
        </div>

        {/* Social Share */}
        <div className="fixed left-4 top-1/3 hidden lg:flex flex-col space-y-3 bg-white p-3 rounded-full shadow-lg z-10">
          <Button variant="outline" size="icon" className="rounded-full w-10 h-10 bg-blue-600 text-white hover:bg-blue-700">
            <Facebook className="w-5 h-5" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full w-10 h-10 bg-blue-400 text-white hover:bg-blue-500">
            <Twitter className="w-5 h-5" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full w-10 h-10 bg-green-500 text-white hover:bg-green-600">
            <MessageCircle className="w-5 h-5" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full w-10 h-10 bg-gray-800 text-white hover:bg-gray-900">
            <Mail className="w-5 h-5" />
          </Button>
        </div>

        {/* Mobile Share */}
        <div className="flex lg:hidden space-x-2 mb-6">
          <Button variant="outline" size="sm" className="rounded-full bg-blue-600 text-white hover:bg-blue-700">
            <Facebook className="w-4 h-4 mr-1" />
            <span>Share</span>
          </Button>
          <Button variant="outline" size="sm" className="rounded-full bg-blue-400 text-white hover:bg-blue-500">
            <Twitter className="w-4 h-4 mr-1" />
            <span>Tweet</span>
          </Button>
          <Button variant="outline" size="sm" className="rounded-full bg-gray-800 text-white hover:bg-gray-900">
            <Share2 className="w-4 h-4 mr-1" />
            <span>More</span>
          </Button>
        </div>

        {/* Article Image */}
        <figure className="mb-8 rounded-xl overflow-hidden shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=2070&auto=format&fit=crop"
            alt="Students in a modern science laboratory"
            width={800}
            height={500}
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
          />
          <figcaption className="text-sm text-gray-500 mt-3 italic px-2 article-caption">
            खंडाळा – आधुनिक विज्ञान प्रयोगशाळेत अभ्यास करणारे विद्यार्थी
          </figcaption>
        </figure>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none prose-indigo mb-8">
          <p className="font-medium text-gray-900 text-xl leading-relaxed mb-5 article-lead">
            खंडाळा – ग्रामीण भागातील विद्यार्थ्यांना या निमी सायन्स लॅबचा भाही आयुष्यात नक्कीच उपयोग होईल, असा विश्वास विद्यालयाचे
            आचार्य शब्बीर नालबंद यांनी व्यक्त केला.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed article-text">
            खंडाळ्यातील राजेंद्र विद्यालयाचे विश्वक येथील टी.ई कॉम्प्लेक्सटी व सर्मथन ट्रस्ट फॉर डि हेलपल यांच्या सौजन्याने टी.ई.कॉम्प्लेक्सटी
            कंपनीचे एच.आर.मॅनेजर संजय होण व प्रोडक्शन मॅनेजर शिवानी कुपटे व सर्मन्वयक अजित देशमुख व सहाय्यक समन्वयक सायेक कांबळे यांच्या
            सहकार्यातून लॅब उभारण्यात आली. यावेळी शाळेचे मुख्याध्यापक प्रा.शब्बीर नालबंद यांनी विद्यार्थ्यांना मार्गदर्शन केले.
          </p>

          <figure className="my-8">
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="https://images.unsplash.com/photo-1564069114553-7215e1ff1890?q=80&w=2032&auto=format&fit=crop"
                alt="Science lab equipment"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
              <Image
                src="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2080&auto=format&fit=crop"
                alt="Students working in lab"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            </div>
            <figcaption className="text-center text-sm text-gray-500 mt-2">आधुनिक विज्ञान प्रयोगशाळेतील उपकरणे आणि विद्यार्थी</figcaption>
          </figure>
          
          <p className="mb-5 text-gray-700 leading-relaxed article-text">
            या प्रसंगी शाळेचे शिक्षक श्री. राजेश पाटील, श्री. संतोष शिंदे, श्री. विजय काळे, श्रीमती सुनीता जाधव, श्रीमती अनिता पवार
            आणि इतर शिक्षक उपस्थित होते. विद्यार्थ्यांनी या नवीन सायन्स लॅबचा अभ्यासासाठी चांगला उपयोग करावा असे आवाहन प्राचार्य
            नालबंद यांनी केले.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed article-text">
            सायन्स लॅबमध्ये अत्याधुनिक उपकरणे आणि प्रयोगशाळा साहित्य उपलब्ध करून देण्यात आले आहे. यामुळे विद्यार्थ्यांना प्रात्यक्षिक शिक्षण घेणे
            सोपे होणार आहे. ग्रामीण भागातील विद्यार्थ्यांना शहरी भागातील विद्यार्थ्यांप्रमाणे सुविधा मिळाव्यात या उद्देशाने ही लॅब
            उभारण्यात आली आहे.
          </p>
          
          <blockquote className="border-l-4 border-indigo-500 pl-4 py-2 italic bg-indigo-50 rounded-r-md my-6 article-quote">
            "विज्ञान शिक्षणात प्रात्यक्षिक अनुभव हा महत्त्वाचा भाग आहे. या सायन्स लॅबमुळे विद्यार्थी संशोधक बनण्याचा मार्ग मोकळा होईल." 
            <cite className="block text-right not-italic text-sm text-gray-600 mt-2 article-meta">- प्रा. शब्बीर नालबंद</cite>
          </blockquote>
        </div>

        {/* Tags */}
        <div className="mt-6 mb-8 flex flex-wrap gap-2">
          <Badge variant="outline" className="bg-gray-100 hover:bg-gray-200 transition-colors px-3 py-1 rounded-full article-tag">
            सायन्स लॅब
          </Badge>
          <Badge variant="outline" className="bg-gray-100 hover:bg-gray-200 transition-colors px-3 py-1 rounded-full article-tag">
            शिक्षण
          </Badge>
          <Badge variant="outline" className="bg-gray-100 hover:bg-gray-200 transition-colors px-3 py-1 rounded-full article-tag">
            ग्रामीण विकास
          </Badge>
          <Badge variant="outline" className="bg-gray-100 hover:bg-gray-200 transition-colors px-3 py-1 rounded-full article-tag">
            विद्यार्थी
          </Badge>
        </div>

        {/* Author Box */}
        <div className="mt-10 mb-8 bg-gradient-to-r from-indigo-50 to-gray-50 p-6 rounded-xl shadow-sm border border-indigo-100">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <div className="w-20 h-20 rounded-full bg-indigo-100 flex-shrink-0 flex items-center justify-center shadow">
              <User className="w-10 h-10 text-indigo-900" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-2 article-heading">Team Jansanwad</h3>
              <p className="text-gray-600 leading-relaxed article-text">
                जनसंवाद टीम हे विविध विषयांवर माहितीपूर्ण आणि अद्ययावत बातम्या देण्यासाठी कटिबद्ध आहे. आमचे पत्रकार सत्य आणि निष्पक्षपणे
                माहिती देण्यासाठी प्रयत्नशील आहेत.
              </p>
              <div className="flex mt-3 space-x-3">
                <Link href="#" className="text-indigo-900 hover:underline font-medium flex items-center">
                  <span>View all posts</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
                <Link href="#" className="bg-indigo-900 text-white px-4 py-1 rounded-full text-sm hover:bg-indigo-800 transition-colors shadow-sm">
                  Follow
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-12">
          <h2 className="text-xl font-bold mb-6 text-gray-800 border-b pb-2 article-heading">संबंधित बातम्या</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link href="#" className="group">
              <div className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop"
                    alt="Related news"
                    width={400}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-4">
                  <Badge className="bg-indigo-900 text-white mb-2">शैक्षणिक</Badge>
                  <h3 className="font-medium text-gray-900 group-hover:text-indigo-900 transition-colors line-clamp-2 article-heading">
                    शिक्षणात नवीन तंत्रज्ञानाचा वापर वाढवण्याची गरज
                  </h3>
                  <div className="flex items-center text-gray-500 text-xs mt-3">
                    <Clock className="w-3 h-3 mr-1" />
                    <span>5 days ago</span>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="#" className="group">
              <div className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2071&auto=format&fit=crop"
                    alt="Related news"
                    width={400}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-4">
                  <Badge className="bg-indigo-900 text-white mb-2">शैक्षणिक</Badge>
                  <h3 className="font-medium text-gray-900 group-hover:text-indigo-900 transition-colors line-clamp-2 article-heading">
                    ग्रामीण शाळांमध्ये डिजिटल शिक्षणाचा प्रसार
                  </h3>
                  <div className="flex items-center text-gray-500 text-xs mt-3">
                    <Clock className="w-3 h-3 mr-1" />
                    <span>1 week ago</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
} 