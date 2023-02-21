'use client';

import Image from 'next/image';

import discordIcon from '@/public/images/icon/discord.png';
// import facebookIcon from '@/public/images/icon/facebook.png';
import twitterIcon from '@/public/images/icon/twitter.png';

export default function SocialBar() {
  return (
    <div className="col-start-2 col-end-4 my-8 flex justify-center space-x-6">
      {/* Twitter */}
      <a target="_blank" rel="noreferrer" href="https://twitter.com/webaverse">
        <Image
          src={twitterIcon}
          alt="twitter"
          width={50}
          className="hover-opacity fill-current opacity-30 shadow-lg shadow-blue-500/50"
        />
      </a>

      {/* Discord */}
      <a target="_blank" rel="noreferrer" href="https://discord.gg/webaverse">
        <Image
          src={discordIcon}
          alt="discord"
          width={50}
          className="hover-opacity fill-current opacity-30 shadow-lg shadow-indigo-500/50"
        />
      </a>

      {/* Facebook */}
      {/* <a target="_blank" rel="noreferrer" href="<facebook>">
        <Image
          src={facebookIcon}
          alt="facebook"
          width={50}
          className="hover-opacity fill-current opacity-30"
        />
      </a> */}
    </div>
  );
}
