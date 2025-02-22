"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, Lock } from "lucide-react";

const phrases = [
  "Kiberxavfsizlik",
  "Xakerlik",
  "Malware Tahlili",
  "Tarmoq Xavfsizligi",
  "Kriptografiya",
];

export default function InteractiveHero({ className = "" }) {
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative overflow-hidden py-12 sm:py-20 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-emerald-400">
              <span className="block">Kelajak kasbi:</span>
              <span className="block mt-2 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                {phrases[currentPhrase]}
              </span>
            </h1>
          </motion.div>
          <motion.p
            className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            5 oylik kurs davomida zamonaviy kiberxavfsizlik konikmalarini
            organing va yuqori maoshli mutaxassisga aylaning.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Button className="w-full sm:w-auto bg-emerald-500 text-white hover:bg-emerald-600 transition-colors">
              <Lock className="w-4 h-4 mr-2" />
              Kursga yozilish
            </Button>
            <Button
              variant="outline"
              className="w-full sm:w-auto border-emerald-500 text-emerald-400 hover:bg-emerald-500/10"
            >
              <Shield className="w-4 h-4 mr-2" />
              Batafsil malumot
            </Button>
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-emerald-500/20 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
    </div>
  );
}
