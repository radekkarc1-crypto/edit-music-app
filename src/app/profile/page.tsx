"use client";

import { useState } from "react";

export default function ProfilePage() {
  const [mode, setMode] = useState<"login" | "register">("login");

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-md">
        <a href="/" className="text-sm text-zinc-400 hover:text-white">
          ← EDIT MUSIC
        </a>

        <div className="mt-8 rounded-3xl border border-zinc-800 bg-zinc-900 p-7 shadow-2xl">
          <div className="mb-7 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-600 text-2xl">
              🎵
            </div>
            <h1 className="mt-5 text-3xl font-black">
              {mode === "login" ? "Witaj ponownie" : "Dołącz do EDIT MUSIC"}
            </h1>
            <p className="mt-2 text-sm text-zinc-400">
              {mode === "login"
                ? "Zaloguj się, aby mieć swoją muzykę zawsze pod ręką."
                : "Załóż konto i zacznij publikować własną muzykę."}
            </p>
          </div>

          <div className="space-y-4">
            {mode === "register" && (
              <input
                type="text"
                placeholder="Nazwa użytkownika"
                className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none transition focus:border-red-500"
              />
            )}

            <input
              type="email"
              placeholder="E-mail"
              className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none transition focus:border-red-500"
            />

            <input
              type="password"
              placeholder="Hasło"
              className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none transition focus:border-red-500"
            />

            <button
              type="button"
              className="w-full rounded-xl bg-red-600 px-5 py-3 font-bold transition hover:bg-red-500"
            >
              {mode === "login" ? "🔐 Zaloguj się" : "🚀 Utwórz konto"}
            </button>
          </div>

          <div className="my-6 flex items-center gap-3 text-xs text-zinc-600">
            <span className="h-px flex-1 bg-zinc-800" />
            <span>EDIT MUSIC</span>
            <span className="h-px flex-1 bg-zinc-800" />
          </div>

          <button
            type="button"
            onClick={() => setMode(mode === "login" ? "register" : "login")}
            className="w-full rounded-xl border border-zinc-700 px-5 py-3 text-sm font-semibold text-zinc-200 transition hover:bg-zinc-800"
          >
            {mode === "login"
              ? "Nie masz konta? Utwórz je"
              : "Masz już konto? Zaloguj się"}
          </button>
        </div>
      </div>
    </main>
  );
}
