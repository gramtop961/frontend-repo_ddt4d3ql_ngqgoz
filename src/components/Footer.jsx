import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-black py-12 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} LumenForge. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-white/70">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#workflow" className="hover:text-white">Workflow</a>
            <a href="#" className="hover:text-white">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
