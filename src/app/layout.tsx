import { Playfair_Display, Space_Grotesk } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-body',
});

export const metadata = {
  title: 'Abhijeet Portfolio',
  description: 'Lead System Engineer | DevOps | Cloud | Infrastructure | Security',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
