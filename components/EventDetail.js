import {
  AiFillStar,
  AiOutlineArrowLeft,
  AiOutlineShareAlt,
} from "react-icons/ai";
// import { RiStarSmileFill } from "react-icons/ri";
import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";
import { GoLocation } from "react-icons/go";

import translate from "../contexts/i18nProvider/translate";
import moment from "moment";

import { EventStore } from "../store/event";
import { observer } from "mobx-react";

import Timeslots from "./Timeslots";
import BookingForm from "./BookingForm";
import Link from "next/link";

import { ShareUrl } from "../contexts/Share/share";
import { useContext, useState } from "react";
import Image from "next/image";

moment.locale("de");

const EventDetail = () => {
  const [open, setOpen] = useState(false);

  const {
    state: { event, slot },
    setEvent,
    setSlot,
  } = EventStore;

  const { setShareUrl } = useContext(ShareUrl);

  // className={`${
  //   slot
  //     ? "xs:relative fixed overflow-auto xs:h-auto h-[100vh] xs:pt-auto xs:pt-0 pt-[80px] xs:w-[90%] xs:mt-[-100px] xs:rounded-lg"
  //     : "relative w-[90%] mt-[-100px] rounded-lg border-4 border-light-grey"
  // } bg-[url('https://assets.foto-dino.de/images/webps/booking_form_bg.webp')] bg-cover bg-center mx-auto top-0 z-10 bg-white font-oswald xs:border-2 xs:border-blue px-4 xs:p-0`}>

  return (
    <div
      className={`${
        slot
          ? "xs:mt-[-100px]"
          : "mt-[-100px] w-[90%] rounded-lg border-4 border-light-grey"
      } relative  bg-[url('https://assets.foto-dino.de/images/webps/booking_form_bg.webp')] bg-cover bg-center mx-auto top-0 z-10 bg-white font-oswald xs:border-2 xs:border-blue px-4 xs:p-0`}>
      {slot ? (
        <p className="xs:hidden block my-2 sm:text-3xl text-2xl font-bold text-center">
          <span className="text-yellow">Erhalte </span>
          <span className="text-pink">unvergesslich </span>
          <span className="text-blue">schöne </span>
          Fotos!
        </p>
      ) : (
        <p className="xs:hidden block my-2 sm:text-2xl text-xl font-bold text-center">
          <span className="text-yellow">FOTO </span>
          <span className="text-pink">DINO </span>
          KOMMT IN DEINE STADT!
        </p>
      )}

      <div
        className={`relative xs:rounded-0 rounded-t-lg bg-blue flex pt-2 items-center`}>
        <Link
          href="/"
          onClick={() => {
            setEvent(null);
          }}
          className={`${
            slot ? "invisible" : ""
          } sm:static absolute flex-1 text-white text-3xl font-black z-10`}>
          <AiOutlineArrowLeft />
        </Link>

        <div className="relative flex-1 flex items-center justify-center">
          <AiFillStar className="text-yellow text-3xl xs:block hidden" />
          <p className=" whitespace-nowrap sm:text-3xl text-xl font-cursive mx-2 text-white text-center font-bold">
            <span className="sm:hidden block whitespace-nowrap xs:text-xl">
              {moment(event?.event_date).format("dddd")},{" "}
              {moment(event.event_date).format("DD.MM.YYYY")}
            </span>
            {slot ? slot.time + " Uhr" : event.location?.city?.name}
          </p>
          <AiFillStar className="text-yellow text-3xl xs:block hidden" />
          <button
            onClick={() =>
              setShareUrl(window.location.origin + window.location.pathname)
            }
            className="text-white p-4 absolute right-3">
            <AiOutlineShareAlt className="sm:text-2xl text-3xl ml-2" />
          </button>
        </div>
        <p className="sm:block hidden font-cursive flex-1 text-white sm:text-2xl text-xl text-right">
          {moment(event?.event_date).format("dddd")},{" "}
          {moment(event.event_date).format("DD.MM.YYYY")}
        </p>
      </div>

      {slot ? (
        <p className="sm:block hidden my-2 sm:text-3xl text-xl font-bold text-center">
          <span className="text-yellow">Erhalte </span>
          <span className="text-pink">unvergesslich </span>
          <span className="text-blue">schöne </span>
          Fotos!
        </p>
      ) : (
        <p className="sm:block hidden my-2 sm:text-2xl text-xl font-bold text-center">
          <span className="text-yellow">FOTO </span>
          <span className="text-pink">DINO </span>
          KOMMT IN DEINE STADT!
        </p>
      )}

      <div
        className={`flex items-start md:flex-row flex-col md:gap-0 gap-4 md:p-0 xs:p-4 pb-4`}>
        <div className="md:w-[50%] w-full">
          <div
            className={`${
              !open && slot
                ? "xs:h-auto xs:py-2 xs:px-4 h-0 py-0 px-0"
                : "xs:h-auto xs:py-2 xs:px-4 px-2 py-2 md:p-4"
            } ${
              slot ? "rounded-b-0" : "rounded-b-lg"
            } overflow-hidden md:w-auto w-full flex-1 flex border-2 border-blue drop-shadow-lg bg-white md:m-4 xs:rounded-lg justify-between`}>
            <div>
              <p className="sm:text-2xl text-xl font-bold xs:mb-4 mb-2">
                {translate("location_detail")}
              </p>
              <div className="flex gap-2">
                <div className="font-bold">
                  <p className="sm:text-[1rem] text-sm mb-2">Hotel Name:</p>
                  <p className="sm:text-[1rem] text-sm">
                    {translate("street_name")}:
                  </p>
                </div>
                <div>
                  <p className="sm:text-[1rem] text-sm mb-2">
                    {event.location?.name}
                  </p>
                  <p className="sm:text-[1rem] text-sm">
                    {event?.location?.street_name}{" "}
                    {event?.location?.street_number}
                  </p>
                </div>
              </div>
              {event?.location?.places_id && (
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={`https://www.google.com/maps/search/?api=1&query=Google&query_place_id=${event?.location.places_id}`}
                  className="cursor-pointer drop-shadow-lg bg-[url('https://assets.foto-dino.de/images/webps/little_map_pic_7kb.webp')] bg-center rounded-lg p-2 mt-4 flex justify-center">
                  <div className="bg-yellow p-2 rounded-full">
                    <GoLocation className="text-white" />
                  </div>
                </a>
              )}
            </div>

            <div>
              <p className="sm:text-2xl text-xl font-bold xs:mb-4 mb-2">
                {translate("photographer")}
              </p>
              <Image
                src={event.photographer?.profile_picture}
                alt="photographer"
                width={100}
                height={100}
                className="w-20 h-20 rounded-full object-cover mx-auto"
              />

              <p className="text-center xs:mt-4 mt-2 xs:text-lg text-md">
                {event.photographer?.first_name}
              </p>
            </div>
          </div>
          {slot && (
            <button
              onClick={() => setOpen(!open)}
              className="xs:hidden block rounded-b-lg text-white py-1 gap-2 flex justify-center items-center w-full bg-blue">
              Fotostudio Adresse{" "}
              {open ? <BsChevronCompactUp /> : <BsChevronCompactDown />}
            </button>
          )}
        </div>

        {slot ? <BookingForm /> : <Timeslots event={event} setSlot={setSlot} />}
      </div>

      {!slot && (
        <center>
          <button
            onClick={() =>
              setShareUrl(window.location.origin + window.location.pathname)
            }
            className="flex mb-2 items-center bg-blue text-white py-2 px-4 rounded-lg">
            Jetzt teilen{" "}
            <AiOutlineShareAlt className="sm:text-2xl text-xl ml-2" />
          </button>
        </center>
      )}
      {/* 
      {!slot && (
        <>
          <div className="flex mb-2 justify-center items-center">
            <RiStarSmileFill className="text-blue text-3xl" />
            <button className="drop-shadow-md sm:text-2xl text-xl font-cursive bg-pink py-1 px-2 rounded-lg text-white mx-2">
              Alle Events
            </button>
            <RiStarSmileFill className="text-blue text-3xl" />
          </div>
        </>
      )} */}
    </div>
  );
};

export default observer(EventDetail);
