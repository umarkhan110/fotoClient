import translate from "../contexts/i18nProvider/translate";
import { IMAGE_URL } from "../constants/url";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative h-[220px] flex md:justify-between justify-center md:pt-10 pt-5 px-20 bg-grey w-full font-oswald font-regular">
      <div className="text-center">
        <Image
          src={IMAGE_URL + "/webps/logo.webp"}
          alt="logo"
          width={200}
          height={100}
          className="xs:m-auto mx-auto"
        />
        <div className="text-gray py-2 flex gap-1">
          <Link href="/Impressum">Impressum</Link> |
          <Link href="/Datenschutz"> Datenschutz</Link> |{" "}
          <Link href="/Terms">AGB</Link> |{" "}
          <Link href="/widerruf">Widerruf</Link>
        </div>
        <h3>© 2021 Foto Dino</h3>
      </div>
      <div className="md:block hidden mx-10 text-center h-full">
        <h1 className="mb-5">{translate("information")}</h1>
        <div className="text-gray grid grid-rows-2 grid-cols-2 gap-4 items-center justify-center">
          <p>Home</p>
          <p>{translate("contact")}</p>
          <p>Shop</p>
          <p>Our team</p>
        </div>
      </div>
      <div className="md:block hidden mx-10 text-center h-full">
        <h1 className="mb-5">{translate("services")}</h1>
        <div className="text-gray grid grid-rows-2 grid-cols-2 gap-4 items-center justify-center">
          <p>{translate("family_photo")}</p>
          <p>{translate("baby_photo")}</p>
          <p>{translate("newborn_photo")}</p>
          <p>{translate("pregnant_photo")}</p>
        </div>
      </div>
      {/* <div className="md:block hidden text-center">
        <h1 className="mb-5">Payment</h1>

        <Image
          src={IMAGE_URL + "/webps/payment.webp"}
          alt="payment"
          width={200}
          height={100}
        />
      </div> */}
    </footer>
  );
};

export default Footer;
