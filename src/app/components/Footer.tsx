import { Sparkles } from 'lucide-react';

const navigation = {
  product: [
    { name: 'Features', href: '#features' },
    { name: 'Gallery', href: '#gallery' },
    // { name: 'Pricing', href: '#pricing' },
    // { name: 'Roadmap', href: '#roadmap' },
  ],
//   company: [
//     { name: 'About', href: '#about' },
//     { name: 'Blog', href: '#blog' },
//     { name: 'Careers', href: '#careers' },
//     { name: 'Press', href: '#press' },
//   ],
//   resources: [
//     { name: 'Documentation', href: '#docs' },
//     { name: 'Tutorials', href: '#tutorials' },
//     { name: 'Community', href: '#community' },
//     { name: 'API', href: '#api' },
//   ],
//   legal: [
//     { name: 'Privacy', href: '#privacy' },
//     { name: 'Terms', href: '#terms' },
//     { name: 'License', href: '#license' },
//     { name: 'Cookies', href: '#cookies' },
//   ],
};

// const socials = [
//   { name: 'Twitter', icon: Twitter, href: '#twitter' },
//   { name: 'Instagram', icon: Instagram, href: '#instagram' },
//   { name: 'Github', icon: Github, href: '#github' },
//   { name: 'LinkedIn', icon: Linkedin, href: '#linkedin' },
// ];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black/20 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12"> */}
        <div className="flex justify-between gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2 ">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#A26BFF] to-[#6EE7B7] flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl">Nano Canvas</span>
            </div>
            <p className="text-white/60 mb-6 leading-relaxed">
              Transform your sketches into stunning artwork with AI-powered tools.
            </p>
            {/* Social Links */}
            {/* <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 flex items-center justify-center transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div> */}
          </div>

          {/* Navigation Columns */}
          <div>
            <h3 className="text-sm mb-4 text-white/40 uppercase tracking-wider">Product</h3>
            <ul className="space-y-3">
              {navigation.product.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* <div>
            <h3 className="text-sm mb-4 text-white/40 uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* <div>
            <h3 className="text-sm mb-4 text-white/40 uppercase tracking-wider">Resources</h3>
            <ul className="space-y-3">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* <div>
            <h3 className="text-sm mb-4 text-white/40 uppercase tracking-wider">Legal</h3>
            <ul className="space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/40">
            © 2025 Nano Canvas. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-white/40">
            <span>Made with</span>
            <span className="text-red-500">♥</span>
            <span>for artists worldwide</span>
          </div>
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-[#A26BFF]/50 to-transparent" />
    </footer>
  );
}
