import React from 'react';

import { logo } from 'assets/images';
import { Header, Link, LogoImage, Paragraph } from 'components/Atoms/components';
import { rotate } from 'styles/animations';

function HomePage() {
  return (
    <Header>
      <LogoImage animation={rotate} src={logo} alt="logo" />
      <Paragraph>
        Edit <code>src/pages/Home/Home.jsx</code> and save to reload.
      </Paragraph>
      <Link
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </Link>
    </Header>
  );
}

export default HomePage;