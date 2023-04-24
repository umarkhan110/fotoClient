import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import Image from "next/image";
import translate from "../contexts/i18nProvider/translate";

import { IMAGE_URL } from "../constants/url";
import { motion } from "framer-motion";
import { Carousel } from "flowbite-react";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import { IoClose } from "react-icons/io5";

import { ViewContent } from "../store/tracking";

import types from "../data/shootingCategories";

const Shooting = () => {
  const [type, setType] = useState(null);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  const [hasBeenViewed, setHasBeenViewed] = useState(false);

  useEffect(() => {
    inView && setHasBeenViewed(true);
  }, [inView]);

  useEffect(() => {
    hasBeenViewed && ViewContent();
  }, [hasBeenViewed]);

  return (
    <section id="shooting" className="md:p-20 xs:p-10 p-5 font-oswald">
      <h1 className="md:text-6xl xs:text-5xl text-4xl sm:m-0 xs:mb-10 mb-5 font-black drop-shadow-2xl">
        {translate("shootings")}
      </h1>

      <div className="sm:block hidden my-10 font-sans">
        {types.map((x, i) => (
          <NavItem type={x} index={i} key={i} setType={setType} />
        ))}
      </div>

      <div className="hidden sm:grid grid-cols-4 grid-rows-2 gap-2 text-white">
        {types.map((x, i) => (
          <button
            key={i}
            onClick={() => setType(x)}
            className={`relative drop-shadow-lg cursor-pointer ${
              i === 1 && "col-span-2 row-span-2"
            }`}>
            <Image
              className="w-full h-full"
              src={x.img}
              alt="shooting-img"
              width={500}
              height={500}
            />
            <div className="bg-black/10 hover:bg-black/20 absolute top-0 flex items-center justify-center flex-col h-full w-full">
              <p className="lg:text-6xl text-4xl font-black drop-shadow-lg">
                {x.name}
              </p>
              <p>{x.age}</p>
            </div>
          </button>
        ))}
      </div>

      <button
        onClick={() => setType(types[1])}
        className="sm:hidden block h-full w-full relative drop-shadow-lg cursor-pointer text-white">
        <Image
          className="w-full h-full"
          src={IMAGE_URL + "/webps/pregnant.webp"}
          alt="shooting-img"
          width={1000}
          height={1000}
        />

        <div className="bg-black/10 hover:bg-black/20 absolute top-0 flex items-center justify-center flex-col h-full w-full">
          <p className="text-6xl font-black drop-shadow-lg">Babybauch</p>
          <p className="text-3xl mt-3">AB 30. WOCHE</p>
        </div>
      </button>

      <div
        ref={ref}
        className="sm:hidden block xs:h-[350px] h-80 w-full text-white mt-5">
        <Carousel
          slideInterval={1250}
          leftControl={
            <AiOutlineDoubleLeft className="text-blue text-3xl ml-[-1.25rem]" />
          }
          rightControl={
            <AiOutlineDoubleRight className="text-blue text-3xl mr-[-1.25rem]" />
          }
          indicators={false}>
          {types
            .filter((x) => x.name !== "Babybauch")
            .map((x, i) => (
              <button
                key={i}
                onClick={() => setType(x)}
                className={`h-full relative drop-shadow-lg cursor-pointer xs:w-[350px] xs:h-[350px] w-[260px] h-[260px]`}>
                <Image
                  className="w-full h-full object-contain"
                  src={x.img}
                  alt="shooting-img"
                  width={500}
                  height={500}
                />

                <div className="absolute top-0 flex items-center justify-center flex-col h-full w-full">
                  <p className="lg:text-6xl text-6xl font-black drop-shadow-lg">
                    {x.name}
                  </p>
                  <p className="text-2xl drop-shadow-lg">{x.age}</p>
                </div>
              </button>
            ))}
        </Carousel>
      </div>

      {type && <Gallery type={type} close={() => setType(null)} ref={ref} />}
    </section>
  );
};

export default Shooting;

const NavItem = ({ type, setType, index }) => {
  return (
    <motion.button
      initial={{ translateX: -100, opacity: 0 }}
      whileInView={{ translateX: 0, opacity: 1 }}
      transition={{ delay: index / 10 }}
      className="bg-yellow md:w-[120px] w-[100px] md:py-3 py-2 rounded md:mr-5 mr-2 drop-shadow-md hover:brightness-[0.9]"
      onClick={() => setType(type)}>
      {type.name}
    </motion.button>
  );
};

const Gallery = ({ type, close }) => {
  return (
    <div className="fixed z-50 bg-white/30 w-full h-full top-0 left-0 flex items-center justify-center">
      <div className="text-center relative xs:h-[740px] h-screen xs:w-[500px] w-full bg-white xs:rounded-lg xs:border-2 xs:border-blue p-4">
        <Image
          className="w-14 h-14 absolute top-10"
          src="https://foto-dino.de/assets/icons/dino.png"
          alt="logo"
          width={100}
          height={100}
        />

        <button className="absolute right-4 top-10 z-30" onClick={close}>
          <IoClose className="text-2xl text-dark-blue bg-pink rounded-full p-1" />
        </button>

        <h1 className="mt-6 text-3xl font-cursive font-bold">{type.name}</h1>
        <p className="mt-2 pb-4 font-cursive font-bold">
          ZEITPUNKT: {type.age}
        </p>

        <p className="font-sans text-sm">{type.text1}</p>
        <div className={`w-full xs:h-[450px] h-[350px] my-2`}>
          <Carousel
            slideInterval={1500}
            leftControl={
              <AiOutlineDoubleLeft className="text-blue text-3xl ml-[-1.25rem]" />
            }
            rightControl={
              <AiOutlineDoubleRight className="text-blue text-3xl mr-[-1.25rem]" />
            }
            indicators={false}>
            <Image
              src={type.img}
              alt="shooting-img"
              className="object-contain w-full h-full"
              width={1000}
              height={1000}
            />

            {type.pics.map((x, i) => (
              <Image
                key={i}
                src={type.url + x}
                alt="shooting-img"
                className="object-contain w-full h-full"
                width={1000}
                height={1000}
              />
            ))}
          </Carousel>
        </div>
        <p className="font-sans text-sm">{type.text2}</p>
        {/* <div className="absolute bottom-10 flex justify-center w-full left-0"> */}
        <button
          onClick={() => {
            close();
            window.scrollTo(0, 0);
          }}
          className="bg-yellow font-bold text-xl text-white font-cursive px-6 py-2 rounded-full drop-shadow-lg mt-2">
          TERMIN SICHERN
        </button>
        {/* </div> */}
      </div>
    </div>
  );
};
