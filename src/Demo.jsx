export default function Demo() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Notice banner */}
      <div className="sticky top-0 z-50 border-b border-gray-200 bg-gray-50/95 backdrop-blur-sm px-8 py-3.5 flex items-center justify-center">
        <p className="text-sm text-gray-500">
          This is a <span className="font-semibold text-gray-700">walkthrough</span>, not the actual project —{' '}
          <span className="text-gray-400">just an overview of what the platform looks like.</span>
        </p>
      </div>
      <div className="max-w-5xl mx-auto px-8 py-16 space-y-20">

        {/* ── Overview ── */}
        <section className="pb-2">
          <p className="text-xs font-semibold tracking-widest uppercase text-blue-600 mb-3">Platform Overview</p>
          <h1 className="text-3xl font-bold text-gray-900 mb-3 leading-tight">Newton+</h1>
          <p className="text-base text-gray-500 leading-relaxed max-w-2xl">
            A three-part platform used by <span className="font-semibold text-gray-800">640+ students</span> — covering seamless installation, real-time usage tracking, analytics, and admin management.
          </p>
          <div className="flex flex-wrap gap-2 mt-5">
            {['Installation Website', 'Chrome Extension', 'CRM Dashboard'].map(label => (
              <span key={label} className="text-xs font-medium border border-gray-200 rounded-full px-4 py-1.5 text-gray-500">
                {label}
              </span>
            ))}
          </div>
        </section>

        {/* ── Installation Website ── */}
        <section className="space-y-5">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-blue-600 mb-2">01 — Installation Website</p>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Get the extension installed.</h2>
            <p className="text-base text-gray-500 leading-relaxed mb-3">
              A minimal website guiding students through downloading and installing Newton+ on Chrome or Brave. Includes an embedded tutorial video and a live download counter.
            </p>
            <a
              href="https://newtonplus.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-blue-600 hover:underline"
            >
              ↗ newtonplus.vercel.app
            </a>
          </div>

          <figure>
            <img src="/demo/installWeb1.png" alt="Installation website hero" className="w-full rounded-xl border border-gray-200" />
            <figcaption className="text-xs text-gray-400 mt-2">Hero & download section</figcaption>
          </figure>

          <figure>
            <img src="/demo/installWeb2.png" alt="Installation steps" className="w-full rounded-xl border border-gray-200" />
            <figcaption className="text-xs text-gray-400 mt-2">Step-by-step installation guide</figcaption>
          </figure>
        </section>

        <hr className="border-gray-100" />

        {/* ── Extension ── */}
        <section className="space-y-5">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-blue-600 mb-2">02 — Chrome Extension</p>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Attendance, right in your browser.</h2>
            <p className="text-base text-gray-500 leading-relaxed">
              A lightweight popup on the Newton School portal showing real-time attendance by subject, custom thresholds, and portal dark mode — all client-side, no data leaves your browser.
            </p>
          </div>

          {/* Mobile popup screenshots side by side */}
          <div className="flex gap-4">
            <figure className="flex-1">
              <img src="/demo/extensionHone.png" alt="Extension home" className="w-full rounded-xl border border-gray-200" />
              <figcaption className="text-xs text-gray-400 mt-2">Home</figcaption>
            </figure>
            <figure className="flex-1">
              <img src="/demo/extensioSettings.png" alt="Extension settings" className="w-full rounded-xl border border-gray-200" />
              <figcaption className="text-xs text-gray-400 mt-2">Settings</figcaption>
            </figure>
          </div>
        </section>

        <hr className="border-gray-100" />

        {/* ── CRM Dashboard ── */}
        <section className="space-y-6">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-blue-600 mb-2">03 — CRM Dashboard</p>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Admin control, secured by email.</h2>
            <p className="text-base text-gray-500 leading-relaxed mb-3">
              Gives admins a live view of users, analytics, feedback, and notifications. Access uses token-based email verification — every login triggers an approval email to the dashboard owner.
            </p>
            <a
              href="https://newtonplusdata.vercel.app/users"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-blue-600 hover:underline"
            >
              ↗ newtonplusdata.vercel.app/users
            </a>
          </div>

          {/* Login (desktop) + email verification (mobile) — same height row */}
          <div className="flex gap-6 items-stretch">
            <figure className="flex-1 min-w-0 flex flex-col">
              <div className="flex-1 rounded-xl border border-gray-200 overflow-hidden">
                <img src="/demo/login.png" alt="CRM login" className="w-full h-full object-cover object-top" />
              </div>
              <figcaption className="text-xs text-gray-400 mt-2">Login screen</figcaption>
            </figure>
            <figure className="w-44 flex-shrink-0 flex flex-col">
              <div className="flex-1 rounded-xl border border-gray-200 overflow-hidden">
                <img src="/demo/loginVerification.jpeg" alt="Verification email" className="w-full h-full object-cover object-top" />
              </div>
              <figcaption className="text-xs text-gray-400 mt-2">Verification email</figcaption>
            </figure>
          </div>

          {/* Verification steps */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-3">
            <p className="text-sm font-semibold text-gray-700 mb-4">How access verification works</p>
            {[
              'Admin enters credentials on the login page.',
              'A token-based email is dispatched to the dashboard owner.',
              'Owner approves or denies with one tap in the email.',
              'Dashboard access is granted only after approval.',
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          <figure>
            <img src="/demo/dashboardHome.png" alt="Dashboard home" className="w-full rounded-xl border border-gray-200" />
            <figcaption className="text-xs text-gray-400 mt-2">Dashboard home — live user metrics</figcaption>
          </figure>

          <figure>
            <img src="/demo/analytics.png" alt="Analytics" className="w-full rounded-xl border border-gray-200" />
            <figcaption className="text-xs text-gray-400 mt-2">Analytics — installs, DAU, and trends</figcaption>
          </figure>

          <figure>
            <img src="/demo/feedback.png" alt="Feedback" className="w-full rounded-xl border border-gray-200" />
            <figcaption className="text-xs text-gray-400 mt-2">Feedback — user submissions</figcaption>
          </figure>

          <figure>
            <img src="/demo/notifications.png" alt="Notifications" className="w-full rounded-xl border border-gray-200" />
            <figcaption className="text-xs text-gray-400 mt-2">Notifications — login approvals & alerts</figcaption>
          </figure>
        </section>

        {/* Footer */}
        <p className="text-center text-xs text-gray-400 pt-4">
          Newton+ · Internal demo · Screenshots from live production
        </p>

      </div>
    </div>
  );
}
