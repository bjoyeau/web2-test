type FooterProps = {
    footerText: string;
  };
  
  const Footer: React.FC<FooterProps> = ({ footerText }) => {
    return <footer>{footerText}</footer>;
  };
  
  export default Footer;
  