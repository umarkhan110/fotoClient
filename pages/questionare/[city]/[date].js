import React, { useState, useEffect } from "react";

import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import { IMAGE_URL } from "../../../constants/url";
import moment from "moment";

const Index = () => {
  const [step, setStep] = useState(1);

  return (
    <div
      className={`${
        step === 5
          ? "bg-[url('https://assets.foto-dino.de/images/webps/pregnant.webp')]"
          : step === 1
          ? "bg-[url('https://assets.foto-dino.de/images/pngs/Fotodino_Pinterest_3.png')] bg-[length:500px_700px] bg-top"
          : step === 2
          ? "bg-[url('https://assets.foto-dino.de/images/webps/baby.webp')]"
          : step === 3
          ? "bg-[url('https://assets.foto-dino.de/images/webps/kids.webp')]"
          : step === 4 &&
            "bg-[url('https://assets.foto-dino.de/images/webps/fam.webp')]"
      } overflow-hidden bg-cover bg-center xs:py-20 py-10 flex justify-center items-center font-oswald`}>
      <div className="relative xs:w-[500px] w-[95%] p-10 border-blue border-4 rounded-3xl">
        <div
          className={`${
            step === 4 ? "bg-white/95" : "bg-white/90"
          } absolute h-full w-full z-0 top-0 left-0 rounded-3xl`}></div>
        <div className="flex flex-col items-center relative">
          <Image
            src={`${IMAGE_URL}/gifs/Final_Dino_GIF.gif`}
            alt="dino"
            width={100}
            height={100}
          />

          <Image
            src={`${IMAGE_URL}/pngs/camera.png`}
            alt="camera"
            width={200}
            height={100}
            className="w-full scale-[1.8]"
          />

          {step === 1 && <Step1 setStep={setStep} />}

          {step === 2 && <Step2 setStep={setStep} />}
          {step === 3 && <Step3 setStep={setStep} />}
          {step === 4 && <Step4 setStep={setStep} />}
          {step === 5 && <Step5 setStep={setStep} />}

          <Image
            src={`${IMAGE_URL}/pngs/camera.png`}
            alt="camera"
            width={200}
            height={100}
            className="w-full scale-[1.8]"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;

const Step1 = ({ setStep }) => {
  return (
    <>
      <p className="flex gap-2 xs:text-4xl text-3xl flex-wrap justify-center font-bold my-5">
        {/* <span className="text-blue">Herzlich</span>
        <span className="text-yellow">Willkommen</span>
        <span className="text-pink">Schön</span>
        <span className="text-yellow">dass</span>
        <span className="text-dark-blue">du</span>
        <span className="text-blue">da</span>
        <span className="text-pink">bist</span>
        <span className="text-yellow">!</span> */}
        <span className="text-blue text-center">
          Herzlich Willkomen bei Foto Dino!
        </span>
      </p>

      <p className="text-2xl text-center font-bold">
        Na, Lust auf schöne Bilder ?
      </p>

      <div className="flex gap-3 my-5">
        <button
          onClick={() => setStep(2)}
          className="text-xl text-bold bg-yellow drop-shadow-lg sm:w-52 w-32 rounded-full py-2">
          Ja
        </button>
        {/* <button
          onClick={() => setStep(5)}
          className="text-xl text-bold bg-pink sm:w-52 w-32 text-white rounded-full py-2">
          Nein
        </button> */}
      </div>
    </>
  );
};

const Step2 = ({ setStep }) => {
  return (
    <>
      <p className=" gap-2 text-maroon text-center xs:text-4xl text-3xl font-bold my-5">
        Für welches Fotoshooting interessierst du dich?
      </p>

      <div className="flex gap-3 my-5 flex-wrap justify-center">
        <button
          onClick={() => setStep(3)}
          className="text-xl text-bold bg-blue sm:w-52 w-32 text-white rounded-full py-2">
          Babybauch
        </button>
        <button
          onClick={() => setStep(3)}
          className="text-xl text-bold bg-pink sm:w-52 w-32 text-white rounded-full py-2">
          Newborn
        </button>
        <button
          onClick={() => setStep(3)}
          className="text-xl text-bold bg-blue sm:w-52 w-32 text-white rounded-full py-2">
          Baby
        </button>
        <button
          onClick={() => setStep(3)}
          className="text-xl text-bold bg-pink sm:w-52 w-32 text-white rounded-full py-2">
          Kinder
        </button>
        <button
          onClick={() => setStep(3)}
          className="text-xl text-bold bg-yellow w-52 text-white rounded-full py-2">
          Familie
        </button>
      </div>
    </>
  );
};

const Step3 = ({ setStep }) => {
  return (
    <>
      <p className="gap-2 xs:text-4xl text-2xl text-center text-maroon font-bold my-5">
        Möchtest du die übliche Shootinggebühr geschenkt bekommen?
      </p>

      <div className="flex gap-3 my-5">
        <button
          onClick={() => setStep(4)}
          className="text-xl text-bold bg-yellow drop-shadow-lg sm:w-52 w-32 rounded-full py-2">
          Ja, bitte!
        </button>
        {/* <button
          onClick={() => setStep(4)}
          className="text-xl text-bold bg-pink sm:w-52 w-32 text-white rounded-full py-2">
          weiß nicht
        </button> */}
      </div>
    </>
  );
};

const Step4 = ({ setStep }) => {
  const router = useRouter();
  const { date, city } = router.query;
  // const [days, hours, minutes, seconds] = useCountdown(date);

  //   useEffect(() => {
  //     router.beforePopState(({ as }) => {
  //       setStep(3);
  //     });

  //     return () => {
  //       router.beforePopState(() => true);
  //     };
  //   }, []);

  return (
    <>
      <p className="xs:text-6xl text-xl text-center font-bold">
        Dann sichere dir jetzt dein kostenfreies Traumshooting in:
      </p>

      <p className="text-maroon font-cursive text-center xs:text-4xl text-2xl font-bold my-3">
        {city} <br /> nur am <br /> {moment(date).format("dddd")}{" "}
        {moment(date).format("DD.MM.YYYY")}
      </p>

      {/* <p className="text-maroon text-center xs:text-4xl text-lg font-bold my-3">
        nur für kurze Zeit ohne Shootinggebühr!
      </p> */}

      {/* <div className="flex text-center gap-3">
        <div>
          <p className="bg-light-grey w-10 h-10 flex items-center justify-center rounded-lg">
            {days}
          </p>
          <p className="text-xs mt-1">Tage</p>
        </div>
        <div>
          <p className="bg-light-grey w-10 h-10 flex items-center justify-center rounded-lg">
            {hours}
          </p>
          <p className="text-xs mt-1">Stunden</p>
        </div>
        <div>
          <p className="bg-light-grey w-10 h-10 flex items-center justify-center rounded-lg">
            {minutes}
          </p>
          <p className="text-xs mt-1">Minuten</p>
        </div>
        <div>
          <p className="bg-light-grey w-10 h-10 flex items-center justify-center rounded-lg">
            {seconds}
          </p>
          <p className="text-xs mt-1">Sekunden</p>
        </div>
      </div> */}

      <Link href={`/book/${city}/${date}`}>
        <button className="font-sans my-3 px-8 text-xl font-bold bg-yellow drop-shadow-lg sm:w-52 w-full rounded-full py-2">
          freie Termine anzeigen
          {/* <br />
          {city} */}
        </button>
      </Link>

      <p className="font-bold">
        nur für kurze Zeit ganz <span className="underline">ohne</span>{" "}
        Shootinggebühr!
      </p>
    </>
  );
};

const Step5 = ({ setStep }) => {
  return (
    <>
      <p className="xs:text-6xl text-4xl text-center font-bold">
        <span className="text-yellow">GLÜCK</span>
        <span className="text-blue">WUNSCH</span>
        <span className="text-pink">!</span>
      </p>

      <p className="gap-2 text-maroon text-center xs:text-4xl text-2xl font-bold my-3">
        Wir machen auch wunderschöne Babybauch Bilder!
      </p>

      <button
        onClick={() => setStep(3)}
        className="font-sans my-3 text-xl font-bold bg-blue sm:w-52 w-full text-white rounded-full py-2">
        weiter zum Babybauch
        <br />
        Shooting
      </button>
    </>
  );
};

// const useCountdown = (targetDate) => {
//   const countDownDate = new Date(targetDate).getTime();

//   const [countDown, setCountDown] = useState(
//     countDownDate - new Date().getTime(),
//   );

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCountDown(countDownDate - new Date().getTime());
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [countDownDate]);

//   return getReturnValues(countDown);
// };

// const getReturnValues = (countDown) => {
//   // calculate time left
//   const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
//   const hours = Math.floor(
//     (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
//   );
//   const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

//   return [days, hours, minutes, seconds];
// };
