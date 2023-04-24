import { useEffect } from "react";

import Faqs from "../../../components/Faqs";
import Shooting from "../../../components/Shooting";
import Events from "../../../components/Events";
import EventDetail from "../../../components/EventDetail";

import { observer } from "mobx-react";
import { EventStore } from "../../../store/event";
import translate from "../../../contexts/i18nProvider/translate";
import Loader from "../../../components/Loader";
import ShootLimit from "../../../components/ShootLimit";
import BookingConfirmed from "../../../components/BookingConfirmed";

import { useRouter } from "next/router";
import moment from "moment";
import { ViewContent } from "../../../store/tracking";

const Index = () => {
  const {
    state: { event, loading, error, confirmedEvent },
    getEvent,
  } = EventStore;

  const router = useRouter();
  const { city, date } = router.query;

  useEffect(() => {
    city && date && getEvent(city, date);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city, date]);

  useEffect(() => {
    ViewContent();
  }, []);

  return (
    <>
      <main>
        {loading && <Loader />}
        <section className="relative">
          <video
            className="w-full h-full object-cover"
            loop={true}
            preload="auto"
            autoPlay
            playsInline
            muted>
            <source
              src="https://assets.foto-dino.de/videos/header_compressed_to_1.7.mp4"
              type="video/mp4"
            />
          </video>
        </section>

        {event && <EventDetail />}

        <section className="sm:hidden font-oswald block text-center md:text-lg text-md font-bold w-full py-6 xs:px-16 px-6">
          <p className="text-blue xs:text-3xl text-2xl">
            {translate("then_buy")}
          </p>
          <p className="text-gray xs:text-lg text-sm my-2">
            {translate("note1")}
          </p>
          <p className="text-yellow xs:text-3xl text-2xl">
            {translate("note2")}
          </p>
          <p className="text-gray xs:text-lg text-sm my-2">
            {translate("note3")}
          </p>
          <p className="xs:text-xl text-md my-2">{translate("note4")}</p>
          <p className="text-pink xs:text-3xl text-2xl">ohne Shootinggebühr!</p>
        </section>

        <Shooting />
        <Faqs />

        {event && (
          <section className="mb-10 flex flex-col items-center font-oswald">
            <p className="flex justify-center gap-2 text-3xl uppercase font-bold">
              <span className="text-pink">jetzt</span>
              <span className="text-blue">shooting</span>
              <span>sichern!</span>
            </p>

            <p className="text-2xl underline font-bold my-2">
              Wunschtermin wählen in:
            </p>

            <button
              onClick={() => window.scrollTo(0, 0)}
              className="bg-yellow rounded-full py-2 px-10 text-white text-2xl drop-shadow-lg my-5">
              In {event?.location.city.name} <br />
              {moment(event?.event_date).format("dddd")}{" "}
              {moment(event?.event_date).format("DD.MM.YYYY")}
            </button>
          </section>
        )}

        {error.shootLimit && <ShootLimit />}
        {confirmedEvent && <BookingConfirmed confirmedEvent={confirmedEvent} />}
      </main>
    </>
  );
};

export default observer(Index);

// export const getStaticProps = async (context) => {
//   //   const res = await fetch(`${server}/api/articles/${context.params.id}`);

//   const event = await EventStore.getEvent(
//     context.params.city,
//     context.params.date,
//   );

//   console.log(event);

//   return {
//     props: {
//       event,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   //   const res = await fetch(`${server}/api/articles`);

//   const events = await EventStore.getEvents();

//   const paths = events.map(
//     (x) => (x = { params: { city: x.location.city.name, date: x.event_date } }),
//   );
//   //   const paths = ids.map((id) => ({ params: { city: id.city } }));

//   console.log(paths);

//   return {
//     paths,
//     fallback: false,
//   };
// };
