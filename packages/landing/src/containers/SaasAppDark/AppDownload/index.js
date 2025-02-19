import axios from 'axios';
import phone from 'common/assets/image/saasAppDark/phone.png';
import Heading from 'common/components/Heading';
import Input from 'common/components/Input';
import NextImage from 'common/components/NextImage';
import Container from 'common/components/UI/Container';
import { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import { pt } from 'react-phone-number-input/locale/pt-BR.json';
import 'react-phone-number-input/style.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Section, {
  AppPreview, Content,
  CountryList, Grid, QrCode
} from './appDownload.style';


const AppDownload = () => {
  const [value, setValue] = useState();
  const [nome, setNome] = useState('');

  const handleNomeChange = (e) => {
    if (e && e.target) {
      setNome(e.target.value);
    }
  };

  const handleSubmit = async () => {
    try {
      if (!nome || !value) {
        toast.error('Por favor, preencha todos os campos!');
        return;
      }

      const response = await axios.post('https://n8n2.bchat.lat/webhook/fale-conosco', {
        nome,
        telefone: value,
      });
      
      if (response.status === 200) {
        toast.success('Mensagem enviada com sucesso!');
        setNome('');
        setValue('');
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
                  onChange={handleNomeChange}
                  value={nome || ''}
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
      />
    </Section>
  );
};

export default AppDownload;
