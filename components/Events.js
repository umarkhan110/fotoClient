import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { EventStore } from "../store/event";
import { observer } from "mobx-react";

import { CityClick } from "../store/tracking";

import {
  AiFillStar,
  AiOutlineArrowUp,
  AiOutlineArrowDown,
  // AiOutlineArrowRight,
} from "react-icons/ai";

import translate from "../contexts/i18nProvider/translate";
import moment from "moment";
import Link from "next/link";

const Events = () => {
  const {
    state: { events },
    getEvents,
    setEvent,
  } = EventStore;

  const [index, setIndex] = useState(0);

  useEffect(() => {
    getEvents();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative border-2 border-blue rounded-xl font-oswald w-[90%] mx-auto mt-[-100px] z-10 bg-white">
      <div className="bg-blue flex p-2 justify-around items-center">
        <AiFillStar className="text-yellow xs:text-5xl text-3xl" />
        <p className="text-white font-black xs:text-3xl text-2xl font-cursive">
          {translate("book_free_shoot")}
        </p>
        <AiFillStar className="text-yellow xs:text-5xl text-3xl" />
      </div>

      <div className="xs:px-4 px-0 py-2">
        <p className="text-center text-yellow xs:text-3xl text-2xl mb-2 font-bold">
          {translate("no_fee")}
        </p>
        <div className="flex gap-4 items-center">
          <div className="sm:block hidden text-center md:text-lg text-md font-bold md:w-[30%] w-[25%]">
            <p className="text-blue">{translate("then_buy")}</p>
            <p className="text-gray">{translate("note1")}</p>
            <p className="text-yellow">{translate("note2")}</p>
          </div>

          <div className="sm:drop-shadow-lg sm:border-2 border-blue rounded-lg md:w-[40%] sm:w-[50%] w-full bg-white">
            <div className="bg-blue sm:flex hidden text-white p-2 text-lg">
              <p className="flex-1 text-center">{translate("zip_code")}</p>
              <p className="flex-1 text-center">{translate("city")}</p>
              <p className="flex-1 text-center">{translate("shooting_date")}</p>
            </div>
            <div className="xs:p-2">
              <button
                className="w-full sm:py-2"
                onClick={() => index > 0 && setIndex(index - 1)}>
                <AiOutlineArrowUp className="mx-auto text-pink text-xl" />
              </button>
              <div>
                {events.slice(index, index + 3).map((x, i) => (
                  <motion.div
                    key={i}
                    initial={{ translateY: -10, opacity: 0 }}
                    animate={{ translateY: 0, opacity: 1 }}
                    transition={{ delay: i / 10 }}
                    className="flex items-center my-2 drop-shadow-lg">
                    <p className="flex-1 text-center">
                      {x.location?.postal_code}
                    </p>
                    <Link
                      onClick={() => CityClick(x.location?.city?.name)}
                      href={`/book/${x.location?.city?.name}/${x.event_date}`}
                      className="flex-1 text-center bg-light-grey hover:bg-yellow rounded-full font-bold transition-all duration-300 ease-out hover:ease-in">
                      {x.location?.city?.name}
                    </Link>
                    <p className="flex-1 text-center">
                      {moment(x.event_date).format("DD.MM.YYYY")}
                    </p>
                  </motion.div>
                ))}
              </div>
              <button
                className="w-full py-2"
                onClick={() =>
                  index < events.length - 3 && setIndex(index + 1)
                }>
                <AiOutlineArrowDown className="mx-auto text-pink text-xl" />
              </button>
            </div>
          </div>

          <div className="sm:block hidden text-center md:text-lg text-md font-bold md:w-[30%] w-[25%]">
            <p className="text-gray">{translate("note3")}</p>
            <p>{translate("note4")}</p>
            <p className="text-pink">ohne Shootinggebühr!</p>
          </div>

          {/* <div className="w-[30%]">
            <p className="text-2xl text-blue font-bold">ZU SPÄT HIER?</p>
            <p>
              Alle Termine schon vergeben, oder deine Stadt ist nicht
              aufgeführt? <br />
              Melde dich hier an und wir benachrichtigen Dich, wenn wir wieder
              in deiner Nähe sind!
            </p>

            <input
              placeholder="Vorname"
              className="border-b-2 border-b-light-grey w-full text-center mt-4 outline-none focus:border-b-blue"
            />
            <input
              placeholder="Email"
              className="border-b-2 border-b-light-grey w-full text-center my-2 outline-none focus:border-b-blue"
            />
            <input
              placeholder="Postal code"
              className="border-b-2 border-b-light-grey w-full text-center mb-4 outline-none focus:border-b-blue"
            />

            <p className="text-sm text-gray text-center">
              Ich möchte in Zukunft mit dem kostenlosen Newsletter von Foto Dino
              über alle Angebote und Aktionen informiert werden. Ich weiß, dass
              ich den Newsletter jederzeit wieder{" "}
              <a className="text-blue cursor-pointer">hier abbestellen</a> kann.
            </p>
            <center>
              <button className="bg-yellow flex items-center py-2 px-6 rounded-lg mt-2">
                absenden <AiOutlineArrowRight />
              </button>
            </center>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default observer(Events);
