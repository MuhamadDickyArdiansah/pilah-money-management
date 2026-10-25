"use client";

import { useState } from "react";

import { Lock, AtSign, Eye, EyeOff, LogIn } from "lucide-react";

export default function LoginModal() {
  const [showLoginPassword, setShowLoginPassword] = useState(false);

  return (
    <div className="space-y-5">
      <div className="space-y-1">
        <h2 className="text-xl font-bold text-slate-900">
          Selamat Datang Kembali
        </h2>
        <p className="text-[13px] md:text-xs text-slate-500">
          Masuk ke akun Pilah untuk mengelola kas dan tagihan.
        </p>
      </div>

      {/* Social SSO Buttons */}
      <div className="grid grid-cols-2 gap-3 pt-1">
        <button
          className="min-h-11 min-w-11 md:min-h-0 md:min-w-0 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 text-[13px] md:text-xs font-semibold transition-colors focus:ring-2 focus:ring-slate-200 outline-none"
          type="button"
        >
          <svg className="w-5 h-5 md:w-4 md:h-4" viewBox="0 0 24 24">
            <path
              d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
              fill="#4285F4"
            />
            <path
              d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"
              fill="#34A853"
            />
            <path
              d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.14-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.02 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
              fill="#FBBC05"
            />
            <path
              d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.93 6.72-4.93z"
              fill="#EA4335"
            />
          </svg>
          <span>Google</span>
        </button>
        <button
          className="min-h-11 min-w-11 md:min-h-0 md:min-w-0 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 text-[13px] md:text-xs font-semibold transition-colors focus:ring-2 focus:ring-slate-200 outline-none"
          type="button"
        >
          <svg
            className="w-5 h-5 md:w-4 md:h-4 fill-current text-slate-900"
            viewBox="0 0 24 24"
          >
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 0.93-2.85-.9.04-1.99.6-2.61 1.34-.55.63-1.03 1.68-.9 2.7.99.08 2.01-.5 2.58-1.19z" />
          </svg>
          <span>Apple</span>
        </button>
      </div>

      <div className="relative flex items-center justify-center my-4">
        <div className="border-t border-slate-200 w-full"></div>
        <span className="bg-white px-3 text-[13px] md:text-xs text-slate-400 font-medium absolute">
          atau lewat email
        </span>
      </div>

      {/* Login Form */}
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label
            className="block text-[13px] md:text-xs font-semibold text-slate-700 mb-1.5"
            htmlFor="login-identifier"
          >
            Email / WhatsApp
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <AtSign className="w-5 h-5 md:w-4 md:h-4" />
            </div>
            <input
              className="min-h-11 text-base md:text-sm w-full pl-9 pr-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all"
              id="login-identifier"
              placeholder="nama@email.com atau 0812..."
              type="text"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label
              className="block text-[13px] md:text-xs font-semibold text-slate-700"
              htmlFor="login-password"
            >
              Kata Sandi
            </label>
            <a
              className="text-[13px] md:text-xs text-sky-600 hover:text-sky-700 font-semibold"
              href="#"
            >
              Lupa Kata Sandi?
            </a>
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Lock className="w-5 h-5 md:w-4 md:h-4" />
            </div>
            <input
              className="min-h-11 text-base md:text-sm w-full pl-9 pr-10 py-2.5 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all"
              id="login-password"
              placeholder="••••••••"
              type={showLoginPassword ? "text" : "password"}
            />
            <button
              className="min-h-11 min-w-11 md:min-h-0 md:min-w-0 absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
              onClick={() => setShowLoginPassword(!showLoginPassword)}
              type="button"
            >
              {showLoginPassword ? (
                <EyeOff className="w-5 h-5 md:w-4 md:h-4" />
              ) : (
                <Eye className="w-5 h-5 md:w-4 md:h-4" />
              )}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between pt-1">
          <label className="min-h-11 flex items-center gap-2 cursor-pointer select-none">
            <input
              defaultChecked
              className="w-5 h-5 md:w-4 md:h-4 rounded border-slate-300 text-sky-500 focus:ring-sky-500 focus:ring-offset-0"
              type="checkbox"
            />
            <span className="text-[13px] md:text-xs font-medium text-slate-600">
              Ingat saya di perangkat ini
            </span>
          </label>
        </div>

        <button
          className="min-h-11 min-w-11 md:min-h-0 md:min-w-0 w-full bg-sky-500 hover:bg-sky-600 text-white text-sm font-bold py-2.5 px-4 rounded-xl shadow-md shadow-sky-500/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
          type="submit"
        >
          <span>Masuk ke Pilah</span>
          <LogIn className="w-5 h-5 md:w-4 md:h-4" />
        </button>
      </form>
    </div>
  );
}
