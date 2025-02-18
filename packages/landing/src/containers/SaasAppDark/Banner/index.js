import { Modal } from '@nextui-org/react';
import dashboard from 'common/assets/image/saasAppDark/banner-dashboard.png';
import playIcon from 'common/assets/image/saasAppDark/icons/play.svg';
import Button from 'common/components/Button';
import NextImage from 'common/components/NextImage';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import { useState } from 'react';
import Section, {
  BannerContent,
  BannerContentWrapper,
  Buttons,
  Figure
} from './banner.style';

const Banner = () => {
  const [openModal, setModal] = useState(false);

  return (
    <Section id="home">
      <Container width="1300px">
        <BannerContentWrapper>
          <BannerContent>
            <h2 className="animate__animated animate__fadeInUp">
              Relacionamentos com <span>Clientes</span> encantadores
              em escala
            </h2>
            <Text
              className="animate__animated animate__fadeInUp"
              content="O BChat SE oferece todas as ferramentas para gerenciar conversas, fortalecer relacionamentos e encantar seus clientes em um só lugar."
            />
            <Buttons>
              <Button
                colors="primary"
                title="Teste o Bchat SE"
                className="button-one"
              />
              <button className="button-two" onClick={() => setModal(true)}>
                <span className="play-icon">
                  <img src={playIcon?.src} alt="play Icon" />
                </span>
                <span className="btn-txt">
                  <span className="primary">Assista ao vídeo</span>
                </span>
              </button>
            </Buttons>
          </BannerContent>
          <Figure className="hero-banner">
            <NextImage src={dashboard} alt="dashboard" />
          </Figure>
        </BannerContentWrapper>
      </Container>
      <Modal
        blur
        width='850px'
        aria-labelledby="Search Panel"
        open={openModal}
        onClose={() => setModal(false)}
        justify="center"
        css={{
          background: 'transparent !important',
          borderRadius: '0px !important',
        }}
      >
        <div style={{ margin: 'auto' }}>
          <iframe width="850" height="505" src="https://www.youtube.com/embed/hW98BFnVCm8" title="Cartsy - Super Fast WooCommerce Theme" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </Modal>
    </Section>
  );
};

export default Banner;
