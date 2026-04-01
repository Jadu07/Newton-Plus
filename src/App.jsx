import React, { useState } from 'react';
import { Download, CheckCircle, Settings, Menu, X, ChevronRight, Chrome, FolderOpen, Puzzle, Activity, Zap, TrendingUp } from 'lucide-react';

// --- Assets & Data ---

// NOTE: Replace this URL with the actual path to your screenshot file after moving it to your public folder.
// Example: "/Screenshot 2025-11-27 at 8.00.13 PM.png"
const SCREENSHOT_URL = "/screenshot.png";

const features = [
  {
    title: "Fresh New UI",
    description: "Experience a completely redesigned, vibrant interface that makes tracking attendance more intuitive than ever.",
    icon: <TrendingUp className="w-6 h-6 text-indigo-600" />
  },
  {
    title: "Portal Dark Mode",
    description: "Toggle dark mode directly on the Newton School portal for a consistent, eye-friendly experience.",
    icon: <Activity className="w-6 h-6 text-indigo-600" />
  },
  {
    title: "Enhanced Dark Popup",
    description: "Improved popup dark mode with highlighting fixes and better readability across all themes.",
    icon: <Zap className="w-6 h-6 text-indigo-600" />
  },
  {
    title: "Blazing Fast Logic",
    description: "Instant attendance updates with zero loading screens and no page refreshes for group management.",
    icon: <FolderOpen className="w-6 h-6 text-indigo-600" />
  }
];

const updateHighlights = [
  "Version 5.1 Available",
  "Faster attendance loading",
  "No reloading when updating attendance with +",
  "No reloading when creating subject groups",
  "Fresh UI with skeleton loading",
  "Added attendance thresholds for each subject group",
  "New website dark mode",
  "New beautiful instructions banner"
];

const installSteps = [
  {
    title: "Download & Unzip",
    description: "Download the ZIP file and extract it to a folder. Don't skip the extraction step!",
    icon: <Download className="w-6 h-6 text-white" />,
    action: "Download v5.1",
    isDownload: true
  },
  {
    title: "Open Extensions",
    description: (
      <span>
        Type <a href="chrome://extensions" className="text-indigo-300 hover:text-indigo-200 font-mono bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800 transition-colors">chrome://extensions</a> in your address bar.
      </span>
    ),
    icon: <Chrome className="w-6 h-6 text-white" />
  },
  {
    title: "Developer Mode",
    description: "Flip the 'Developer mode' switch in the top right corner of the page.",
    icon: <Settings className="w-6 h-6 text-white" />,
    alert: "Required Step"
  },
  {
    title: "Load Unpacked",
    description: "Click 'Load Unpacked' and select the folder you extracted in step 1.",
    icon: <FolderOpen className="w-6 h-6 text-white" />
  }
];

const DownloadModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300 z-10">
        <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50/70">
          <div>
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              Download Started!
            </h3>
            <p className="text-slate-500 text-sm mt-1">
              Please watch this quick video to set up the extension correctly.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-0 bg-black">
          <div className="aspect-video w-full">
            <iframe
              src="https://www.youtube.com/embed/w4aSCk2-TGM?autoplay=1&rel=0&modestbranding=1&mute=1"
              title="Installation Tutorial"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="p-6 bg-slate-50 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-slate-600 hover:text-slate-900 font-medium transition-colors"
          >
            Close
          </button>
          <a
            href="#install"
            onClick={onClose}
            className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors shadow-lg shadow-indigo-200"
          >
            View Steps Below
          </a>
        </div>
      </div>
    </div>
  );
};

