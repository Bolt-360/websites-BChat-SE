import { Modal } from '@nextui-org/react';
import logoBchat from 'common/assets/image/bchatLogo.svg';
import logoNome from 'common/assets/image/bchatNome.svg';
import Box from 'common/components/Box';
import Button from 'common/components/Button';
import Drawer from 'common/components/Drawer';
import HamburgMenu from 'common/components/HamburgMenu';
import NavbarWrapper from 'common/components/Navbar';
import ScrollSpyMenu from 'common/components/ScrollSpyMenu';
import Container from 'common/components/UI/Container';
import Logo from 'common/components/UIElements/Logo';
import { DrawerContext } from 'common/contexts/DrawerContext';
import { menu_items } from 'common/data/SaasAppDark';
import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import LoginModal from '../LoginModal';

const Navbar = ({ navbarStyle, logoStyle, logoNomeStyle, logoBchatStyle, button, row, menuWrapper }) => {
  const [loginModal, setLoginModal] = useState(false);
  const { state, dispatch } = useContext(DrawerContext);
  const message = 'Olá, estou interessado em saber mais sobre o BChat SE';

  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    const whatsappUrl = `https://wa.me/558431901700?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  // Toggle drawer
  const toggleHandler = () => {
    dispatch({
      type: 'TOGGLE',
    });
  };

  return (
    <NavbarWrapper {...navbarStyle}>
      <Container width="1300px">
        <Box {...row}>
          <Box display="flex" alignItems="center" vertical-align="middle">
            <Logo
              href="#"
              logoSrc={logoNome}
              title="Bchat SE"
              logoStyle={logoNomeStyle}
              className="sticky-logo nav-logo"
            />
            <Logo
              href="#"
              logoSrc={logoBchat}
              title="Bchat SE"
              logoStyle={logoBchatStyle}
              className="sticky-logo nav-logo"
            />
          </Box>
          
          <Box {...menuWrapper} className="mainMenuWrapper">
            <ScrollSpyMenu
              className="main_menu"
              menuItems={menu_items}
              offset={-70}
            />

            <div className="navbar-buttons">
              <a 
                href="#" 
                onClick={handleWhatsAppClick}
                className="navbar_button navbar_button_two"
              >
                <Button {...button} title="Fale conosco" />
              </a>
            </div>
            <Drawer
              width="420px"
              placement="right"
              drawerHandler={<HamburgMenu barColor="#108AFF" />}
              open={state.isOpen}
              toggleHandler={toggleHandler}
            >
              <ScrollSpyMenu
                className="mobile_menu"
                menuItems={menu_items}
                drawerClose={true}
                offset={-100}
              />
            </Drawer>
          </Box>
        </Box>
      </Container>
      <Modal
        blur
        width="1170px"
        closeButton
        aria-labelledby="User Panel"
        open={loginModal}
        onClose={() => setLoginModal(false)}
        justify="center"
        css={{ paddingTop: '0 !important', borderRadius: '0 !important' }}
      >
        <LoginModal />
      </Modal>
    </NavbarWrapper>
  );
};

Navbar.propTypes = {
  navbarStyle: PropTypes.object,
  logoStyle: PropTypes.object,
  button: PropTypes.object,
  row: PropTypes.object,
  menuWrapper: PropTypes.object,
};

Navbar.defaultProps = {
  navbarStyle: {
    className: 'sass_app_dark_navbar',
    minHeight: '70px',
    display: 'block',
  },
  row: {
    flexBox: true,
    alignItems: 'center',
    width: '100%',
  },
  logoContainer: {},
  logoNomeStyle: {
    maxWidth: ['126px', '126px'],
  },
  logoBchatStyle: {
    maxWidth: ['48px', '48px'],
    maxHeight: ['40px', '40px'],
    marginTop: ['4px', '4px']
  },
  button: {},
  menuWrapper: {
    flexBox: true,
    alignItems: 'center',
  },
};

export default Navbar;
