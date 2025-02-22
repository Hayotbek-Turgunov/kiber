"use client";
import { Button } from "@/components/ui/button";
import {
  PhoneCall,
  CheckCircle,
  Shield,
  Lock,
  ArrowUpCircle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import dynamic from "next/dynamic";
import ParticlesBackground from "@/components/particles-background";
import StatsSection from "@/components/stats-section";
import { useEffect, useState } from "react";
import MobileNav from "@/components/mobile-nav";
import Image from "next/image";
import CourseHighlights from "@/components/course-highlights";
import Footer from "@/components/footer";

const Timeline = dynamic(() => import("@/components/timeline"), { ssr: false });
const FAQSection = dynamic(() => import("@/components/faq-section"), {
  ssr: false,
});
const PricingSection = dynamic(() => import("@/components/pricing-section"), {
  ssr: false,
});

export default function Page() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <ParticlesBackground />

      {/* Header */}
      <header className="sticky top-0 bg-gray-900/80 backdrop-blur-md z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-emerald-500 flex items-center gap-2">
              <Shield className="w-6 h-6" />
              EduCyber
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-gray-300 hover:text-emerald-400 transition-colors"
              >
                Bosh sahifa
              </a>
              <a
                href="#why-bm-security"
                className="text-gray-300 hover:text-emerald-400 transition-colors"
              >
                Nega BM SECURITY ?
              </a>
              <a
                href="#course"
                className="text-emerald-500 hover:text-emerald-400 transition-colors"
              >
                Kurs
              </a>
              <a
                href="#about"
                className="text-gray-300 hover:text-emerald-400 transition-colors"
              >
                Biz haqimizda
              </a>
              <a
                href="#blog"
                className="text-gray-300 hover:text-emerald-400 transition-colors"
              >
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
            {/* Salom */}
            <MobileNav />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10">
        <div id="home" className="container mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-6xl font-bold text-emerald-400 mb-6">
                Kiberxavfsizlik kelajagini biz bilan organing
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Zamonaviy texnologiyalar va amaliy tajribaga asoslangan
                kurslarimiz orqali kiberxavfsizlik sohasida yetakchi
                mutaxassisga aylaning.
              </p>
              <Button className="bg-emerald-500 text-white hover:bg-emerald-600 transition-colors text-lg px-8 py-3">
                Hoziroq boshlang
              </Button>
            </div>
            <div className="md:w-1/2">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-3xl"></div>
                <Image
                  src="https://picsum.photos/800/800"
                  alt="Cybersecurity Shield"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover rounded-lg relative z-10"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <StatsSection id="why-bm-security" className="mb-20" />

        <CourseHighlights />

        {/* Course Program */}
        <section id="course" className="container mx-auto mb-20 px-4">
          <div className="flex items-center gap-2 justify-center mb-12">
            <Lock className="w-8 h-8 text-emerald-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-400">
              Kurs dasturi
            </h2>
          </div>
          <Timeline />
        </section>

        {/* Course Details */}
        <div
          id="about"
          className="prose prose-lg max-w-4xl mx-auto px-4 text-left space-y-8 prose-invert mb-20"
        >
          <div className="bg-emerald-500/10 p-8 rounded-lg mb-8 border border-emerald-500/20">
            <h2 className="text-3xl font-bold text-emerald-400 mb-4">
              Diqqat!
            </h2>
            <p className="text-gray-300 text-lg">
              Ushbu kursda siz kiberxavfsizlik uchun zarur bolgan barcha
              bilimlarni organasiz. Sohaning bir qancha yonalishlari mavjud, siz
              ushbu kursda bu sohalarni barchasiga aloqador bilimlar bilan
              tanishasiz, yani kurs umumiy va komplekt qilib ishlangan.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-emerald-400">
              Kursda qatnashish uchun talablar:
            </h3>
            <ul className="space-y-4">
              {[
                "Kompyuter savodxonligi va internet-tarmoq haqida 100% amaliy tushinchalar",
                "Kompyuterda kamida 2 yil ishlagan bo'lishi",
                "O'zi mustaqil biror muammoni yecha oladigan daraja",
                "Doimiy internet va yaxshi kompyuter (8 GB RAM dan kam bo'lmagan)",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-emerald-400">
              Kurs tafsilotlari:
            </h3>
            <ul className="grid md:grid-cols-2 gap-6">
              {[
                "O'quvchilar soni: 15 kishi maximum",
                "Dars vaqti: 20:00 dan keyin",
                "Haftalik darslar: 4 kun",
                "Dars davomiyligi: 1-2 soat",
              ].map((detail, index) => (
                <Card
                  key={index}
                  className="bg-emerald-500/10 border-emerald-500/20"
                >
                  <CardContent className="p-6">
                    <p className="text-gray-300 text-lg">{detail}</p>
                  </CardContent>
                </Card>
              ))}
            </ul>
          </div>

          {/* Keywords Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-emerald-400 mb-6">
              Mavzuga oid kalit sozlar:
            </h3>
            <div className="flex flex-wrap gap-3">
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
                  className="bg-emerald-500/10 text-emerald-400 px-4 py-2 rounded-full text-sm border border-emerald-500/20"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
        <FAQSection id="blog" className="mb-20" />
        <PricingSection className="mb-20" />
      </main>
      <Footer />
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-emerald-500 text-white rounded-full p-3 hover:bg-emerald-600 transition-colors z-50"
        >
          <ArrowUpCircle className="w-6 h-6" />
        </button>
      )}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
