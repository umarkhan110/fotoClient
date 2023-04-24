import { IoClose } from "react-icons/io5";
import Link from "next/link";
import { useEffect } from "react";

import { useRouter } from "next/router";
import { EventStore } from "../store/event";

const ShootLimit = () => {
  const router = useRouter();

  useEffect(() => {
    router.query.alreadyBooked = true;
    router.push(router);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="fixed z-50 bg-black/30 w-screen h-screen top-0 flex items-center justify-center">
      <div className="xs:w-[500px] w-[90%] bg-white drop-shadow-lg rounded-3xl">
        <div className="bg-blue text-white text-center rounded-3xl py-5 xs:text-xl text-base font-cursive font-bold">
          <p>DU HAST BEREITS EINEN TERMIN</p>
        </div>
        <div className="relative p-5 text-center">
          <Link href="/" onClick={() => EventStore.removeError()}>
            <button className="absolute xs:right-4 right-2 xs:top-6 top-2">
              <IoClose className="text-2xl text-dark-blue bg-pink rounded-full p-1" />
            </button>
          </Link>
          <p className="xs:text-lg text-base font-bold">
            Du möchtest umbuchen?
          </p>
          <p className="xs:text-base text-sm">
            Bitte storniere zu erst deinen bereits gemachten Termin hier:
          </p>
          <center>
            <Link href="/contact">
              <p className="bg-yellow py-2 rounded-full drop-shadow-lg xs:my-5 my-2 xs:w-72 w-52 xs:text-base text-sm">
                ersten Termin stornieren
              </p>
            </Link>
          </center>
          <p className="xs:text-base text-sm">
            Bitte beachte, dass du pro Event nur einen Termin buchan kannst.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShootLimit;
