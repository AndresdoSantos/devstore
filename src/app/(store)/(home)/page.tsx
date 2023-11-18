import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  return (
    <main className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href="/"
        className="relative group col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex items-end justify-center"
      >
        <Image
          src="/moletom-ai-side.png"
          alt=""
          width={860}
          height={860}
          quality={100}
          className="group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute bottom-28 right-28 gap-2 flex h-12 items-center max-w-[208px] rounded-full border-2 border-zinc-50 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Moletom AI Side</span>

          <span className="flex h-full items-center truncate justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$ 129
          </span>
        </div>
      </Link>

      <Link
        href="/"
        className="relative group col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex items-end justify-center"
      >
        <Image
          src="/moletom-java.png"
          alt=""
          width={860}
          height={860}
          quality={100}
          className="group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute bottom-10 right-10 gap-2 flex h-12 items-center max-w-[208px] rounded-full border-2 border-zinc-50 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Moletom AI Side</span>

          <span className="flex h-full items-center truncate justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$ 129
          </span>
        </div>
      </Link>

      <Link
        href="/"
        className="relative group col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex items-end justify-center"
      >
        <Image
          src="/camiseta-dowhile-2022.png"
          alt=""
          width={860}
          height={860}
          quality={100}
          className="group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute bottom-10 right-10 gap-2 flex h-12 items-center max-w-[208px] rounded-full border-2 border-zinc-50 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Moletom AI Side</span>

          <span className="flex h-full items-center truncate justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$ 129
          </span>
        </div>
      </Link>
    </main>
  )
}
