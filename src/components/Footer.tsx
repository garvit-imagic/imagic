import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center">
            <Image 
              src="/logo.svg" 
              alt="IMagic Logo" 
              width={120} 
              height={40}
              className="h-8 w-auto brightness-0 invert"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-8 text-center md:text-left">
            <a href="#" className="text-sm hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm hover:text-primary transition-colors">
              Careers
            </a>
          </div>

          <div className="text-sm text-light/60">
            © 2025 IMagic. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

