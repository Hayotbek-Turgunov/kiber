"use client";

import { useState } from "react";
import { Terminal, Shield, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TimelineSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const timelineData = [
    {
      month: "1-oy",
      title: "Programming Languages(Python)",
      icon: <Terminal className="w-3 h-3" />,
      content:
        "Dasturlash tillari, enterpretator va compilator,ide,python dasturlash tili, o’zgaruvchilar,Data types(int,float,string,boolean…),shart operatorlari(if,elif,else,match case),list,list metodlari(append,insert,del,remove…) ",
      fullContent:
        "Dasturlash tillari, enterpretator va compilator,ide,python dasturlash tili, o’zgaruvchilar,Data types(int,float,string,boolean…),shart operatorlari(if,elif,else,match case),list,list metodlari(append,insert,del,remove…) list comprehension,nesting list, lug’at,lug’at metodlari,nested dict,tsikl operatorlari (for va while),Funksiyalar,qiymat qaytaruvchi funksiyalar va qiymat qabul qiluvchi funksiyalar,mavhum funksiya (lambda),recursive funksiya,Modul(random,math,hashlib,subprocess,scappy,optparse,socket,requests,os,sys…)",
    },
    {
      month: "2-oy",
      title: "Network Administrator",
      icon: <Terminal className="w-3 h-3" />,
      content:
        "Tarmoq administratori, hududiy tarmoq tuzish, tarmoq,OSI 7 layers, tarmoq protokollari, ip-mac address, udp/tcp, hub, switch(L2 vs L3), Router, Firewalls, Wifi Security, console, copper, cross over cables, webserver, dns, waf, ports, vlan, stp, rstp, etherchannel.",
      fullContent: `Tarmoq administratori, hududiy tarmoq tuzish, tarmoq,OSI 7 layers, tarmoq protokollari, ip-mac address, udp/tcp, hub, switch(L2 vs L3), Router, Firewalls, Wifi Security, console, copper, cross over cables, webserver, dns, waf, ports, vlan, stp, rstp, etherchannel,
channel-goup, active and passive channel, LACP, PAgP, access,  trunk modes, ip routing, ip route, dot1Q, encopsulations, Servers, portsecurity, static and dinamic routing, LAN, WAN, WLAN, VPN, PAN, SAN…, DHCP, Subnet mask, gateways, bridge adapter, NAT, SSH, Telnet, Putty, Route on stick
`,
    },
    {
      month: "3-oy",
      title: "Windows OS",
      icon: <Shield className="w-3 h-3" />,
      content:
        "Windows OS tuzilishi , ishlashi uchun muxim servislar va vazifalari , xavfsizlik , hardening uchun zarur ishlar , UAC , API/Winapi, ps/threads , wininit/winlogon , dll,WSL , BIOS , MBR/UEFI, SRM/LSASS,Reestr , mimikatz , Digital Forensic , Ram capture , special forensic os , Velociraptor,nirsoft, FTKimager, datadump,MRU, ",
      fullContent:
        "Windows OS tuzilishi , ishlashi uchun muxim servislar va vazifalari , xavfsizlik , hardening uchun zarur ishlar , UAC , API/Winapi, ps/threads , wininit/winlogon , dll,WSL , BIOS , MBR/UEFI, SRM/LSASS,Reestr , mimikatz , Digital Forensic , Ram capture , special forensic os , Velociraptor,nirsoft, FTKimager, datadump,MRU, mobsf, androspy , adb , powershell , empire , cmd , DoD security , Sam accaunt Security , SID , Firewall,NTLM,Audit Policy Security , Event /log managing , cloning,backup , WRP//WFP , DACl/ACl, CVE/CVSS, 0day/mitre , Applocker,Windows Server 2022 uchun xavfsizlik masalalari, hardening / Active Directory va boshqa ko’plab mavzularni o’z ichiga olgan! 1-oy darslariga qo’shimcha sifatida / CyberSecurity v5 ( PROTECT ONE ) /  videokursi o’rganish uchun beriladi.",
    },
    {
      month: "4-oy",
      title: "Network Analyst and Network Security",
      icon: <Terminal className="w-3 h-3" />,
      content:
        "Tarmoq analizi, Packetlar, network protocols, packet id, http/s, DNS, SMPT, FTP, ICMP, ARP, UDP, TCP, SSL, TLSv1.2 vs TLSv1.3, Wireshark, Packet capture, Http qry,request, response, methods, server request and response(POST, GET, DELETE, UPDATE …..), network interface, wlan, eth0, lo, cap, capx, packet analiz, xavfsizlik agortimlari(md5, sha1, sha256, sha512, wpa/wpa2/wpa3), ",
      fullContent: `Tarmoq analizi, Packetlar, network protocols, packet id, http/s, DNS, SMPT, FTP, ICMP, ARP, UDP, TCP, SSL, TLSv1.2 vs TLSv1.3, Wireshark, Packet capture, Http qry,request, response, methods, server request and response(POST, GET, DELETE, UPDATE …..), network interface, wlan, eth0, lo, cap, capx, packet analiz, xavfsizlik agortimlari(md5, sha1, sha256, sha512, wpa/wpa2/wpa3), encode and decode hashes, hashes, ettercap, arp poisining, dns poisining, airmon-ng, managed mode, monitor mode,airodump-ng,
wordlists(rockyou.txt, hashlist.txt etc), aireplay-ng, BSSID, Channel, handshake, crunch wordlists, hashcat attacks, brute force attack, dictionary attack, rule attack, hybrid attack, combine attack, hashcat utils, hash-identifier, hashid, get hash, create hashlist, change value to hash by python, Antivirus, ClamAV, clamscan, clamdscan, clamfresh, rekursiv scan, directory scan, courantine, logs, auto scan, windows and linux configurations
`,
    },
    {
      month: "5-oy",
      title: "WAPT - WebApplicationPentesting !",
      icon: <Shield className="w-3 h-3" />,
      content:
        "Dolzarb , qiziq , doimiy daromadli kiberxavfsizlik yo’nalishlaridan biri . Bu oyda biz asosiy tushunchalar , URL,URI, Absolute path, Request , Response,Client side , Server side,Static / Dynamic site,Technology , CMS , Language,Security , Firewall , monitoring , detecting ,Bugbounty , report , OWASP top10, Security risks,BAC, CF, Injection, WSTG, ZAP, HTTP/S, SSL/TLS, Database/DB, ",
      fullContent:
        "Dolzarb , qiziq , doimiy daromadli kiberxavfsizlik yo’nalishlaridan biri . Bu oyda biz asosiy tushunchalar , URL,URI, Absolute path, Request , Response,Client side , Server side,Static / Dynamic site,Technology , CMS , Language,Security , Firewall , monitoring , detecting ,Bugbounty , report , OWASP top10, Security risks,BAC, CF, Injection, WSTG, ZAP, HTTP/S, SSL/TLS, Database/DB, Response status/methods, DNS, Cookie, Web application architecture, web server, CSP, XSS, SQL, LFI, IDOR, SSRF, CSRF, Bughunter, Top Portlar,Information Gathering, CVE, EXPDB, GHDB, Shodan, Recon, nmap, gobuster, Gospider, arjun, Github/Lab, Dorker, Enumeration, sqlmap, WAF/Bypass, Firewall, integratsiya, reportlash, masscan, Burpsuite, ASN, joomscan, wpscan, drupwn, cmscan, fuzzing, hackerone/hacker101, Acunetix, Netsparker va boshqa ko’plab darslardan iborat . 4-oyga qo’shimcha o’rganish uchun ” Docker , Proxmox va Nginx dan foydalanib web server tuzish ” kursi beriladi.",
    },

    {
      month: "6-oy",
      title: "Real targetlar ustida amaliyot(Practice)Vaow amazing 🤩	",
      icon: <Shield className="w-3 h-3" />,
      content: `Butun kurs davomida o’rgangan ko’nikmalar asosida real vaqtda ishlayotgan tarmoq, tizim va veb saytlar ustida amaliyot qilish! 
Turli CTF, Hackathonlar tashkil qilish va Virtual LAB (tryhackme, hackthebox, overthewire…) larda modullar yechish, Portswigger, DVWA, Bwapp kabi platformalarda ko’nikmalar! Tarmoq va tizim xavfsizlligini tekshirish, `,
      fullContent: `Butun kurs davomida o’rgangan ko’nikmalar asosida real vaqtda ishlayotgan tarmoq, tizim va veb saytlar ustida amaliyot qilish! 
Turli CTF, Hackathonlar tashkil qilish va Virtual LAB (tryhackme, hackthebox, overthewire…) larda modullar yechish, Portswigger, DVWA, Bwapp kabi platformalarda ko’nikmalar! Tarmoq va tizim xavfsizlligini tekshirish, Firewallar bilan ishlash, Sql va XSS injectionlar aniqlangan saytlar uchun reportlar yozish. Nessusd, burpsuite, zaproxy, dirbuster va boshqa toolar orqali saytlarni zaifliklarini aniqlash va ularni bartaraf qilish bo’yicha topshiriqlarni bajarish! Web serverlar Nginx,Apache,Ngrok ishlash prinsiplarini kuzatish, turli kamchiliklarni tuzatish, active directory listener, indexoutoff va boshqa tuzatishlarni amalga oshirish!
`,
    },
  ];

  return (
    <div className="px-2 py-3">
      <h2 className="text-sm font-bold text-primary mb-3">Kurs rejasi</h2>

      <div className="relative">
        {/* Timeline chiziq */}
        <div className="absolute left-[9px] top-0 bottom-0 w-0.5 bg-primary/20" />

        {/* Timeline elementlari */}
        <div className="space-y-3">
          {timelineData.map((item, index) => (
            <div key={index} className="relative pl-6">
              {/* Nuqta */}
              <div className="absolute left-0 w-[18px] h-[18px] bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground text-[10px] font-bold">
                  {index + 1}
                </span>
              </div>

              <div className="cyber-border p-2 rounded-lg bg-accent/5">
                {/* Sarlavha */}
                <div className="flex items-center gap-1 mb-1.5">
                  {item.icon}
                  <h3 className="text-xs font-bold text-primary">
                    {item.month} {item.title}
                  </h3>
                </div>

                {/* Kontent */}
                <p className="text-[11px] text-muted-foreground mb-1">
                  {expandedIndex === index ? item.fullContent : item.content}
                </p>

                {/* Koproq korish tugmasi */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full h-6 text-[10px] text-primary hover:bg-primary/5"
                  onClick={() =>
                    setExpandedIndex(expandedIndex === index ? null : index)
                  }
                >
                  {expandedIndex === index ? (
                    <ChevronUp className="w-3 h-3 mr-1" />
                  ) : (
                    <ChevronDown className="w-3 h-3 mr-1" />
                  )}
                  {expandedIndex === index ? "Yopish" : "Ko'proq ko'rish"}
                </Button>

                {/* Bonus */}
                <div className="mt-1">
                  <span className="text-[10px] text-primary/60">+</span>
                </div>
              </div>
            </div>
          ))}

          {/* Natija */}
          <div className="relative pl-6">
            <div className="absolute left-0 w-[18px] h-[18px] bg-primary/20 rounded-full flex items-center justify-center">
              <span className="text-primary text-[10px]">✓</span>
            </div>

            <div className="cyber-border p-2 rounded-lg bg-primary/5">
              <h3 className="text-xs font-bold text-primary mb-1.5 flex items-center gap-1">
                <Shield className="w-3 h-3" />
                Natija
              </h3>
              <p className="text-[11px] text-muted-foreground">
                Barcha darslar real targetlarda 100% amaliyot korinishida
                otiladi. Kurs yakunida onlayn yigilish otkaziladi.
              </p>
              <div className="mt-2 p-1.5 cyber-border rounded bg-secondary/5">
                <p className="text-[10px] text-primary">
                  Oqituvchi: Malik Kurbanov (shohmalik)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
