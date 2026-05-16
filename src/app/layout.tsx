import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Finova — Smart money management, effortlessly automated',
  description: 'Finova uses AI to automatically track, categorize, and forecast your money in real time, eliminating manual spreadsheets and costly onboarding. Setup takes under 10 minutes, and the platform scales with your team, offering affordable pricing that grows as you do. Whether you're a freelancer, gig worker, or small business owner, Finova gives you clear, actionable insights without the hassle.',
  openGraph: {
    title: 'Finova',
    description: 'Smart money management, effortlessly automated',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
