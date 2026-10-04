"use client";

import { ChangeEvent, useEffect, useRef, useState } from "react";

export default function EditorPage() {
  const [file, setFile] = useState<File | null>(null);
  const [audioUrl, setAudioUrl] = useState("");
  const [volume, setVolume] = useState(1);
  const [speed, setSpeed] = useState(1);
  const [songName, setSongName] = useState("");

  const audioRef = useRef<HTMLAudioElement>(null);

  function handleFile(event: ChangeEvent<HTMLInputElement>) {
    const selectedFile = event.target.files?.[0];

    if (!selectedFile) return;

    if (audioUrl) {
      URL.revokeObjectURL(audioUrl);
    }

    const newUrl = URL.createObjectURL(selectedFile);

    setFile(selectedFile);
    setAudioUrl(newUrl);

    if (!songName) {
      setSongName(selectedFile.name.replace(/\.[^/.]+$/, ""));
    }
  }

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.playbackRate = speed;
    }
  }, [volume, speed]);

  useEffect(() => {
    return () => {
      if (audioUrl) {
        URL.revokeObjectURL(audioUrl);
      }
    };
  }, [audioUrl]);

  return (
    <main className="min-h-screen bg-zinc-950 px-5 py-8 text-white">
      <div className="mx-auto max-w-6xl">

        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-500">
            EDIT MUSIC STUDIO
          </p>

          <h1 className="mt-2 text-4xl font-black">
            🎧 Edytor muzyki
          </h1>

          <p className="mt-2 text-zinc-500">
            Przygotuj swój utwór do publikacji.
          </p>
        </div>

        {!file && (
          <label
            htmlFor="audio"
            className="flex min-h-[360px] cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-zinc-800 bg-zinc-900 p-10 text-center transition hover:border-red-500"
          >
            <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-red-600/10 text-6xl">
              🎵
            </div>

            <h2 className="mt-7 text-2xl font-bold">
              Dodaj swój utwór
            </h2>

            <p className="mt-3 max-w-md text-zinc-500">
              Wybierz plik audio z komputera, aby rozpocząć edycję.
            </p>

            <span className="mt-7 rounded-xl bg-red-600 px-7 py-3 font-semibold">
              Wybierz plik
            </span>

            <input
              id="audio"
              type="file"
              accept="audio/*"
              onChange={handleFile}
              className="hidden"
            />
          </label>
        )}

        {file && audioUrl && (
          <div className="grid gap-6 lg:grid-cols-[1fr_320px]">

            <section className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">

              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                <div>
                  <p className="text-xs uppercase tracking-widest text-zinc-500">
                    Aktualny utwór
                  </p>

                  <h2 className="mt-1 break-all text-xl font-bold">
                    {file.name}
                  </h2>
                </div>

                <label
                  htmlFor="audio-change"
                  className="cursor-pointer rounded-xl border border-zinc-700 px-4 py-2 text-sm font-semibold hover:bg-zinc-800"
                >
                  Zmień plik
                </label>

                <input
                  id="audio-change"
                  type="file"
                  accept="audio/*"
                  onChange={handleFile}
                  className="hidden"
                />

              </div>

              <div className="mt-8 rounded-2xl bg-zinc-950 p-5">

                <audio
                  ref={audioRef}
                  controls
                  preload="metadata"
                  src={audioUrl}
                  className="w-full"
                />

              </div>

              <div className="mt-8">

                <h3 className="font-bold">🛠️ Narzędzia</h3>

                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">

                  {[
                    ["✂️", "Przytnij"],
                    ["🔊", "Głośność"],
                    ["⏩", "Tempo"],
                    ["✨", "Efekty"],
                  ].map(([icon, name]) => (
                    <button
                      key={name}
                      className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 text-left transition hover:border-red-500/50 hover:bg-zinc-900"
                    >
                      <div className="text-2xl">{icon}</div>
                      <div className="mt-2 text-sm font-semibold">
                        {name}
                      </div>
                    </button>
                  ))}

                </div>

              </div>

            </section>

            <aside className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">

              <h2 className="text-xl font-bold">
                ⚙️ Ustawienia
              </h2>

              <div className="mt-7">

                <label className="text-sm font-semibold">
                  Nazwa utworu
                </label>

                <input
                  value={songName}
                  onChange={(e) => setSongName(e.target.value)}
                  placeholder="Nazwa utworu"
                  className="mt-2 w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none focus:border-red-500"
                />

              </div>

              <div className="mt-7">

                <div className="flex justify-between text-sm">
                  <span>🔊 Głośność</span>
                  <span>{Math.round(volume * 100)}%</span>
                </div>

                <input
                  type="range"
                  min="0"
                  max="2"
                  step="0.01"
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  className="mt-3 w-full accent-red-500"
                />

              </div>

              <div className="mt-7">

                <div className="flex justify-between text-sm">
                  <span>⏩ Tempo</span>
                  <span>{Math.round(speed * 100)}%</span>
                </div>

                <input
                  type="range"
                  min="0.5"
                  max="1.5"
                  step="0.01"
                  value={speed}
                  onChange={(e) => setSpeed(Number(e.target.value))}
                  className="mt-3 w-full accent-red-500"
                />

              </div>

              <div className="mt-8 border-t border-zinc-800 pt-6">

                <button className="w-full rounded-xl bg-red-600 px-5 py-3 font-bold hover:bg-red-500">
                  💾 Zapisz projekt
                </button>

                <button className="mt-3 w-full rounded-xl border border-zinc-700 px-5 py-3 font-semibold hover:bg-zinc-800">
                  🚀 Przygotuj do publikacji
                </button>

              </div>

            </aside>

          </div>
        )}

      </div>
    </main>
  );
}