import "./globals.css";
import { Inter } from 'next/font/google';
import Script from 'next/script'; // Import the Script component

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Super Admin Panel',
  description: 'Manage LMS, Courses, Users, and Content',
};

const GA_MEASUREMENT_ID = "G-W9PX5MM194"; // Your Measurement ID

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-black via-gray-900 to-black overflow-x-hidden text-white`}>
        {children}
      </body>

      {/* Google Analytics Scripts */}
      <Script 
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} 
        strategy="afterInteractive" 
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </html>
  );
}