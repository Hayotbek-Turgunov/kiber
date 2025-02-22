"use client";

import { useEffect, useRef, useState } from "react";
import { Users, Award, BookOpen, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface StatsSectionProps {
  id?: string;
  className?: string;
}

export default function StatsSection({
  id,
  className = "",
}: StatsSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      value: "500+",
      label: "Bitiruvchilar",
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: "50+",
      label: "Sertifikatlar",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      value: "1000+",
      label: "Dars soatlari",
    },
    { icon: <Trophy className="w-8 h-8" />, value: "100%", label: "Natija" },
  ];

  return (
    <div id={id} ref={sectionRef} className={`py-12 ${className}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="border-none bg-black/5 backdrop-blur-lg">
            <CardContent className="flex flex-col items-center p-6">
              <div className="text-emerald-500 mb-4">{stat.icon}</div>
              <div
                className={`text-3xl font-bold mb-2 text-emerald-500 transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 transform-none"
                    : "opacity-0 translate-y-4"
                }`}
              >
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
