import React, { useState } from 'react';
import { Download, CheckCircle, Settings, Menu, X, ChevronRight, Chrome, FolderOpen, Puzzle, Activity, Zap, TrendingUp } from 'lucide-react';

// --- Assets & Data ---

// NOTE: Replace this URL with the actual path to your screenshot file after moving it to your public folder.
// Example: "/Screenshot 2025-11-27 at 8.00.13 PM.png"
const SCREENSHOT_URL = "/screenshot.png"; 

const features = [
  {
    title: "Live Statistics",
    description: "Get real-time attendance statistics and insights to track your progress instantly.",
    icon: <TrendingUp className="w-6 h-6 text-indigo-600" />
  },
  {
    title: "Focus Mode",
    description: "A distraction-free interface that lets you check your stats and get back to studying in seconds.",
    icon: <Activity className="w-6 h-6 text-indigo-600" />
  },
  {
    title: "Instant Sync",
    description: "Automatically syncs with your course dashboard the moment you log in. No buttons to press.",
    icon: <Zap className="w-6 h-6 text-indigo-600" />
  },
  {
    title: "Smart Groups",
    description: "Organize subjects like ADA and DBS into custom clusters for better attendance insights.",
    icon: <FolderOpen className="w-6 h-6 text-indigo-600" />
  }
];

