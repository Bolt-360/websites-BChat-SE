import Box from 'common/components/Box';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import { bchatDesc_1 } from 'common/data/SaasAppDark';
import Link from 'next/link';
import { Icon } from 'react-icons-kit';
import { androidArrowForward } from 'react-icons-kit/ionicons/androidArrowForward';
import Section, { Grid } from './statsCounter.style';

const section_1 = () => { 
  const { blockTitle, posts } = bchatDesc_1;
  const { subtitle, title, text, button } = blockTitle;
  return (
    <Section>
      <Container width="1300px">
        <Grid>
          <Box className="blockTitle">
            <Text as="span" className="subtitle" content={subtitle} />
            <Heading as="h2" content={title} />
            <Text as="p" content={text} />
            <Link href={button.link}>
              <a className="button">
                <span>
                  {button.label}
                  <Icon icon={androidArrowForward} size={16} />
                </span>
              </a>
            </Link>
          </Box>
          <Box className="postsWrap">
            {posts.map(({ count, text, title, symbol }, index) => (
              <Box className="post" key={`counter-post-key-${index}`}>
                <Text as="p" content={title} />
                <Box className="postCount">
                  <Heading as="h3" content={count} />
                  <Text as="span" content={symbol} />
                </Box>
                <Text as="p" content={text} />
              </Box>
            ))}
          </Box>
        </Grid>
      </Container>
    </Section>
  );
};

export default section_1;
