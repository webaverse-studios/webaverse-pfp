import Image from 'next/image';

import degen from '@/public/images/img_degen.png';
import SocialBar from '@/ui/SocialBar';

//-mt-[var(--header-height)]

export default function Page() {
  return (
    <main className="mx-auto mt-8 flex flex-col justify-center text-gray-100 lg:-mt-[(var(--header-height)+var(--header-margin-desktop))] lg:h-full lg:flex-row lg:justify-between">
      <Image
        src={degen}
        alt="degen"
        className="degen-img self-center 2xl:absolute ultra:w-[40%]"
        width={200}
        height={200}
      />

      <div className="flex flex-col justify-center rounded-sm text-center lg:max-w-md lg:text-left xl:max-w-lg 2xl:ml-auto">
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

        <button
          type="button"
          className="rounded border bg-white px-20 py-2 text-lg font-semibold uppercase text-black dark:border-gray-100 lg:self-center"
        >
          Claim
        </button>
        <SocialBar />
      </div>
    </main>
  );
}