const installSteps = [
  {
    title: "Download Package",
    description: "Get the latest version of Newton+ as a ZIP file. Save it somewhere safe.",
    icon: <Download className="w-6 h-6 text-white" />,
    action: "Download v1.0",
    isDownload: true
  },
  {
    title: "Developer Mode",
    description: "In chrome://extensions, flip the 'Developer mode' switch in the top right corner.",
    icon: <Settings className="w-6 h-6 text-white" />,
    alert: "Required Step"
  },
  {
    title: "Load Unpacked",
    description: "Click 'Load Unpacked' and select the unzipped folder. You're ready to roll.",
    icon: <Puzzle className="w-6 h-6 text-white" />
  }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-lg sticky top-0 z-50 border-b border-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:shadow-indigo-500/50 transition-all duration-300">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors">Newton<span className="text-indigo-600">+</span></span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-600 hover:text-indigo-600 transition-colors font-medium text-sm">Features</a>
            <a href="#install" className="text-slate-600 hover:text-indigo-600 transition-colors font-medium text-sm">How to Install</a>
            <a href="/Newton_plus.zip" download="Newton_plus.zip" className="bg-slate-900 text-white px-5 py-2 rounded-full font-medium hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl text-sm flex items-center gap-2">
              <Download className="w-4 h-4" />
              Get Extension
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-indigo-600">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 p-4 space-y-4 shadow-xl">
          <a href="#features" className="block text-slate-600 font-medium" onClick={() => setIsOpen(false)}>Features</a>
          <a href="#install" className="block text-slate-600 font-medium" onClick={() => setIsOpen(false)}>How to Install</a>
          <a href="/Newton_plus.zip" download="Newton_plus.zip" className="w-full bg-indigo-600 text-white px-5 py-3 rounded-xl font-medium shadow-lg shadow-indigo-200">
            Download v1.0
          </a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <div className="relative overflow-hidden pt-16 pb-24 lg:pt-32 bg-slate-50">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-200/30 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-violet-200/30 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-indigo-100 text-indigo-600 text-sm font-semibold mb-8 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              v1.0 is Live
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 leading-[1.1]">
              Attendance, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Upgrade.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Stop guessing your percentage. Newton+ integrates seamlessly with your dashboard to give you real-time insights, locally and securely.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="/Newton_plus.zip" download="Newton_plus.zip" className="flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-lg hover:shadow-indigo-500/30 hover:scale-[1.02] transition-all duration-200">
                <Download className="w-5 h-5" />
                Install Now
              </a>
              <a href="#features" className="flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all">
                Explore Features
              </a>
            </div>
            <p className="mt-6 text-sm text-slate-400 flex items-center justify-center lg:justify-start gap-2">
              <Chrome className="w-4 h-4" /> Compatible with Chrome & Brave
            </p>
          </div>
          
          <div className="relative z-10 perspective-1000">
             {/* 3D Tilt Effect Container */}
            <div className="relative transform rotate-y-[-5deg] rotate-x-[5deg] hover:rotate-0 transition-transform duration-500">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-2xl blur opacity-30"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
                {/* Browser Header Simulation */}
                <div className="bg-slate-100 border-b border-slate-200 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                  </div>
                  <div className="mx-auto bg-white px-4 py-1.5 rounded-md text-xs text-slate-400 shadow-sm border border-slate-200 w-2/3 text-center flex items-center justify-center gap-2">
                     <span className="w-2 h-2 bg-green-500 rounded-full"></span> my.newtonschool.co
                  </div>
                </div>
                
                {/* The provided screenshot goes here */}
                <div className="aspect-[4/3] bg-slate-50 relative group">
                  <img 
                    src={SCREENSHOT_URL} 
                    alt="Newton+ Interface" 
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Overlay sheen */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 animate-bounce delay-1000 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-7 h-7 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Sync Status</p>
                    <p className="text-base font-bold text-slate-900">100% Active</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Built for the modern student.</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            We stripped away the complexity. Newton+ gives you exactly what you need to track your progress, without the fluff.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="group p-8 rounded-3xl bg-slate-50 hover:bg-white border border-transparent hover:border-indigo-100 hover:shadow-2xl hover:shadow-indigo-100/50 transition-all duration-300">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Installation = () => {
  return (
    <section id="install" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-indigo-900/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-indigo-400 font-bold tracking-wider uppercase text-sm">Manual Installation</span>
            <h2 className="text-4xl font-bold mt-3 mb-6">Setup in 30 Seconds</h2>
            <p className="text-lg text-slate-400">
              Because we value privacy and speed, Newton+ runs locally. Here is how to get it running.
            </p>
          </div>

          <div className="space-y-6">
            {installSteps.map((step, idx) => (
              <div key={idx} className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-slate-800/50 border border-slate-700 p-6 rounded-2xl hover:bg-slate-800 transition-colors">
                
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-900/50">
                    <span className="font-bold text-lg">{idx + 1}</span>
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-bold mb-2 flex items-center justify-center md:justify-start gap-3">
                    {step.title}
                    {step.icon}
                  </h3>
                  <p className="text-slate-400 mb-4">{step.description}</p>
                  
                  {step.isDownload && (
                    <a href="/Newton_plus.zip" download="Newton_plus.zip" className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-2.5 rounded-lg font-bold hover:bg-indigo-50 transition-colors">
                      <Download className="w-4 h-4" />
                      {step.action}
                    </a>
                  )}

                  {step.alert && (
                    <div className="inline-block bg-amber-500/10 border border-amber-500/20 rounded-lg px-3 py-1 text-amber-500 text-xs font-bold uppercase tracking-wide">
                      {step.alert}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-slate-500 mb-6">
              Installation complete? Head over to your dashboard.
            </p>
            <a 
              href="https://my.newtonschool.co" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-indigo-400 font-bold hover:text-indigo-300 transition-colors text-lg"
            >
              Launch Newton School <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl text-slate-900">Newton<span className="text-indigo-600">+</span></span>
          </div>
          
          <div className="flex gap-8 text-sm font-medium text-slate-500">
            <a href="https://github.com/Jadu07" className="hover:text-indigo-600 transition-colors">GitHub</a>
            <a href="mailto:yashrajchouhan14@gmail.com" className="hover:text-indigo-600 transition-colors">Contact</a>
          </div>

          <div className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Newton+ Project.
          </div>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      <Hero />
      <Features />
      <Installation />
      <Footer />
    </div>
  );
};

export default App;