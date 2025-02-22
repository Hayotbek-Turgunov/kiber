"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQSectionProps {
  id?: string;
  className?: string;
}

const faqs = [
  {
    question: "Kurs uchun oldindan bilim kerakmi?",
    answer:
      "Kurs uchun asosiy kompyuter savodxonligi va internet-tarmoq haqida tushunchalar yetarli. Biroq, IT sohasida tajriba bo'lsa, bu sizga qo'shimcha ustunlik beradi.",
  },
  {
    question: "Kurs yakunida qanday natijaga erishaman?",
    answer:
      "Kurs yakunida siz kiberxavfsizlik sohasining asosiy yo'nalishlarini o'zlashtirgan bo'lasiz. Bu sizga kiberxavfsizlik mutaxassisi sifatida ish boshlash imkonini beradi.",
  },
  {
    question: "Kursni tugatgandan so'ng ish topishda yordam beriladimi?",
    answer:
      "Ha, biz eng yaxshi bitiruvchilarimizga hamkor kompaniyalarimizda amaliyot o'tash va ish topish imkoniyatini taqdim etamiz.",
  },
  {
    question: "Darslar qanday formatda o'tkaziladi?",
    answer:
      "Darslar onlayn formatda Zoom orqali o'tkaziladi. Har bir dars yozib olinadi va keyinchalik qayta ko'rish uchun taqdim etiladi.",
  },
];

export default function FAQSection({ id, className = "" }: FAQSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div id={id} className={`py-16 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-emerald-500/20">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-emerald-400 text-center mb-8">
            Tez-tez soraladigan savollar
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-emerald-500/20">
            {faqs.map((faq, index) => (
              <div key={index} className="pt-6">
                <dt className="text-base">
                  <button
                    className="flex w-full items-start justify-between text-left text-emerald-400"
                    onClick={() =>
                      setActiveIndex(activeIndex === index ? null : index)
                    }
                  >
                    <span className="font-semibold">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      <ChevronDown
                        className={`h-6 w-6 transform transition duration-300 ${
                          activeIndex === index ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </span>
                  </button>
                </dt>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.dd
                      className="mt-2 pr-12"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-base text-gray-300">{faq.answer}</p>
                    </motion.dd>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
