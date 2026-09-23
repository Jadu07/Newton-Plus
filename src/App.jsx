import React, { useState, useEffect } from 'react';
import { Download, CheckCircle, Settings, Menu, X, ChevronRight, Chrome, FolderOpen, Puzzle, Activity, Zap, TrendingUp, Paperclip } from 'lucide-react';

// --- Assets & Data ---

const SCREENSHOT_URL = "/screenshot.png";

const formatCount = (num) => {
  if (num >= 1000) {
    return (num / 1000).toFixed(2).replace(/\.?0+$/, '') + 'K';
  }
  return num.toString();
};

const features = [
  {
    title: "Fresh New UI",
    description: "Experience a completely redesigned interface that makes tracking attendance more intuitive than ever.",
    icon: <TrendingUp className="w-5 h-5" />
  },
  {
    title: "Portal Dark Mode",
    description: "Toggle dark mode directly on the Newton School portal for a consistent, eye-friendly experience.",
    icon: <Activity className="w-5 h-5" />
  },
  {
    title: "Enhanced Dark Popup",
    description: "Improved popup dark mode with highlighting fixes and better readability across all themes.",
    icon: <Zap className="w-5 h-5" />
  },
  {
    title: "Blazing Fast Logic",
    description: "Instant attendance updates with zero loading screens and no page refreshes for group management.",
    icon: <FolderOpen className="w-5 h-5" />
  }
];

const updateHighlights = [
  "Version 5.2 Available",
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
    icon: <Download className="w-5 h-5" />,
    action: "Download v5.2",
    isDownload: true
  },
  {
    title: "Open Extensions",
    description: (
      <span>
        Type <code className="text-[#2997ff] font-mono text-[13px] bg-[#252527] px-1.5 py-0.5 rounded-[8px]">chrome://extensions</code> in your address bar.
      </span>
    ),
    icon: <Chrome className="w-5 h-5" />
  },
  {
    title: "Developer Mode",
    description: "Flip the 'Developer mode' switch in the top right corner of the page.",
    icon: <Settings className="w-5 h-5" />,
    alert: "Required Step"
  },
  {
    title: "Load Unpacked",
    description: "Click 'Load Unpacked' and select the folder you extracted in step 1.",
    icon: <FolderOpen className="w-5 h-5" />
  }
];

// --- Components ---

const DownloadModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden z-10">
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#e0e0e0]">
          <div>
            <h3 className="text-[17px] font-semibold text-[#1d1d1f] flex items-center gap-2" style={{ letterSpacing: '-0.374px' }}>
              <CheckCircle className="w-5 h-5 text-[#34c759]" />
              Download Started
            </h3>
            <p className="text-[14px] text-[#7a7a7a] mt-1" style={{ letterSpacing: '-0.224px' }}>
              Watch this quick video to set up the extension correctly.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-[#f5f5f7] rounded-lg transition-colors text-[#7a7a7a] hover:text-[#1d1d1f] active:scale-95"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="bg-black">
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

        <div className="px-6 py-5 border-t border-[#e0e0e0] flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 text-[14px] text-[#333] hover:text-[#1d1d1f] font-semibold transition-colors active:scale-95"
          >
            Close
          </button>
          <a
            href="#install"
            onClick={onClose}
            className="px-5 py-2.5 bg-[#0066cc] hover:bg-[#0071e3] text-white text-[14px] font-semibold rounded-full transition-colors active:scale-95"
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
    <nav className="bg-black sticky top-0 z-50" style={{ height: '44px' }}>
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 h-full">
        <div className="flex justify-between items-center h-full">
          <a href="/" className="flex items-center">
            <img src="/logo.png" alt="Newton+" className="h-10" style={{ filter: 'invert(1)' }} />
          </a>

          <div className="hidden md:flex items-center gap-6">
            <a href="/#features" className="text-[12px] text-white/80 hover:text-white transition-colors" style={{ letterSpacing: '-0.12px' }}>Features</a>
            <a href="/#install" className="text-[12px] text-white/80 hover:text-white transition-colors" style={{ letterSpacing: '-0.12px' }}>How to Install</a>
            <a href="/#support" className="text-[12px] text-white/80 hover:text-white transition-colors" style={{ letterSpacing: '-0.12px' }}>Support</a>
            <a
              href="/newton_plus_ext_v5.2.1.zip"
              download="newton_plus_ext_v5.2.1.zip"
              onClick={onDownload}
              className="bg-[#0066cc] hover:bg-[#0071e3] text-white text-[12px] px-4 py-1.5 rounded-full transition-colors active:scale-95 ml-1"
              style={{ letterSpacing: '-0.12px' }}
            >
              Get Extension
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white/80 hover:text-white">
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black border-t border-white/10 px-4 py-5 space-y-4">
          <a href="/#features" className="block text-[14px] text-white/80 hover:text-white py-1" onClick={() => setIsOpen(false)}>Features</a>
          <a href="/#install" className="block text-[14px] text-white/80 hover:text-white py-1" onClick={() => setIsOpen(false)}>How to Install</a>
          <a href="/#support" className="block text-[14px] text-white/80 hover:text-white py-1" onClick={() => setIsOpen(false)}>Support</a>
          <a
            href="/newton_plus_ext_v5.2.1.zip"
            download="newton_plus_ext_v5.2.1.zip"
            onClick={onDownload}
            className="block text-center bg-[#0066cc] hover:bg-[#0071e3] text-white text-[14px] font-semibold px-5 py-2.5 rounded-full transition-colors active:scale-95"
          >
            Download v5.2
          </a>
        </div>
      )}
    </nav>
  );
};

