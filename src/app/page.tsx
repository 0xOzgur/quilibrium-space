import Image from "next/image";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        
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
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-black before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[10px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#0fffff70] dark:invert"
          src="/logo.png"
          alt="Quilibrium Logo"
          width={480}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-6xl lg:grid-cols-5 lg:text-left">
        <a
          href="https://docs.quilibrium.space/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-black-300 hover:bg-red-500 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Find in-depth information about Quilibrium features.
          </p>
        </a>

        <a
          href="https://quilibrium.com/docs"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-black-300 hover:bg-red-500 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn about Quilibrium deeply! - Source: Quilibrium Docs
          </p>
        </a>

        <a
          href="https://quilibrium.com/labs"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-black-300 hover:bg-red-500 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Build{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Play around and and build! - Source: Quilibrium Labs
          </p>
        </a>

        <a
          // href=""
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-black-300 hover:bg-red-500 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Projects{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Explore projects built on Quilibrium.
          </p>
        </a>

        <a
          href="https://docs.quilibrium.space/important-links"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-black-300 hover:bg-red-500 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Community{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Reach the important links and community.
          </p>
        </a>
        
      </div>
    <div className="footer">Made with ❤️ by <b><a href="https://www.quilibrium.com" className="group rounded-lg border border-transparent px-1 py-1 transition-colors hover:border-black-300 hover:bg-red-500 hover:dark:border-neutral-700 hover:dark:bg-neutral-100/30">Quilibrium</a> </b>Lovers </div> <div className="footer2">Sponsored by <a href="https://www.cherryservers.com/?affiliate=676XHODW" className="group rounded-lg border border-transparent px-1 py-1 transition-colors hover:border-black-300 hover:bg-red-500 hover:dark:border-neutral-700 hover:dark:bg-neutral-100/30">CherryServers</a></div>
    </main>
  );
}
