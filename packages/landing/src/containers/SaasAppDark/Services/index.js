import { default as Heading, default as Text } from 'common/components/Text';
import Container from 'common/components/UI/Container';
import { services } from 'common/data/SaasAppDark';
import Section, { Grid, Item, SectionHeading } from './services.style';

const Services = () => {
  return (
    <Section id="how-to">
      <Container width="1400px">
        <SectionHeading>
          <Heading
            as="h2"
            content="Todos os seus canais, uma única plataforma"
          />
          <Text content="Conecte sua página do Facebook e o Direct do Instagram ao BChat SE e gerencie todas as conversas do Messenger sem precisar alternar entre apps." />
        </SectionHeading>
        <Grid>
          {services.map((service) => (
            <Item key={service.id}>
              <span className="icon">
                <i />
              </span>
              <Heading as="h4" content={service.title} />
            </Item>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Services;
