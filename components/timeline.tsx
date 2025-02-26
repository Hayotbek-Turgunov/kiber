"use client";

import { useState } from "react";
import { Terminal, Shield, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TimelineSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const timelineData = [
    {
      month: "1-oy",
      title: "Windows OS",
      icon: <Terminal className="w-3 h-3" />,
      content:
        "Windows OS tuzilishi, ishlashi uchun muxim servislar va vazifalar, xavfsizlik, hardening uchun zarur ishlar, UAC, API/Winapi, ps/threads, wininit/winlogon, dll,WSL, BIOS, MBR/UEFI, SRM/LSASS,Reestr, mimikatz, Digital Forensic...",
      fullContent:
        "Windows OS tuzilishi, ishlashi uchun muxim servislar va vazifalar, xavfsizlik, hardening uchun zarur ishlar, UAC, API/Winapi, ps/threads, wininit/winlogon, dll,WSL, BIOS, MBR/UEFI, SRM/LSASS,Reestr, mimikatz, Digital Forensic, Ram capture, special forensic os, Velociraptor,nirsoft, FTKimager, datadump,MRU, mobsf, androspy, adb, powershell, empire, cmd, DoD security, Sam accaunt Security, SID, Firewall,NTLM,Audit Policy Security, Event/log managing, cloning,backup, WRP/WFP, DACI/ACI, CVE/CVSS, Oday/mitre, Applocker,Windows Server 2022 uchun xavfsizlik masalalari, hardening / Active Directory va boshqa koplab mavzularni oz ichiga olgan!",
      bonus: "CyberSecurity v5 (PROTECT ONE) videokursi",
    },
    {
      month: "2-oy",
      title: "Linux OS",
      icon: <Terminal className="w-3 h-3" />,
      content:
        "Linux OS tuzilishi, komandalar, xavfsizlik, scripting, networking, server administration...",
      fullContent:
        "Linux OS tuzilishi, komandalar, xavfsizlik, scripting, networking, server administration, audit, hardening, log analiz, server monitoring, reverse proxy, load balancing, fail over, high availability, docker, kubernetes, CI/CD, bash, python, perl, awk, sed, grep, find, xargs, systemd, journald, cron, at, ssh, iptables, firewalld, selinux, apparmor, chroot, namespaces, cgroups, capabilities, seccomp, auditd, logrotate, rsyslog, syslog-ng, grafana, prometheus, alertmanager, nginx, apache, haproxy, keepalived, pacemaker, corosync, docker-compose, docker swarm, kubernetes, jenkins, gitlab, travis, circleci, github actions, AWS, Azure, GCP va boshqa koplab mavzularni oz ichiga olgan!",
      bonus: "GNU/Linux OS administratsiya kursi",
    },
    {
      month: "3-oy",
      title: "Virusologiya",
      icon: <Shield className="w-3 h-3" />,
      content:
        "Viruslar, malware analiz, reverse engineering, bypass texnikalari...",
      fullContent:
        "Viruslar, malware analiz, reverse engineering, bypass texnikalari, x86/x64 assembly, PE format, OllyDbg, IDA Pro, Ghidra, C/C++, Python, shellcode, anti-debugging, anti-VM, packing, obfuscation, polymorphism, metamorphism, rootkit, bootkit, kernel-mode driver, user-mode driver, DLL injection, code injection, hooking, detours, inline hooking, IAT hooking, EAT hooking, VMT hooking, SSDT hooking, DKOM, IRP hooking, Minifilter, TDL, ZeroAccess, Stuxnet, Flame, Duqu, Gauss, Regin, Equation Group, Shadow Brokers, WannaCry, NotPetya, BadRabbit, Emotet, TrickBot, Ryuk, Sodinokibi, Maze, Conti, REvil, DarkSide, BlackMatter, LockBit, Hive, BlackCat, AlphV, Ragnar Locker, Medusa, Clop, Akira, Royal, Rhysida, Cactus, 8Base, NoEscape, BianLian, Trigona, LockFile, Nokoyawa, Phobos, Mallox, Zeppelin, Yanluowang, RansomEXX, Cuba, Play, Snatch, Lorenz, Everest, Avaddon, Nefilim, DoppelPaymer, Buer Loader, QakBot, IcedID, BazarLoader, Cobalt Strike, Metasploit, Empire, PowerShell Empire, Covenant, PoshC2, Sliver, Brute Ratel C4, Mythic, Caldera, Atomic Red Team, PurpleSharp, Red Canary Atomic Testing Framework, MITRE ATT&CK, Cyber Kill Chain, Diamond Model, Pyramid of Pain, Intrusion Analysis, Threat Hunting, Incident Response, Digital Forensics, Malware Analysis, Reverse Engineering, Exploit Development, Vulnerability Research, Penetration Testing, Red Teaming, Blue Teaming, Purple Teaming, Threat Intelligence, Security Awareness Training, Security Auditing, Security Compliance, Security Governance, Risk Management, Security Architecture, Security Engineering, Security Operations, Security Incident Response, Security Forensics, Security Research, Security Consulting, Security Training, Security Certification, Security Community, Security Conference, Security Podcast, Security Blog, Security Book, Security Tool, Security Vendor, Security Analyst, Security Engineer, Security Architect, Security Manager, Security Director, Security Officer, Security Consultant, Security Trainer, Security Researcher, Security Auditor, Security Compliance Officer, Security Governance Officer, Risk Manager, Security Operations Center Analyst, Security Incident Responder, Security Forensics Investigator, Security Malware Analyst, Security Reverse Engineer, Security Exploit Developer, Security Vulnerability Researcher, Security Penetration Tester, Security Red Teamer, Security Blue Teamer, Security Purple Teamer, Security Threat Intelligence Analyst, Security Awareness Trainer, Security Auditor, Security Compliance Officer, Security Governance Officer, Risk Manager, Security Operations Center Analyst, Security Incident Responder, Security Forensics Investigator, Security Malware Analyst, Security Reverse Engineer, Security Exploit Developer, Security Vulnerability Researcher, Security Penetration Tester, Security Red Teamer, Security Blue Teamer, Security Purple Teamer, Security Threat Intelligence Analyst, Security Awareness Trainer va boshqa koplab mavzularni oz ichiga olgan!",
      bonus: "CyberSecurity v6 (PROTECT PRO) videokursi",
    },
    {
      month: "4-oy",
      title: "WAPT",
      icon: <Terminal className="w-3 h-3" />,
      content:
        "Web Application Pentesting, zaifliklar, xavfsizlik risklari, OWASP Top 10...",
      fullContent:
        "Web Application Pentesting, zaifliklar, xavfsizlik risklari, OWASP Top 10, SQL Injection, XSS, CSRF, XXE, SSRF, LFI, RFI, Command Injection, Path Traversal, File Upload, Deserialization, Authentication Bypass, Authorization Bypass, Session Management, Cryptography, Business Logic, API Security, Mobile Security, Cloud Security, Container Security, Serverless Security, DevSecOps, Secure SDLC, Threat Modeling, Vulnerability Assessment, Penetration Testing, Red Teaming, Blue Teaming, Purple Teaming, Bug Bounty, Vulnerability Disclosure, Responsible Disclosure, Coordinated Vulnerability Disclosure, Zero-Day Vulnerability, N-Day Vulnerability, Vulnerability Management, Vulnerability Remediation, Vulnerability Mitigation, Vulnerability Prevention, Vulnerability Detection, Vulnerability Response, Vulnerability Reporting, Vulnerability Tracking, Vulnerability Prioritization, Vulnerability Scanning, Vulnerability Analysis, Vulnerability Exploitation, Vulnerability Patching, Vulnerability Hardening, Vulnerability Configuration, Vulnerability Monitoring, Vulnerability Logging, Vulnerability Alerting, Vulnerability Correlation, Vulnerability Aggregation, Vulnerability Visualization, Vulnerability Reporting, Vulnerability Tracking, Vulnerability Prioritization, Vulnerability Scanning, Vulnerability Analysis, Vulnerability Exploitation, Vulnerability Patching, Vulnerability Hardening, Vulnerability Configuration, Vulnerability Monitoring, Vulnerability Logging, Vulnerability Alerting, Vulnerability Correlation, Vulnerability Aggregation, Vulnerability Visualization, Burp Suite, OWASP ZAP, Acunetix, Netsparker, Invicti, Veracode, Checkmarx, Fortify, SonarQube, Snyk, Contrast Security, WhiteSource, Black Duck, JFrog Xray, Aqua Security, Twistlock, Sysdig Secure, StackRox, NeuVector, Anchore, Clair, Trivy, Grype, Snyk Container, Aqua Enterprise, Twistlock Enterprise, Sysdig Secure Enterprise, StackRox Enterprise, NeuVector Enterprise, Anchore Enterprise, Clair Enterprise, Trivy Enterprise, Snyk Container Enterprise, OWASP, NIST, SANS, CIS, PCI DSS, HIPAA, GDPR, CCPA, ISO 27001, SOC 2, FedRAMP, OWASP Top 10, OWASP Mobile Top 10, OWASP API Security Top 10, OWASP Serverless Top 10, OWASP DevSecOps Top 10, OWASP Secure SDLC Top 10, OWASP Threat Modeling Top 10, OWASP Vulnerability Assessment Top 10, OWASP Penetration Testing Top 10, OWASP Red Teaming Top 10, OWASP Blue Teaming Top 10, OWASP Purple Teaming Top 10, OWASP Bug Bounty Top 10, OWASP Vulnerability Disclosure Top 10, OWASP Responsible Disclosure Top 10, OWASP Coordinated Vulnerability Disclosure Top 10, OWASP Zero-Day Vulnerability Top 10, OWASP N-Day Vulnerability Top 10, OWASP Vulnerability Management Top 10, OWASP Vulnerability Remediation Top 10, OWASP Vulnerability Mitigation Top 10, OWASP Vulnerability Prevention Top 10, OWASP Vulnerability Detection Top 10, OWASP Vulnerability Response Top 10, OWASP Vulnerability Reporting Top 10, OWASP Vulnerability Tracking Top 10, OWASP Vulnerability Prioritization Top 10, OWASP Vulnerability Scanning Top 10, OWASP Vulnerability Analysis Top 10, OWASP Vulnerability Exploitation Top 10, OWASP Vulnerability Patching Top 10, OWASP Vulnerability Hardening Top 10, OWASP Vulnerability Configuration Top 10, OWASP Vulnerability Monitoring Top 10, OWASP Vulnerability Logging Top 10, OWASP Vulnerability Alerting Top 10, OWASP Vulnerability Correlation Top 10, OWASP Vulnerability Aggregation Top 10, OWASP Vulnerability Visualization Top 10 va boshqa koplab mavzularni oz ichiga olgan!",
      bonus: "Docker va Nginx server kursi",
    },
    {
      month: "4-oy+",
      title: "SOC",
      icon: <Shield className="w-3 h-3" />,
      content:
        "Security Operations Center, monitoring, incident response, threat hunting...",
      fullContent:
        "Security Operations Center, monitoring, incident response, threat hunting, SIEM, SOAR, EDR, NDR, XDR, TIP, Threat Intelligence, Threat Hunting, Incident Response, Digital Forensics, Malware Analysis, Reverse Engineering, Exploit Development, Vulnerability Research, Penetration Testing, Red Teaming, Blue Teaming, Purple Teaming, Security Awareness Training, Security Auditing, Security Compliance, Security Governance, Risk Management, Security Architecture, Security Engineering, Security Operations, Security Incident Response, Security Forensics, Security Research, Security Consulting, Security Training, Security Certification, Security Community, Security Conference, Security Podcast, Security Blog, Security Book, Security Tool, Security Vendor, Security Analyst, Security Engineer, Security Architect, Security Manager, Security Director, Security Officer, Security Consultant, Security Trainer, Security Researcher, Security Auditor, Security Compliance Officer, Security Governance Officer, Risk Manager, Security Operations Center Analyst, Security Incident Responder, Security Forensics Investigator, Security Malware Analyst, Security Reverse Engineer, Security Exploit Developer, Security Vulnerability Researcher, Security Penetration Tester, Security Red Teamer, Security Blue Teamer, Security Purple Teamer, Security Threat Intelligence Analyst, Security Awareness Trainer, Security Auditor, Security Compliance Officer, Security Governance Officer, Risk Manager, Security Operations Center Analyst, Security Incident Responder, Security Forensics Investigator, Security Malware Analyst, Security Reverse Engineer, Security Exploit Developer, Security Vulnerability Researcher, Security Penetration Tester, Security Red Teamer, Security Blue Teamer, Security Purple Teamer, Security Threat Intelligence Analyst, Security Awareness Trainer, SIEM, SOAR, EDR, NDR, XDR, TIP, Splunk, QRadar, Sentinel, CrowdStrike, Carbon Black, Palo Alto Networks, FireEye, Cisco, Fortinet, McAfee, Symantec, Trend Micro, Sophos, Kaspersky, Cylance, Darktrace, Vectra, Exabeam, Securonix, LogRhythm, Sumo Logic, Rapid7, AlienVault, AT&T Cybersecurity, IBM Resilient, Demisto, Swimlane, Siemplify, ThreatConnect, Anomali, Recorded Future, Mandiant Advantage, Flashpoint, Digital Shadows, LookingGlass, ZeroFox, Cybersixgill, IntSights, RiskIQ, DomainTools, Farsight Security, PassiveTotal, Shodan, Censys, ZoomEye, BinaryEdge, GreyNoise, VirusTotal, Hybrid Analysis, Joe Sandbox, Any.Run, Cuckoo Sandbox, Intezer Analyze, ReversingLabs, ThreatBook, Baidu Threat Intelligence, Qihoo 360 Threat Intelligence, Tencent Threat Intelligence, Alibaba Threat Intelligence, Kaspersky Threat Intelligence, Symantec Threat Intelligence, Trend Micro Threat Intelligence, McAfee Threat Intelligence, Cisco Threat Intelligence, Fortinet Threat Intelligence, Palo Alto Networks Threat Intelligence, FireEye Threat Intelligence, CrowdStrike Threat Intelligence, Carbon Black Threat Intelligence, Splunk Threat Intelligence, QRadar Threat Intelligence, Sentinel Threat Intelligence, Microsoft Threat Intelligence, Google Threat Intelligence, Amazon Threat Intelligence, IBM Threat Intelligence, AT&T Cybersecurity Threat Intelligence, Verizon Threat Intelligence, CenturyLink Threat Intelligence, Level 3 Threat Intelligence, NTT Threat Intelligence, Orange Threat Intelligence, Singtel Threat Intelligence, Telstra Threat Intelligence, Vodafone Threat Intelligence, BT Threat Intelligence, Deutsche Telekom Threat Intelligence, Telefonica Threat Intelligence, Telecom Italia Threat Intelligence, Swisscom Threat Intelligence, KPN Threat Intelligence, Telenor Threat Intelligence, Telia Threat Intelligence, Elisa Threat Intelligence, DNA Threat Intelligence, TDC Threat Intelligence, Tele2 Threat Intelligence, Altice Threat Intelligence, Liberty Global Threat Intelligence, Charter Communications Threat Intelligence, Comcast Threat Intelligence, Cox Communications Threat Intelligence, Rogers Communications Threat Intelligence, Shaw Communications Threat Intelligence, Bell Canada Threat Intelligence, Telus Threat Intelligence, Rogers Communications Threat Intelligence, Shaw Communications Threat Intelligence, Bell Canada Threat Intelligence, Telus Threat Intelligence va boshqa koplab mavzularni oz ichiga olgan!",
      bonus: "Private VPN server kursi",
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
                  <span className="text-[10px] text-primary/60">
                    + {item.bonus}
                  </span>
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
