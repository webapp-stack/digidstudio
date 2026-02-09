'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, MessageCircle, ArrowRight, ExternalLink, Terminal, Cpu, Database, Bot, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/6288973641682?text=${whatsappMessage}`, '_blank');
  };

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }, []);

  const technicalStacks = [
    {
      name: 'Google Web Development',
      description: 'Modern web applications built with cutting-edge Google technologies',
      code: 'const buildWebApp = () => {\n  return scalable,\n    performant,\n    responsive;\n};'
    },
    {
      name: 'Firebase',
      description: 'Real-time backend infrastructure with secure authentication',
      code: 'import { initializeApp } from "firebase/app";\nconst firebaseConfig = {\n  apiKey: "YOUR_API_KEY",\n  authDomain: "your-app.firebaseapp.com",\n  databaseURL: "https://your-app.firebaseio.com"\n};'
    },
    {
      name: 'Kommo CRM',
      description: 'Customer relationship management and workflow automation',
      code: 'const kommo = {\n  pipelines: ["sales", "leads"],\n  automations: "enabled",\n  integrations: ["web", "mobile"]\n};'
    },
    {
      name: 'AI Chatbot Integration',
      description: 'Botpress-powered intelligent conversational AI',
      code: 'async function initBot() {\n  const bot = await Botpress.create();\n  bot.on("message", handleAI);\n  return bot.deploy();\n}'
    }
  ];

  const portfolio = [
    {
      title: 'Kulina Halal Beverage',
      description: 'Platform e-commerce dengan backend Firebase dan manajemen inventori real-time',
      category: 'E-Commerce',
      tech: ['Next.js', 'Firebase', 'Stripe'],
      code: 'class KulinaStore {\n  constructor() {\n    this.inventory = new FirebaseDB();\n    this.payment = new Stripe();\n  }\n}'
    },
    {
      title: 'Kriya Booth',
      description: 'Sistem manajemen booth interaktif dengan integrasi Kommo CRM',
      category: 'Business Tools',
      tech: ['React', 'Kommo', 'Botpress'],
      code: 'const BoothManager = {\n  booking: new KommoCRM(),\n  aiChat: new BotpressBot(),\n  analytics: realTimeDashboard\n};'
    }
  ];

  const codeSnippets = [
    `// Digid Studio Core Principles
const MISSION = "Engineering Digital Excellence";
const FOUNDED = 2012;
const EXPERTISE = ["Firebase", "Kommo", "Botpress"];`,
    `// Performance Metrics
const PERFORMANCE = {
  loadTime: "< 2s",
  uptime: "99.9%",
  response: "instant",
  scalability: "unlimited"
};`,
    `// Client Success
const deliverables = {
  projects: 50,
  satisfaction: "100%",
  retention: "high",
  growth: "exponential"
};`
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0a0a0a', color: '#ffffff' }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-white/10" style={{ backgroundColor: 'rgba(10, 10, 10, 0.9)' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <img
                src="/logo-digid-studio.png"
                alt="Digid Studio Logo"
                className="h-11.25 w-auto"
                style={{ height: '45px' }}
              />
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#About" className="text-sm text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#Services" className="text-sm text-gray-400 hover:text-white transition-colors">Services</a>
              <a href="#Portfolio" className="text-sm text-gray-400 hover:text-white transition-colors">Portfolio</a>
              <a href="#Contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
            <Button asChild className="text-black font-semibold hover:scale-105 transition-transform" style={{ backgroundColor: '#39FF14' }}>
              <a href="https://wa.me/6288973641682?text=Halo%20Digid%20Studio,%20saya%20tertarik%20untuk%20konsultasi%20mengenai%20layanan%20Digital%20Ecosystem" target="_blank" rel="noopener noreferrer">
                Get Started
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-16">
        {/* Code Snippet Background */}
        <div className="absolute inset-0 opacity-8 overflow-hidden">
          <div className="absolute top-20 left-10 font-mono text-xs whitespace-pre hidden lg:block" style={{ color: '#39FF14' }}>
            {codeSnippets[0]}
          </div>
          <div className="absolute top-40 right-10 font-mono text-xs whitespace-pre hidden lg:block" style={{ color: '#39FF14' }}>
            {codeSnippets[1]}
          </div>
          <div className="absolute bottom-40 left-20 font-mono text-xs whitespace-pre hidden lg:block" style={{ color: '#39FF14' }}>
            {codeSnippets[2]}
          </div>
        </div>

        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm mb-8" style={{ borderColor: '#39FF1433', color: '#39FF14' }}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full" style={{ backgroundColor: '#39FF14', opacity: 0.75 }}></span>
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: '#39FF14' }}></span>
            </span>
            Est. {new Date().getFullYear() - 2012} Years of Excellence
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
            Engineering Digital Excellence
            <br />
            <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl" style={{ color: '#39FF14' }}>
              since 2012.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
            Spesialisasi dalam <span style={{ color: '#39FF14' }}>Firebase Architecture</span>, <span style={{ color: '#39FF14' }}>Kommo CRM</span>, dan <span style={{ color: '#39FF14' }}>Botpress AI Automation</span> untuk efisiensi bisnis Anda.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Button asChild size="lg" className="text-black font-bold text-lg px-10 py-7 rounded-lg hover:scale-105 transition-transform" style={{ backgroundColor: '#39FF14' }}>
              <a href="https://wa.me/6288973641682?text=Halo%20Digid%20Studio,%20saya%20ingin%20request%20Free%20Tech%20Audit%20untuk%20sistem%20bisnis%20saya" target="_blank" rel="noopener noreferrer">
                Request Tech Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button asChild size="lg" className="text-lg px-10 py-7 rounded-lg border-white/20 hover:border-white/40 hover:bg-gray-900 transition-colors" style={{ color: '#1a1a1a', backgroundColor: '#ffffff' }}>
              <a href="#Portfolio">
                View Portfolio
              </a>
            </Button>
          </div>

          {/* Quick Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="p-6 rounded-lg border border-white/10 hover:border-white/20 transition-colors">
              <div className="text-3xl font-bold mb-1" style={{ color: '#39FF14' }}>12+</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Years</div>
            </div>
            <div className="p-6 rounded-lg border border-white/10 hover:border-white/20 transition-colors">
              <div className="text-3xl font-bold mb-1" style={{ color: '#39FF14' }}>50+</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Projects</div>
            </div>
            <div className="p-6 rounded-lg border border-white/10 hover:border-white/20 transition-colors">
              <div className="text-3xl font-bold mb-1" style={{ color: '#39FF14' }}>30+</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Clients</div>
            </div>
            <div className="p-6 rounded-lg border border-white/10 hover:border-white/20 transition-colors">
              <div className="text-3xl font-bold mb-1" style={{ color: '#39FF14' }}>100%</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Success</div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Stacks Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0d0d0d' }}>
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <Terminal className="w-5 h-5" style={{ color: '#39FF14' }} />
              <span className="text-sm font-mono uppercase tracking-wider" style={{ color: '#39FF14' }}>TECHNOLOGIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Technical <span style={{ color: '#39FF14' }}>Stacks</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Built on enterprise-grade technologies designed for scale and performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {technicalStacks.map((stack, index) => (
              <Card key={index} className="border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden" style={{ backgroundColor: '#0a0a0a' }}>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{stack.name}</h3>
                      <p className="text-sm text-gray-400">{stack.description}</p>
                    </div>
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#39FF1414' }}>
                      {index === 0 && <Terminal className="w-6 h-6" style={{ color: '#39FF14' }} />}
                      {index === 1 && <Database className="w-6 h-6" style={{ color: '#39FF14' }} />}
                      {index === 2 && <Cpu className="w-6 h-6" style={{ color: '#39FF14' }} />}
                      {index === 3 && <Bot className="w-6 h-6" style={{ color: '#39FF14' }} />}
                    </div>
                  </div>
                  <div className="font-mono text-xs p-4 rounded-lg overflow-x-auto" style={{ backgroundColor: '#0d0d0d', border: '1px solid #1a1a1a' }}>
                    <pre style={{ color: '#39FF14' }}>{stack.code}</pre>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="About" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="text-sm font-mono uppercase tracking-wider" style={{ color: '#39FF14' }}>ABOUT THE FOUNDER</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Meet <span style={{ color: '#39FF14' }}>Tri Purwojianto</span>
              </h2>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed font-light">
                Terjun secara mendalam ke dalam dunia arsitektur web dan ekosistem digital selama lebih dari satu dekade, dengan pengalaman mendalam dalam membangun solusi digital sejak 2012.
              </p>

              <div className="p-6 rounded-lg border-l-4 mb-8" style={{ backgroundColor: '#0d0d0d', borderColor: '#39FF14' }}>
                <p className="text-xl italic text-gray-300">
                  "Kecepatan dan keandalan adalah pondasi kehadiran digital yang sukses."
                </p>
              </div>

              <p className="text-gray-400 leading-relaxed mb-6">
                Sejak 2012, saya telah merancang solusi digital yang mengubah bisnis. Dari arsitektur Firebase hingga otomatisasi bertenaga AI, setiap proyek dibangun dengan presisi dan performa sebagai inti utama.
              </p>
            </div>

            <div className="relative">
              {/* Code Block Visual */}
              <div className="rounded-lg overflow-hidden border border-white/10" style={{ backgroundColor: '#0d0d0d' }}>
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10" style={{ backgroundColor: '#0a0a0a' }}>
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-4 text-xs text-gray-500 font-mono">founder.js</span>
                </div>
                <div className="p-6 font-mono text-sm overflow-x-auto">
                  <pre style={{ color: '#39FF14' }}>
{`const founder = {
  name: "Tri Purwojianto",
  expertise: [
    "Firebase Architecture",
    "Kommo CRM",
    "Botpress AI"
  ],
  founded: 2012,
  philosophy: "Speed & Reliability",
  stats: {
    projects: 50,
    clients: 30,
    satisfaction: "100%"
  }
};`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="Services" className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0d0d0d' }}>
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5" style={{ color: '#39FF14' }} />
              <span className="text-sm font-mono uppercase tracking-wider" style={{ color: '#39FF14' }}>SERVICES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              What We <span style={{ color: '#39FF14' }}>Deliver</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Solusi bisnis berkinerja tingkat untuk performansi dan skalabilitas maksimal
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Firebase Architecture',
                description: 'Membangun database real-time yang aman dan super cepat serta cloud functions untuk aplikasi web modern.',
                icon: <Database className="w-6 h-6" />
              },
              {
                title: 'Sales Automation',
                description: 'Membangun pipeline penjualan otomatis dan alur komunikasi mulus untuk memaksimalkan konversi bisnis.',
                icon: <Cpu className="w-6 h-6" />
              },
              {
                title: 'AI Ecosystems',
                description: 'Implementasi solusi cerdas Botpress untuk otomatisasi interaksi pelanggan dan dukungan teknis 24/7.',
                icon: <Bot className="w-6 h-6" />
              },
              {
                title: 'Digital Pipelines',
                description: 'Merancang otomatisasi end-to-end yang menghubungkan website Anda dengan tools bisnis berperforma tinggi.',
                icon: <Zap className="w-6 h-6" />
              }
            ].map((service, index) => (
              <Card key={index} className="border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1" style={{ backgroundColor: '#0a0a0a' }}>
                <CardContent className="p-6 text-center space-y-6">
                  <div className="w-14 h-14 rounded-lg flex items-center justify-center mx-auto" style={{ backgroundColor: '#39FF1414' }}>
                    <span style={{ color: '#39FF14' }}>{service.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-center" style={{ color: '#39FF14' }}>
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed text-center">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="Portfolio" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <Terminal className="w-5 h-5" style={{ color: '#39FF14' }} />
              <span className="text-sm font-mono uppercase tracking-wider" style={{ color: '#39FF14' }}>PORTFOLIO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Featured <span style={{ color: '#39FF14' }}>Projects</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Production-grade solutions driving real business results
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {portfolio.map((project, index) => (
              <Card key={index} className="border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden" style={{ backgroundColor: '#0a0a0a' }}>
                <div className="p-6" style={{ backgroundColor: '#0d0d0d' }}>
                  <div className="font-mono text-xs p-4 rounded-lg overflow-x-auto mb-4" style={{ backgroundColor: '#0a0a0a', border: '1px solid #1a1a1a' }}>
                    <pre style={{ color: '#39FF14' }}>{project.code}</pre>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <span className="text-xs px-3 py-1 rounded-full font-mono" style={{ backgroundColor: '#39FF1414', color: '#39FF14', border: '1px solid #39FF1433' }}>
                      {project.category}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 mb-4">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 rounded border border-white/10 text-gray-400 font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="Contact" className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0d0d0d' }}>
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <MessageCircle className="w-5 h-5" style={{ color: '#39FF14' }} />
              <span className="text-sm font-mono uppercase tracking-wider" style={{ color: '#39FF14' }}>CONTACT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Let's <span style={{ color: '#39FF14' }}>Connect</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Ready to elevate your digital presence? Get in touch today.
            </p>
          </div>

          <Card className="border border-white/10 overflow-hidden" style={{ backgroundColor: '#0a0a0a' }}>
            <CardContent className="p-8 sm:p-10">
              <form onSubmit={handleSubmit} className="space-y-6 mb-10">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="bg-transparent border-white/20 focus:border-white/40 text-white placeholder:text-gray-600"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="bg-transparent border-white/20 focus:border-white/40 text-white placeholder:text-gray-600"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project..."
                    rows={5}
                    className="bg-transparent border-white/20 focus:border-white/40 text-white placeholder:text-gray-600 resize-none"
                    required
                  />
                </div>
                <Button type="submit" className="w-full text-black font-bold text-lg py-6 group hover:scale-[1.02] transition-transform" style={{ backgroundColor: '#39FF14' }}>
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Send via WhatsApp
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>

              <div className="border-t border-white/10 pt-8">
                <div className="grid sm:grid-cols-3 gap-6">
                  <a
                    href="https://wa.me/6288973641682"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center text-center p-4 rounded-lg border border-white/10 hover:border-white/20 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform" style={{ backgroundColor: '#39FF1414' }}>
                      <MessageCircle className="w-6 h-6" style={{ color: '#39FF14' }} />
                    </div>
                    <span className="text-sm font-medium mb-1">WhatsApp</span>
                    <span className="text-xs text-gray-500">+62 889 7364 1682</span>
                  </a>

                  <a
                    href="mailto:hello@digidstudio.com"
                    className="flex flex-col items-center text-center p-4 rounded-lg border border-white/10 hover:border-white/20 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform" style={{ backgroundColor: '#39FF1414' }}>
                      <Mail className="w-6 h-6" style={{ color: '#39FF14' }} />
                    </div>
                    <span className="text-sm font-medium mb-1">Email</span>
                    <span className="text-xs text-gray-500">hello@digidstudio.com</span>
                  </a>

                  <div className="flex flex-col items-center text-center p-4 rounded-lg border border-white/10">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: '#39FF1414' }}>
                      <MapPin className="w-6 h-6" style={{ color: '#39FF14' }} />
                    </div>
                    <span className="text-sm font-medium mb-1">Location</span>
                    <span className="text-xs text-gray-500">Karawang, Indonesia</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10" style={{ backgroundColor: '#0a0a0a' }}>
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="/logo-digid-studio.png"
                  alt="Digid Studio Logo"
                  className="h-11.25 w-auto"
                  style={{ height: '45px' }}
                />
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Engineering Digital Excellence since 2012. Specializing in Firebase, Kommo CRM, and Botpress AI.
              </p>
              <p className="text-sm text-gray-600">
                © {new Date().getFullYear()} Digid Studio. All rights reserved.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#About" className="text-sm text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#Services" className="text-sm text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="#Portfolio" className="text-sm text-gray-400 hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="#Contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2">
                <li><a href="#Services" className="text-sm text-gray-400 hover:text-white transition-colors">AI Automation</a></li>
                <li><a href="#Services" className="text-sm text-gray-400 hover:text-white transition-colors">CRM Systems</a></li>
                <li><a href="#Services" className="text-sm text-gray-400 hover:text-white transition-colors">Cloud Infrastructure</a></li>
              </ul>
            </div>
          </div>

          {/* Footer Code Snippet */}
          <div className="pt-8 border-t border-white/10">
            <div className="font-mono text-xs p-4 rounded-lg overflow-x-auto max-w-2xl mx-auto" style={{ backgroundColor: '#0d0d0d', border: '1px solid #1a1a1a' }}>
              <pre style={{ color: '#39FF14' }}>
{`// Status: Online
// Uptime: 99.9%
// Response: Ready to code`}
              </pre>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
