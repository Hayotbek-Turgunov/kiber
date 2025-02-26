import { Shield, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-[100px]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 text-2xl font-bold text-emerald-500 mb-4">
              <Shield className="w-6 h-6" />
              <span>EduCyber</span>
            </div>
            <p className="text-sm">
              Kiberxavfsizlik sohasida yetakchi talim platformasi. Zamonaviy
              bilimlar va amaliy konikmalar bilan taminlaymiz.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-emerald-400 mb-4">
              Tezkor havolalar
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#home"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Bosh sahifa
                </Link>
              </li>
              <li>
                <Link
                  href="#course"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Kurslar
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Biz haqimizda
                </Link>
              </li>
              <li>
                <Link
                  href="#blog"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-emerald-400 mb-4">
              Aloqa
            </h3>
            <p className="text-sm mb-2">
              Toshkent sh., Yunusobod tumani, 4-mavze
            </p>
            <p className="text-sm mb-2">Tel: (77) 777-77-77</p>
            <p className="text-sm">Email: info@educyber.uz</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-emerald-400 mb-4">
              Ijtimoiy tarmoqlar
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} EduCyber. Barcha huquqlar
            himoyalangan.
          </p>
        </div>
      </div>
    </footer>
  );
}
