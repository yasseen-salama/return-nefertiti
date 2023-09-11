import './globals.css'
import Navigation from '../components/navigation';
import Footer from '../components/footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <div className="flex flex-col h-screen"> 
            <Navigation />
            <main className="flex-grow overflow-hidden">{children}</main>
            <Footer/>
        </div>
      </body>
    </html>
  )
}
