import { AiOutlineArrowDown } from "react-icons/ai";

import { motion } from "framer-motion";
import timeslots from "../data/timeslots";
import Link from "next/link";

import { TimeSlotClick } from "../store/tracking";
import { useEffect, useState } from "react";

const Timeslots = ({ event, setSlot }) => {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowToast(false);
    }, 1500);
    return () => clearTimeout(timer);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showToast]);

  return (
    <>
      <div className="md:w-auto w-full flex-1 border-2 border-blue rounded-lg md:m-4 md:ml-0 drop-shadow-lg bg-white">
        <div className="bg-blue flex justify-between items-center p-2 text-white sm:text-2xl text-xl text-center">
          <motion.button
            animate={{ translateY: [0, -10, 10, 0] }}
            transition={{ repeat: Infinity, delay: 1 }}>
            <AiOutlineArrowDown />
          </motion.button>
          <div>
            <p className="font-bold">FOTOSHOOTING SICHERN!</p>
            <p className="text-xl">Bitte Wunschtermin antippen</p>
          </div>
          <motion.button
            animate={{ translateY: [0, -10, 10, 0] }}
            transition={{ repeat: Infinity, delay: 1 }}>
            <AiOutlineArrowDown />
          </motion.button>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-4 xs:grid-cols-3 grid-cols-2 gap-2 p-4">
          {timeslots.map((x, i) => (
            <>
              {event.blocked_slots.find((item) => item.slot_number === x.id) ||
              event.booked_slots.filter((item) => item.slot_number === x.id)
                .length > 1 ? (
                <div className="w-full relative">
                  <button
                    key={i}
                    onClick={() => setShowToast(true)}
                    className="w-full bg-light-grey p-2 rounded-lg text-white font-sans font-bold">
                    {x.time}
                  </button>
                </div>
              ) : (
                <motion.div
                  initial={{ translateY: -10, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ delay: i / 30 }}>
                  <Link
                    href={`/book/${event.location.city.name}/${
                      event.event_date
                    }/${x.time.replaceAll(" ", "")}?formopen=${true}`}
                    key={i}
                    onClick={() =>
                      TimeSlotClick(
                        event.location.city.name,
                        x.time,
                        event.location.postal_code,
                      )
                    }>
                    <p
                      onClick={() => setSlot(x)}
                      className="shine p-2 rounded-lg text-center text-white font-sans font-bold drop-shadow-lg">
                      {x.time}
                    </p>
                  </Link>
                </motion.div>
              )}
            </>
          ))}
        </div>
      </div>
      {showToast && (
        <div className="fixed flex justify-center w-full left-0">
          <p className="bg-black text-white py-2 px-6 text-lg font-sans rounded-full drop-shadow-lg">
            Termin bereits vergeben
          </p>
        </div>
      )}
    </>
  );
};

export default Timeslots;
