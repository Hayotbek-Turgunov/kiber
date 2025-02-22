import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Video,
  FileText,
  Book,
  Phone,
  MessageSquare,
  HelpCircle,
  Award,
  CircleDollarSign,
  Users,
  ClipboardList,
} from "lucide-react";

interface PricingSectionProps {
  className?: string;
}

export default function PricingSection({
  className = "",
}: PricingSectionProps) {
  const features = [
    {
      icon: <Video className="w-5 h-5" />,
      text: "Full HD sifatdagi videodarslar",
    },
    { icon: <FileText className="w-5 h-5" />, text: "O'quv materiallari" },
    { icon: <Book className="w-5 h-5" />, text: "O'zbek tilidagi PDF kitob" },
    {
      icon: <Phone className="w-5 h-5" />,
      text: "O'qituvchi bilan doimiy aloqa",
    },
    { icon: <MessageSquare className="w-5 h-5" />, text: "Umumiy guruh chat" },
    {
      icon: <HelpCircle className="w-5 h-5" />,
      text: "Barcha o'quv qurullari bilan ta'minlanadi",
    },
    {
      icon: <Award className="w-5 h-5" />,
      text: "Sizga xalqaro Sertifikatlar olishda yordam beramiz",
    },
  ];

  const paymentSteps = [
    {
      icon: <CircleDollarSign className="w-8 h-8 text-emerald-500" />,
      title: "3,600,000 so'mlik kurslarni",
      description: "Ushbu kurs ichida texnika siz ga kiritiliz.",
    },
    {
      icon: <Users className="w-8 h-8 text-emerald-500" />,
      title: "Shoshiling, o'quvchi soni cheklangan",
      description: "Kursga yozilish uchun adminimga murojat qiling",
    },
    {
      icon: <ClipboardList className="w-8 h-8 text-emerald-500" />,
      title: "Kursga yozilish uchun",
      description: "Administrator bilan bog'lanimg va to'lov qiling",
    },
  ];

  return (
    <div className={`container mx-auto px-4 py-12 sm:py-16 ${className}`}>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
        {/* Left side - Payment steps */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-emerald-400">
            Tolov qanday amalga oshiriladi?
          </h2>
          <p className="text-gray-300 mb-6 sm:mb-8">
            Karta orqali yoki pul kochirish yoli bilan tolov qilishingiz mumkin.
            5 oylik kursning 1-oylik tolovi 2,000,000 som. Tolov qilish uchun
            administratorga murojaat qiling.
          </p>

          <div className="space-y-6 sm:space-y-8">
            {paymentSteps.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0">{step.icon}</div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg text-emerald-400">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Price card */}
        <Card className="w-full bg-emerald-500/10 border-emerald-500/20 backdrop-blur-sm mt-8 md:mt-0">
          <CardHeader>
            <p className="text-gray-400">5 oylik Umumiy kursning narxi</p>
            <h3 className="text-2xl sm:text-3xl font-bold text-emerald-400">
              10 million som
            </h3>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 sm:space-y-4">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-sm sm:text-base text-gray-300"
                >
                  <span className="text-emerald-500">{feature.icon}</span>
                  {feature.text}
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white">
              Kursda qatnashaman!
            </Button>
            <p className="text-xs sm:text-sm text-gray-400 mt-4 text-center">
              Copyright ltd 2024
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
