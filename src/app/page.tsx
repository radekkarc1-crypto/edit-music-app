import Link from "next/link";

const features = [
  {
    icon: "🎚️",
    title: "Edytor muzyki",
    text: "Przycinaj, zmieniaj tempo, głośność i przygotuj swój utwór.",
    href: "/editor",
  },
  {
    icon: "🎨",
    title: "Okładki",
    text: "Dodaj własną grafikę i stwórz wygląd swojego utworu.",
    href: "/publish",
  },
  {
    icon: "🚀",
    title: "Publikowanie",
    text: "Udostępniaj gotowe utwory innym użytkownikom.",
    href: "/publish",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="relative overflow-hidden px-6 pb-24 pt-20">
        <div className="absolute left-1/2 top-0 -z-0 h-80 w-80 -translate-x-1/2 rounded-full bg-red-600/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-6xl text-center">
          <div className="inline-flex rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400">
            🎵 Twoja muzyka. Twoje zasady.
          </div>

          <h1 className="mt-8 text-5xl font-black tracking-tight sm:text-7xl">
            Twórz.
            <br />
            <span className="text-red-500">Edytuj.</span>
            <br />
            Publikuj.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            EDIT MUSIC to miejsce, w którym możesz edytować swoje utwory,
            przygotowywać okładki i publikować muzykę.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/editor"
              className="rounded-2xl bg-red-600 px-8 py-4 font-bold transition hover:bg-red-500"
            >
              🎧 Zacznij tworzyć
            </Link>

            <Link
              href="/discover"
              className="rounded-2xl border border-zinc-700 bg-zinc-900 px-8 py-4 font-bold transition hover:bg-zinc-800"
            >
              🔥 Odkryj muzykę
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-red-500">
              EDIT MUSIC
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Wszystko w jednym miejscu
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {features.map((feature) => (
              <Link
                key={feature.title}
                href={feature.href}
                className="group rounded-3xl border border-zinc-800 bg-zinc-900 p-7 transition hover:-translate-y-1 hover:border-red-500/50"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-800 text-3xl transition group-hover:bg-red-600/20">
                  {feature.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-zinc-500">
                  {feature.text}
                </p>

                <div className="mt-6 text-sm font-semibold text-red-400">
                  Otwórz →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-900 px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <div className="text-5xl">🎵</div>

          <h2 className="mt-5 text-3xl font-bold">
            Twoja następna piosenka zaczyna się tutaj.
          </h2>

          <p className="mt-4 text-zinc-500">
            Wybierz utwór, otwórz edytor i zacznij tworzyć.
          </p>

          <Link
            href="/editor"
            className="mt-7 inline-block rounded-xl bg-red-600 px-7 py-3 font-semibold hover:bg-red-500"
          >
            Otwórz edytor
          </Link>
        </div>
      </section>

      <footer className="border-t border-zinc-900 px-6 py-8 text-center text-sm text-zinc-600">
        © 2026 EDIT MUSIC
      </footer>
    </main>
  );
}