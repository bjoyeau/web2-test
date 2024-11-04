import React, { ReactNode } from 'react';

interface FooterProps {
  logoUrl: string;
  children: ReactNode;
}

const Footer: React.FC<FooterProps> = ({ logoUrl, children }) => {
  return (
    <footer>
      <img src={logoUrl} alt="logo" style={{ height: '50px' }} />
      <div>{children}</div>
    </footer>
  );
};

export default Footer;
