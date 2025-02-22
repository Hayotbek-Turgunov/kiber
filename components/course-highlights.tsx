"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const highlights = [
  {
    title: "Amaliy tajriba",
    description: "Real loyihalarda ishlash orqali kiberxavfsizlik ko'nikmalarini shakllantiring",
    icon: "🛠️",
  },
  {
    title: "Ekspert o'qituvchilar",
    description: "Sohaning yetakchi mutaxassislaridan bilim va tajriba o'rganing",
    icon: "👨‍🏫",
  },
  {
    title: "Zamonaviy texnologiyalar",
    description: "Eng so'nggi kiberxavfsizlik vositalari va usullari bilan tanishing",
    icon: "🖥️",
  },
  {
    title: "Karyera qo'llab-quvvatlash",
    description: "Kurs yakunida ish topish va karyerangizni boshlashda yordam oling",
    icon: "🚀",
  },
]

export default function CourseHighlights() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % highlights.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + highlights.length) % highlights.length)
  }

  return (
    <div className="relative overflow-hidden py-12">
      <div className="max-w-md mx-auto px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="bg-emerald-500/10 rounded-lg p-6 border border-emerald-500/20 backdrop-blur-sm"
          >
            <div className="text-4xl mb-4">{highlights[currentIndex].icon}</div>
            <h3 className="text-xl font-semibold text-emerald-400 mb-2">{highlights[currentIndex].title}</h3>
            <p className="text-gray-300">{highlights[currentIndex].description}</p>
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-between mt-4">
          <Button variant="outline" size="icon" onClick={prevSlide} className="text-emerald-400">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={nextSlide} className="text-emerald-400">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

