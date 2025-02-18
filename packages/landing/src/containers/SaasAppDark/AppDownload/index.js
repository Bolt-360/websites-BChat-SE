import phone from 'common/assets/image/saasAppDark/phone.png';
import Heading from 'common/components/Heading';
import NextImage from 'common/components/NextImage';
import Container from 'common/components/UI/Container';
import { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import Section, {
  AppPreview, Content,
  CountryList, Grid, QrCode
} from './appDownload.style';




const AppDownload = () => {
  const [value, setValue] = useState();

  const handleSubmit = () => {
    console.log(value);
  };

  return (
    <Section id="download_app">
      <Container width="1300px">
        <Grid>
          <Content>
            <Heading content="Entre em contato conosco" />
            <CountryList>
              <PhoneInput
                placeholder="Número de telefone"
                international
                defaultCountry="BR"
                countryCallingCodeEditable={false}
                value={value}
                onChange={setValue}
              />
              <button type="button" onClick={handleSubmit}>
                Enviar
              </button>
            </CountryList>
            <QrCode>
            </QrCode>
          </Content>
          <AppPreview>
            <NextImage src={phone} alt="phone mockup" />
          </AppPreview>
        </Grid>
      </Container>
    </Section>
  );
};

export default AppDownload;
