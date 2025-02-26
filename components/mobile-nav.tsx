"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, Shield, BookOpen, Users, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: <Home className="w-6 h-6" />, text: "Bosh sahifa", href: "#" },
    {
      icon: <Shield className="w-6 h-6" />,
      text: "Nega BM SECURITY ?",
      href: "#",
    },
    { icon: <BookOpen className="w-6 h-6" />, text: "Kurs", href: "#" },
    { icon: <Users className="w-6 h-6" />, text: "Biz haqimizda", href: "#" },
    { icon: <FileText className="w-6 h-6" />, text: "Blog", href: "#" },
  ];

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        className="text-emerald-400"
        onClick={() => setIsOpen(true)}
      >
        <Menu className="h-6 w-6" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed inset-0   z-50 backdrop-blur-sm"
          >
            <div className="flex flex-col h-screen bg-emerald-950 translate-x-0">
              <div className="flex justify-end p-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-emerald-400"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <nav className="flex flex-col items-center justify-center flex-grow">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    className="flex items-center space-x-2 text-emerald-400 py-4 px-6 w-full text-center text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.icon}
                    <span>{item.text}</span>
                  </motion.a>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
