import React from 'react';
import { Cpu, Settings, Zap, PlayCircle } from 'lucide-react';

const steps = [
  {
    icon: Settings,
    title: 'Compose',
    desc: 'Drag nodes, connect signals, and fine‑tune parameters with precision controls.'
  },
  {
    icon: Cpu,
    title: 'React',
    desc: 'Feed audio and video inputs to drive motion, color, and geometry in real time.'
  },
  {
    icon: Zap,
    title: 'Optimize',
    desc: 'Profile performance and scale from prototypes to live productions with confidence.'
  },
  {
    icon: PlayCircle,
    title: 'Perform',
    desc: 'Go live with instant previews and latency‑free output to any display or stream.'
  }
];

export default function Workflow() {
  return (
    <section id="workflow" className="relative w-full bg-gradient-to-b from-black to-[#050510] py-24 text-white">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">A seamless creative loop</h2>
          <p className="mt-3 text-white/70">Iterate at the speed of thought with instant feedback at every step.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-400/20 to-fuchsia-400/20 ring-1 ring-white/10">
                <Icon className="h-6 w-6 text-indigo-300" />
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
