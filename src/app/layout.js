import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata = {
  title: 'Expert Solutions CI - Quality Services & Products',
  description: 'Expert Solutions CI provides quality industrial services including industrial installation, energy audits, mechanical and electrical maintenance, and process optimization.',
  keywords: 'Expert Solutions CI, industrial services, industrial installation, energy audits, mechanical maintenance, Côte d\'Ivoire',
  openGraph: {
    title: 'Expert Solutions CI - Quality Services & Products',
    description: 'Your trusted partner for industrial maintenance, engineering solutions, and supply chain management.',
    type: 'website',
  },
  icons: {
    icon: '/assets/logo.jpeg',
    apple: '/assets/logo.jpeg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <main style={{ marginTop: '72px', flex: 1 }}>
              {children}
            </main>
            <Footer />
            <WhatsAppButton />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
