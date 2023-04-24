import { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import translate from "../../../contexts/i18nProvider/translate";

import { useRouter } from "next/router";
import { FormattedMessage } from "react-intl";

import { BsChevronLeft } from "react-icons/bs";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import get_query from "../../../actions/get_query";
import post_query from "../../../actions/post_query";
import { IMAGE_URL } from "../../../constants/url";
import { ViewContent } from "../../../store/tracking";

const Index = () => {
  const router = useRouter();
  const { shoot_id } = router.query;

  const [showCard, setShowCard] = useState(false);
  const [text, setText] = useState("");
  const [late, setLate] = useState(false);
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const onDelete = () => {
    setLoading(true);
    if (text === "") {
      setErr(translate("cancel_reason"));
      setLoading(false);
      return;
    }

    post_query(`/events/shoots/cancel/?shoot_id=${shoot_id}`, {
      shoot_id: shoot_id,
      reason: text,
    })
      .then((res) => {
        if (res.status === 200) {
          setShowCard(true);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    ViewContent();
  }, []);

  useEffect(() => {
    var shootTime;
    get_query(`/events/shoots/${shoot_id}/`).then((res) => {
      if (res.status === 200) {
        shootTime = res?.data.shoot_time;
        get_query(`/events/events/${res?.data.event}/`).then((res) => {
          var t1 = new Date(res.event_date + " " + shootTime);
          var t2 = new Date();
          var dif = (t1.getTime() - t2.getTime()) / 1000;
          if (dif < 86400) {
            setLate(true);
          } else {
            setLate(false);
          }
        });
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="flex items-center justify-center sm:py-32 py-10">
      {showCard ? (
        <Card />
      ) : (
        <article className="sm:w-[500px] w-[90%] bg-white rounded-3xl text-center pb-10 drop-shadow-lg">
          <section className="bg-blue rounded-3xl relative p-7">
            <Image
              src="https://foto-dino.de/assets/images/star-bg.png"
              width={500}
              height={500}
              alt="background"
              className="h-full object-cover absolute top-0 right-0 rounded-3xl"
            />
            {late ? (
              <div className="text-white font-oswald sm:text-lg">
                <h2 className="font-cursive sm:text-3xl text-xl mb-4">
                  {translate("cancel_too_late1")}
                </h2>
                <p>{translate("cancel_too_late2")}</p>
                <p>{translate("cancel_too_late3")}</p>
                <p>{translate("cancel_too_late4")}</p>
              </div>
            ) : (
              <div className="text-white sm:text-lg font-oswald">
                <h2 className="font-cursive sm:text-3xl text-xl mb-4">
                  {translate("cancel_on_time1")}
                </h2>
                <p>{translate("cancel_on_time2")}</p>
              </div>
            )}
          </section>

          <section className="body">
            <FormattedMessage
              id={late ? "cancel_late_reason" : "cancel_early_reason"}
              defaultMessage="Reason">
              {(placeholder) => (
                <textarea
                  className="border-[1px] border-gray rounded-xl resize-none sm:w-96 w-[90%] h-48 mt-[-20px] z-10 relative sm:p-4 p-2 outline-none sm:text-base text-sm"
                  onFocus={() => setErr("")}
                  placeholder={placeholder}
                  variant="filled"
                  name="reason"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              )}
            </FormattedMessage>
            <p className="text-red">{err}</p>

            <div className="mt-4 flex items-center justify-center gap-3 px-4">
              <Link href="/">
                <button
                  className="text-blue font-bold flex items-center gap-1 sm:text-base text-sm"
                  type="button">
                  <BsChevronLeft />
                  {translate("dont_cancel")}
                </button>
              </Link>
              {loading ? (
                <button className="bg-yellow ml-2 py-3 rounded sm:w-44 w-32">
                  <AiOutlineLoading3Quarters className="animate-spin mx-auto" />
                </button>
              ) : (
                <button
                  className="bg-yellow ml-2 py-2 px-4 rounded sm:w-44 w-32 sm:text-base text-sm"
                  type="submit"
                  onClick={() => onDelete()}>
                  {late ? translate("cancel_late") : translate("cancel_early")}
                </button>
              )}
            </div>
          </section>
        </article>
      )}
    </main>
  );
};

export default Index;

const Card = () => {
  return (
    <section className="sm:w-[500px] w-[90%] sm:pb-10 pb-5 bg-white rounded-3xl text-center drop-shadow-lg">
      <div className="bg-blue sm:h-36 sm:py-0 py-5 rounded-3xl relative flex items-center justify-center">
        <Image
          src="https://foto-dino.de/assets/images/star-bg.png"
          width={500}
          height={500}
          alt="background"
          className="h-full object-cover absolute rounded-3xl"
        />
        <p className="text-white sm:text-5xl text-3xl font-cursive">
          {translate("thankyou_for_feedback")}
        </p>
      </div>

      <div className="sm:mt-10 mt-5 sm:px-5 px-3">
        <p className="sm:text-lg mb-2 font-bold">
          {translate("we_sent_confirmation")}
        </p>
        <p className="mb-2 sm:text-base text-sm">
          {" "}
          {translate("check_ad_and_spam")}
        </p>

        <p className="font-cursive sm:text-3xl text-xl font-bold">
          <span style={{ color: "#95B5DC" }}>Bis</span>{" "}
          <span style={{ color: "#E6C442" }}>zum nächsten</span>{" "}
          <span style={{ color: "#E9ABBC" }}>Mal</span> !
        </p>

        <Link href="/">
          <button className="bg-yellow rounded-lg py-2 px-4 mt-5 sm:text-base text-sm">
            Homepage
          </button>
        </Link>
      </div>
    </section>
  );
};
