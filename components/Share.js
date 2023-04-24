import {
  FacebookShareButton,
  FacebookIcon,
  // FacebookMessengerShareButton,
  // FacebookMessengerIcon,
  TelegramShareButton,
  TelegramIcon,
  WhatsappShareButton,
  WhatsappIcon,
  // EmailShareButton,
  // EmailIcon,
  PinterestShareButton,
  PinterestIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { IoClose, IoCopyOutline } from "react-icons/io5";
import { useState, useEffect } from "react";

import { ShareUrl } from "../contexts/Share/share";
import { useContext } from "react";
import Image from "next/image";

const Share = () => {
  const { shareUrl, setShareUrl } = useContext(ShareUrl);

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1500);
    return () => clearTimeout(timer);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [copied]);

  return (
    <div className="fixed z-50 bg-black/30 w-screen h-screen top-0 flex items-center justify-center">
      <div className="xs:w-[500px] w-[100%] w-[95%] p-5 bg-white drop-shadow-lg rounded-3xl text-center ">
        <Image
          className="w-14 h-14 absolute"
          src="https://foto-dino.de/assets/icons/dino.png"
          alt="logo"
          width={100}
          height={100}
        />

        <button
          className="absolute right-4 top-4"
          onClick={() => setShareUrl(null)}>
          <IoClose className="text-2xl text-dark-blue bg-pink rounded-full p-1" />
        </button>

        <p className="font-oswald text-2xl">Teile das Fotoshootingevent via:</p>

        <div className="my-5 drop-shadow-lg">
          <FacebookShareButton
            url={shareUrl}
            title="Schau mal ich habe ein gratis Fotoshooting Event 📸 bei FOTO DINO entdeckt! 🥳 "
            quote="Schau mal ich habe ein gratis Fotoshooting Event 📸 bei FOTO DINO entdeckt! 🥳 "
            hashtag="something">
            <FacebookIcon size={50} className="rounded-full mx-1" />
          </FacebookShareButton>

          <TelegramShareButton
            url={shareUrl}
            title="Schau mal ich habe ein gratis Fotoshooting Event 📸 bei FOTO DINO entdeckt! 🥳 ">
            <TelegramIcon size={50} className="rounded-full mx-1" />
          </TelegramShareButton>

          <WhatsappShareButton
            url={shareUrl}
            title="Schau mal ich habe ein gratis Fotoshooting Event 📸 bei FOTO DINO entdeckt! 🥳 ">
            <WhatsappIcon size={50} className="rounded-full mx-1" />
          </WhatsappShareButton>

          {/* <EmailShareButton
            url={shareUrl}
            subject="Gratis Fotoshooting Event bei FOTO DINO!"
            body="Schau mal ich habe ein gratis Fotoshooting Event bei FOTO DINO entdeckt!">
            <EmailIcon size={50} className="rounded-full mx-1" />
          </EmailShareButton> */}

          <PinterestShareButton
            url={shareUrl}
            media="https://foto-dino.de/assets/images/ivo.png"
            description="Schau mal ich habe ein gratis Fotoshooting Event 📸 bei FOTO DINO entdeckt! 🥳 ">
            <PinterestIcon size={50} className="rounded-full mx-1" />
          </PinterestShareButton>

          <TwitterShareButton
            url={shareUrl}
            title="Schau mal ich habe ein gratis Fotoshooting Event 📸 bei FOTO DINO entdeckt! 🥳 ">
            <TwitterIcon size={50} className="rounded-full mx-1" />
          </TwitterShareButton>
        </div>

        <CopyToClipboard text={shareUrl} onCopy={() => setCopied(true)}>
          <div
            className={`relative cursor-pointer ${
              copied ? "border-pink" : "border-light-grey"
            } border-2 p-2 rounded bg-white drop-shadow-sm text-left`}>
            <p>{shareUrl}</p>
            <IoCopyOutline
              className={`absolute right-2 top-3 ${
                copied ? "text-pink" : "text-gray"
              }`}
            />
            {copied && (
              <div className="text-white absolute top-1 text-center w-full left-0 flex justify-center">
                <p className="bg-black py-1 px-3 rounded ">copied!</p>
              </div>
            )}
          </div>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default Share;
