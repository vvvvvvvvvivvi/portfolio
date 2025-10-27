const Footer = () => {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-slate-400">
              © {currentYear} Developer Portfolio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  