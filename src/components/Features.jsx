import React from 'react';
import { Rocket, Music2, Layers, Share2 } from 'lucide-react';

const features = [
  {
    icon: Layers,
    title: 'Node‑Based Composition',
    desc: 'Visually connect generators, effects, and outputs to sculpt complex visuals without code.'
  },
  {
    icon: Music2,
    title: 'Audio‑Reactive Engine',
    desc: 'Real‑time frequency analysis powers visuals that pulse and evolve with music and sound.'
  },
  {
    icon: Rocket,
    title: 'High‑Performance Graphics',
    desc: 'A modern GPU pipeline delivers ultra‑smooth rendering for stage, installations, and streaming.'
  },
  {
    icon: Share2,
    title: 'Collaborative Workspace',
    desc: 'Create, iterate, and review together with instant previews and shareable scenes.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative w-full bg-black py-24 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(1000px_500px_at_20%_10%,rgba(99,102,241,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Design without friction</h2>
          <p className="mt-3 text-white/70">Everything you need to go from spark to stage in minutes — responsive, precise, and fast.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:border-cyan-400/40 hover:bg-white/10">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-fuchsia-400/20 ring-1 ring-white/10">
                <Icon className="h-6 w-6 text-cyan-300" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
