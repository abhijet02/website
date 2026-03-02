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
  title: 'Abhijeet Adhikary | Lead System Engineer | Dhaka, Bangladesh',
  description:
    'Lead System Engineer | DevOps | Cloud | Infrastructure | Security | Dhaka, Bangladesh',
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Abhijeet Adhikary',
  url: 'https://abhijeetadhikary.com/',
  email: 'info@abhijeetadhikary.com',
  jobTitle: 'Lead System Engineer',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dhaka',
    addressCountry: 'BD',
  },
  sameAs: [
    'https://github.com/abhijet02',
    'https://www.linkedin.com/in/abhijeet-adhikary-b6326b1a1/',
    'https://www.youtube.com/@abhijeetadhikary3205',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${spaceGrotesk.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
