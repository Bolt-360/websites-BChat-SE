import ResetCSS from 'common/assets/css/style';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import { theme } from 'common/theme/saasAppDark';
import AppDownload from 'containers/SaasAppDark/AppDownload';
import Banner from 'containers/SaasAppDark/Banner';
import CallToAction from 'containers/SaasAppDark/CallToAction';
import Clients from 'containers/SaasAppDark/Clients';
import Footer from 'containers/SaasAppDark/Footer';
import Monitoring from 'containers/SaasAppDark/Monitoring';
import Navbar from 'containers/SaasAppDark/Navbar';
import NewsFeed from 'containers/SaasAppDark/NewsFeed';
import { ContentWrapper, GlobalStyle } from 'containers/SaasAppDark/saasAppDark.style';
import Services from 'containers/SaasAppDark/Services';
import BchatDesc from 'containers/SaasAppDark/BchatDesc/section_1';
import BchatDesc_2 from 'containers/SaasAppDark/BchatDesc/section_2';
import BchatDesc_3 from 'containers/SaasAppDark/BchatDesc/section_3';
import Testimonials from 'containers/SaasAppDark/Testimonials';
import VideoIntro from 'containers/SaasAppDark/VideoIntro';
import Head from 'next/head';
import { Fragment } from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';

const SaasAppDark = () => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Head>
          <title>Bchat SE</title>
          <meta name="Description" content="React next landing page" />
          <meta name="theme-color" content="#ec5555" />
          {/* Load google fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=DM+Sans:wght@400&family=Inter:wght@400;500;600&family=Manrope:wght@700&family=Noto+Serif+KR:wght@700;900&display=swap"
          />
        </Head>

        <ResetCSS />
        <GlobalStyle />

        <ContentWrapper>
          <Sticky top={0} innerZ={200} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <Banner />
          <Clients />
          <Services />
          <Monitoring />
          <BchatDesc/>  
          <BchatDesc_2/>
          <BchatDesc_3/>
          <VideoIntro />
          <Testimonials />
          <CallToAction />
          <NewsFeed />
          <AppDownload />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default SaasAppDark;
