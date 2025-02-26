import Footer from "@/components/footer";
import TimelineSection from "@/components/timeline";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Terminal,
  Lock,
  Server,
  AlertTriangle,
  Cpu,
  Plus,
  CheckCircle,
  Phone,
  Video,
  FileText,
  Book,
  PhoneCall,
  MessageSquare,
  Award,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen matrix-bg">
      <header className="container mx-auto px-4 py-4 border-b border-primary/20">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="glitch-text">
              <span className="text-primary text-2xl font-bold">EduCyber</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-foreground hover:text-primary transition"
            >
              Bosh sahifa
            </Link>
            <Link
              href="/security"
              className="text-foreground hover:text-primary transition"
            >
              Nega BM SECURITY ?
            </Link>
            <Link href="/courses" className="text-primary font-medium">
              Kurs
            </Link>
            <Link
              href="/about"
              className="text-foreground hover:text-primary transition"
            >
              Biz haqimizda
            </Link>
            <Link
              href="/blog"
              className="text-foreground hover:text-primary transition"
            >
              Blog
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="tel:(77)777-77-77"
              className="hidden md:flex items-center space-x-2 text-secondary"
            >
              <Terminal className="w-4 h-4" />
              <span>(77) 777-77-77</span>
            </a>
            <Button className="cyber-border bg-accent/10 text-primary hover:bg-accent/20">
              Biz bilan aloqa
            </Button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 className="glitch-text text-4xl md:text-6xl font-bold leading-tight mb-6">
            Kiberxavfsizlik mutaxassisi bolish uchun 5 oylik onlayn kurs!
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-12">
            Yangilik, Imkoniyat, sevimli kasb, fantastik qobiliyat va qimmat
            kadr bolish uchun imkoningiz bor!
          </p>

          <div className="relative w-96 h-96 mb-16">
            <div className="cyber-border rounded-full p-8">
              <Shield className="w-full h-full text-primary animate-pulse" />
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-primary/10 border border-primary text-primary px-6 py-2 rounded">
              BEST-MASTER.UZ
            </div>
          </div>

          <section className="w-full max-w-3xl mx-auto cyber-border p-8 rounded-lg">
            <div className="flex items-center gap-2 mb-6">
              <AlertTriangle className="text-primary w-6 h-6" />
              <h2 className="text-2xl font-bold text-primary">Diqqat!</h2>
            </div>

            <div className="space-y-6 text-left">
              <p className="text-muted-foreground">
                Ushbu kursda siz kiberxavfsizlik uchun zarur bolgan barcha
                bilimlarni organasiz. Sohaning bir qancha yonalishlari mavjud,
                siz ushbu kursda bu sohalarni barchasiga aloqador bilimlar bilan
                tanishasiz, yani kurs umumiy va komplekt qilib ishlangan.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 cyber-border rounded-lg bg-accent/5">
                  <Lock className="text-primary w-5 h-5 mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">
                      Kursda qatnashish uchun talablar
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Kompyuter savodxonligi va internet-tarmoq haqida 100%
                      amaliy tushunchalar bolishi talab qilinadi
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 cyber-border rounded-lg bg-accent/5">
                  <Server className="text-primary w-5 h-5 mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">Oquv jarayoni</h3>
                    <p className="text-sm text-muted-foreground">
                      Darslar haftasiga 4 kun, 1-2 soatdan boladi
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-lg font-medium text-primary">try harder !</p>
            </div>
          </section>
          <section className="w-full max-w-3xl mx-auto mt-12 space-y-8">
            <div className="cyber-border p-6 rounded-lg bg-accent/5">
              <p className="text-center text-lg text-primary font-medium mb-6">
                Ozbekistonda sohani rivojlantirish uchun zorlar bilan birga
                boling, bizni oilamizga qoshiling !
              </p>

              <div className="space-y-4 text-muted-foreground">
                <p>
                  Kurs yaqindagina yangilandi, malumotlar juda kop, barchasi
                  navbat va tartib bilan berib boriladi. Ushbu kurs boshlangich
                  va dastlabki bilimlarni qamrab oladi. Kursning keyingi
                  bosqichi mavjud, unda sohaning alohida bolimlari yuqori
                  darajadagi bilimlar bilan orgatiladi.
                </p>
                <p>
                  Bitiruvchilar togridan-togri CYBER-BRO LLC da ish organadilar.
                  Bu haqida alohida kurs uchun qabulda elon qilinadi.
                </p>
              </div>
            </div>

            <div className="cyber-border p-6 rounded-lg bg-accent/5">
              <h2 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                <Cpu className="w-5 h-5" />
                Kursda qatnashish uchun talablar
              </h2>

              <div className="space-y-6">
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Kursda hamma ham qatnasha olmaydi, yani – kursda qatnashish
                    uchun sizda kompyuter savodxonligi va internet-tarmoq haqida
                    100% amaliy tushunchalar bolishi talab qilinadi, kompyuterda
                    kamida 2 yil ishlagan va ozi mustaqil biror muammoni yecha
                    oladigan darajada bolishi zarur.
                  </p>
                  <p>
                    ozingizni shu sohada kora olsangiz va boshlangich
                    bilimingizga ishonsangiz, doimiy nazoratda oqishni kotara
                    olsangiz siz bu kursda oqishingiz mumkin, chala va sifatsiz
                    kadr chiqarish niyatimiz yoq, shu sabab iltimos jiddiy
                    munosabatda boling.
                  </p>
                </div>

                <div className="cyber-border p-4 rounded-lg bg-primary/5">
                  <p className="text-primary font-medium">
                    Kursni toliq oqishingiz shart, yarmida tashlab qoysangiz
                    ozingiz xam biz xam natijadan quruq qolamiz, qattiq iltimos
                    qilardimki aniq maqsad bilan toliq organish uchun kursda
                    qatnashing !
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="cyber-border p-4 rounded-lg bg-accent/5">
                    <h3 className="font-medium text-primary mb-2">
                      Oquvchilar soni
                    </h3>
                    <p className="text-muted-foreground">
                      15 kishi maximum bolishi mumkin
                    </p>
                  </div>

                  <div className="cyber-border p-4 rounded-lg bg-accent/5">
                    <h3 className="font-medium text-primary mb-2">
                      Dars jadvali
                    </h3>
                    <p className="text-muted-foreground">
                      Haftasiga 4 kun, 1-2 soatdan
                    </p>
                  </div>

                  <div className="cyber-border p-4 rounded-lg bg-accent/5">
                    <h3 className="font-medium text-primary mb-2">
                      Texnik talablar
                    </h3>
                    <p className="text-muted-foreground">
                      8 GB RAM dan kam bolmagan kompyuter va doimiy internet
                    </p>
                  </div>

                  <div className="cyber-border p-4 rounded-lg bg-accent/5">
                    <h3 className="font-medium text-primary mb-2">
                      Dars vaqti
                    </h3>
                    <p className="text-muted-foreground">
                      Kechqurun 20:00 dan keyin
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full max-w-3xl mx-auto mt-12 space-y-8">
            <div className="cyber-border p-6 rounded-lg bg-accent/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
              <h2 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                <span className="text-2xl">😎</span> Bonus imkoniyatlar
              </h2>
              <p className="text-primary font-medium mb-6">
                Bonus sifatida BMSECURITY GROUP kurslari oquvchilarga doimiy
                foydalanish uchun kurs ichida tekinga beriladi
              </p>

              <div className="grid gap-6">
                <div className="cyber-border p-4 rounded-lg bg-accent/5 hover:bg-accent/10 transition-colors">
                  <p className="text-muted-foreground">
                    Xabaringiz bor bizda aloxida ishlangan bir nechta kurslar
                    bor va bu kurslar oquvchilarga otiladigan mavzuga qarab
                    organish uchun beriladi. Oquvchilarga kurs davomida xalqaro
                    Kiberxavfsizlikga aloqador sertifikatlar olish uchun optimal
                    yol xaritasi orgatiladi, bu sertifikatlar ishga kirishda
                    nafaqat Ozbekistonda balki butun dunyo boyicha katta
                    imkoniyat beradi.
                  </p>
                </div>

                <div className="cyber-border p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                  <h3 className="text-primary font-medium mb-3">
                    Amaliy talim
                  </h3>
                  <p className="text-muted-foreground">
                    Kurs davomida 100% amaliyotda siz tarmoq resurslari,
                    dasturiy taminot, veb-resurslar zaifliklarini batafsil
                    tahlil qilishni, ulardan ximoyalanishni organasiz. Siz
                    hujumning eng keng tarqalgan ssenariylari bilan tanishasiz
                    va keyinchalik ularni osonlikcha taniyasiz va bartaraf
                    qilaolasiz. Viruslarni analiz qilish, tekshirish va
                    ximoyalanish boyicha mukammal bilimga ega bolasiz.
                  </p>
                </div>

                <div className="cyber-border p-4 rounded-lg bg-accent/5 hover:bg-accent/10 transition-colors">
                  <p className="text-muted-foreground">
                    Axborot tizimi yoki dastur xavfsizligini tahlil qilish uchun
                    zamonaviy vositalardan foydalanishni, zaif tomonlarni
                    tasnifi va ularni tuzatish usullari, muntazam vazifalarni
                    avtomatlashtirish uchun dasturlash qobiliyatlari, topilgan
                    ojizlik va kamchiliklarni jamlagan mukammal report yozishni
                    va bilimingizni sertifikatlashtirish uchun zarur bolgan
                    bilimlarga ega bolasiz.
                  </p>
                </div>

                <div className="relative cyber-border p-6 rounded-lg bg-secondary/5 hover:bg-secondary/10 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="min-w-fit p-3 rounded-full bg-primary/10">
                      <Terminal className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-primary mb-2">
                        24/7 Support
                      </h3>
                      <p className="text-muted-foreground">
                        <span className="text-primary font-medium">
                          Ushbu kursda qatnashgan oquvchilar uchun doimiy
                          alohida support admin (@educyber_admin) tomonidan
                          taqdim qilinadi
                        </span>
                        , sababi kursni yakunlagan oquvchilar ishga tayyor xodim
                        bolishadi va keyinchalik ishda duch keladigan
                        muammolarda biz bilan boglanib muammoni yechimini
                        topishda yordam beriladi, umuman kurs kontenti, rejasi
                        juda katta va hamma kerakli malumotlarni oz ichiga
                        olgan.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="cyber-border p-6 rounded-lg bg-accent/5">
              <h2 className="text-xl font-bold text-primary mb-6">
                Mavzuga oid kalit sozlar bilan pastda tanishing :
              </h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "Kiberxavfsizlik",
                  "Tarmoq xavfsizligi",
                  "Malware analiz",
                  "Penetration testing",
                  "Xavfsizlik auditi",
                  "Zaifliklar analizi",
                  "Xavfsizlik monitoring",
                  "Incident Response",
                ].map((keyword) => (
                  <span
                    key={keyword}
                    className="px-3 py-1 rounded-full cyber-border bg-primary/5 text-sm text-primary hover:bg-primary/10 transition-colors cursor-default"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </section>
          <section className="w-full max-w-3xl mx-auto mt-12">
            <div className="cyber-border p-6 rounded-lg bg-accent/5">
              <h2 className="text-xl font-bold text-primary mb-8">
                Kurs rejasi va mavzular
              </h2>

              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/20"></div>
                <TimelineSection />
              </div>
            </div>
          </section>
        </div>
      </main>
      <section className="w-full max-w-5xl mx-auto mt-16 px-4">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left Column - Payment Info */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-primary">
              Tolov qanday amalga oshiriladi ?
            </h2>
            <p className="text-muted-foreground">
              Karta orqali yoki pul kochirish yoli bilan tolov qilishingiz
              mumkin. 5 oylik kursning 1 oylik tolovi 2,000,000 som. Tolov
              qilish uchun administratorga murojaat qiling.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Plus className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">
                    3,600,000 somlik kurslarni
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Ushbu kurs ichida tekinga qolga kiritasiz.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">
                    Shoshiling, oquvchi soni cheklangan
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Kursga yozilish uchun adminga murojaat qiling
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Kursga yozilish uchun</h3>
                  <p className="text-sm text-muted-foreground">
                    Administrator bilan boglaning va tolov qiling.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Price Card */}
          <div className="cyber-border p-6 rounded-lg bg-card shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">
                  5 oylik Umumiy kursning narxi
                </span>
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                  Chegirma bor
                </span>
              </div>
              <h3 className="text-4xl font-bold text-primary">10 million</h3>
            </div>

            <div className="space-y-4 mb-8">
              {[
                { icon: Video, text: "Full HD sifatdagi videodarslar" },
                { icon: FileText, text: "Oquv materiallari" },
                { icon: Book, text: "Ozbek tilidagi PDF kitob" },
                { icon: PhoneCall, text: "Oqituvchi bilan doimiy aloqa" },
                { icon: MessageSquare, text: "Umumiy guruh chat" },
                {
                  icon: Shield,
                  text: "Barcha oquv qurollari bilan taminlanadi",
                },
                {
                  icon: Award,
                  text: "Sizga xalqaro Sertifikatlar olishda yordam beramiz",
                },
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <feature.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              Kursda qatnashaman !
            </Button>

            <p className="text-center text-xs text-muted-foreground mt-4">
              Copyright [c] 2025
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
