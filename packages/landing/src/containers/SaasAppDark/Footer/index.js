import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import Link from 'common/components/Link';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import { footer } from 'common/data/SaasAppDark';
import { Icon } from 'react-icons-kit';
import { paperPlane } from 'react-icons-kit/fa/paperPlane';
import { ic_place } from 'react-icons-kit/md/ic_place';
import {facebookSquare} from 'react-icons-kit/fa/facebookSquare'
import {linkedinSquare} from 'react-icons-kit/fa/linkedinSquare'
import {instagram} from 'react-icons-kit/fa/instagram'
import Box from 'common/components/Box';
import {
  AboutUs, ContactInfo, FooterWidget, Grid, InfoItem, Section
} from './footer.style';
import { color } from 'styled-system';

const Footer = () => {
  return (
    <Section>
      <Container width="1300px">
        <Grid>
          <AboutUs>
            <Box display="flex" alignItems="center" vertical-align="middle">
              <Image src ={footer.about.nome?.src} alt="Bchat SE" style={{width: '80px'}}/>
              <Image src={footer.about.logo?.src} alt="Bchat SE"  style={{width: '38px', marginTop: '4px'}}/>
            </Box>
            <Text content={footer.about.text} />
          </AboutUs>
          {/* {footer.widgets.map((item) => (
            <FooterWidget key={item.id}>
              <h4>{item.title}</h4>
              <ul>
                {item.list.map((item) => (
                  <li className="widgetListItem" key={item.id}>
                    <Link href={item.link}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </FooterWidget>
          ))} */}
          <ContactInfo>
            <Heading as="h4" content={footer.contactInfo.title} />
            <InfoItem>
              <Icon icon={ic_place} size={24} />
              <Text content={footer.contactInfo.address} />
            </InfoItem>
            <InfoItem>
              <Icon icon={paperPlane} size={22} />
              <Text content={footer.contactInfo.email} />
            </InfoItem>
            <InfoItem>
              <Link href={footer.contactInfo.social.facebook} target='_blank' style={{color: '#767676'}}>
                <Icon icon={facebookSquare} size={24} />
              </Link>
              <Link href={footer.contactInfo.social.linkedin} target='_blank' style={{color: '#767676'}}>
                <Icon icon={linkedinSquare} size={24} />
              </Link>
              <Link href={footer.contactInfo.social.instagram} target='_blank' style={{color: '#767676'}}>
                <Icon icon={instagram} size={24} />
              </Link>
            </InfoItem>
          </ContactInfo>
        </Grid>
      </Container>
    </Section>
  );
};

export default Footer;
