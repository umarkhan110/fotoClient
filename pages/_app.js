import "../styles/globals.css";

import I18nProvider from "../contexts/i18nProvider/Provider";
import { LOCALES } from "../contexts/i18nProvider";
import Layout from "../components/Layout";

import Context from "../contexts/Share/share";
import { DefaultSeo } from "next-seo";
import analytics from '../utility/analytics'
import moment from "moment";
import "moment/locale/de";
import { useEffect } from "react";
moment.locale("de");

export default function App({ Component, pageProps }) {
  const locale = LOCALES.GERMAN;
  useEffect(() => {
    analytics.page() 
		// this will fire the Page Track function on every new router change.
  }, [])
  return (
    <Context>
      <I18nProvider locale={locale}>
        <Layout>
          <DefaultSeo
            title="Foto Dino"
            description="Foto Dino Fotoshootingevents ohne Shootinggebühr gratis testen! Babybauch,Babies,Kinder Familien."
            openGraph={{
              type: "website",
              locale: "en_IE",
              url: "https://www.url.ie/",
              siteName: "SiteName",
            }}
            twitter={{
              handle: "@handle",
              site: "@site",
              cardType: "summary_large_image",
            }}
          />
          <Component {...pageProps} />
        </Layout>
      </I18nProvider>
    </Context>
  );
}
