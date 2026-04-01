import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Expert Solutions CI - Quality Services & Products',
  description: 'Expert Solutions CI provides quality industrial services including laser alignment, thermography, energy audits, mechanical and electrical maintenance, and process optimization.',
  keywords: 'Expert Solutions CI, industrial services, laser alignment, energy audits, mechanical maintenance, Côte d\'Ivoire',
  openGraph: {
    title: 'Expert Solutions CI - Quality Services & Products',
    description: 'Your trusted partner for industrial maintenance, engineering solutions, and supply chain management.',
    type: 'website',
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
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
