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
  const [value, setValue] = useState('');
  const [nome, setNome] = useState('');

  const handleNomeChange = (e) => {
    if (e && e.target) {
      setNome(e.target.value);
    } else if (e !== undefined) {
      setNome(e);
    }
  };

  const handleSubmit = async () => {
    try {
      if (!nome || nome.trim() === '') {
        toast.error('Por favor, preencha o nome!');
        return;
      }

      if (!value || value.trim() === '') {
        toast.error('Por favor, preencha o telefone!');
        return;
      }

      const params = {
        nome: nome,
        telefone: value,
      };

      // URL correta do webhook de teste
      const response = await fetch('https://n8n2.bchat.lat/webhook-test/landing-page', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(params)
      });

      // Log para debug
      console.log('Status da resposta:', response.status);
      console.log('Dados enviados:', params);

      const responseData = await response.json();
      console.log('Resposta do servidor:', responseData);

      if (!response.ok) {
        throw new Error(`Erro do servidor: ${response.status}`);
      }

      setNome('');
      setValue('');
      toast.success('Mensagem enviada com sucesso!');

    } catch (error) {
      console.error('Erro completo:', error);
      toast.error(`Erro ao enviar os dados: ${error.message}`);
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
                  value={nome}
                  onChange={(value) => setNome(value)}
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
