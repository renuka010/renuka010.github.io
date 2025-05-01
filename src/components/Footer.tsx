import { Github, Linkedin, Mail, Code } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background py-5">
      <div className="max-container">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {currentYear} <span className="font-dancing" style={{ fontSize: '1.5em' }}>Renuka's</span> <span className="align-middle" style={{ marginLeft: '0.2em' }}><img src="/space.png" alt="space bar" style={{ display: 'inline-block', height: '3em', width: 'auto', verticalAlign: 'baseline', margin: '0' }} /></span>. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