const Navbar = ({ onDownload }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-xl sticky top-0 z-50 border-b border-indigo-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-indigo-500 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:shadow-indigo-500/50 transition-all duration-300">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl text-slate-900 tracking-tight group-hover:text-indigo-700 transition-colors">Newton<span className="text-indigo-600">+</span></span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-600 hover:text-indigo-700 transition-colors font-medium text-sm">Features</a>
            <a href="#install" className="text-slate-600 hover:text-indigo-700 transition-colors font-medium text-sm">How to Install</a>
            <a href="#support" className="text-slate-600 hover:text-indigo-700 transition-colors font-medium text-sm">Support</a>
            <a href="/newton_plus_ext_v5.1.zip" download="newton_plus_ext_v5.1.zip" onClick={onDownload} className="bg-indigo-600 text-white px-5 py-2 rounded-full font-medium hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 hover:shadow-xl text-sm flex items-center gap-2">
              <Download className="w-4 h-4" />
              Get Extension
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-indigo-700">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 p-4 space-y-4 shadow-xl">
          <a href="#features" className="block text-slate-600 font-medium" onClick={() => setIsOpen(false)}>Features</a>
          <a href="#install" className="block text-slate-600 font-medium" onClick={() => setIsOpen(false)}>How to Install</a>
          <a href="#support" className="block text-slate-600 font-medium" onClick={() => setIsOpen(false)}>Support</a>
          <a href="/newton_plus_ext_v5.1.zip" download="newton_plus_ext_v5.1.zip" onClick={onDownload} className="w-full bg-indigo-600 text-white px-5 py-3 rounded-xl font-medium shadow-lg shadow-indigo-200">
            Download v5.1
          </a>
        </div>
      )}
    </nav>
  );
};

