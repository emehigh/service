
import '@styles/globals.css'
// import Nav from '@components/Nav';
import Provider from '@components/Provider';
import Modal from '@components/Modal';
import { SessionProvider } from 'next-auth/react';

export const metadata = {
    title : "Solve your problems",
    description : "Get your car fixed."
}

const RootLayout = ({children}) => {
  return (
    <html lang="en" >
        <body className=''>

            <Provider>
              <main className='app'>
                {children}
                <Modal />
              </main>
              </Provider>
        </body>
    </html>
  )
}

export default RootLayout