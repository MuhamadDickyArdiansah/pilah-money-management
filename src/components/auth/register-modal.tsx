"use client";

import { useState } from "react";

import { Lock, ArrowRight, Eye, EyeOff, Mail, User } from "lucide-react";

export default function RegisterModal() {
  const [showRegPassword, setShowRegPassword] = useState(false);
  const [password, setPassword] = useState("");

  // Sederhana: hitung kekuatan password (0-4)
  const getPasswordStrength = (pass: string) => {
    let strength = 0;
    if (pass.length > 5) strength++;
    if (pass.length > 7) strength++;
    if (/[A-Z]/.test(pass) && /[0-9]/.test(pass)) strength++;
    if (/[^A-Za-z0-9]/.test(pass)) strength++;
    return strength;
  };

  const strengthScore = getPasswordStrength(password);
  const strengthLabels = [
    "Sangat Lemah",
    "Lemah",
    "Sedang",
    "Kuat",
    "Sangat Kuat",
  ];

  return (
    <div className="space-y-5">
      <div className="space-y-1">
        <h2 className="text-xl font-bold text-slate-900">
          Mulai Gratis di Pilah
        </h2>
        <p className="text-[13px] md:text-xs text-slate-500">
          Buat akun dalam hitungan detik untuk kemudahan patungan.
        </p>
      </div>

      <form className="space-y-3.5" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label
            className="block text-[13px] md:text-xs font-semibold text-slate-700 mb-1"
            htmlFor="reg-name"
          >
            Nama Lengkap
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <User className="w-5 h-5 md:w-4 md:h-4" />
            </div>
            <input
              className="min-h-11 text-base md:text-sm w-full pl-9 pr-3 py-2 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all"
              id="reg-name"
              placeholder="Alex Pratama"
              type="text"
            />
          </div>
        </div>

        <div>
          <label
            className="block text-[13px] md:text-xs font-semibold text-slate-700 mb-1"
            htmlFor="reg-identifier"
          >
            Email / WhatsApp
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Mail className="w-5 h-5 md:w-4 md:h-4" />
            </div>
            <input
              className="min-h-11 text-base md:text-sm w-full pl-9 pr-3 py-2 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all"
              id="reg-identifier"
              placeholder="alex@gmail.com / 0812..."
              type="text"
            />
          </div>
        </div>

        <div>
          <label
            className="block text-[13px] md:text-xs font-semibold text-slate-700 mb-1"
            htmlFor="reg-password"
          >
            Kata Sandi Baru
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Lock className="w-5 h-5 md:w-4 md:h-4" />
            </div>
            <input
              className="min-h-11 text-base md:text-sm w-full pl-9 pr-10 py-2 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all"
              id="reg-password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Minimal 8 karakter"
              type={showRegPassword ? "text" : "password"}
              value={password}
            />
            <button
              className="min-h-11 min-w-11 md:min-h-0 md:min-w-0 absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
              onClick={() => setShowRegPassword(!showRegPassword)}
              type="button"
            >
              {showRegPassword ? (
                <EyeOff className="w-5 h-5 md:w-4 md:h-4" />
              ) : (
                <Eye className="w-5 h-5 md:w-4 md:h-4" />
              )}
            </button>
          </div>

          {/* Strength Meter */}
          <div className="mt-2 space-y-1">
            <div className="flex items-center justify-between text-xs md:text-[11px]">
              <span className="text-slate-500">Kekuatan Sandi</span>
              <span className="font-semibold text-slate-700">
                {password ? strengthLabels[strengthScore] : "Belum terisi"}
              </span>
            </div>
            <div className="grid grid-cols-4 gap-1 h-1.5">
              {[1, 2, 3, 4].map((step) => (
                <div
                  key={step}
                  className={`rounded-full h-full transition-all duration-300 ${
                    strengthScore >= step
                      ? strengthScore <= 2
                        ? "bg-amber-400"
                        : "bg-emerald-500"
                      : "bg-slate-200"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="pt-1">
          <label className="min-h-11 flex items-start gap-2 cursor-pointer select-none">
            <input
              required
              className="w-5 h-5 md:w-4 md:h-4 mt-0.5 rounded border-slate-300 text-sky-500 focus:ring-sky-500 focus:ring-offset-0"
              type="checkbox"
            />
            <span className="text-[13px] md:text-xs text-slate-500 leading-relaxed">
              Saya menyetujui{" "}
              <a
                className="text-sky-600 font-semibold underline hover:text-sky-700"
                href="#"
              >
                Syarat & Ketentuan
              </a>{" "}
              serta{" "}
              <a
                className="text-sky-600 font-semibold underline hover:text-sky-700"
                href="#"
              >
                Kebijakan Privasi
              </a>
              .
            </span>
          </label>
        </div>

        <button
          className="min-h-11 min-w-11 md:min-h-0 md:min-w-0 w-full bg-sky-500 hover:bg-sky-600 text-white text-sm font-bold py-2.5 px-4 rounded-xl shadow-md shadow-sky-500/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
          type="submit"
        >
          <span>Daftar Akun Baru</span>
          <ArrowRight className="w-5 h-5 md:w-4 md:h-4" />
        </button>
      </form>
    </div>
  );
}
