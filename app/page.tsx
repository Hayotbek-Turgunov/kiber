import TimelineSection from "@/components/timeline";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Shield,
  Terminal,
  Phone,
  AlertTriangle,
  Cpu,
  Plus,
  CheckCircle,
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
            <Image
              src="../assets/Asset 1.svg"
              width={200}
              height={20}
              alt="Picture of the author"
            />
          </Link>

          <div className="flex items-center space-x-4">
            <a
              href="tel:(77)777-77-77"
              className="hidden md:flex items-center space-x-2 text-secondary"
            >
              <Phone />
              <span> (+998 93) 767-31-31</span>
            </a>
            <Button className="cyber-border bg-accent/10 text-primary hover:bg-accent/20">
              <Link href="https://t.me/hhsecurity_support" target="_blank">
                Biz bilan aloqa
              </Link>
            </Button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 className="glitch-text text-4xl md:text-6xl font-bold leading-tight mb-6">
            Kiberxavfsizlik sohasida yetuk mutaxassis bo’lish uchun 6 oylik
            onlayn o’quv kursi!
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-12">
            Zamonaviy, yuqori talab va keng imkoniyatli, munosib maosh va
            kerakli kasb egasi bo’lish uchun ajoyib imkoniyat!
          </p>
          <section className="w-full max-w-3xl mx-auto cyber-border p-8 rounded-lg">
            <div className="flex items-center gap-2 mb-6">
              <AlertTriangle className="text-primary w-6 h-6" />
              <h2 className="text-2xl font-bold text-primary">Diqqat!</h2>
            </div>

            <div className="space-y-6 text-left">
              <p className="text-muted-foreground">
                Ushbu kursda siz HH Security tomonidan kiberxavfsizlik uchun
                zarur bo`lgan bilimlarni o`rganishiz mumkin. Sohaning bir qancha
                yo`nalishlari mavjud , siz ushbu kursda bu sohalarni barchasiga
                aloqador bilimlar bilan tanishasiz , ya`ni kurs umumiy va
                komplekt qilib ishlangan. Kursdan keyin universal bilim darajasi
                va o`zlashtirishingiz natijasiga qarab , siz kiberxavfsizlik
                xodimi bo`lib ishlashingiz mumkin bo`ladi. Ha siz kursdan keyin
                bemalol ish faoliyatingizni boshlashingiz mumkin , albatta bu
                doim o`quvchining o`ziga va ma`lumotlarni to`liq
                o`zlashtirishiga bog`liq. Izlanganga tol yor degnadek, harakat
                qilmasangiz shunchaki harajatga kuyib qolasiz!.
              </p>

              <p className="text-lg font-medium text-primary text-right">
                Shu sabab be carefully !
              </p>
            </div>
          </section>
          <section className="w-full max-w-3xl mx-auto mt-12 space-y-8">
            <div className="cyber-border p-6 rounded-lg bg-accent/5">
              <p className="text-center text-lg text-primary font-medium mb-6">
                Dunyoda bu sohani rivojlantirish uchun eng zo’rlari bilan ya’ni
                HH Security bilan birga bo`ling , bizni jamoamizga qo`shiling !
              </p>

              <div className="space-y-4 text-muted-foreground">
                <p>
                  Kurs yaqindagina mukammal tarzda ishlab chiqildi , ma`lumotlar
                  juda ko`p , barchasi navbat va tartib bilan berib boriladi.
                  Ushbu kurs boshlang`ich va dastlabki bilimlarni qamrab oladi.
                  Kursning keyingi bosqichi mavjud,kursni tamomlagandan so’ng
                  sizlar White Hat Hacker (Ethical Hacker) bo’lib yetishasizlar
                  , shundan so’ng hohlovchilar, kuchaytirilgan va hujumkor
                  jamoaga qo’shilishmoqchi bo’lganlar 3 oylik Red Team intensiv
                  kursida o’qishingiz mumkin! Unda sohaning alohida bo`limlari
                  yuqori darajadagi bilimlar bilan o`rgatiladi. Kursni
                  tamomlagandan so’ng 2 ta Xalqaro va 1 ta HH Security tomonidan
                  beriladigan sertifikatlarga ega bo’lasiz!
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
                    Kursda hamma ham qatnasha olmaydi, ya’ni – kursda qatnashish
                    uchun sizda kompyuter savodxonligi va internet-tarmoq haqida
                    100% amaliy tushunchalar bo’lishi talab qilinadi ,
                    kompyuterda kamida 1.5 yil ishlagan va o’zi mustaqil biror
                    muammoni yecha oladigan darajada bo’lishi zarur. O’zingizni
                    shu sohada ko’ra olsangiz va boshlang’ich bilimingizga
                    ishonsangiz , doimiy nazoratda o’qishni ko’tara olsangiz siz
                    bu kursda o’qishingiz mumkin , chala va sifatsiz kadr
                    chiqarish sizni ham bekorga vaqtingizni olish niyatimiz yo’q
                    , shu sabab
                    <span className="font-black"> please think again!</span>
                  </p>
                </div>

                <div className="cyber-border p-4 rounded-lg bg-primary/5">
                  <p className="text-primary font-medium">
                    Kursni yarmida tashlab ketish mumkin emas, ya’ni kursni
                    tashlab ketsangiz bizni ham sizni ham harakatlaringiz zoye
                    ketadi, shuning uchun yaxshilab o’ylab bir qarorga keling!
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="cyber-border p-4 rounded-lg bg-accent/5">
                    <h3 className="font-medium text-primary mb-2">
                      O`quvchilar soni
                    </h3>
                    <p className="text-muted-foreground">
                      O’quvchilar qabul soni cheklangan,ya’ni 2 ta guruh qabul
                      qilinadi, har bir guruh maximum 15 kishidan iborat
                      bo’lishi mumkin.
                    </p>
                  </div>

                  <div className="cyber-border p-4 rounded-lg bg-accent/5">
                    <h3 className="font-medium text-primary mb-2">
                      Dars jadvali
                    </h3>
                    <p className="text-muted-foreground">
                      Dars haftasiga 3 kun, 2-3 saotdan bo’ladi.
                    </p>
                  </div>

                  <div className="cyber-border p-4 rounded-lg bg-accent/5">
                    <h3 className="font-medium text-primary mb-2">
                      Texnik talablar
                    </h3>
                    <p className="text-muted-foreground">
                      Sizda doimiy internet va yaxshi (8 GB RAM dan kam
                      bo’lmagan ) kompyuter bo’lishi kerak.
                    </p>
                  </div>

                  <div className="cyber-border p-4 rounded-lg bg-accent/5">
                    <h3 className="font-medium text-primary mb-2">
                      Dars vaqti
                    </h3>
                    <p className="text-muted-foreground">
                      Darslar xammasi , doim kechqurun 20:00 (o’quvchilar bilan
                      kelishib o’zgartirilishi mumkin) dan keyin o’tiladi,
                      xaftada 3 kun dars, qolgan kunlar vazifalar bajariladi,
                      amaliyot va savol-javob qilinadi.. Sizlarni barcha
                      savollaringizga doimiy ravishda 24/7 supportlar tomonidan
                      javob olasiz!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full max-w-3xl mx-auto mt-12 max-[1560px]:max-w-5xl max-[1560px]:px-4 max-[768px]:mt-8 max-[480px]:mt-6 max-[300px]:mt-4 space-y-8 max-[768px]:space-y-6 max-[480px]:space-y-4 max-[300px]:space-y-3">
            <div className="cyber-border p-6 max-[1560px]:p-8 max-[768px]:p-5 max-[480px]:p-4 max-[300px]:p-3 rounded-lg bg-accent/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 max-[1560px]:w-40 max-[1560px]:h-40 max-[768px]:w-28 max-[768px]:h-28 max-[480px]:w-24 max-[480px]:h-24 max-[300px]:w-20 max-[300px]:h-20 bg-primary/10 rounded-full blur-3xl"></div>
              <h2 className="text-xl max-[1560px]:text-2xl max-[768px]:text-xl max-[480px]:text-lg max-[300px]:text-base font-bold text-primary mb-6 max-[1560px]:mb-8 max-[768px]:mb-5 max-[480px]:mb-4 max-[300px]:mb-3 flex items-center gap-2">
                <span className="text-2xl max-[1560px]:text-3xl max-[768px]:text-2xl max-[480px]:text-xl max-[300px]:text-lg">
                  😎
                </span>{" "}
                Bonus imkoniyatlar
              </h2>
              <p className="text-primary font-medium mb-6 max-[1560px]:text-lg max-[1560px]:max-w-4xl max-[1560px]:mb-8 max-[768px]:text-base max-[768px]:mb-5 max-[480px]:mb-4 max-[300px]:mb-3 max-[480px]:text-sm max-[300px]:text-xs">
                Bonus sifatida `quvchilarga doimiy foydalanish uchun kurs ichida
                tekinga beriladi 😎
              </p>

              <div className="grid gap-6 max-[1560px]:grid-cols-1 max-[1560px]:gap-8 max-[768px]:gap-6 max-[480px]:gap-4 max-[300px]:gap-3">
                <div className="cyber-border p-4 max-[1560px]:p-6 max-[768px]:p-5 max-[480px]:p-4 max-[300px]:p-2 rounded-lg bg-accent/5 hover:bg-accent/10 transition-colors">
                  <p className="text-muted-foreground max-[1560px]:text-base max-[768px]:text-base max-[480px]:text-sm max-[300px]:text-xs">
                    Ma`lumot uchun bizda aloxida ishlangan bir nechta kurslar
                    bor va bu kurslar o`quvchilarga o`tiladigan mavzuga qarab
                    o`rganish uchun beriladi.O`quvchilarga kurs davomida xalqaro
                    Kiberxavfsizlikga aloqador sertifikatlar olish uchun optimal
                    yo`l xaritasi o`rgatiladi va ishga kirish uchun zarur
                    bo`lgan barcha texnik va amaliy yordam
                    ko`rsatiladi(rezyume,cv,report,suhbatga tayyorlov). Bu
                    yordam sizga ishga kirishda nafaqat O`zbekistonda balki
                    butun dunyo bo`yicha katta imkoniyat beradi. Kursimiz asosan
                    ish vaqtida real tasklarda zarur bilimlar bilan to`ldirilgan
                    , ba`zi sertifikatlar uchun admin tomonidan aloxida support
                    qilinadi (agar o`quvchi keyinchalik olmoqchi bo`lsa).
                  </p>
                </div>

                <div className="cyber-border p-4 max-[1560px]:p-6 max-[768px]:p-5 max-[480px]:p-4 max-[300px]:p-2 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                  <h3 className="text-primary font-medium mb-3 max-[1560px]:text-xl max-[1560px]:mb-4 max-[768px]:text-lg max-[768px]:mb-3 max-[480px]:text-base max-[480px]:mb-2 max-[300px]:mb-1 max-[300px]:text-sm">
                    Amaliy talim
                  </h3>
                  <p className="text-muted-foreground max-[1560px]:text-base max-[768px]:text-base max-[480px]:text-sm max-[300px]:text-xs">
                    Kurs davomida 100% amaliyotda siz tarmoq resurslari,
                    dasturiy ta`minot, veb-resurslar zaifliklarini batafsil
                    tahlil qilishni, ulardan ximoyalanishni o`rganasiz. Siz
                    hujumning eng keng tarqalgan ssenariylari bilan tanishasiz
                    va keyinchalik ularni osonlikcha taniysiz va bartaraf
                    qilaolasiz . Viruslarni analiz qilish , tekshirish va
                    ximoyalanish bo`yicha mukammal bilimga ega bo`lasiz.
                  </p>
                </div>

                <div className="cyber-border p-4 max-[1560px]:p-6 max-[768px]:p-5 max-[480px]:p-4 max-[300px]:p-2 rounded-lg bg-accent/5 hover:bg-accent/10 transition-colors">
                  <p className="text-muted-foreground max-[1560px]:text-base max-[768px]:text-base max-[480px]:text-sm max-[300px]:text-xs">
                    Axborot tizimi yoki dastur xavfsizligini tahlil qilish uchun
                    zamonaviy vositalardan foydalanishni , zaif tomonlarni
                    tasnifi va ularni tuzatish usullari , muntazam vazifalarni
                    avtomatlashtirish uchun dasturlash qobiliyatlari , topilgan
                    ojizlik va kamchiliklarni jamlagan mukammal report yozishni
                    va bilimingizni sertifikatlashtirish uchun zarur bo`lgan
                    bilimlarga ega bo`lasiz.
                  </p>
                </div>

                <div className="relative cyber-border p-6 max-[1560px]:p-8 max-[768px]:p-5 max-[480px]:p-4 max-[300px]:p-3 rounded-lg bg-secondary/5 hover:bg-secondary/10 transition-colors">
                  <div className="flex items-start gap-4 max-[1560px]:gap-6 max-[768px]:gap-4 max-[480px]:gap-3 max-[300px]:gap-2">
                    <div className="min-w-fit p-3 max-[1560px]:p-4 max-[768px]:p-3 max-[480px]:p-2 max-[300px]:p-1.5 rounded-full bg-primary/10">
                      <Terminal className="w-6 h-6 max-[1560px]:w-8 max-[1560px]:h-8 max-[768px]:w-6 max-[768px]:h-6 max-[480px]:w-5 max-[480px]:h-5 max-[300px]:w-4 max-[300px]:h-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg max-[1560px]:text-xl max-[768px]:text-lg max-[480px]:text-base max-[300px]:text-sm font-medium text-primary mb-2 max-[1560px]:mb-4 max-[768px]:mb-3 max-[480px]:mb-2 max-[300px]:mb-1">
                        24/7 Support
                      </h3>
                      <p className="text-muted-foreground max-[1560px]:text-base max-[768px]:text-base max-[480px]:text-sm max-[300px]:text-xs">
                        <span className="text-primary font-medium">
                          Ushbu kursda qatnashgan o`quvchilar uchun doimiy
                          alohida support admin
                          <Link
                            href="https://t.me/hhsecurity_support"
                            target="_blank"
                            className="max-[1560px]:ml-1 max-[768px]:mx-1 max-[480px]:block max-[480px]:my-1 max-[300px]:inline-block max-[300px]:mt-0.5"
                          >
                            (@hhsecurity_support)
                          </Link>
                          tomonidan taqdim qilinadi ,
                        </span>
                        sababi kursni yakunlagan o`quvchilar ishga tayyor hodim
                        bo`lishadi va keyinchalik ishda duch keladigan
                        muammolarda biz bilan bog`lanib muammoni yechimini
                        topishda yordam beriladi , umuman kurs kontenti , rejasi
                        juda katta va hamma kerakli ma`lumotlarni o`z ichiga
                        olgan.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="cyber-border p-6 max-[1560px]:p-8 max-[768px]:p-5 max-[480px]:p-4 max-[300px]:p-3 rounded-lg bg-accent/5">
              <h2 className="text-xl max-[1560px]:text-2xl max-[768px]:text-xl max-[480px]:text-lg max-[300px]:text-base font-bold text-primary mb-6 max-[1560px]:mb-8 max-[768px]:mb-5 max-[480px]:mb-4 max-[300px]:mb-3">
                Mavzuga oid kalit sozlar bilan pastda tanishing :
              </h2>
              <div className="flex flex-wrap gap-2 max-[1560px]:gap-3 max-[768px]:gap-2.5 max-[480px]:gap-2 max-[300px]:gap-1.5">
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
                    className="px-3 max-[1560px]:px-4 max-[1560px]:py-2 max-[768px]:px-3 max-[768px]:py-1.5 max-[480px]:px-2.5 max-[480px]:py-1 max-[1560px]:text-base max-[768px]:text-sm max-[300px]:px-2 py-1 max-[300px]:py-0.5 rounded-full cyber-border bg-primary/5 text-sm max-[480px]:text-xs max-[300px]:text-[10px] text-primary hover:bg-primary/10 transition-colors cursor-default"
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

        <section className="w-full max-w-3xl mx-auto cyber-border p-8 rounded-lg mt-3">
          <div className="flex items-center gap-2 mb-6">
            <AlertTriangle className="text-primary w-6 h-6" />
            <h2 className="text-2xl font-bold text-primary">Disclaimer</h2>
          </div>

          <div className="space-y-6 text-left">
            <p className="text-muted-foreground">
              Butun kurs davomida biz xech qanday virtual targetlardan
              foydalanmaymiz , barcha darslar real targetlarda 100% amaliyot
              ko’rinishida qilinadi , shu sabab kurs natijasi juda yaxshi
              bo’ladi , chunki rejalashtirilmagan targetlarda xarxildagi
              ojizliklar bo’lishi mumkin va o’quvchi buni mustaqil topishni ,
              bartaraf qilishni o’rganadi . Kurs yakunida umumiy onlayn
              yig’ilish o’tkaziladi va barchaga yangi egallagan kasblari
              munosabati bilan tabrik so’zlari beriladi :) ! Eslatib o’taman
              darslar barchasi real targetlarda bo’ladi , shu sabab dars
              davomida aloxida VPN Server va boshqa resurslarga ehtiyoj bo’ladi
              . Darslar kontenti O’zbekiston respublikasi qonunchiligiga zid
              bo’lmagan xolda tuzilgan va barcha praktikalar boshqa davlatlar
              resurslari orqali amalga oshiriladi.
            </p>
          </div>
        </section>
      </main>
      <section className="w-full max-w-5xl mx-auto mt-16 px-4">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left Column - Payment Info */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-primary">
              Tolov qanday amalga oshiriladi ?
            </h2>
            <p className="text-muted-foreground">
              Karta orqali yoki pul kochirish yo`li bilan to`lov qilishingiz
              mumkin. 6 oylik kursning 1 oylik tolovi 1,000,000 so`m. To`lov
              qilish uchun administratorga murojaat qiling.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Plus className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">
                    2,000,000 so`mlik kurslarni
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
                    Administrator bilan bog`laning va to`lov qiling.
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
                  6 oylik Umumiy kursning narxi
                </span>
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                  Chegirma bor
                </span>
              </div>
              <h3 className="text-4xl font-bold text-primary">6 million</h3>
            </div>

            <div className="space-y-4 mb-8">
              {[
                { icon: Video, text: "Full HD sifatdagi videodarslar" },
                { icon: FileText, text: "O'quv materiallari" },
                { icon: Book, text: "O'zbek tilidagi PDF kitob" },
                { icon: PhoneCall, text: "O'qituvchi bilan doimiy aloqa" },
                { icon: MessageSquare, text: "Umumiy guruh chat" },
                {
                  icon: Shield,
                  text: "Barcha o'quv qurollari bilan taminlanadi",
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
    </div>
  );
}
