"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  {
    title: "Amaliy tajriba",
    description:
      "Real loyihalarda ishlash orqali kiberxavfsizlik ko'nikmalarini shakllantiring",
    icon: "🛠️",
  },
  {
    title: "Ekspert o'qituvchilar",
    description:
      "Sohaning yetakchi mutaxassislaridan bilim va tajriba o'rganing",
    icon: "👨‍🏫",
  },
  {
    title: "Zamonaviy texnologiyalar",
    description:
      "Eng so'nggi kiberxavfsizlik vositalari va usullari bilan tanishing",
    icon: "🖥️",
  },
  {
    title: "Karyera qo'llab-quvvatlash",
    description:
      "Kurs yakunida ish topish va karyerangizni boshlashda yordam oling",
    icon: "🚀",
  },
];

export default function CourseHighlights() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % highlights.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + highlights.length) % highlights.length
    );
  };

  return (
    <div className="relative overflow-hidden py-6 sm:py-12">
      <div className="max-w-[340px] sm:max-w-md mx-auto px-3 sm:px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.2 }}
            className="bg-emerald-500/10 rounded-lg p-4 sm:p-6 border border-emerald-500/20 backdrop-blur-sm"
          >
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">
              {highlights[currentIndex].icon}
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-emerald-400 mb-2">
              {highlights[currentIndex].title}
            </h3>
            <p className="text-sm sm:text-base text-gray-300">
              {highlights[currentIndex].description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Progress indikator */}
        <div className="flex justify-center space-x-1.5 mt-4 mb-3">
          {highlights.map((_, index) => (
            <div
              key={index}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-6 bg-emerald-400"
                  : "w-2 bg-emerald-400/30"
              }`}
            />
          ))}
        </div>

        <div className="flex justify-between">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="text-emerald-400 h-8 w-8 sm:h-9 sm:w-9"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="text-emerald-400 h-8 w-8 sm:h-9 sm:w-9"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
