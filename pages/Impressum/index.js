import { useEffect } from "react";
import SEO from "../../components/SEO";
import { ViewContent } from "../../store/tracking";

const Impressum = () => {
  useEffect(() => {
    ViewContent();
  }, []);

  return (
    <>
      <SEO
        title="Professional Baby and Family Photography Services | Capturing Life's Precious Moments"
        keywords="Baby photography, newborn photography, maternity photography, family photography, children photography, photos, professional, studio, packages, session, ideas, props, poses, dresses, outfits, near me, prices, locations, tips, gallery"
        description="At our photography studio, we specialize in capturing the beauty and essence of life's most precious moments. From newborn and maternity shoots to family portraits, we use our expertise and artistic vision to create stunning images that you'll treasure for a lifetime. Our professional and affordable photography services use natural light and creative techniques to create high-quality photos that showcase your unique family story. Book your session today and let us help you capture memories that will last a lifetime!"
        url="https://next.foto-dino.de/Impressum"
      />
      <main>
        <div className="bg-yellow w-[300px] h-screen absolute md:block hidden z-0 top-0"></div>
        <section className="relative z-10 h-full md:w-[70%] w-full mx-auto md:my-20 md:py-10 xs:pt-5 pb-5 md:px-4 rounded-lg drop-shadow-lg text-center md:bg-white">
          <h2 className="md:bg-white bg-yellow md:p-0 py-6 xs:text-5xl text-3xl md:drop-shadow-none drop-shadow-lg font-bold text-gray uppercase">
            Impressum
          </h2>
          <p className="xs:p-0 px-2">
            <br />
            Angaben gemäß § 5 TMG
            <br />
            <br />
            Ivo Kasatschok
            <br />
            Foto Dino bietet Fotografie Dienstleistungen
            <br />
            Justinus-Kerner-Str.5
            <br />
            72070 Tübingen
            <br />
            <br />
            Kontakt
            <br />
            Telefon: +4970715398307
            <br />
            E-Mail: info@foto-dino.de
            <br />
            <br />
            Umsatzsteuer-ID
            <br />
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
            <br />
            DE341166881
            <br />
            <br />
            EU-Streitschlichtung
            <br />
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:
            <br />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://ec.europa.eu/consumers/odr/."></a>
            <br />
            <br />
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
            <br />
            <br />
            Verbraucherstreitbeilegung / Universalschlichtungsstelle
            <br />
            <br />
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer
            <br />
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>
      </main>
    </>
  );
};

export default Impressum;
