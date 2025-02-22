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
        "Linux OS tuzilish , umumiy arxitektura , katalog va faylar joylashuv , virtualization , Acl , Yadro / kernel tuziqla , EXT4 , Unix Grub , paket menejerlari , x'matish va o'chirish , faylar boshqaruv komandalar , 200+ komandalar bilan ishlash tasnifi , VIM, GID ,PID , OS , ps/TOP/Process, locate , ummon parametrlar va komandalar , TCP/IP , udp , firewall , iptables/netfilter , swap , mount , ps , bash scripting , demon/services , LSTP/FTP, sudo , chmod , PAM controls,Pre/escalation,Process , Hardening,Special , Pre-defined OS , Redhat/Debian,ubuntu,kali,centos,parrot,pentoo,bt , 2-oycha qisqacha barcha OS security , Kursda Linux OS uchun qo'yilgan - ko'plab ko'r qancha mavzulardan iborat , 2-oy davrlari uchun \"GNU / Linux OS Gs O\" dan boshlash administratsiyagacha + kurs o'rganish uchun beriladi.",
    },
    {
      month: "3-oy",
      title: "Virusologiya",
      content:
        "Virus haqida asoslarini tushinchalar, turlar va tasnifi , worms, keylogger, bot/spam, banker, dropper/downloader, ransomware, miner, backdoor, Olysidg, immunity, ids , eKS,Ghidra SRE , Windbg, Mal, C2/C&C, IDE, Packed/Obfuscated, Disassamblers, IOC, Registers, static/dynamic analysis, Revers engineering haqida , crackme, malware, sandbox, powershell, (malkit/stealth, AV/SI/bypass , AV bypass , PUD, virus OEP, CobaltStrike, UAC, Agressor scripts, C2, Linux/Mac OS virus , malware o'rnatish va boshqa ko'plab mavzularni o'z ichiga olgan 3-oyga mo'ljallangan uchun CyberSecurity v5 ( PROTECT PRO ) / videokursi beriladi.",
    },
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200" />

        {/* Timeline items */}
        <div className="space-y-12">
          {timelineData.map((item, index) => (
            <div key={index} className="relative pl-12">
              {/* Blue dot */}
              <div className="absolute left-0 w-8 h-8 bg-blue-500 rounded-full" />

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-lg font-semibold">{item.month}</h3>
                  <span className="text-gray-500">//</span>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

