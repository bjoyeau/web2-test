import React, { ReactNode } from 'react';

interface HeaderProps {
  logoUrl: string;
  children: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ logoUrl, children }) => {
  return (
    <header>
      <img src={logoUrl} alt="logo" style={{ height: '50px' }} />
      <div>{children}</div>
    </header>
  );
};

export default Header;
