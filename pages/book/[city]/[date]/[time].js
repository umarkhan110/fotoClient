import { useEffect } from "react";

import Faqs from "../../../../components/Faqs";
import Shooting from "../../../../components/Shooting";
import Events from "../../../../components/Events";
import EventDetail from "../../../../components/EventDetail";

import { observer } from "mobx-react";
import { EventStore } from "../../../../store/event";
import translate from "../../../../contexts/i18nProvider/translate";
import Loader from "../../../../components/Loader";
import ShootLimit from "../../../../components/ShootLimit";
import BookingConfirmed from "../../../../components/BookingConfirmed";

import { useRouter } from "next/router";
import timeslots from "../../../../data/timeslots";
import SEO from "../../../../components/SEO";
import { ViewContent } from "../../../../store/tracking";

const Index = () => {
  const {
    state: { event, loading, error, confirmedEvent },
    getEvent,
    setSlot,
  } = EventStore;

  const router = useRouter();
  const { city, date, time } = router.query;

  useEffect(() => {
    city && date && getEvent(city, date);
    const slot = timeslots.find((x) => x.time.replaceAll(" ", "") === time);
    setSlot(slot);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city, date, time]);

  useEffect(() => {
    ViewContent();
  }, []);

  return (
    <div>
      <SEO
        title="Book Your Session"
        keywords="Book photo session, schedule appointment, newborn photography, maternity photography, family photography, portrait photography, professional photographer, photo shoot booking, photo session reservation"
        description="Book your photo session with us and capture beautiful memories with your loved ones. We specialize in newborn, maternity, family, and portrait photography. Contact us today to schedule your appointment."
        url={`https://next.foto-dino.de/${city}/${date}/${time}`}
      />
      <div className="xs:block hidden">
        {loading && <Loader />}
        <div className="relative">
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
        </div>

        {event && <EventDetail />}

        <div className="sm:hidden font-oswald block text-center md:text-lg text-md font-bold w-full py-6 xs:px-16 px-6">
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
        </div>

        <Shooting />
        <Faqs />

        {error.shootLimit && <ShootLimit />}
        {confirmedEvent && <BookingConfirmed confirmedEvent={confirmedEvent} />}
      </div>

      <div className="xs:hidden block">
        {event && <EventDetail />}
        {error.shootLimit && <ShootLimit />}
        {confirmedEvent && <BookingConfirmed confirmedEvent={confirmedEvent} />}
      </div>
    </div>
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
