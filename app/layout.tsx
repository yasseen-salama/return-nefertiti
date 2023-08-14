import StyledComponentsRegistry from '../lib/registry'

import './globals.css'
import {Footer, Header} from './styles/globalStyle';



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>   
      
      <body>
      <Header>
        <h1>
          <span>return nefertiti</span> 
        </h1>
      </Header>
      {children}
      <Footer>© 2023 Yasseen Salama. All rights reserved.</Footer>
      </body>

      </StyledComponentsRegistry>
    </html>
  )
}
