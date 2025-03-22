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
import MainPostSection from "@/components/MainPostSection"
import NewsSidebar from "@/components/NewsSidebar"
import Footer from "@/components/Footer"
import CategoryTabsSection from "@/components/CategoryTabsSection"

export default function NewsWebsite() {
  const [currentDate] = useState("Saturday, 22 March 2025")

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <FeaturedSection />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
        <MainPostSection />
        <NewsSidebar />
      </div>

      <CategoryTabsSection />
      <Footer />
    </div>
  )
}

