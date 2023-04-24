// import { useEffect, useState } from "react";

// const UseHost = () => {
//   const [host, setHost] = useState("");

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       setHost(window.location.hostname);
//     }
//   }, []);

//   return getUrls(host);
// };

// const getUrls = (host) => {
//   console.log(host);
//   const apiHost = getApiHost(host);
//   const domainHost = getHost(host);
//   const protocol = getProtocol(host);

//   return { apiHost, domainHost, protocol };
// };

// const host = window.location.hostname;

// const host = "dino-foto.de";
const host = "foto-dino.com";
// const host = "foto-dino.de";

const LOCAL_URL = "localhost";
const DEV_URL = "dino-foto.de";
const STAG_URL = "foto-dino.com";
const PROD_URL = "foto-dino.de";

const PORT = "3000";

export const getApiHost = () => {
  if (host.includes(LOCAL_URL)) return "https://api." + DEV_URL;
  if (host.includes(DEV_URL)) return "https://api." + DEV_URL;
  if (host.includes(STAG_URL)) return "https://api." + STAG_URL;
  if (host.includes(PROD_URL)) return "https://api." + PROD_URL;
};

export const getHost = () => {
  if (host.includes(LOCAL_URL)) return DEV_URL;
  if (host.includes(DEV_URL)) return DEV_URL;
  if (host.includes(STAG_URL)) return STAG_URL;
  if (host.includes(PROD_URL)) return PROD_URL;
};

export const getProtocol = () => {
  if (host.includes(LOCAL_URL)) return "http";
  else return "https";
};

// Images
export const IMAGE_URL = "https://assets.foto-dino.de/images";

// export { UseHost };