const UpdateTicker = () => {
  const tickerItems = [...updateHighlights, ...updateHighlights];

  return (
    <div className="relative overflow-hidden border-b border-indigo-100/60 bg-indigo-600 text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-700/40 via-transparent to-indigo-500/40"></div>
      <div className="relative flex items-center gap-4 whitespace-nowrap py-2.5">
        <div className="ticker-scroll flex items-center gap-6">
          {tickerItems.map((item, idx) => (
            <div key={`${item}-${idx}`} className="flex items-center gap-3 text-sm font-semibold tracking-wide">
              <span className="h-1.5 w-1.5 rounded-full bg-white/80"></span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Hero = ({ onDownload }) => {
  return (
    <div className="relative overflow-hidden pt-16 pb-24 lg:pt-32 bg-aurora">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-15%] left-[-10%] w-[520px] h-[520px] bg-indigo-200/30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-15%] right-[-10%] w-[520px] h-[520px] bg-indigo-200/30 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-3 px-1 py-1 pr-4 rounded-full bg-white/80 border border-indigo-100 shadow-sm mb-8">
              <div className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider border border-indigo-100 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                v5.1 Live
              </div>
              <span className="text-sm font-medium text-slate-500">
                Last updated April 2, 2026
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 leading-[1.1] font-display">
              Attendance, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-600">Upgrade.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Stop guessing your percentage. Newton+ integrates seamlessly with your dashboard to give you real-time insights, locally and securely.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="/newton_plus_ext_v5.1.zip" download="newton_plus_ext_v5.1.zip" onClick={onDownload} className="flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-indigo-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-lg hover:shadow-indigo-500/30 hover:scale-[1.02] transition-all duration-200">
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
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-indigo-500 rounded-2xl blur opacity-30"></div>
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
              <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 animate-float-slow hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                    <Download className="w-7 h-7 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Total Downloads</p>
                    <p className="text-base font-bold text-slate-900">250+</p>
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
    <section id="features" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight font-display">Built for the <span className="text-indigo-600">modern student.</span></h2>
          <p className="text-slate-600 text-xl max-w-2xl mx-auto">
            We stripped away the complexity. Newton+ gives you exactly what you need to track your progress, without the fluff.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="group p-8 rounded-3xl bg-slate-50 hover:bg-white border border-transparent hover:border-indigo-100 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm border border-slate-100 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 relative z-10">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 relative z-10">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed relative z-10">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Installation = ({ onDownload }) => {
  return (
    <section id="install" className="py-32 bg-slate-900 text-white overflow-hidden relative">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-indigo-900/20 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-indigo-900/20 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-indigo-300 font-bold tracking-wider uppercase text-xs border border-indigo-400/30 px-3 py-1 rounded-full bg-indigo-400/10">Manual Installation</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mt-6 mb-6 font-display">Setup in 30 Seconds</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Because we value privacy and speed, Newton+ runs locally. Here is how to get it running.
            </p>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-800 before:to-transparent">
            {installSteps.map((step, idx) => (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">

                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-900 bg-slate-800 group-hover:bg-indigo-600 group-hover:scale-110 transition-all shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-xl z-10">
                  <span className="text-xs font-bold text-white">{idx + 1}</span>
                </div>

                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl hover:bg-slate-800 hover:border-indigo-500/30 transition-all duration-300 shadow-lg">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-2 bg-slate-800 rounded-lg text-indigo-300 group-hover:text-white group-hover:bg-indigo-600 transition-colors">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-slate-400 leading-relaxed text-sm mb-4">{step.description}</p>

                  {step.isDownload && (
                    <a href="/newton_plus_ext_v5.1.zip" download="newton_plus_ext_v5.1.zip" onClick={onDownload} className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-2.5 rounded-lg font-bold hover:bg-indigo-50 transition-colors shadow-lg shadow-white/10">
                      <Download className="w-4 h-4" />
                      {step.action}
                    </a>
                  )}

                  {step.alert && (
                    <div className="inline-block bg-amber-500/10 border border-amber-500/20 rounded-md px-2.5 py-1 text-amber-500 text-xs font-bold uppercase tracking-wide">
                      {step.alert}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <p className="text-slate-500 mb-6 font-medium">
              Installation complete? Head over to your dashboard.
            </p>
            <a
              href="https://my.newtonschool.co"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-white font-bold bg-indigo-600 px-8 py-4 rounded-xl hover:bg-indigo-700 hover:scale-105 transition-all shadow-lg shadow-indigo-600/25"
            >
              Launch Newton School <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const VideoTutorial = ({ videoId }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full relative group perspective-1000">
      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-indigo-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>

      <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
        {/* Browser Header */}
        <div className="bg-slate-100 border-b border-slate-200 px-4 py-3 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-amber-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <div className="mx-auto bg-white px-4 py-1.5 rounded-md text-xs text-slate-400 shadow-sm border border-slate-200 w-1/2 text-center flex items-center justify-center gap-2 font-mono">
            <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span> how-to-install.mp4
          </div>
        </div>

        {/* Video Container */}
        <div className="relative aspect-video bg-slate-900">
          {!isPlaying ? (
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 w-full h-full flex items-center justify-center bg-slate-900/50 hover:bg-slate-900/40 transition-all cursor-pointer group/btn"
            >
              <img
                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                alt="Video Tutorial"
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover/btn:opacity-80 transition-opacity duration-500"
              />

              {/* Play Button */}
              <div className="relative">
                <div className="absolute inset-0 bg-indigo-500 rounded-full animate-ping opacity-20"></div>
                <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-2xl group-hover/btn:scale-110 transition-transform duration-300 relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[22px] border-l-white border-b-[12px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 left-8 text-left">
                <div className="inline-block px-3 py-1 bg-indigo-600/90 backdrop-blur-sm rounded-lg text-white text-xs font-bold uppercase tracking-wider mb-2 shadow-lg">
                  Tutorial
                </div>
                <h3 className="text-white font-bold text-2xl shadow-black drop-shadow-lg">Installation Guide</h3>
              </div>
            </button>
          ) : (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0`}
              title="Installation Tutorial"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-2xl text-white tracking-tight">Newton<span className="text-indigo-400">+</span></span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
              Simplifying attendance with real-time tracking since. Crafted with ❤️ for the Newton School Students.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-slate-800 hover:text-indigo-300 transition-all border border-slate-800 hover:border-indigo-500/30">
                <Chrome className="w-5 h-5" />
              </a>
              {/* Add more social icons here if needed */}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Product</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#features" className="hover:text-indigo-300 transition-colors">Features</a></li>
              <li><a href="#install" className="hover:text-indigo-300 transition-colors">Installation</a></li>
              <li><a href="#" className="hover:text-indigo-300 transition-colors">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Support</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#support" className="hover:text-indigo-300 transition-colors">Help Center</a></li>
              <li><a href="mailto:support@example.com" className="hover:text-indigo-300 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-indigo-300 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Newton+ Project. All rights reserved.
          </p>
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 mt-1"></div>
            <span className="text-xs text-slate-400">All Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const VideoSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Mesh */}
      <div className="absolute inset-0 bg-slate-50">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white via-transparent to-white"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Activity className="w-3 h-3" />
            See it in Action
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight font-display">
            Setup in <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-600">60 Seconds</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            No complex configurations. Just download, install, and start tracking your attendance instantly.
          </p>
        </div>
        <VideoTutorial videoId="w4aSCk2-TGM" />
      </div>
    </section>
  );
};

const Support = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null); // 'loading', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://newtonplusdata.vercel.app/api/feedbacks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, feedback: message }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error sending feedback:', error);
      setStatus('error');
    }
  };

  return (
    <section id="support" className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Decor blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Activity className="w-3 h-3" />
            Support
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 font-display">We're here to help.</h2>
          <p className="text-slate-600 text-lg">
            Have questions, feedback, or found a bug? We'd love to hear from you.
          </p>
        </div>

        <div className="max-w-xl mx-auto bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-2xl shadow-slate-200/50">
          {status === 'success' ? (
            <div className="text-center py-12 animate-in fade-in zoom-in duration-300">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
              <p className="text-slate-600 mb-8">Thanks for reaching out. We'll get back to you shortly.</p>
              <button
                onClick={() => setStatus(null)}
                className="text-indigo-600 font-bold hover:text-indigo-700 flex items-center justify-center gap-2 mx-auto"
              >
                Send another message <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2 ml-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-indigo-500 focus:bg-white focus:ring-0 outline-none transition-all font-medium placeholder:text-slate-400"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2 ml-1">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-indigo-500 focus:bg-white focus:ring-0 outline-none transition-all resize-none font-medium placeholder:text-slate-400"
                  placeholder="How can we help?"
                ></textarea>
              </div>

              {status === 'error' && (
                <div className="p-4 bg-red-50 text-red-600 text-sm font-medium rounded-xl border border-red-100 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  Failed to send message. Please try again.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-gradient-to-r from-indigo-500 to-indigo-500 text-white font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-indigo-500/30 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-4"
              >
                {status === 'loading' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

const Showcase = () => {
  const items = [
    {
      title: "Vibrant New Interface",
      description: "A complete visual overhaul designed for clarity and a premium feel.",
      image: "/newui.png"
    },
    {
      title: "Custom Thresholds",
      description: "Set your own attendance targets with the new intuitive slider in settings.",
      image: "/threshhold.png"
    },
    {
      title: "Portal Dark Mode",
      description: "Seamlessly integrates a professional dark theme across the entire Newton School portal.",
      image: "/portaldarkmode.png"
    }
  ];

  return (
    <section id="showcase" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 font-display">Visual Excellence.</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Take a closer look at the features that make Newton+ the most powerful attendance tracker for students.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="group relative rounded-3xl overflow-hidden shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="aspect-[4/5] bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-200 text-sm leading-relaxed opacity-90">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const App = () => {
  const [showDownloadModal, setShowDownloadModal] = useState(false);

  const handleDownload = () => {
    setShowDownloadModal(true);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-indigo-100 selection:text-slate-900">
      <DownloadModal
        isOpen={showDownloadModal}
        onClose={() => setShowDownloadModal(false)}
      />
      <Navbar onDownload={handleDownload} />
      <UpdateTicker />
      <Hero onDownload={handleDownload} />
      <Showcase />
      <VideoSection />
      <Features />
      <Installation onDownload={handleDownload} />
      <Support />
      <Footer />
    </div>
  );
};

export default App;