import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

import codes from "../data/phone";
import { AsYouType } from "libphonenumber-js";

import { observer } from "mobx-react";
import { EventStore } from "../store/event";
import { CloseBooking } from "../store/tracking";

import errors from "../data/bookingErrors";
import Link from "next/link";

import { useRouter } from "next/router";

const BookingForm = () => {
  const router = useRouter();

  const {
    state: {
      error,
      event: { event_date, location },
    },
    setSlot,
    createBooking,
    removeError,
  } = EventStore;

  const asYouType = new AsYouType("DE");

  const [agree, setAgree] = useState(false);
  const [localError, setLocalError] = useState(null);

  const [clientData, setClientData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    number: "",
    code: "+49",
    phone_number: "",
    street_name: "",
    street_number: "",
    city: "",
    postal_code: "",
  });

  const {
    first_name,
    last_name,
    email,
    number,
    code,
    street_name,
    street_number,
    city,
    postal_code,
  } = clientData;

  const isNotEmpty = (value) => {
    return value.length > 0;
  };

  const isFormatted = (value, regex) => {
    if (!regex) return true;
    return regex.test(value);
  };

  const onChange = (e) =>
    setClientData({ ...clientData, [e.target.name]: e.target.value });

  const testInput = () => {
    if (
      !isNotEmpty(first_name) ||
      !isFormatted(first_name, /^[a-zA-Z\-äöüß ]*$/)
    )
      return false;
    if (!isNotEmpty(last_name) || !isFormatted(last_name, /^[a-zA-Z\-äöüß ]*$/))
      return false;
    if (!isNotEmpty(email)) return false;
    if (!isNotEmpty(number) || !isFormatted(number, /^([0-9]{7,15})$/))
      return false;
    if (!isNotEmpty(street_name) || !isFormatted(street_name, /^(.{3,})$/))
      return false;
    if (!isNotEmpty(street_number) || !isFormatted(street_number, /^(.{0,5})$/))
      return false;
    if (!isNotEmpty(city)) return false;
    if (!isNotEmpty(postal_code) || !isFormatted(postal_code, /^([0-9]{0,5})$/))
      return false;
    else return true;
  };

  const onSubmit = (e) => {
    e.preventDefault();

    asYouType.input(number);

    const dataIsCorrect = testInput();

    if (!dataIsCorrect) {
      setLocalError("Please fill out all details correctly");
      return;
    }

    if (!agree) {
      setLocalError("Please agree to terms and conditions first");
      return;
    }

    createBooking({
      ...clientData,
      phone_number: asYouType.getNumber() ? asYouType.getNumber().number : null,
    }).then((res) => console.log(res));
  };

  useEffect(() => {
    router.beforePopState(({ as }) => {
      router.push(`/book/${location.city.name}/${event_date}?closed=${true}`);
      setSlot(null);
      CloseBooking();
    });

    return () => {
      router.beforePopState(() => true);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  return (
    <div
      className={`p-4 relative md:w-auto w-full flex-1 border-2 border-blue rounded-lg md:m-4 md:ml-0 xs:drop-shadow-lg xs:bg-white`}>
      <>
        <Link
          href={`/book/${location.city.name}/${event_date}?closed=${true}`}
          className="absolute right-4 top-4"
          onClick={() => {
            setSlot(null);
            CloseBooking();
          }}>
          <IoClose className="text-2xl text-dark-blue bg-pink rounded-full p-1" />
        </Link>
        <p className="text-xl font-bold mb-2">
          Jetzt ausfüllen & Termin sichern!
        </p>
        <form
          onFocus={() => {
            removeError();
            setLocalError(null);
          }}
          className="font-sans sm:text-md text-sm">
          <div className="my-1">
            <Input
              placeholder="Vorname"
              name="first_name"
              value={first_name}
              onChange={onChange}
              regex={/^[a-zA-Z\-äöüß ]*$/}
            />
          </div>
          <div className="my-1">
            <Input
              placeholder="Nachname"
              name="last_name"
              value={last_name}
              onChange={onChange}
              regex={/^[a-zA-Z\-äöüß ]*$/}
            />
          </div>
          <div className="flex w-full my-1">
            <div className="w-[70%]">
              <Input
                placeholder="Straße"
                name="street_name"
                value={street_name}
                onChange={onChange}
                regex={/^(.{3,})$/}
              />
            </div>

            <div className="w-[30%] ml-1">
              <Input
                placeholder="Nr."
                name="street_number"
                value={street_number}
                onChange={onChange}
                regex={/^(.{0,5})$/}
              />
            </div>
          </div>

          <div className="flex w-full my-1">
            <div className="w-[70%]">
              <Input
                placeholder="Stadt"
                name="city"
                value={city}
                onChange={onChange}
              />
            </div>

            <div className="w-[30%] ml-1">
              <Input
                placeholder="PLZ"
                name="postal_code"
                value={postal_code}
                onChange={onChange}
                regex={/^([0-9]{0,5})$/}
              />
            </div>
          </div>

          <div className="my-1">
            <Input
              placeholder="Email"
              name="email"
              value={email}
              onChange={onChange}
            />
          </div>

          <div className="flex w-full">
            <select
              name="code"
              value={code}
              onChange={(e) => onChange(e)}
              className="w-[30%] mb-1 mr-1 py-1 xs:px-2 px-1 border-[1px] border-light-grey outline-none">
              {codes.map((x, i) => (
                <option value={x.dial_code} key={i}>
                  {x.code} ({x.dial_code})
                </option>
              ))}
            </select>

            <div className="w-[70%] ml-1">
              <Input
                placeholder="Handynummer"
                name="number"
                value={number}
                onChange={onChange}
                regex={/^([0-9]{7,15})$/}
              />
            </div>
          </div>
        </form>
        <p>Da im Alltag immer etwas dazwischen kommen kann:</p>
        <p className="font-sans text-xs">
          Einfach in deiner Bestätigungsmail auf stornieren klicken und bis 24h
          vor dem Termin gratis stornieren oder per Mail an
          kontakt@foto-dino.de.
        </p>
        <div className="flex my-2 gap-2">
          <input
            type="checkbox"
            id="agree"
            name="agree"
            value="agree"
            className="h-10 w-10 mt-[-2px]"
            onChange={() => {
              setAgree(!agree);
            }}
          />
          <label htmlFor="agree" className="font-sans text-xs">
            Ich habe die{" "}
            <a className="text-blue cursor-pointer">Datenschutzbestimmungen</a>{" "}
            und <a className="text-blue cursor-pointer">AGB</a> gelesen&erkenne
            diese an.
          </label>
        </div>
        <p className="font-sans text-red text-center font-bold">
          {error.bookingForm}
        </p>
        <p className="font-sans text-red text-center font-bold">{localError}</p>
        <center>
          <button
            onClick={onSubmit}
            className="bg-yellow py-2 px-20 mt-2 rounded-full text-lg text-gray drop-shadow-lg font-bold">
            Termin Buchen
          </button>
        </center>
      </>
    </div>
  );
};

export default observer(BookingForm);

const Input = ({ placeholder, name, value, onChange, regex }) => {
  const [error, setError] = useState(null);

  const isNotEmpty = () => {
    return value.length > 0;
  };

  const isFormatted = () => {
    if (!regex) return true;
    return regex.test(value);
  };

  const validate = () => {
    isNotEmpty() && isFormatted() ? setError(null) : setError(errors[name]);
  };

  return (
    <>
      <input
        placeholder={placeholder}
        className={`${
          error ? "border-b-red" : "focus:border-b-blue"
        } border-light-grey border-b-2 w-full py-[5px] px-2 border-[1px] outline-none`}
        name={name}
        value={value}
        onChange={(e) => onChange(e)}
        onBlur={validate}
      />
      <label className="text-red">{error}</label>
    </>
  );
};
