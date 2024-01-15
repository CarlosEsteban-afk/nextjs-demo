import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import Script from 'next/script';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className={`${inter.className} antialiased`}>{children}</div>
      <Script
        strategy='afterInteractive'
        src="https://www.googletagmanager.com/gtag/js?id=G-WRZ1P8RSZY"
      ></Script>
      <Script
        strategy='afterInteractive'
        id='google-analytics'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WRZ1P8RSZY');
          `,
        }}
      />

    </>
  );
}