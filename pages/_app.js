import { CartContextProvider } from '@/components/CartContext';
import { Helmet } from 'react-helmet';

<Helmet>
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
    rel="stylesheet"
  />
</Helmet>

export default function App({ Component, pageProps }) {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"

        />
         <style>{`
          body {
            background-color: #eee;
            padding: 0;
            margin: 0;
            font-family: 'Poppins', sans-serif;
          }
        `}</style>
        
      </Helmet>
     
      <CartContextProvider><Component {...pageProps} /></CartContextProvider>
    </>
  );
}