import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { IMAGE_URL } from "../constants/url";
import translate from "../contexts/i18nProvider/translate";

import { BiPlus, BiMinus } from "react-icons/bi";

import { motion } from "framer-motion";
import Image from "next/image";

import { BottomScroll } from "../store/tracking";

const Faqs = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const [hasBeenViewed, setHasBeenViewed] = useState(false);

  useEffect(() => {
    inView && setHasBeenViewed(true);
  }, [inView]);

  useEffect(() => {
    hasBeenViewed && BottomScroll();
  }, [hasBeenViewed]);

  const data = [
    {
      ques: "Welche Kleidung soll ich anziehen?",
      ans: "Am wichtigsten ist, dass ihr euch wohlfühlt und bequeme Kleidung anzieht, die zu euch passt!",
      ans2: "Gut eignet sich immer Kleidung in hellen und möglichst warmen (Natur-) Tönen wie beige, weiß, khaki, olive, hellbraun, cognac, rostrot. ",
      ans3: "Zudem lassen helle Farben die Bilder viel freundlicher und wärmer wirken.",
    },
    {
      ques: "Wieso arbeitet Ihr ohne übliche Shooting oder Aufnahmegebühr?",
      ans: "Wir möchten jedem die Möglichkeit geben, ein Fotoshooting auszuprobieren, ohne dass eine teure Fotografie übliche Shooting-, Termin-, oder Aufnahmegebühr anfällt.",
      ans2: "Unsere langjährige Erfahrung hat uns gezeigt, dass insbesondere die Kleinen manchmal einfach keine ust haben. ",
      ans3: "Deshalb möchten wir in solchen Fällen auf jegliche Gebühren verzichten. ",
      ans4: "Wenn das Fotoshooting erfolgreich ist und dir die Aufnahmen gefallen, kannst du die liebevoll aufgenommenen Fotos erwerben und diese unvergesslichen Erinnerungen für immer festhalten.",
    },
    {
      ques: "Wann & Wie bekomme ich die Bilder?",
      ans: "Hast du dich für eines unserer wundervollen Fotoprodukte entschieden, benötigen wir ca. 14 Tage für die Bearbeitung und Produktion deiner schönen Bilder. ",
      ans2: "Im Anschluss kannst du deine Leinwände im Foto Dino Onlineshop selbst gestalten, sowie die Fotos in höchster Auflösung und ohne Wasserzeichen sofort herunterladen & mit deinen Liebsten teilen!",
    },
    {
      ques: "Wer darf alles mit aufs Bild?",
      ans: "Bei uns dürfen alle mit aufs Bild! Also Eltern, Geschwister, Familie, Haustiere oder einfach nur dein Schatz ganz alleine.",
    },
  ];

  const [show, setShow] = useState(null);

  return (
    <div
      ref={ref}
      className={`xs:h-[70vh] ${
        show === null
          ? "h-[70vh]"
          : show === 0
          ? "h-[90vh]"
          : show === 1
          ? "h-[120vh]"
          : show === 2
          ? "h-[100vh]"
          : show === 3
          ? "h-[75vh]"
          : ""
      } relative font-oswald overflow-hidden`}>
      <div className="hidden sm:block bg-yellow lg:w-[500px] w-[300px] absolute h-full z-0"></div>
      <div className="absolute flex xs:items-center items-start lg:px-32 sm:px-20 h-full">
        <Image
          src={IMAGE_URL + "/webps/most_frequently_questions.webp"}
          alt="faq-img"
          className="hidden md:block lg:w-[400px] lg:h-[600px] w-[300px] h-[500px] object-cover rounded-lg"
          width={400}
          height={600}
        />

        <div className="md:pl-10">
          <div className="sm:bg-transparent bg-yellow sm:text-left text-center sm:py-0 py-5">
            <h2 className="lg:text-8xl drop-shadow-lg font-black text-5xl">
              {translate("faq")}
            </h2>
            <h1 className="lg:text-3xl text-2xl sm:mb-5 mt-3">
              {translate("faq_detail")}
            </h1>
          </div>
          <div className="sm:p-0 p-10">
            {data.map((i, index) => (
              <Faq
                data={i}
                key={index}
                index={index}
                show={show}
                setShow={setShow}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;

const Faq = ({
  data: { ques, ans, ans2, ans3, ans4 },
  index,
  show,
  setShow,
}) => {
  return (
    <motion.div
      className="cursor-pointer"
      onClick={() => setShow(show === index ? null : index)}>
      <div className="flex justify-between sm:py-5 py-3">
        <motion.h1
          initial={{ translateY: -10, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ delay: index / 10 }}
          className="lg:text-xl text-md">
          {ques}
        </motion.h1>
        <button>
          {show === index ? (
            <BiMinus className="text-gray" />
          ) : (
            <BiPlus className="text-gray" />
          )}
        </button>
      </div>

      <motion.div
        initial={{ height: 0, overflow: "hidden" }}
        animate={{ height: show === index ? "auto" : 0 }}>
        <h2 className="text-gray font-sans pb-5">
          {ans} <br /> {ans2 && ans2} <br /> {ans3 && ans3} <br />{" "}
          {ans4 && ans4}
        </h2>
      </motion.div>

      <hr className="border-1 border-light-grey"></hr>
    </motion.div>
  );
};
