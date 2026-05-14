import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MonitorSmartphone, 
  Server,
  FileCode2,
  Check,
  MessageCircle,
  Zap,
  Crown,
  Rocket,
  Calculator,
  Plus
} from 'lucide-react';

const WA_NUMBER = "6285892004051";
const LOGO_URL = "https://zlr.my.id/6lgq.png";

const PACKAGES = [
  {
    id: "kismin",
    name: "Paket Kismin",
    price: "100k",
    desc: "Khusus untuk Anda yang hanya butuh file mentah (Source Code).",
    icon: <FileCode2 className="w-5 h-5" />,
    features: [
      "Desain Tampilan 1 Halaman",
      "Responsif (HP, Tablet, Desktop)",
      "Murni File Source Code",
      "Belum Termasuk Hosting & Domain"
    ]
  },
  {
    id: "sederhana",
    name: "Paket Sederhana",
    price: "300k",
    desc: "Terima beres, web langsung bisa diakses public tanpa ribet setup.",
    icon: <Zap className="w-5 h-5" />,
    popular: true,
    features: [
      "Semua dari Paket Kismin",
      "Sudah Termasuk Hosting",
      "Sudah Termasuk Domain",
      "Web Langsung Online!"
    ]
  },
  {
    id: "gokil",
    name: "Paket Gokil",
    price: "400k",
    desc: "Bisa custom menyesuaikan kebutuhan. (*Bisa ada biaya tambahan jika sangat kompleks).",
    icon: <Rocket className="w-5 h-5" />,
    features: [
      "Request Fitur Spesifik",
      "Desain Lebih Dinamis",
      "Termasuk Hosting & Domain",
      "Support & Revisi Terpandu"
    ]
  },
  {
    id: "super-ultra-gokil",
    name: "Paket Super Ultra Gokil",
    price: "Custom",
    desc: "Sistem aplikasi sekompleks apapun (Toko online, Kasir, Company Profile besar).",
    icon: <Crown className="w-5 h-5" />,
    features: [
      "Database & Backend Lengkap",
      "Integrasi Payment / API",
      "Desain Eksklusif nan Mewah",
      "Harga Disesuaikan Tingkat Kesulitan"
    ]
  }
];

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState(PACKAGES[1]);

  const waMessage = encodeURIComponent(`Halo Tim FWeb, saya sangat tertarik untuk membuat website dan memilih pesanan *${selectedPlan.name}*. Bisa kita diskusikan lebih lanjut?`);
  const waLink = `https://wa.me/${WA_NUMBER}?text=${waMessage}`;

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-200 scroll-smooth">
      
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-200"
      >
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <img src={LOGO_URL} alt="FWeb Logo" className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105" />
            <span className="font-extrabold text-2xl tracking-tight text-slate-800">
              F<span className="text-blue-600">Web</span>
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#fitur" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">Fitur Utama</a>
            <a href="#harga" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">Paket & Harga</a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden relative">
        <motion.div 
          animate={{ y: [0, -40, 0], scale: [1, 1.05, 1], opacity: [0.6, 0.4, 0.6] }} 
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100 rounded-full blur-[100px] opacity-60 pointer-events-none -z-10" 
        />
        <motion.div 
          animate={{ y: [0, 50, 0], scale: [1, 1.1, 1], opacity: [0.6, 0.3, 0.6] }} 
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-yellow-100 rounded-full blur-[80px] opacity-60 pointer-events-none -z-10" 
        />

        <div className="max-w-4xl mx-auto text-center z-10 relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 }
              }
            }}
          >
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="flex items-center justify-center mb-6"
            >
               <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold shadow-sm">
                 <Zap className="w-4 h-4 fill-blue-500 text-blue-500" /> Wujudkan Web Impian Anda
               </span>
            </motion.div>
            <motion.h1 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-6"
            >
              Bikinin Website <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">
                Gak Pake Mahal.
              </span>
            </motion.h1>
            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              FWeb hadir untuk memberikan solusi website profesional, rapi, dan cepat. 
              Pilih paket pengerjaan yang paling pas dengan budget dan kebutuhan Anda.
            </motion.p>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
            >
              <a 
                 href="#harga"
                 className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl active:scale-[0.98] hover:-translate-y-1"
              >
                 Lihat Paket Kami
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition / Features */}
      <section id="fitur" className="py-20 px-6 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">Mengapa FWeb?</h2>
            <p className="text-slate-600">Sederhana, amanah, dan langsung ke intinya.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                icon: <MonitorSmartphone className="w-8 h-8 text-blue-600" />,
                title: "Desain Responsif",
                desc: "Website dijamin tampil proporsional di layar HP, Tablet, hingga Monitor lebar kelas PC tanpa cacat."
              },
              {
                icon: <FileCode2 className="w-8 h-8 text-yellow-600" />,
                title: "Opsi Cuma File Murni",
                desc: "Anda bisa pilih hanya request file utuh untuk di-develop/hosting sendiri agar lebih irit (Paket Kismin)."
              },
              {
                icon: <Server className="w-8 h-8 text-blue-600" />,
                title: "Terima Beres (All-In)",
                desc: "Ga mau ribet? Pilih paket di mana kami yang tangani Domain dan Hostingnya sampai web live 100%."
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-blue-50 group-hover:scale-110 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

// Estimation Calculator removed

      {/* Pricing Section */}
      <section id="harga" className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">Pilih Paket Eksekusi Anda</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Silakan pilih paket di bawah. Tekan salah satu paket untuk menjadikannya pesanan Anda, lalu klik tombol Hubungi Kami di paling bawah!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            {PACKAGES.map((pkg, i) => {
              const isSelected = selectedPlan.id === pkg.id;
              
              return (
                <motion.div 
                  key={pkg.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
                  onClick={() => setSelectedPlan(pkg)}
                  className={`
                    relative rounded-[2rem] p-6 lg:p-8 cursor-pointer border-2 transition-all duration-300 flex flex-col items-start
                    ${isSelected 
                      ? 'bg-white border-blue-600 shadow-xl scale-100 lg:scale-105 z-10' 
                      : 'bg-white border-transparent shadow-sm hover:shadow-md hover:border-slate-200 hover:-translate-y-1'
                    }
                  `}
                >
                  {pkg.popular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wide shadow-md flex items-center gap-1 min-w-[max-content]">
                      <Zap className="w-3 h-3 fill-white" /> PALING LARIS
                    </div>
                  )}

                  <div className={`p-3 rounded-2xl mb-6 ${isSelected ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-600'}`}>
                    {pkg.icon}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    {pkg.price !== "Custom" && <span className="text-slate-500 font-semibold">Rp</span>}
                    <span className={`text-4xl font-black tracking-tighter ${isSelected ? 'text-blue-700' : 'text-slate-900'}`}>
                      {pkg.price}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 font-medium h-12 leading-relaxed mb-6">{pkg.desc}</p>
                  
                  <div className="w-full h-px bg-slate-100 mb-6" />

                  <ul className="space-y-4 mb-8 flex-1">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <Check className={`w-5 h-5 shrink-0 ${isSelected ? 'text-blue-600' : 'text-slate-400'}`} />
                        <span className="text-slate-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Visual Radio pseudo-button */}
                  <div className={`w-full py-3 rounded-xl font-bold text-center border-2 transition-colors ${
                    isSelected ? 'bg-blue-600 border-blue-600 text-white' : 'bg-transparent border-slate-200 text-slate-500'
                  }`}>
                    {isSelected ? 'Dipilih' : 'Pilih Paket'}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* SINGLE CALL TO ACTION BUTTON */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true, margin: "-50px" }}
             transition={{ duration: 0.5 }}
             className="max-w-2xl mx-auto flex flex-col items-center p-8 lg:p-10 bg-white border border-slate-200 shadow-2xl rounded-3xl relative overflow-hidden"
          >
             {/* decorative blob */}
             <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -top-32 -right-32 w-80 h-80 bg-blue-50 rounded-full blur-[60px] opacity-70 pointer-events-none" 
             />
             
             <div className="relative z-10 w-full text-center">
                <span className="inline-block mb-3 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-md text-xs font-bold uppercase tracking-wider">Langkah Terakhir</span>
                <h3 className="text-2xl font-bold text-slate-900 mb-2 mt-2">
                   Anda memilih <span className="text-blue-600 underline decoration-blue-300 underline-offset-4">{selectedPlan.name}</span>
                </h3>
                <p className="text-slate-500 mb-8 max-w-md mx-auto">
                   Klik tombol di bawah ini untuk langsung terhubung dengan tim teknis FWeb di WhatsApp dan mulai proyek Anda!
                </p>

                <motion.a 
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-yellow-950 px-10 py-5 rounded-2xl font-bold text-xl transition-all shadow-xl hover:shadow-yellow-500/20"
                >
                  <MessageCircle className="w-7 h-7 fill-yellow-950/20" />
                  Order via WhatsApp Sekarang
                </motion.a>
                <div className="mt-5 text-sm text-slate-400 flex items-center justify-center gap-2">
                   <span className="relative flex h-2.5 w-2.5">
                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                     <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                   </span>
                   Tim kami online dan siap membalas
                </div>
             </div>
          </motion.div>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-900 border-t border-slate-800 text-slate-400">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
             <img src={LOGO_URL} alt="FWeb Logo" className="h-10 opacity-70 grayscale hover:grayscale-0 transition-all duration-300" />
             <span className="font-extrabold text-2xl tracking-tight text-white mb-0 mt-2">
               F<span className="text-blue-500">Web</span>
             </span>
          </div>
          <p className="text-sm font-medium text-center md:text-left">
            &copy; {new Date().getFullYear()} FWeb Studio. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}
