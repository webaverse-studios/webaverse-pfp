import Image from 'next/image';

import degen from '@/public/images/img_degen.png';

export default function Page() {
  return (
    <main className="relative">
      <section className="text-gray-100">
        <div className="mx-auto flex flex-col justify-center sm:py-12 lg:flex-row lg:justify-between lg:py-24">
          <div className="flex flex-col justify-center rounded-sm text-center lg:max-w-md lg:text-left xl:max-w-lg">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              The Degens
            </h1>

            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Et
              ultrices neque ornare aenean euismod elementum nisi. Elementum
              facilisis leo vel fringilla est ullamcorper eget nulla. Sit amet
              mauris commodo
            </p>

            <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-center sm:space-y-0 sm:space-x-4 lg:justify-start">
              <button
                type="button"
                className="rounded border bg-white px-20 py-2 text-lg font-semibold uppercase text-black dark:border-gray-100"
              >
                Claim
              </button>
            </div>
          </div>

          {/* <Image
              src={degen}
              alt="degen"
              className='object-contain md:absolute right-0 top-full'
              // className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
              width={700}
              height={700}
            /> */}
        </div>
      </section>
    </main>
  );
}
