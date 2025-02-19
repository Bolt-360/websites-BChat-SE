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
import { pt } from 'react-phone-number-input/locale/pt-BR.json';
import Input from 'common/components/Input';
import { toast } from 'react-toastify';
import axios from 'axios';


const AppDownload = () => {
  const [value, setValue] = useState();
  const [nome, setNome] = useState();

  const handleSubmit = async () => {
    try {
      const response = await axios.post('https://n8n2.bchat.lat/webhook/fale-conosco', {
        nome,
        telefone: value,
      });
      if (response.status === 200) {
        toast.success('Mensagem enviada com sucesso!');
      } else {
        toast.error('Erro ao enviar mensagem!');
      }
    } catch (error) {
      toast.error('Erro! Fale com o suporte.');
    }
  };

  return (
    <Section id="download_app">
      <Container width="1300px">
        <Grid>
          <Content>
            <Heading content="Entre em contato conosco" />
            <CountryList>
              <div className="NameInput">
                <Input 
                  placeholder="João Silva"
                  onChange={(e) => setNome(e)}
                  value={nome}
                />
              </div>
              <PhoneInput
                placeholder="Número de telefone"
                international
                defaultCountry="BR"
                countryCallingCodeEditable={false}
                value={value}
                onChange={setValue}
                labels={pt}
              />
              <button type="button" onClick={handleSubmit} style={{width: '140px'}}>
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
