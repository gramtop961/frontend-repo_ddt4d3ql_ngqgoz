import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/YMbQm4jphL7pTceL/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays for depth (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.2),transparent_60%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
          <p className="text-xs font-medium tracking-wide text-white/80">Real-time visual creation platform</p>
        </div>
        <h1 className="mt-6 bg-gradient-to-br from-cyan-300 via-indigo-300 to-fuchsia-300 bg-clip-text text-5xl font-extrabold leading-tight text-transparent sm:text-6xl md:text-7xl">
          LumenForge
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg">
          Craft immersive, audio‑reactive visuals with a node‑based workflow. Design, iterate, and perform — all in real time.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-black"
          >
            Explore Features
          </a>
          <a
            href="#workflow"
            className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-black"
          >
            See the Workflow
          </a>
        </div>
      </div>
    </section>
  );
}
