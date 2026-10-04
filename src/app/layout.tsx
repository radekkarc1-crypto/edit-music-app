import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "EDIT MUSIC",
  description: "Twórz, edytuj i publikuj muzykę.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className="bg-zinc-950 text-white antialiased">
        <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/95 backdrop-blur">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
            <Link
              href="/"
              className="text-xl font-black tracking-tight"
            >
              🎵 <span className="text-red-500">EDIT</span> MUSIC
            </Link>

            <div className="flex items-center gap-1 sm:gap-2">
              <Link
                href="/discover"
                className="rounded-lg px-2 py-2 text-sm text-zinc-300 hover:bg-zinc-800 hover:text-white sm:px-3"
              >
                <span className="hidden sm:inline">Odkryj</span>
                <span className="sm:hidden">🔥</span>
              </Link>

              <Link
                href="/editor"
                className="rounded-lg px-2 py-2 text-sm text-zinc-300 hover:bg-zinc-800 hover:text-white sm:px-3"
              >
                <span className="hidden sm:inline">Edytor</span>
                <span className="sm:hidden">🎧</span>
              </Link>

              <Link
                href="/library"
                className="rounded-lg px-2 py-2 text-sm text-zinc-300 hover:bg-zinc-800 hover:text-white sm:px-3"
              >
                <span className="hidden sm:inline">Biblioteka</span>
                <span className="sm:hidden">📚</span>
              </Link>

              <Link
                href="/publish"
                className="rounded-lg bg-red-600 px-3 py-2 text-sm font-semibold hover:bg-red-500"
              >
                <span className="hidden sm:inline">Publikuj</span>
                <span className="sm:hidden">+</span>
              </Link>

              <Link
                href="/profile"
                className="ml-1 flex h-9 w-9 items-center justify-center rounded-full bg-zinc-800 hover:bg-zinc-700"
              >
                👤
              </Link>
            </div>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}