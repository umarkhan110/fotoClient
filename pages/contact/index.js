import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";

import translate from "../../contexts/i18nProvider/translate";
import { FormattedMessage } from "react-intl";
import codes from "../../data/phone";
import { useEffect, useState } from "react";

import post_query from "../../actions/post_query";

import Loader from "../../components/Loader";
import Image from "next/image";
import Link from "next/link";
import SearchAppointment from "../../components/SearchAppointment";
import { IMAGE_URL } from "../../constants/url";
import SEO from "../../components/SEO";
import { ViewContent } from "../../store/tracking";

const Index = () => {
  const [loading, setLoading] = useState(false);
  const [card, setCard] = useState(false);
  const [cancel, setCancel] = useState(false);

  const [formData, setFormData] = useState({
    code: "+49",
    phone_number: "",
  });

  const {
    first_name,
    last_name,
    email,
    client_number,
    message,
    code,
    read,
    number,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    post_query("/messages/contact/", formData).then((res) => {
      setLoading(false);
      res.status === 201 && setCard(true);
    });
  };

  useEffect(() => {
    ViewContent();
  }, []);

  return (
    <>
      <SEO
        title="Contact Us"
        keywords="Contact us, consultation, photography services, session booking, inquiry, question, professional photographer, photo shoot, family photography, newborn photography"
        description="Have a question or want to schedule a consultation? Get in touch with us today! We are happy to answer any questions you may have about our services or schedule a session for you.!"
        url="https://next.foto-dino.de/contact"
      />
      {loading && <Loader />}
      {card && <Card />}
      {cancel && (
        <SearchAppointment
          close={() => setCancel(false)}
          setLoading={setLoading}
        />
      )}

      <main className="lg:p-32 sm:p-20 p-0 xs:m-0 m-2 pt-10">
        <div className="left-0 top-0 absolute bg-yellow md:h-screen md:w-96 h-96 w-full" />
        <section className="bg-white relative w-full grid md:grid-cols-3 grid-row-3 drop-shadow-lg rounded-lg">
          <div className="md:col-span-2 rows-span-2 xs:p-10 p-3">
            <h2 className="md:text-xl xs:text-3xl text-xl font-oswald mb-5">
              {translate("get_in_touch")}
            </h2>
            <form onSubmit={onSubmit}>
              <div className="grid sm:grid-cols-2 gap-1">
                <FormattedMessage id="first_name" defaultMessage="surname">
                  {(placeholder) => (
                    <input
                      className="border-[1px] border-gray outline-none px-2 py-1 w-auto"
                      placeholder={placeholder}
                      name="first_name"
                      value={first_name}
                      onChange={(e) => onChange(e)}
                      required
                    />
                  )}
                </FormattedMessage>
                <FormattedMessage id="last_name" defaultMessage="surname">
                  {(placeholder) => (
                    <input
                      className="border-[1px] border-gray outline-none px-2 py-1"
                      placeholder={placeholder}
                      name="last_name"
                      value={last_name}
                      onChange={(e) => onChange(e)}
                      required
                    />
                  )}
                </FormattedMessage>
              </div>
              <input
                className="border-[1px] border-gray outline-none px-2 py-1 w-full mt-1"
                placeholder="Email"
                name="email"
                value={email}
                type="email"
                onChange={(e) => onChange(e)}
                required
              />
              <div className="mt-1 flex gap-1">
                <select
                  name="code"
                  className="border-[1px] border-gray outline-none px-2 py-1"
                  value={code}
                  onChange={(e) => onChange(e)}>
                  {codes.map((i, index) => (
                    <option value={i.dial_code} key={index}>
                      {i.code} ({i.dial_code})
                    </option>
                  ))}
                </select>
                <FormattedMessage id="phone" defaultMessage="surname">
                  {(placeholder) => (
                    <input
                      className="border-[1px] border-gray outline-none px-2 py-1 flex-1"
                      placeholder={placeholder}
                      name="number"
                      value={number}
                      onChange={(e) => onChange(e)}
                      required
                    />
                  )}
                </FormattedMessage>
              </div>
              <FormattedMessage id="client_number" defaultMessage="surname">
                {(placeholder) => (
                  <input
                    className="border-[1px] border-gray outline-none px-2 py-1 w-full mt-1"
                    placeholder={placeholder}
                    name="client_number"
                    value={client_number}
                    onChange={(e) => onChange(e)}
                  />
                )}
              </FormattedMessage>

              <FormattedMessage id="your_message" defaultMessage="surname">
                {(placeholder) => (
                  <textarea
                    className="border-[1px] border-gray outline-none px-2 py-1 w-full h-32 mt-1 resize-none "
                    placeholder={placeholder}
                    name="message"
                    value={message}
                    onChange={(e) => onChange(e)}
                    required
                  />
                )}
              </FormattedMessage>
              <p className="text-xs text-gray">
                {translate("cancel_note_contact_page")}
              </p>

              <div className="my-4 flex gap-2">
                <input
                  type="checkbox"
                  checked={read}
                  onChange={(e) =>
                    setFormData({ ...formData, read: e.target.checked })
                  }
                  id="terms"
                  required
                />
                <label className="cursor-pointer" htmlFor="terms">
                  {translate("accept_terms")}
                </label>
              </div>

              <div className="flex justify-between">
                <button
                  className="bg-yellow px-4 py-2 rounded drop-shadow-lg"
                  type="submit">
                  {translate("send")}
                </button>
                <button
                  type="button"
                  onClick={() => setCancel(true)}
                  className="md:static absolute xs:top-10 xs:right-10 top-3 right-3 bg-red/10 border-[1px] border-red drop-shadow-lg xs:px-4 px-2 xs:py-2 py-1 xs:text-base text-sm rounded drop-shadow-lg">
                  {translate("cancel_appointment")}
                </button>
              </div>
            </form>
          </div>
          <div className="bg-yellow md:rounded-r-lg rounded-b-lg lg:p-10 p-5 font-oswald">
            <p className="lg:text-5xl text-3xl drop-shadow-lg md:block hidden">
              Schreibe uns!
            </p>
            <div className="md:my-10 my-3">
              <div className="flex gap-2 items-center my-1">
                <div className="bg-white p-3 rounded-full">
                  <HiOutlineLocationMarker className="text-blue w-5 h-5" />
                </div>
                <p className="text-white">
                  Justinus-Kerner-Str. 27 72070 Tübingen
                </p>
              </div>
              <div className="flex gap-2 items-center my-1">
                <div className="bg-white p-3 rounded-full">
                  <HiOutlineMail className="text-blue w-5 h-5" />
                </div>
                <p className="text-white">kontakt@foto-dino.de</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Index;

const Card = () => {
  return (
    <section className="fixed z-50 bg-black/30 w-full h-full top-0 flex items-center justify-center">
      <div className="w-[500px] h-96 bg-white rounded-3xl text-center">
        <div className="bg-blue h-36 rounded-3xl relative flex items-center justify-center">
          <Image
            src="https://foto-dino.de/assets/images/star-bg.png"
            width={500}
            height={500}
            alt="background"
            className="h-full object-cover absolute rounded-3xl"
          />
          <p className="text-white text-6xl font-cursive">
            {translate("thankyou")}
          </p>
        </div>

        <div className="mt-20">
          <p className="text-xl font-bold">
            Wir haben deine Nachricht erhalten
          </p>
          <p>Wir melden uns schnellstmöglich bei dir!</p>
          <Link href="/">
            <button className="bg-yellow rounded-lg py-2 px-4 mt-10">
              Homepage
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
