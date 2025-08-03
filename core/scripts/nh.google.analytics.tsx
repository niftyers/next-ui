import Script from "next/script";

export const NHScriptGoogleAnalytics = ({ ID }: { ID: string }) => (
  <>
    <Script id="gtag-script" strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${ID}`} />
    <Script id="gtag-init" strategy="lazyOnload">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${ID}', {
          page_path: window.location.pathname,
          send_page_view: false
        });
      `}
    </Script>
  </>
);
