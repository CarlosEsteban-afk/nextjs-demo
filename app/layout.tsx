import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import Script from 'next/script';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script strategy='afterInteractive' src="https://www.googletagmanager.com/gtag/js?id=G-WRZ1P8RSZY"></Script>
      <Script strategy='afterInteractive' id='google-analytics'>
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-WRZ1P8RSZY');`}
      </Script>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
/**
 * <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-WRZ1P8RSZY"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-WRZ1P8RSZY');
</script>
 */