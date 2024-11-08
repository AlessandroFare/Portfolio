import localFont from 'next/font/local';

export const GeistSans = localFont({
  src: '../app/fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  display: 'swap',
});

export const GeistMono = localFont({
  src: '../app/fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  display: 'swap',
}); 