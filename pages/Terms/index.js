import { useEffect } from "react";
import { ViewContent } from "../../store/tracking";

const Terms = () => {
  useEffect(() => {
    ViewContent();
  }, []);
  return (
    <main>
      <div className="bg-yellow w-[300px] h-screen absolute md:block hidden z-0 top-0"></div>
      <section className="relative z-10 h-full md:w-[70%] w-full mx-auto md:my-20 md:py-10 xs:pt-5 pb-5 md:px-4 rounded-lg drop-shadow-lg text-center md:bg-white">
        <h2 className="md:bg-white bg-yellow md:p-0 py-6 xs:text-5xl text-3xl md:drop-shadow-none drop-shadow-lg font-bold text-gray uppercase">
          AGB
        </h2>
        <br />
        <p className="xs:p-0 px-2 text-xl font-bold">
          Stornierungsbedingungen:
        </p>
        <br />
        <p className="xs:p-0 px-2">
          Da im Alltag immer etwas dazwischen kommen kann: Einfach in deiner
          Bestätigungsmail auf stornieren klicken und bis 24h vor dem Termin
          gratis stornieren oder per Mail and kontakt@foto-dino.de.
          Stornierungen innerhalb von 24h vor dem vereinbarten Termin oder
          Nichterscheinen wird leider mit einer Ausfallgebühr i.H.v 39€
          berechnet.
        </p>
        <br />
        <br />
      </section>
    </main>
  );
};

export default Terms;
