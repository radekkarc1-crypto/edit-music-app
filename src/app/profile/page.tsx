export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-5xl">
        <a href="/" className="text-sm text-zinc-400 hover:text-white">
          ← EDIT MUSIC
        </a>

        <div className="mt-8 rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-600 text-3xl">
            👤
          </div>

          <h1 className="mt-5 text-3xl font-bold">Twój profil</h1>
          <p className="mt-2 text-zinc-400">
            Zaloguj się, aby tworzyć profil i publikować muzykę.
          </p>

          <button className="mt-6 rounded-xl bg-red-600 px-6 py-3 font-semibold hover:bg-red-500">
            🔐 Zaloguj się
          </button>
        </div>
      </div>
    </main>
  );
}