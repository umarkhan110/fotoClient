import { useEffect } from "react";
import SEO from "../../components/SEO";
import { ViewContent } from "../../store/tracking";

const Widerruf = () => {
  useEffect(() => {
    ViewContent();
  }, []);
  return (
    <>
      <SEO
        title="Professional Baby and Family Photography Services | Capturing Life's Precious Moments"
        keywords="Baby photography, newborn photography, maternity photography, family photography, children photography, photos, professional, studio, packages, session, ideas, props, poses, dresses, outfits, near me, prices, locations, tips, gallery"
        description="At our photography studio, we specialize in capturing the beauty and essence of life's most precious moments. From newborn and maternity shoots to family portraits, we use our expertise and artistic vision to create stunning images that you'll treasure for a lifetime. Our professional and affordable photography services use natural light and creative techniques to create high-quality photos that showcase your unique family story. Book your session today and let us help you capture memories that will last a lifetime!"
        url="https://next.foto-dino.de/widerruf"
      />

      <main>
        <div>
          <div className="bg-yellow w-[300px] h-screen absolute md:block hidden z-0 top-0"></div>
          <div className="relative z-10 h-full md:w-[70%] w-full mx-auto md:my-20 md:py-10 xs:pt-5 pb-5 md:px-4 rounded-lg drop-shadow-lg text-center md:bg-white">
            <h2 className="md:bg-white bg-yellow md:p-0 py-6 xs:text-5xl text-3xl md:drop-shadow-none drop-shadow-lg font-bold text-gray uppercase">
              Widerrufsbelehrung
            </h2>
            <p style={{ padding: 20, textAlign: "left" }}>
              Verbraucher ist jede natürliche Person, die ein Rechtsgeschäft zu
              Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch
              ihrer selbständigen beruflichen Tätigkeit zugerechnet werden
              können.
              <br />
              <br />
              <b>Widerrufsrecht</b>
              <br />
              <br />
              Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen
              diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn
              Tage ab dem Tag des Vertragsschlusses. Um Ihr Widerrufsrecht
              auszuüben, müssen Sie uns Foto Dino, Justinus-Kerner-Str. 5, 72072
              Tübingen, +4970715398307, kontakt@foto-dino.de, mittels einer
              eindeutigen Erklärung (z.B. ein mit der Post versandter Brief,
              Telefax oder E-Mail) über Ihren Entschluss, diesen Vertrag zu
              widerrufen, informieren. Sie können dafür das beigefügte
              Muster-Widerrufsformular verwenden, das jedoch nicht
              vorgeschrieben ist. Zur Wahrung der Widerrufsfrist reicht es aus,
              dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor
              Ablauf der Widerrufsfrist absenden.
              <br />.
              <br />.
              <br />. <br />
              <b>Folgen des Widerrufs</b>
              <br />
              <br />
              Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle
              Zahlungen, die wir von Ihnen erhalten haben, einschließlich der
              Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich
              daraus ergeben, dass Sie eine andere Art der Lieferung als die von
              uns angebotene, günstigste Standardlieferung gewählt haben),
              unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag
              zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses
              Vertrags bei uns eingegangen ist. Für diese Rückzahlung verwenden
              wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen
              Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde
              ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen
              wegen dieser Rückzahlung Entgelte berechnet.
              <br />
              <br />
              Muster-Widerrufsformular
              <br />
              <br />
              (Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte
              dieses Formular aus und senden Sie es zurück.) <br /> – An Foto
              Dino, Justinus-Kerner-Str.5, 72072 Tübingen oder per Email an
              kontakt@foto-dino.de . <br /> – Hiermit widerrufe(n) ich/wir ()
              den von mir/uns () abgeschlossenen Vertrag über den Kauf der
              folgenden Waren ()/ die Erbringung der folgenden Dienstleistung (){" "}
              <br />– Bestellt am ()/erhalten am () <br /> – Name des/der
              Verbraucher(s) <br /> – Anschrift des/der Verbraucher(s) <br /> –
              Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf
              Papier) <br /> – Datum
              <br />
              —————————————
              <br />
              (*) Unzutreffendes streichen.
              <br />.
              <br />.
              <br />.
              <br />
              <b> Ausschlüsse des Widerrufsrechts</b>
              <br />
              <br />
              Das Widerrufsrecht gemäß § 2 besteht nicht bei folgenden
              Verträgen:
              <br />
              Das Widerrufsrecht erlischt bei einem Vertrag über die Lieferung
              von nicht auf einem körperlichen Datenträger befindlichen
              digitalen Inhalten, wenn der Unternehmer mit der Ausführung des
              Vertrags begonnen hat, nachdem der Verbraucher
              <br />
              <br />
              1. mit einer Bezahlung nachdem Fotoshooting zugestimmt hat, dass
              der Unternehmer mit der Ausführung des Vertrags vor Ablauf der
              Widerrufsfrist beginnt und
              <br />
              2. seine Kenntnis davon bestätigt hat, dass er durch seine
              Zustimmung mit Beginn der Ausführung des Vertrags sein
              Widerrufsrecht verliert. Diese Hinweise befinden sich im Formular
              welche Sie mit der Fotografin/ dem Fotograf vor Ort ausgefüllt
              haben und auf der Auftragsbestätigung/Rechnung die Sie per Email
              erhalten haben.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Widerruf;