const UpdateTicker = () => {
  const tickerItems = [...updateHighlights, ...updateHighlights];

  return (
    <div className="relative overflow-hidden bg-[#272729] text-white">
      <div className="flex items-center whitespace-nowrap py-2">
        <div className="ticker-scroll flex items-center gap-8">
          {tickerItems.map((item, idx) => (
            <div key={`${item}-${idx}`} className="flex items-center gap-2.5 text-[12px] text-white/60" style={{ letterSpacing: '-0.12px' }}>
              <span className="h-1 w-1 rounded-full bg-[#2997ff]"></span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Hero = ({ onDownload, downloadCount }) => {
  return (
    <section className="bg-white">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Text stack */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f5f5f7] border border-[#e0e0e0] mb-8">
              <span className="text-[12px] font-semibold text-[#0066cc]" style={{ letterSpacing: '0.5px' }}>v5.2 LIVE</span>
              <span className="text-[12px] text-[#7a7a7a]">·</span>
              <span className="text-[12px] text-[#7a7a7a]">Updated April 3, 2026</span>
            </div>

            <h1
              className="text-[48px] sm:text-[56px] lg:text-[64px] font-semibold text-[#1d1d1f] mb-5 leading-[1.05]"
              style={{ letterSpacing: '-0.5px' }}
            >
              Attendance,<br />
              Upgraded.
            </h1>

            <p
              className="text-[21px] text-[#333] mb-10 max-w-[420px] mx-auto lg:mx-0 leading-[1.5] font-light"
              style={{ letterSpacing: '0' }}
            >
              Stop guessing your percentage. Newton+ integrates with your dashboard for real-time insights, locally and securely.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="/newton_plus_ext_v5.2.1.zip"
                download="newton_plus_ext_v5.2.1.zip"
                onClick={onDownload}
                className="inline-flex items-center justify-center gap-2 bg-[#0066cc] hover:bg-[#0071e3] text-white text-[17px] px-7 py-3 rounded-full transition-colors active:scale-[0.97]"
                style={{ letterSpacing: '-0.374px' }}
              >
                <Download className="w-4 h-4" />
                Install Now
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 text-[#0066cc] text-[17px] px-7 py-3 rounded-full border-2 border-[#0066cc] hover:bg-[#0066cc] hover:text-white transition-all active:scale-[0.97]"
                style={{ letterSpacing: '-0.374px' }}
              >
                Learn more
              </a>
            </div>

            <p className="mt-8 text-[12px] text-[#7a7a7a] flex items-center justify-center lg:justify-start gap-1.5" style={{ letterSpacing: '-0.12px' }}>
              <Chrome className="w-3.5 h-3.5" /> Compatible with Chrome & Brave
            </p>
          </div>

          {/* Right — Screenshot */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden bg-[#f5f5f7] product-shadow">
              {/* Browser bar */}
              <div className="bg-[#f5f5f7] border-b border-[#e0e0e0] px-4 py-2.5 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                <div className="mx-auto bg-white px-4 py-1 rounded-lg text-[12px] text-[#7a7a7a] border border-[#e0e0e0] w-2/3 text-center flex items-center justify-center gap-1.5" style={{ letterSpacing: '-0.12px' }}>
                  <span className="w-1.5 h-1.5 bg-[#27c93f] rounded-full"></span>
                  my.newtonschool.co
                </div>
              </div>
              <div className="aspect-[4/3] bg-[#f5f5f7]">
                <img
                  src={SCREENSHOT_URL}
                  alt="Newton+ Interface"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Download counter */}
            <div className="absolute -bottom-5 -left-3 bg-white px-4 py-3 rounded-2xl border border-[#e0e0e0] hidden md:flex items-center gap-3 animate-float-gentle" style={{ boxShadow: 'rgba(0,0,0,0.08) 0 4px 20px' }}>
              <div className="w-9 h-9 bg-[#f5f5f7] rounded-lg flex items-center justify-center">
                <Download className="w-4 h-4 text-[#0066cc]" />
              </div>
              <div>
                <p className="text-[11px] text-[#7a7a7a]" style={{ letterSpacing: '0' }}>Total Downloads</p>
                <p className="text-[17px] font-semibold text-[#1d1d1f]" style={{ letterSpacing: '-0.374px' }}>{formatCount(downloadCount)}</p>
              </div>
            </div>
          </div>
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
    <section className="bg-[#f5f5f7] py-20 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-14">
          <h2
            className="text-[40px] sm:text-[48px] font-semibold text-[#1d1d1f] mb-4 leading-[1.1]"
            style={{ letterSpacing: '-0.3px' }}
          >
            Visual Excellence.
          </h2>
          <p className="text-[21px] text-[#333] max-w-[500px] mx-auto leading-[1.5] font-light">
            Take a closer look at what makes Newton+ the most powerful attendance tracker.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {items.map((item, idx) => (
            <div key={idx} className="group bg-white rounded-2xl overflow-hidden border border-[#e0e0e0] hover:border-[#d0d0d0] transition-colors">
              <div className="aspect-[4/5] bg-[#f5f5f7] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-[#1d1d1f] mb-1" style={{ letterSpacing: '-0.374px' }}>{item.title}</h3>
                <p className="text-[14px] text-[#333] leading-relaxed" style={{ letterSpacing: '-0.224px' }}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  return (
    <section id="features" className="bg-white py-20 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-14">
          <h2
            className="text-[40px] sm:text-[48px] font-semibold text-[#1d1d1f] mb-4 leading-[1.1]"
            style={{ letterSpacing: '-0.3px' }}
          >
            Built for the modern student.
          </h2>
          <p className="text-[21px] text-[#333] max-w-[500px] mx-auto leading-[1.5] font-light">
            We stripped away the complexity. Exactly what you need, nothing more.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, idx) => (
            <div key={idx} className="p-7 rounded-2xl bg-[#f5f5f7] border border-transparent hover:border-[#e0e0e0] hover:bg-white transition-all duration-300">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-5 text-[#0066cc] border border-[#e0e0e0]">
                {feature.icon}
              </div>
              <h3 className="text-[17px] font-semibold text-[#1d1d1f] mb-2" style={{ letterSpacing: '-0.374px' }}>{feature.title}</h3>
              <p className="text-[14px] text-[#333] leading-[1.6]" style={{ letterSpacing: '-0.224px' }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const VideoTutorial = ({ videoId }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full relative">
      <div className="rounded-2xl overflow-hidden product-shadow">
        <div className="relative aspect-video bg-black">
          {!isPlaying ? (
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 w-full h-full flex items-center justify-center cursor-pointer group"
            >
              <img
                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                alt="Video Tutorial"
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-85 transition-opacity duration-500"
              />

              {/* Play button */}
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/25 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-12 h-12 bg-[#0066cc] rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-0.5"></div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 text-left z-10">
                <span className="text-[12px] font-semibold text-[#2997ff] uppercase" style={{ letterSpacing: '0.8px' }}>Tutorial</span>
                <h3 className="text-[21px] font-semibold text-white mt-1" style={{ letterSpacing: '0.231px' }}>Installation Guide</h3>
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

const VideoSection = () => {
  return (
    <section className="bg-[#272729] py-20 lg:py-24">
      <div className="max-w-[980px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <span className="text-[12px] font-semibold text-[#2997ff] uppercase" style={{ letterSpacing: '0.8px' }}>See it in Action</span>
          <h2
            className="text-[40px] sm:text-[48px] font-semibold text-white mt-3 mb-4 leading-[1.1]"
            style={{ letterSpacing: '-0.3px' }}
          >
            Setup in 60 Seconds
          </h2>
          <p className="text-[21px] text-[#ccc] max-w-[480px] mx-auto leading-[1.5] font-light">
            No complex configurations. Just download, install, and start tracking.
          </p>
        </div>
        <VideoTutorial videoId="w4aSCk2-TGM" />
      </div>
    </section>
  );
};

const Installation = ({ onDownload }) => {
  return (
    <section id="install" className="bg-[#2a2a2c] py-20 lg:py-24 text-white">
      <div className="max-w-[980px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-14">
          <span className="text-[12px] font-semibold text-[#2997ff] uppercase" style={{ letterSpacing: '0.8px' }}>Manual Installation</span>
          <h2
            className="text-[40px] sm:text-[48px] font-semibold text-white mt-3 mb-4 leading-[1.1]"
            style={{ letterSpacing: '-0.3px' }}
          >
            Setup in 30 Seconds
          </h2>
          <p className="text-[21px] text-[#ccc] max-w-[480px] mx-auto leading-[1.5] font-light">
            Because we value privacy and speed, Newton+ runs locally.
          </p>
        </div>

        <div className="max-w-[640px] mx-auto space-y-5">
          {installSteps.map((step, idx) => (
            <div key={idx} className="flex gap-5 items-start group">
              {/* Step number */}
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#252527] border border-white/10 flex items-center justify-center text-[13px] font-semibold text-white/50 group-hover:bg-[#0066cc] group-hover:text-white group-hover:border-[#0066cc] transition-all duration-200">
                {idx + 1}
              </div>

              {/* Content */}
              <div className="flex-1 pb-6 border-b border-white/[0.06] last:border-b-0">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[#2997ff]">{step.icon}</span>
                  <h3 className="text-[17px] font-semibold text-white" style={{ letterSpacing: '-0.374px' }}>{step.title}</h3>
                </div>
                <p className="text-[14px] text-[#ccc] mb-3 leading-[1.6]" style={{ letterSpacing: '-0.224px' }}>{step.description}</p>

                {step.isDownload && (
                  <a
                    href="/newton_plus_ext_v5.2.1.zip"
                    download="newton_plus_ext_v5.2.1.zip"
                    onClick={onDownload}
                    className="inline-flex items-center gap-2 bg-[#0066cc] hover:bg-[#0071e3] text-white text-[14px] font-semibold px-5 py-2 rounded-full transition-colors active:scale-[0.97]"
                    style={{ letterSpacing: '-0.224px' }}
                  >
                    <Download className="w-3.5 h-3.5" />
                    {step.action}
                  </a>
                )}

                {step.alert && (
                  <span className="inline-block bg-[#ff9f0a]/10 border border-[#ff9f0a]/20 rounded-md px-2.5 py-1 text-[#ff9f0a] text-[12px] font-semibold uppercase" style={{ letterSpacing: '0.5px' }}>
                    {step.alert}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-[14px] text-[#ccc] mb-5" style={{ letterSpacing: '-0.224px' }}>
            Installation complete? Head over to your dashboard.
          </p>
          <a
            href="https://my.newtonschool.co"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-[#2997ff] text-[17px] hover:text-white transition-colors active:scale-[0.97]"
            style={{ letterSpacing: '-0.374px' }}
          >
            Launch Newton School <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

const Support = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [screenshots, setScreenshots] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [status, setStatus] = useState(null);
  const [emailError, setEmailError] = useState('');
  const [rateLimitError, setRateLimitError] = useState('');
  const [uploadError, setUploadError] = useState('');

  const MAX_FEEDBACKS = 2;
  const COOLDOWN_MS = 2 * 60 * 60 * 1000;

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleScreenshot = (files) => {
    setUploadError('');

    const validFiles = Array.from(files || []).filter((file) => file.type.startsWith('image/') && file.size <= 10 * 1024 * 1024);
    if (validFiles.length !== Array.from(files || []).length) {
      setUploadError('Only image files up to 10 MB each can be attached.');
    }
    if (!validFiles.length) return;

    setScreenshots((currentFiles) => [...currentFiles, ...validFiles]);
    setUploadProgress(0);
  };

  const uploadScreenshot = async () => {
    if (!screenshots.length) return [];

    const uploadedUrls = [];
    for (const [index, screenshot] of screenshots.entries()) {
      const formData = new FormData();
      formData.append('file', screenshot);

      const screenshotUrl = await new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open('POST', '/api/upload');

        request.upload.onprogress = (event) => {
          if (event.lengthComputable) {
            const fileProgress = (event.loaded / event.total) * 100;
            setUploadProgress(Math.round(((index * 100) + fileProgress) / screenshots.length));
          }
        };

        request.onload = () => {
          if (request.status < 200 || request.status >= 300) {
            reject(new Error('Image upload failed'));
            return;
          }
          const url = JSON.parse(request.responseText).url;
          if (!url?.startsWith('http')) {
            reject(new Error('Image upload failed'));
            return;
          }
          resolve(url);
        };

        request.onerror = () => reject(new Error('Image upload failed'));
        request.send(formData);
      });
      uploadedUrls.push(screenshotUrl);
    }
    setUploadProgress(100);
    return uploadedUrls;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailError('');
    setRateLimitError('');

    const rateLimitData = JSON.parse(localStorage.getItem('feedback_rate_limit') || '{"count": 0, "firstSent": 0}');
    const now = Date.now();

    if (rateLimitData.count >= MAX_FEEDBACKS && now - rateLimitData.firstSent < COOLDOWN_MS) {
      const remainingMs = COOLDOWN_MS - (now - rateLimitData.firstSent);
      const remainingMinutes = Math.ceil(remainingMs / (60 * 1000));
      const hours = Math.floor(remainingMinutes / 60);
      const minutes = remainingMinutes % 60;

      let timeStr = "";
      if (hours > 0) timeStr += `${hours} hour${hours > 1 ? 's' : ''} `;
      if (minutes > 0) timeStr += `${minutes} minute${minutes > 1 ? 's' : ''}`;

      setRateLimitError(`Please try again in ${timeStr.trim()}.`);
      return;
    }

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    setStatus('loading');

    try {
      const screenshotUrls = await uploadScreenshot();
      const response = await fetch('https://newtonplusdata.vercel.app/api/feedbacks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          feedback: screenshotUrls.length ? `${message}\n\nImages:\n${screenshotUrls.join('\n')}` : message,
        }),
      });

      if (response.ok) {
        let rateLimitData = JSON.parse(localStorage.getItem('feedback_rate_limit') || '{"count": 0, "firstSent": 0}');
        const now = Date.now();

        if (now - rateLimitData.firstSent > COOLDOWN_MS) {
          rateLimitData = { count: 1, firstSent: now };
        } else {
          rateLimitData.count += 1;
        }
        localStorage.setItem('feedback_rate_limit', JSON.stringify(rateLimitData));

        setStatus('success');
        setEmail('');
        setMessage('');
        setScreenshots([]);
        setUploadProgress(0);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error sending feedback:', error);
      setUploadError(screenshots.length ? 'We could not upload the images. Please try again or remove them and send the message without attachments.' : '');
      setStatus('error');
    }
  };

  return (
    <section id="support" className="bg-[#f5f5f7] py-20 lg:py-24">
      <div className="max-w-[980px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <span className="text-[12px] font-semibold text-[#0066cc] uppercase" style={{ letterSpacing: '0.8px' }}>Support</span>
          <h2
            className="text-[40px] sm:text-[48px] font-semibold text-[#1d1d1f] mt-3 mb-4 leading-[1.1]"
            style={{ letterSpacing: '-0.3px' }}
          >
            We're here to help.
          </h2>
          <p className="text-[21px] text-[#333] max-w-[440px] mx-auto leading-[1.5] font-light">
            Have questions, feedback, or found a bug? We'd love to hear from you.
          </p>
        </div>

        <div className="max-w-[520px] mx-auto bg-white rounded-2xl p-8 border border-[#e0e0e0]">
          {status === 'success' ? (
            <div className="text-center py-10">
              <div className="w-14 h-14 bg-[#34c759]/10 rounded-full flex items-center justify-center mx-auto mb-5">
                <CheckCircle className="w-7 h-7 text-[#34c759]" />
              </div>
              <h3 className="text-[21px] font-semibold text-[#1d1d1f] mb-2" style={{ letterSpacing: '0.231px' }}>Message Sent</h3>
              <p className="text-[14px] text-[#333] mb-8" style={{ letterSpacing: '-0.224px' }}>Thanks for reaching out. We'll get back to you shortly.</p>
              <button
                onClick={() => setStatus(null)}
                className="text-[#0066cc] text-[14px] font-semibold hover:text-[#0071e3] flex items-center justify-center gap-1 mx-auto active:scale-[0.97]"
              >
                Send another message <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="support-form space-y-5">
              <div>
                <label htmlFor="email" className="block text-[14px] font-semibold text-[#1d1d1f] mb-2" style={{ letterSpacing: '-0.224px' }}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (emailError) setEmailError('');
                  }}
                  className={`w-full px-4 py-3 rounded-xl bg-[#f5f5f7] text-[17px] text-[#1d1d1f] border focus:bg-white focus:ring-0 focus:border-[#e0e0e0] outline-none placeholder:text-[#7a7a7a] ${emailError ? 'border-[#ff3b30]' : 'border-[#e0e0e0]'}`}
                  style={{ letterSpacing: '-0.374px' }}
                  placeholder="you@example.com"
                />
                {emailError && (
                  <p className="mt-2 text-[12px] text-[#ff3b30] font-medium">{emailError}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-[14px] font-semibold text-[#1d1d1f] mb-2" style={{ letterSpacing: '-0.224px' }}>
                  Message
                </label>
                <div className="overflow-hidden rounded-xl border border-[#e0e0e0] bg-[#f5f5f7] focus-within:bg-white">
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 bg-transparent text-[17px] text-[#1d1d1f] focus:ring-0 outline-none resize-none placeholder:text-[#7a7a7a]"
                    style={{ letterSpacing: '-0.374px' }}
                    placeholder="How can we help?"
                  ></textarea>
                  <div className="flex items-center gap-2 px-3 py-2 border-t border-[#e0e0e0]">
                    <label htmlFor="screenshot" className="inline-flex items-center gap-1.5 text-[12px] text-[#7a7a7a] hover:text-[#0066cc] cursor-pointer transition-colors" title="Attach images">
                      <Paperclip className="w-4 h-4" />
                      {screenshots.length === 0 && <span>Add Attachment</span>}
                      <input
                        id="screenshot"
                        type="file"
                        multiple
                        accept="image/png,image/jpeg,image/webp,image/gif"
                        className="sr-only"
                        onChange={(e) => {
                          handleScreenshot(e.target.files);
                          e.target.value = '';
                        }}
                      />
                    </label>
                    {screenshots.length > 0 && (
                      <span className="min-w-0 flex-1 truncate text-[12px] text-[#555]" title={screenshots.map((file) => file.name).join(', ')}>
                        {screenshots.length === 1 ? screenshots[0].name : `${screenshots.length} images attached`}
                      </span>
                    )}
                    {status === 'loading' && screenshots.length > 0 && (
                      <div className="w-24 h-1 overflow-hidden rounded-full bg-[#dfe7ef]">
                        <div className="h-full rounded-full bg-[#0066cc] transition-[width] duration-200" style={{ width: `${uploadProgress}%` }}></div>
                      </div>
                    )}
                    {screenshots.length > 0 && status !== 'loading' && (
                      <button type="button" onClick={() => setScreenshots([])} aria-label="Remove images" className="text-[#7a7a7a] hover:text-[#ff3b30] text-[18px] leading-none">
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
                {uploadError && <p className="mt-1.5 text-[12px] text-[#ff3b30] font-medium">{uploadError}</p>}
              </div>

              {rateLimitError && (
                <div className="p-3 bg-[#ff9f0a]/5 text-[#ff9f0a] text-[12px] font-medium rounded-lg border border-[#ff9f0a]/10 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff9f0a]"></div>
                  {rateLimitError}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-[#0066cc] hover:bg-[#0071e3] text-white text-[17px] font-semibold py-3.5 rounded-full transition-colors active:scale-[0.97] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                style={{ letterSpacing: '-0.374px' }}
              >
                {status === 'loading' ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    {screenshots.length ? 'Uploading & sending...' : 'Sending...'}
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

const Footer = () => {
  return (
    <footer className="bg-[#f5f5f7] border-t border-[#e0e0e0] pt-10 pb-8">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-3">
              <img src="/logo.png" alt="Newton+" className="h-11" />
            </div>
            <p className="text-[14px] text-[#333] leading-[1.6] max-w-[320px]" style={{ letterSpacing: '-0.224px' }}>
              Simplifying attendance with real-time tracking. Crafted with care for Newton School students.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[14px] font-semibold text-[#1d1d1f] mb-3" style={{ letterSpacing: '-0.224px' }}>Product</h4>
            <ul>
              <li><a href="/#features" className="text-[14px] text-[#333] hover:text-[#0066cc] transition-colors leading-[2.4]" style={{ letterSpacing: '-0.224px' }}>Features</a></li>
              <li><a href="/#install" className="text-[14px] text-[#333] hover:text-[#0066cc] transition-colors leading-[2.4]" style={{ letterSpacing: '-0.224px' }}>Installation</a></li>
              <li><a href="/" className="text-[14px] text-[#333] hover:text-[#0066cc] transition-colors leading-[2.4]" style={{ letterSpacing: '-0.224px' }}>Changelog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[14px] font-semibold text-[#1d1d1f] mb-3" style={{ letterSpacing: '-0.224px' }}>Support</h4>
            <ul>
              <li><a href="/support" className="text-[14px] text-[#333] hover:text-[#0066cc] transition-colors leading-[2.4]" style={{ letterSpacing: '-0.224px' }}>Help Center</a></li>
              <li><a href="mailto:support@example.com" className="text-[14px] text-[#333] hover:text-[#0066cc] transition-colors leading-[2.4]" style={{ letterSpacing: '-0.224px' }}>Contact Us</a></li>
              <li><a href="/" className="text-[14px] text-[#333] hover:text-[#0066cc] transition-colors leading-[2.4]" style={{ letterSpacing: '-0.224px' }}>Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Legal */}
        <div className="pt-5 border-t border-[#e0e0e0] flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-[12px] text-[#7a7a7a]" style={{ letterSpacing: '-0.12px' }}>
            © {new Date().getFullYear()} Newton+ Project. All rights reserved.
          </p>
          <div className="flex gap-1.5 items-center">
            <div className="w-1.5 h-1.5 rounded-full bg-[#34c759]"></div>
            <span className="text-[12px] text-[#7a7a7a]" style={{ letterSpacing: '-0.12px' }}>All Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [downloadCount, setDownloadCount] = useState(1230);

  useEffect(() => {
    const fetchDownloads = async () => {
      try {
        const response = await fetch('/api/downloads');
        const data = await response.json();
        if (data.count) {
          setDownloadCount(data.count);
        }
      } catch (err) {
        console.error('Failed to fetch download count:', err);
      }
    };
    fetchDownloads();
  }, []);

  const handleDownload = async () => {
    setShowDownloadModal(true);
    try {
      const response = await fetch('/api/downloads', {
        method: 'POST'
      });
      const data = await response.json();
      if (data.count) {
        setDownloadCount(data.count);
      }
    } catch (err) {
      console.error('Failed to increment download count:', err);
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#1d1d1f]">
      <DownloadModal
        isOpen={showDownloadModal}
        onClose={() => setShowDownloadModal(false)}
      />
      <Navbar onDownload={handleDownload} />
      <UpdateTicker />
      <Hero onDownload={handleDownload} downloadCount={downloadCount} />
      <Showcase />
      <VideoSection />
      <Features />
      <Installation onDownload={handleDownload} />
      <Support />
      <Footer />
    </div>
  );
};

export const SupportPage = () => (
  <div className="min-h-screen bg-white text-[#1d1d1f]">
    <Navbar onDownload={() => {}} />
    <Support />
    <Footer />
  </div>
);

export default App;