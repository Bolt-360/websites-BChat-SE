import report1 from 'common/assets/image/saasAppDark/report1.png';
import report2 from 'common/assets/image/saasAppDark/report2.png';
import Heading from 'common/components/Heading';
import NextImage from 'common/components/NextImage';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import { monitoringFeatures } from 'common/data/SaasAppDark';
import Fade from 'react-reveal/Fade';
import Section, {
  Content,
  FeatureList, FigureGroup, Grid
} from './monitoring.style';

const Monitoring = () => {
  return (
    <Section>
      <Container width="1300px">
        <Grid>
          <FigureGroup>
            <Fade up>
              <NextImage src={report1} alt="report1" />
            </Fade>
            <div className="graph-2">
              <Fade up delay={200}>
                <NextImage src={report2} alt="report2" />
              </Fade>
            </div>
          </FigureGroup>
          <Content>
          <Text className="subtitle" content="Central de suporte" />
            <Heading content="Central de suporte OmniChannel" />
            <Text
              className="description"
              content="O BChat SE se conecta aos principais canais de comunicação com clientes, como E-mail, chat ao vivo no site, Facebook, Twitter, WhatsApp, Instagram, Line e muito mais. Isso permite oferecer uma experiência consistente em todos os canais – a partir de um único painel."
            />
            <FeatureList>
              {monitoringFeatures?.map((feature) => (
                <div className="feature" key={feature.id}>
                  <figure className="icon">
                    <img src={feature?.icon?.src} alt="feature icon" />
                  </figure>
                  <div className="feature-content">
                    <Heading as="h4" content={feature.title} />
                    <Text content={feature.desc} />
                  </div>
                </div>
              ))}
            </FeatureList>
          </Content>
        </Grid>
      </Container>
    </Section>
  );
};

export default Monitoring;
