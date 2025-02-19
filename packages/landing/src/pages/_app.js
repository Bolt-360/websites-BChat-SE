import { NextUIProvider } from '@nextui-org/react';
import 'common/assets/css/flaticon.css';
import 'common/assets/css/icon-example-page.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../containers/CryptoModern/CountDown/timer.css';
// swiper bundle styles
import 'common/assets/css/rc-collapse.css';
import 'common/assets/css/rc-drawer.css';
import 'common/assets/css/react-slick.css';
import 'rc-collapse/assets/index.css';
import 'swiper/css/bundle';

export default function CustomApp({ Component, pageProps }) {
  return (
      <NextUIProvider>
        <Component {...pageProps} />
        <ToastContainer 
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark" // tema escuro para combinar com seu design
        />
      </NextUIProvider>
  );
}