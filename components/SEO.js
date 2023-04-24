import Head from "next/head";
import { DefaultSeo } from "next-seo";
import image from "../public/assets/canvas.png";

const defaultTitle = "My Website";
const defaultDescription =
  "Capture the precious moments of your life with our professional photography services! We specialize in capturing the beauty and innocence of newborns, the love and connection of families, and the radiance and confidence of women. Let us help you create lasting memories that you and your loved ones will treasure for years to come. Contact us today to schedule your photo session!";
const defaultKeywords = "photography, newborn, pregnancy, family";
const defaultImage = image;
const siteUrl = "https://next.foto-dino.de";

const SEO = ({
  title = defaultTitle,
  description = defaultDescription,
  keywords = defaultKeywords,
  image = defaultImage,
  url = siteUrl,
}) => {
  return (
    <>
      <DefaultSeo
        title={title}
        description={description}
        keywords={keywords}
        openGraph={{
          title,
          description,
          images: [
            {
              url: `${siteUrl}${image}`,
              alt: title,
            },
          ],
          url,
          type: "website",
        }}
      />
      <Head>
        <link rel="icon" href="https://foto-dino.de/assets/icons/favicon.png" />
        <link rel="canonical" href={url} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <meta property="og:image" content={`${siteUrl}${image}`} />
        <meta property="og:image:alt" content={title} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta name="twitter:image" content={`${siteUrl}${image}`} />
        <meta name="twitter:image:alt" content={title} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@example" />
        <meta
          name="facebook-domain-verification"
          content="9ucg0nasm71a6nldgo3n2o5vgqwmwn"
        />
        <title>{title}</title>
      </Head>
    </>
  );
};

export default SEO;
