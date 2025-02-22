"use client";

import { useEffect, useRef } from "react";

export default function Timeline() {
  const timelineData = [
    {
      month: "1-oy",
      title: "Windows OS",
      content:
        "Windows OS tuzilish , ishlatish uchun maxsus servislar va vazifalar , xavfsizlik , hardening uchun zarur ishlar , UAC , APP/Winreg, ps/threads , winini/reghogs , dlls/WSL , GDI36 , MDI/NFLT, SRM/I-SASS,Rootkit , mimikatz , Digital Forensics , Deep capture , special forensic.us , Volcexplorerssoft, FTKimager, dataslump,MRI, modsd, andropy , sids , power,shell , simple , cmd , DoD security , Sam account, Security , GPO, Firewall,NTLM,Local Policy,Security , Event, file managing , cloning,backup , WPF/WTS , DAC/ACL , CVE/CVSS , Delay/mitre , Applockerr,Windows Server 2022 uchun xavfsizlik masalalari , hardening / Active Directory va boshqa ko'plab mavzularni o'z ichiga olgan 1-oy davrlarda o'quvchida etibda / CyberSecurity v5 ( PROTECT ONE ) / videokursi o'rganish uchun beriladi.",
    },
    {
      month: "2-oy",
      title: "Linux OS",
      content:
        "Linux OS tuzilish , umumiy arxitektura , katalog va faylar joylashuv , virtualization , Acl , Yadro / kernel tuziqla , EXT4 , Unix Grub , paket menejerlari , x'matish va o'chirish , faylar boshqaruv komandalar , 200+ komandalar bilan ishlash tasnifi , VIM, GID ,PID , OS , ps/TOP/Process, locate , ummon parametrlar va komandalar , TCP/IP , udp , firewall , iptables/netfilter , swap , mount , ps , bash scripting , demon/services , LSTP/FTP, sudo , chmod , PAM controls,Pre/escalation,Process , Hardening,Special , Pre-defined OS , Redhat/Debian,ubuntu,kali,centos,parrot,pentoo,bt , 2-oycha qisqacha barcha OS security , Kursda Linux OS uchun qo'yilgan - ko'plab ko'r qancha mavzulardan iborat , 2-oy davrlari uchun GNU / Linux OS Gs O dan boshlash administratsiyagacha + kurs o'rganish uchun beriladi.",
    },
    {
      month: "3-oy",
      title: "Virusologiya",
      content:
        "Virus haqida asoslarini tushinchalar, turlar va tasnifi , worms, keylogger, bot/spam, banker, dropper/downloader, ransomware, miner, backdoor, Olysidg, immunity, ids , eKS,Ghidra SRE , Windbg, Mal, C2/C&C, IDE, Packed/Obfuscated, Disassamblers, IOC, Registers, static/dynamic analysis, Revers engineering haqida , crackme, malware, sandbox, powershell, (malkit/stealth, AV/SI/bypass , AV bypass , PUD, virus OEP, CobaltStrike, UAC, Agressor scripts, C2, Linux/Mac OS virus , malware o'rnatish va boshqa ko'plab mavzularni o'z ichiga olgan 3-oyga mo'ljallangan uchun CyberSecurity v5 ( PROTECT PRO ) / videokursi beriladi.",
    },
  ];

  const timelineRef = useRef(null);

  useEffect(() => {
    if (!timelineRef.current) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("Element ko‘rinmoqda:", entry.target);
        }
      });
    });

    // timelineRef.current ni o‘zgaruvchiga saqlash
    const container = timelineRef.current;
    const timelineItems = Array.from(
      container.querySelectorAll(".timeline-item")
    );

    timelineItems.forEach((item) => observer.observe(item));

    return () => {
      timelineItems.forEach((item) => observer.unobserve(item));
      observer.disconnect(); // Observerni tozalash
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12" ref={timelineRef}>
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-emerald-500/20 transform -translate-x-1/2" />

        {/* Timeline items */}
        <div className="space-y-8 sm:space-y-12">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className="relative pl-12 sm:pl-0 timeline-item opacity-0 transform translate-y-10 transition-all duration-700 ease-out"
            >
              {/* Glowing dot */}
              <div className="absolute left-0 sm:left-1/2 w-8 h-8 transform -translate-x-1/2">
                <div className="absolute inset-0 bg-emerald-500 rounded-full blur-sm pulse"></div>
                <div className="absolute inset-0 bg-emerald-500 rounded-full"></div>
              </div>

              <div
                className={`sm:w-1/2 ${
                  index % 2 === 0 ? "sm:pr-8 sm:ml-auto" : "sm:pl-8"
                }`}
              >
                <div className="bg-emerald-500/10 rounded-lg p-4 sm:p-6 border border-emerald-500/20 backdrop-blur-sm hover:scale-105 transition-transform duration-200">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-base sm:text-lg font-semibold text-emerald-400">
                      {item.month}
                    </h3>
                    <span className="text-gray-500"></span>
                    <h3 className="text-base sm:text-lg font-semibold text-emerald-400">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.15);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 0.7;
          }
        }

        .pulse {
          animation: pulse 2s infinite;
        }

        .animate-fadeIn {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}
