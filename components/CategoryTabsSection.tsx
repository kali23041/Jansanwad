import { Clock, Eye } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function CategoryTabsSection() {
  return (
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
  )
} 