import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import translate from "../contexts/i18nProvider/translate";
import { getHost, getProtocol, IMAGE_URL } from "../constants/url";

import { motion } from "framer-motion";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterest,
  FaTiktok,
} from "react-icons/fa";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [login, setLogin] = useState(false);

  const dropdownRef = useRef(null);

  const prot = getProtocol();
  const domain = getHost();

  const link = prot + "://next." + domain;
  const photographer_link = prot + "://photographer." + domain;
  const secretary_link = prot + "://secretary." + domain;

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && dropdownRef.current.contains(event.target)) {
      return;
    }
    setLogin(false);
  };

  return (
    <nav className="z-20 fixed xs:h-[100px] w-full h-[80px] flex xs:px-5 px-3 py-3 items-center bg-grey justify-between sm:justify-start">
      <button
        className="sm:hidden block xs:text-4xl text-3xl xs:w-20 w-16 text-gray"
        onClick={() => setOpen(!open)}>
        {open ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />}
      </button>

      <Link href="/">
        <Image
          className="xs:w-48 w-40 sm:mr-10"
          src={IMAGE_URL + "/webps/logo.webp"}
          alt="logo"
          width={200}
          height={100}
        />
      </Link>
      <div className="flex-1 sm:flex hidden items-center font-oswald">
        <Link
          className="mr-3 transition ease-in-out delay-150 hover:text-yellow"
          href={"/"}>
          {translate("book_now")}
        </Link>

        <a
          className="mr-3 transition ease-in-out delay-150 hover:text-yellow"
          href={`${link}/#shooting`}>
          Gallerie
        </a>

        <Link
          className="mr-3 transition ease-in-out delay-150 hover:text-yellow"
          href={`/contact`}>
          {translate("contact")}
        </Link>

        <Link
          className="mr-3 transition ease-in-out delay-150 hover:text-yellow"
          ink
          href="/job">
          Jobs
        </Link>
      </div>

      <div className="md:flex items-center hidden">
        <a
          href="https://www.facebook.com/fotodino.germany"
          target="_blank"
          rel="noreferrer"
          className="p-2 transition ease-in-out delay-150 hover:text-yellow">
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/fotodino.de"
          target="_blank"
          rel="noreferrer"
          className="p-2 transition ease-in-out delay-150 hover:text-yellow">
          <FaInstagram />
        </a>
        <a
          href="https://twitter.com/FOTO_DINO?t=-cfJhH1wx7yorKzrjy-Ccw&s=09"
          target="_blank"
          rel="noreferrer"
          className="p-2 transition ease-in-out delay-150 hover:text-yellow">
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/fotodino.de"
          target="_blank"
          rel="noreferrer"
          className="p-2 transition ease-in-out delay-150 hover:text-yellow">
          <FaPinterest />
        </a>
        <a
          href="https://www.tiktok.com/@fotodino"
          target="_blank"
          rel="noreferrer"
          className="p-2 transition ease-in-out delay-150 hover:text-yellow">
          <FaTiktok />
        </a>
      </div>

      <button
        ref={dropdownRef}
        onClick={() => setLogin(!login)}
        className="text-gray relative flex items-center justify-center gap-1 border-[1px] border-yellow rounded xs:w-20 w-16 xs:text-md text-sm py-1 ml-4 drop-shadow-md ">
        Login
        {login && (
          <div className="absolute bg-white top-7 right-0 border-2 border-light-grey rounded">
            <a href={photographer_link} target="_blank" rel="noreferrer">
              <button className="px-4 py-2 border-b-2 border-light-grey hover:brightness-[0.9]">
                Photographer
              </button>
            </a>
            <a href={secretary_link} target="_blank" rel="noreferrer">
              <button className="px-4 py-2">Secretary</button>
            </a>
          </div>
        )}
      </button>

      {open && (
        <div className="font-oswald absolute xs:top-[100px] top-[80px]  drop-shadow-lg flex flex-col xs:w-[300px] w-full xs:h-auto h-screen xs:items-start xs:justify-start justify-center items-center xs:text-lg text-xl xs:p-10 left-0 pb-[80px]">
          <div
            onClick={() => setOpen(false)}
            className="bg-grey/90 absolute xs:w-[300px] w-full xs:h-auto h-screen"></div>
          <motion.button
            initial={{ translateY: -100, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            className="xs:mb-2 mb-5"
            onClick={() => setOpen(false)}>
            <Link href="/">{translate("book_now")}</Link>
          </motion.button>

          <motion.a
            initial={{ translateY: -100, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ delay: 0.05 }}
            className="xs:mb-2 mb-5"
            href={`${link}/#shooting`}
            onClick={() => setOpen(false)}>
            Gallerie
          </motion.a>

          <motion.button
            initial={{ translateY: -100, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="xs:mb-2 mb-5">
            <Link href="/contact" onClick={() => setOpen(false)}>
              {translate("contact")}
            </Link>
          </motion.button>

          <motion.button
            initial={{ translateY: -100, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="xs:mb-2 mb-5"
            onClick={() => setOpen(false)}>
            <Link href="/job">Jobs</Link>
          </motion.button>

          <hr className="border-light-grey w-[90%] xs:mb-0 xs:mt-2 mb-5" />

          <motion.div className="flex xs:mt-20 xs:mt-5 xs:gap-0 gap-2 z-20">
            <a
              href="https://www.facebook.com/fotodino.germany"
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="xs:p-2 p-4 transition ease-in-out delay-150 hover:text-yellow xs:bg-transparent bg-yellow rounded-full">
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/fotodino.de"
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="xs:p-2 p-4 transition ease-in-out delay-150 hover:text-yellow xs:bg-transparent bg-yellow rounded-full">
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com/FOTO_DINO?t=-cfJhH1wx7yorKzrjy-Ccw&s=09"
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="xs:p-2 p-4 transition ease-in-out delay-150 hover:text-yellow xs:bg-transparent bg-yellow rounded-full">
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/fotodino.de"
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="xs:p-2 p-4 transition ease-in-out delay-150 hover:text-yellow xs:bg-transparent bg-yellow rounded-full">
              <FaPinterest />
            </a>
            <a
              href="https://www.tiktok.com/@fotodino"
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="xs:p-2 p-4 transition ease-in-out delay-150 hover:text-yellow xs:bg-transparent bg-yellow rounded-full">
              <FaTiktok />
            </a>
          </motion.div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
