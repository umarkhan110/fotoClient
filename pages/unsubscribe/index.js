import { useEffect, useState } from "react";

import Image from "next/image";
import translate from "../../contexts/i18nProvider/translate";

import { AiOutlineLoading3Quarters } from "react-icons/ai";

import get_query from "../../actions/get_query";
import delete_query from "../../actions/delete_query";
import Link from "next/link";
import { IMAGE_URL } from "../../constants/url";
import SEO from "../../components/SEO";
import { ViewContent } from "../../store/tracking";

const Index = () => {
  const [err, setErr] = useState("");
  const [email, setEmail] = useState("");
  const [unsubscribed, setUnsubscribed] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (email === "") {
      setErr(translate("enter_email"));
      setLoading(false);
      return;
    }
    get_query(`/messages/newsletter/?email=${email}`)
      .then((res) => {
        const count = res.data.length;
        if (count === 0) {
          setErr(translate("email_error"));
          return;
        } else {
          res.data.forEach((x, i) => {
            delete_query(`/messages/newsletter/${x.id}/`).then((res) => {
              res.status === 204 && i === count - 1 && setUnsubscribed(true);
            });
          });
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    ViewContent();
  }, []);

  return (
    <>
      <SEO title="Unsubscribe Us" url="https://next.foto-dino.de/unsubscribe" />
      <main
        role="main"
        className="flex items-center justify-center sm:py-32 py-10">
        <article className="sm:w-[500px] w-[90%] bg-white rounded-3xl text-center drop-shadow-lg">
          <section className="bg-blue rounded-3xl relative p-7">
            <Image
              src="https://foto-dino.de/assets/images/star-bg.png"
              width={500}
              height={500}
              alt="background"
              className="h-full object-cover absolute top-0 right-0 rounded-3xl"
            />
            <h2 className="font-cursive text-white sm:text-4xl text-2xl">
              {translate("unsubscribe_emails")}
            </h2>
          </section>

          <section className="sm:p-10 p-5">
            {unsubscribed ? (
              <>
                <p className="sm:text-lg font-bold mb-5">
                  {translate("unsubscribe_successful")}
                </p>
                <p className="sm:text-lg font-bold mb-5">
                  {translate("see_you_soon")}
                </p>
                <Link href={"/"}>
                  <button
                    type="submit"
                    className="bg-yellow mt-4 ml-2 py-2 px-4 rounded w-44">
                    Homepage
                  </button>
                </Link>
              </>
            ) : (
              <>
                <p className="sm:text-lg font-bold mb-5">
                  {translate("tell_email")}
                </p>

                <input
                  onFocus={() => setErr("")}
                  className={`border-2 ${
                    err ? "border-red" : "border-light-grey"
                  } px-4 py-2 rounded-lg w-full mr-2 outline-none sm:text-base text-sm`}
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <p className="text-red text-left">{err}</p>

                {loading ? (
                  <button className="bg-yellow mt-4 ml-2 py-3 rounded w-44">
                    <AiOutlineLoading3Quarters className="animate-spin mx-auto" />
                  </button>
                ) : (
                  <button
                    className="bg-yellow mt-4 ml-2 py-2 px-4 rounded w-44 sm:text-base text-sm"
                    type="submit"
                    onClick={onSubmit}>
                    {translate("signout")}
                  </button>
                )}
              </>
            )}
          </section>
        </article>
      </main>
    </>
  );
};

export default Index;
