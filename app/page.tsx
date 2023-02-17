import Image from 'next/image';
import mickyImg from '../public/images/micky.png'

export default function Page() {
  return (
    <main className="">
      <section className="bg-gray-800 text-gray-100">
        <div className="flex flex-col justify-center mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">The Degens</h1>

            <p className="mt-6 mb-8 text-lg sm:mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Et ultrices neque ornare aenean euismod 
            elementum nisi. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Sit amet mauris commodo</p>

            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <button type="button" className="px-20 py-2 text-lg font-semibold border rounded dark:border-gray-100 uppercase bg-white text-black">Claim</button>
            </div>
          </div>

          <div className="flex items-center justify-center mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <Image
              src={mickyImg}
              alt="Next.js Hoodie"
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
              width={400}
              height={50}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
