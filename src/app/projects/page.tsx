import Image from "next/image";
import { SpeedInsights } from "@vercel/speed-insights/next"
import React, { useState } from 'react';


export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-6xl items-center justify-between font-mono text-sm lg:flex">
        
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://quilibrium.space"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "} 
            <Image
              src="/logo.png"
              alt="Quilibrium Logo"
              className="dark:invert"
              width={200}
              height={24}
              priority
            /> 
          </a> <div className="header"><b>Space</b></div>&nbsp;Beta
        </div>
        <header>
        <nav className="container mx-auto flex justify-between">
          <ul className="header-menu">
            <li><a href="/">Home</a></li>
            <li><a href="https://docs.quilibrium.space">Docs</a></li>
            <li><a href="/learn">Learn</a></li>
            <li><a href="/build">Build</a></li>
          </ul>
        </nav>
      </header>
      </div>
<div className="filter">CATEGORIES: 
  <span className="filter-category">NFT</span>
  <span className="filter-category">Exchange</span>
  <span className="filter-category">DeFi</span>
  <span className="filter-category">Infrastructure</span>
  <span className="filter-category">Game</span>
  <span className="filter-category">Tool</span>
  <span className="filter-category">IDO</span>
  <span className="filter-category">Marketplace</span>
</div>

<div className="cards">

  {/* Project Card 1 */}
  <div className="card">
  <div className="flex">
  <img src="https://pbs.twimg.com/profile_images/1809910274188566528/z3wtA4LW_400x400.jpg" alt="Quilrocks Logo" className="p-logo" />
  <h3 className="card-title"><a href="https://quilrocks.io" target="_blank" rel="noopener noreferrer">Quil Rocks</a></h3>
  </div>
  <p className="card-content">Traditional Rocks NFT Collection.</p>
  <span className="card-category">NFT</span>
  <div className="card-links">
    <a href="https://t.me/proje1" target="_blank" rel="noopener noreferrer">
      <img src="/telegram.png" alt="Telegram" className="p-social-logo" />
    </a>
    <a href="https://discord.gg/proje1" target="_blank" rel="noopener noreferrer">
      <img src="/discord.png" alt="Discord" className="p-social-logo" />
    </a>
    <a href="https://x.com/QuilRocks" target="_blank" rel="noopener noreferrer">
      <img src="/x.png" alt="Twitter" className="p-social-logo" />
    </a>
    <a href="https://github.com/proje1" target="_blank" rel="noopener noreferrer">
      <img src="/github.png" alt="GitHub" className="p-social-logo" />
    </a>
  </div>
</div>

  {/* Project Card 2 */}
  <div className="card">
  <div className="flex">
  <img src="https://pbs.twimg.com/profile_images/1809910274188566528/z3wtA4LW_400x400.jpg" alt="Quilrocks Logo" className="p-logo" />
  <h3 className="card-title"><a href="https://quilrocks.io" target="_blank" rel="noopener noreferrer">Quil Rocks</a></h3>
  </div>
  <p className="card-content">Traditional Rocks NFT Collection.</p>
  <span className="card-category">Defi</span>
  <div className="card-links">
    <a href="https://t.me/proje1" target="_blank" rel="noopener noreferrer">
      <img src="/telegram.png" alt="Telegram" className="p-social-logo" />
    </a>
    <a href="https://discord.gg/proje1" target="_blank" rel="noopener noreferrer">
      <img src="/discord.png" alt="Discord" className="p-social-logo" />
    </a>
    <a href="https://x.com/QuilRocks" target="_blank" rel="noopener noreferrer">
      <img src="/x.png" alt="Twitter" className="p-social-logo" />
    </a>
    <a href="https://github.com/proje1" target="_blank" rel="noopener noreferrer">
      <img src="/github.png" alt="GitHub" className="p-social-logo" />
    </a>
  </div>
</div>

  {/* Project Card 3 */}
  <div className="card">
  <div className="flex">
  <img src="https://pbs.twimg.com/profile_images/1809910274188566528/z3wtA4LW_400x400.jpg" alt="Quilrocks Logo" className="p-logo" />
  <h3 className="card-title"><a href="https://quilrocks.io" target="_blank" rel="noopener noreferrer">Quil Rocks</a></h3>
  </div>
  <p className="card-content">Traditional Rocks NFT Collection.</p>
  <span className="card-category">Defi</span>
  <div className="card-links">
    <a href="https://t.me/proje1" target="_blank" rel="noopener noreferrer">
      <img src="/telegram.png" alt="Telegram" className="p-social-logo" />
    </a>
    <a href="https://discord.gg/proje1" target="_blank" rel="noopener noreferrer">
      <img src="/discord.png" alt="Discord" className="p-social-logo" />
    </a>
    <a href="https://x.com/QuilRocks" target="_blank" rel="noopener noreferrer">
      <img src="/x.png" alt="Twitter" className="p-social-logo" />
    </a>
    <a href="https://github.com/proje1" target="_blank" rel="noopener noreferrer">
      <img src="/github.png" alt="GitHub" className="p-social-logo" />
    </a>
  </div>
</div>

</div>
    <div className="footer">Made with ❤️ by <b><a href="https://www.quilibrium.com" className="group">Quilibrium</a> </b>Lovers</div>
    </main>
    </>
  );
}
