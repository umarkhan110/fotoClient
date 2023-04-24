import Image from "next/image";
// import Link from "next/link";
import { useState } from "react";
import { IMAGE_URL } from "../constants/url";
import { EventStore } from "../store/event";

import { AiFillStar, AiOutlineArrowLeft } from "react-icons/ai";

// import { ShareUrl } from "../contexts/Share/share";
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

import moment from "moment";
import Link from "next/link";

const BookingConfirmed = ({
  confirmedEvent: { location, email, date, slot, client_number, client_id },
}) => {
  const [showPaypal, setShowPaypal] = useState(false);

  // const { setShareUrl } = useContext(ShareUrl);

  return (
    <section className="fixed z-50 bg-black/30 w-screen h-screen xs:top-0 top-20 flex items-center justify-center">
      <div
        className={`${
          showPaypal ? "p-0" : "p-5"
        } xs:p-0 xs:w-[500px] w-[100%] xs:h-auto h-screen bg-white  drop-shadow-lg xs:rounded-3xl text-center `}>
        {showPaypal ? (
          <>
            <p className="absolute top-5 w-full font-oswald text-2xl font-bold xs:hidden block">
              <span className="text-yellow">Dein</span>
              <span className="text-pink"> persönliches</span>
              <span className="text-dark-blue"> Sonderangebot!</span>
            </p>
            <Image
              src="/../public/assets/canvas.png"
              width={500}
              height={500}
              className="w-full rounded-lg border-2 xs:border-blue"
              alt="canvas"
            />
            <div className="absolute bottom-32 w-full text-xl">
              <p className="text-center w-full">
                Jetzt Leinwand inkl. Shooting für nur 49€ sichern!
              </p>
              <button
                onClick={() => setShowPaypal(false)}
                className="flex items-center mx-auto px-5 border-2 border-light-grey justify-center gap-2 bg-yellow rounded-full mt-5">
                weiter mit{" "}
                <Image
                  src="/../public/assets/paypal.png"
                  width={100}
                  height={50}
                  alt="paypal"
                />
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="font-oswald text-2xl mb-2 font-bold xs:hidden block">
              <span className="text-yellow">Herzlichen</span>
              <span className="text-pink"> Glückwunsch!</span>
            </p>
            <div className="relative flex justify-center items-center gap-2 bg-blue text-white text-center xs:rounded-3xl rounded-t-xl py-3 text-xl font-cursive font-bold">
              <Link
                href="/"
                className="absolute left-3 text-2xl font-bold"
                onClick={() => EventStore.removeConfirm()}>
                <AiOutlineArrowLeft />
              </Link>
              <AiFillStar className="text-yellow text-3xl" />{" "}
              <p className="text-2xl">TERMIN GESICHERT!</p>{" "}
              <AiFillStar className="text-yellow text-3xl" />
            </div>
            <div className="xs:h-auto h-full bg-[url('https://assets.foto-dino.de/images/webps/booking_form_bg.webp')] bg-cover bg-right-bottom xs:rounded-xl">
              <div className="border-2 border-blue py-3 rounded-b-xl">
                <p className="mb-1 text-lg font-bold drop-shadow-lg">
                  BESTÄTIGUNG & INFOS AN:
                </p>
                <p>{email}</p>
                <button className="text-blue mt-1 underline font-bold">
                  Email falsch?
                </button>
                <center>
                  <div className="my-4 py-1 border-2 border-pink drop-shadow-lg rounded-xl w-52">
                    <Image
                      src={`${IMAGE_URL}/gifs/Final_Dino_GIF.gif`}
                      alt="camera"
                      width={80}
                      height={80}
                    />
                    <div className="text-sm my-1 font-bold">
                      <p>
                        {moment(date).format("DD.MM.YYYY")}
                        <br />
                        {slot} Uhr
                        <br />
                        {location}
                        <br />
                        Client Number: {client_number}
                      </p>
                    </div>
                  </div>
                </center>

                <div>
                  <p>MIT FREUNDEN TEILEN!</p>

                  <div className="mt-3 drop-shadow-lg">
                    <FacebookShareButton
                      url={
                        window.location.origin +
                        "/book/" +
                        EventStore.state.event.location.city.name +
                        "/" +
                        EventStore.state.event.event_date +
                        "?sharedBy=" +
                        client_id
                      }
                      title="Schau mal ich habe ein gratis Fotoshooting Event 📸 bei FOTO DINO entdeckt! 🥳 "
                      quote="Schau mal ich habe ein gratis Fotoshooting Event 📸 bei FOTO DINO entdeckt! 🥳 "
                      hashtag="something">
                      <FacebookIcon size={30} className="rounded-full mx-1" />
                    </FacebookShareButton>

                    <TelegramShareButton
                      url={
                        window.location.origin +
                        "/book/" +
                        EventStore.state.event.location.city.name +
                        "/" +
                        EventStore.state.event.event_date +
                        "?sharedBy=" +
                        client_id
                      }
                      title="Schau mal ich habe ein gratis Fotoshooting Event 📸 bei FOTO DINO entdeckt! 🥳 ">
                      <TelegramIcon size={30} className="rounded-full mx-1" />
                    </TelegramShareButton>

                    <WhatsappShareButton
                      url={
                        window.location.origin +
                        "/book/" +
                        EventStore.state.event.location.city.name +
                        "/" +
                        EventStore.state.event.event_date +
                        "?sharedBy=" +
                        client_id
                      }
                      title="Schau mal ich habe ein gratis Fotoshooting Event 📸 bei FOTO DINO entdeckt! 🥳 ">
                      <WhatsappIcon size={30} className="rounded-full mx-1" />
                    </WhatsappShareButton>
                  </div>

                  {/* <button
                    onClick={() =>
                      setShareUrl(
                        window.location.origin +
                          "/book/" +
                          EventStore.state.event.location.city.name +
                          "/" +
                          EventStore.state.event.event_date +
                          "?sharedBy=" +
                          client_id,
                      )
                    }
                    className="bg-blue px-4 py-2 text-white rounded mt-2">
                    Share{" "}
                  </button> */}
                </div>
              </div>
              <center>
                <a className="cursor-pointer">
                  <p className="bg-yellow my-2 p-2 w-80 rounded-lg drop-shadow-lg font-bold text-sm">
                    OUTFITS FÜR DEIN PERFEKTES SHOOTING
                  </p>
                </a>
              </center>

              {/* <center>
                <Link
                  href="/"
                  onClick={() => EventStore.removeConfirm()}
                  className="cursor-pointer">
                  <Image
                    src={`${IMAGE_URL}/webps/logo.webp`}
                    alt="camera"
                    width={150}
                    height={100}
                  />
                </Link>
              </center> */}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default BookingConfirmed;
