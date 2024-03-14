import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import Script from 'next/script';
import { Providers } from "./providers";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
      <Script strategy='afterInteractive' src="https://www.googletagmanager.com/gtag/js?id=G-WRZ1P8RSZY"></Script>
      <Script strategy='afterInteractive' id='google-analytics'>

        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-WRZ1P8RSZY');`}
      </Script>
    </html>
  );
}
