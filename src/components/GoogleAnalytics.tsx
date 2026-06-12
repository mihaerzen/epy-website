import {Suspense} from 'react';
import Script from 'next/script';

import {GoogleAnalyticsPageView} from '@/components/GoogleAnalyticsPageView';

const GOOGLE_ANALYTICS_ID = 'G-3ESJ9PEVTF';

export function GoogleAnalytics() {
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  return (
    <>
      <Script
        id="google-analytics-consent-defaults"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'functionality_storage': 'denied',
              'personalization_storage': 'denied',
              'security_storage': 'granted'
            });
            gtag('set', 'ads_data_redaction', true);
            gtag('set', 'url_passthrough', false);
          `,
        }}
      />
      <Script
        id="google-analytics-library"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
      />
      <Script
        id="google-analytics-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            gtag('js', new Date());
            gtag('config', '${GOOGLE_ANALYTICS_ID}', {
              send_page_view: false,
              allow_google_signals: false,
              allow_ad_personalization_signals: false
            });
          `,
        }}
      />
      <Suspense fallback={null}>
        <GoogleAnalyticsPageView measurementId={GOOGLE_ANALYTICS_ID}/>
      </Suspense>
    </>
  );
}
