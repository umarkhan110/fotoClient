import { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

import translate from "../contexts/i18nProvider/translate";
import { IoClose } from "react-icons/io5";
import { AiOutlineCheck, AiOutlineLoading3Quarters } from "react-icons/ai";

import get_query from "../actions/get_query";
import moment from "moment";

const SearchAppointment = ({ close }) => {
  const [email, setEmail] = useState("");
  const [shoots, setShoots] = useState([]);
  const [err, setErr] = useState("");

  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    if (email === "") {
      setErr(translate("enter_email"));
      setLoading(false);
      setShoots([]);
      return;
    }
    get_query(`/users/clients/?email=${email}`)
      .then((res) => {
        if (res.status === 200 && res.length === 0) {
          setErr(translate("email_not_found"));
          return;
        }
        get_query(`/events/shoots/?client=${res.data[0].id}`).then((res) => {
          if (res.status === 200) {
            if (res.length === 0) {
              setErr(translate("email_event_not_found"));
              return;
            }
            setShoots(res.data);
          }
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <main className="fixed z-50 bg-black/30 w-full h-full top-0 flex items-center justify-center">
      <article className="sm:w-[500px] w-[90%] bg-white rounded-3xl text-center pb-10">
        <section className="bg-blue sm:h-36 h-24 rounded-3xl relative flex items-center justify-center">
          <Image
            src="https://foto-dino.de/assets/images/star-bg.png"
            width={500}
            height={500}
            alt="background"
            className="h-full object-cover absolute"
          />
          <p className="text-white sm:text-5xl text-3xl font-cursive">
            {translate("cancel_appointment")}
          </p>

          <button className="absolute right-4 top-4" onClick={close}>
            <IoClose className="text-2xl text-dark-blue bg-pink rounded-full p-1" />
          </button>
        </section>

        <section className="sm:mt-10 mt-5 px-5">
          <p className="sm:text-lg text-sm mb-2">
            {translate("cancel_appointment_form1")}
          </p>
          <span style={{ width: "100%", display: "flex" }}>
            <input
              onFocus={() => setErr("")}
              className={`border-2 ${
                err ? "border-red" : "border-light-grey"
              } px-4 py-2 rounded-lg w-full mr-2 outline-none sm:text-base text-sm`}
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {loading ? (
              <button className="text-white px-3 bg-light-grey rounded-full h-10 w-10 animate-spin">
                <AiOutlineLoading3Quarters />
              </button>
            ) : (
              <button
                className="px-3 bg-light-grey rounded-full h-10 w-10"
                onClick={() => fetchData()}>
                <AiOutlineCheck />
              </button>
            )}
          </span>

          <p className="text-red text-left">{err}</p>

          {shoots.length > 0 && (
            <>
              <hr className="border-light-grey mt-4" />
              <p className="mt-2">{translate("select_event_for_cancel")}</p>
            </>
          )}
          <div className="flex flex-col items-center">
            {shoots.map((x) => (
              <Event key={x.id} shoot={x} />
            ))}
          </div>
        </section>
      </article>
    </main>
  );
};

export default SearchAppointment;

const Event = ({ shoot }) => {
  const [event, setEvent] = useState({});

  useEffect(() => {
    get_query(`/events/query/${shoot.event}/`).then((res) => {
      res?.status === 200 && setEvent(res.data);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <button
      className="mb-2 bg-yellow px-4 py-2 rounded my-2 sm:text-base text-sm"
      onClick={() => {}}>
      <Link href={`/cancel/${shoot.id}`}>
        {event.location?.city?.name}{" "}
        {moment(event.event_date).format("DD.MM.YYYY")}
      </Link>
    </button>
  );
};
