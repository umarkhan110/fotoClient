import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        {/* <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=GTM-NMBCZZB`}
          /> */}
          {/* <script>
            dangerouslySetInnerHTML=
            {{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://fdtr.foto-dino.de/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NMBCZZB');`,
            }}
          </script> */}

          
          <script
            dangerouslySetInnerHTML={{
              __html: `
              if (window.location.hostname.includes("foto-dino.de")) {
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://fdtr.foto-dino.de/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-NMBCZZB');
  !(function (w, d, t) {
    w.TiktokAnalyticsObject = t;
    var ttq = (w[t] = w[t] || []);
    (ttq.methods = [
      "page",
      "track",
      "identify",
      "instances",
      "debug",
      "on",
      "off",
      "once",
      "ready",
      "alias",
      "group",
      "enableCookie",
      "disableCookie",
    ]),
      (ttq.setAndDefer = function (t, e) {
        t[e] = function () {
          t.push([e].concat(Array.prototype.slice.call(arguments, 0)));
        };
      });
    for (var i = 0; i < ttq.methods.length; i++)
      ttq.setAndDefer(ttq, ttq.methods[i]);
    (ttq.instance = function (t) {
      for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++)
        ttq.setAndDefer(e, ttq.methods[n]);
      return e;
    }),
      (ttq.load = function (e, n) {
        var i = "https://analytics.tiktok.com/i18n/pixel/events.js";
        (ttq._i = ttq._i || {}),
          (ttq._i[e] = []),
          (ttq._i[e]._u = i),
          (ttq._t = ttq._t || {}),
          (ttq._t[e] = +new Date()),
          (ttq._o = ttq._o || {}),
          (ttq._o[e] = n || {});
        n = document.createElement("script");
        (n.type = "text/javascript"),
          (n.async = !0),
          (n.src = i + "?sdkid=" + e + "&lib=" + t);
        e = document.getElementsByTagName("script")[0];
        e.parentNode.insertBefore(n, e);
      });

    ttq.load("CGHFKLBC77UFG43DJDCG");
    ttq.page();
  })(window, document, "ttq");
}

!(function (t, e) {
  var o, n, p, r;
  e.__SV ||
    ((window.posthog = e),
    (e._i = []),
    (e.init = function (i, s, a) {
      function g(t, e) {
        var o = e.split(".");
        2 == o.length && ((t = t[o[0]]), (e = o[1])),
          (t[e] = function () {
            t.push([e].concat(Array.prototype.slice.call(arguments, 0)));
          });
      }
      ((p = t.createElement("script")).type = "text/javascript"),
        (p.async = !0),
        (p.src = s.api_host + "/static/array.js"),
        (r = t.getElementsByTagName("script")[0]).parentNode.insertBefore(p, r);
      var u = e;
      for (
        void 0 !== a ? (u = e[a] = []) : (a = "posthog"),
          u.people = u.people || [],
          u.toString = function (t) {
            var e = "posthog";
            return "posthog" !== a && (e += "." + a), t || (e += " (stub)"), e;
          },
          u.people.toString = function () {
            return u.toString(1) + ".people (stub)";
          },
          o =
            "capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags".split(
              " ",
            ),
          n = 0;
        n < o.length;
        n++
      )
        g(u, o[n]);
      e._i.push([i, s, a]);
    }),
    (e.__SV = 1));
})(document, window.posthog || []);
posthog.init("phc_5IeZILvqXGvSrXhVEhBOQ7dAvjvNcO0rou4loIRDhwo", {
  api_host: "https://app.posthog.com",
});

        `,
            }}
          />
        </Head>
        <body>
          
          <Main />
          <NextScript />
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NMBCZZB"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />
           <script
            id="Cookiebot"
            src="https://consent.cookiebot.com/uc.js"
            data-cbid="b54b7662-fd8b-4a95-86f9-36026b1d45b9"
            type="text/javascript"
            async></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
