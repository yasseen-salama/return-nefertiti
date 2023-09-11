const Footer = () => {
  return (
    <footer className="text-red-500 bg-clip-text text-center text-sm font-custom1 mt-auto pb-5">
      <p>&copy; {new Date().getFullYear().toString()} Yasseen Salama. All rights reserved.</p>
    </footer>
  );
};

export default Footer;