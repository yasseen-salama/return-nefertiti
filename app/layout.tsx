import './globals.css'
import StyledComponentsRegistry from '../lib/registry'
import {Footer, Header, GlobalStyle} from './styles/globalStyle';
import Navigation from '../components/navigation';



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>   
      <body>
      <GlobalStyle />
      <Navigation />

      {children}
      <Footer>© 2023 Yasseen Salama. All rights reserved.</Footer>
      </body>
      </StyledComponentsRegistry>
    </html>
  )
}
