"use client"
import { Button } from "@/components/ui/button"
import { PhoneCall, CheckCircle, Shield, Lock, ArrowUpCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import dynamic from "next/dynamic"
import ParticlesBackground from "@/components/particles-background"
import StatsSection from "@/components/stats-section"
import { useEffect, useState } from "react"
import MobileNav from "@/components/mobile-nav"
import Image from "next/image"
import CourseHighlights from "@/components/course-highlights"

const Timeline = dynamic(() => import("@/components/timeline"), { ssr: false })
const FAQSection = dynamic(() => import("@/components/faq-section"), { ssr: false })
const PricingSection = dynamic(() => import("@/components/pricing-section"), { ssr: false })

export default function Page() {
  const [showScrollButton, setShowScrollButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true)
      } else {
        setShowScrollButton(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <ParticlesBackground />

      {/* Header */}
      <header className="container mx-auto px-4 py-6 relative z-20">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-emerald-500 flex items-center gap-2">
            <Shield className="w-6 h-6" />
            EduCyber
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">
              Bosh sahifa
            </a>
            <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">
              Nega BM SECURITY ?
            </a>
            <a href="#" className="text-emerald-500 hover:text-emerald-400 transition-colors">
              Kurs
            </a>
            <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">
              Biz haqimizda
            </a>
            <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">
              Blog
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center text-gray-300">
              <PhoneCall className="w-5 h-5 mr-2" />
              <span>(77) 777-77-77</span>
            </div>
            <Button className="bg-emerald-500 text-white hover:bg-emerald-600 transition-colors animate-pulse">
              Biz bilan aloqa
            </Button>
          </div>

          <MobileNav />
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10">
        <div className="container mx-auto px-4 py-12">
          <div className="relative w-full max-w-xl aspect-square mb-16">
            <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-3xl"></div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sq4CX65vk5rE6zPE9KHraSBKHrAQhw.png"
              alt="Cybersecurity Shield"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain relative z-10"
              priority
            />
          </div>

          {/* Stats Section */}
          <StatsSection className="mb-16" />

          <CourseHighlights />

          {/* Course Program */}
          <section className="container mx-auto mb-16 px-4">
            <div className="flex items-center gap-2 justify-center mb-8">
              <Lock className="w-5 h-5 text-emerald-500" />
              <h2 className="text-2xl font-bold">Kurs dasturi</h2>
            </div>
            <Timeline />
          </section>

          {/* Course Details */}
          <div className="prose prose-lg max-w-4xl mx-auto px-4 text-left space-y-8 prose-invert">
            <div className="bg-emerald-500/10 p-6 rounded-lg mb-8 border border-emerald-500/20">
              <h2 className="text-2xl font-bold text-emerald-400 mb-4">Diqqat!</h2>
              <p className="text-gray-300">
                Ushbu kursda siz kiberxavfsizlik uchun zarur bo'lgan barcha bilimlarni o'rganasiz. Sohaning bir qancha
                yo'nalishlari mavjud, siz ushbu kursda bu sohalarni barchasiga aloqador bilimlar bilan tanishasiz, ya'ni
                kurs umumiy va komplekt qilib ishlangan.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-emerald-400">Kursda qatnashish uchun talablar:</h3>
              <ul className="space-y-4">
                {[
                  "Kompyuter savodxonligi va internet-tarmoq haqida 100% amaliy tushinchalar",
                  "Kompyuterda kamida 2 yil ishlagan bo'lishi",
                  "O'zi mustaqil biror muammoni yecha oladigan daraja",
                  "Doimiy internet va yaxshi kompyuter (8 GB RAM dan kam bo'lmagan)",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-emerald-400">Kurs tafsilotlari:</h3>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  "O'quvchilar soni: 15 kishi maximum",
                  "Dars vaqti: 20:00 dan keyin",
                  "Haftalik darslar: 4 kun",
                  "Dars davomiyligi: 1-2 soat",
                ].map((detail, index) => (
                  <Card key={index} className="bg-emerald-500/10 border-emerald-500/20">
                    <CardContent className="p-4">
                      <p className="text-gray-300">{detail}</p>
                    </CardContent>
                  </Card>
                ))}
              </ul>
            </div>

            {/* Keywords Section */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-emerald-400 mb-4">Mavzuga oid kalit so'zlar:</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Kiberxavfsizlik",
                  "Penetration Testing",
                  "Network Security",
                  "Malware Analysis",
                  "Web Security",
                  "Cryptography",
                  "Digital Forensics",
                  "Incident Response",
                  "Risk Assessment",
                  "Security Audit",
                ].map((keyword, index) => (
                  <span
                    key={index}
                    className="bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full text-sm border border-emerald-500/20"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <FAQSection className="mb-16" />
          <PricingSection className="mb-16" />
        </div>
      </main>
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-emerald-500 text-white rounded-full p-2 hover:bg-emerald-600 transition-colors z-50"
        >
          <ArrowUpCircle className="w-6 h-6" />
        </button>
      )}
    </div>
  )
}

