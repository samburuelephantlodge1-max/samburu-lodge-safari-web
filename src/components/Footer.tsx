
import { Instagram, MessageCircle, Linkedin, Twitter, Facebook, Music, Download } from 'lucide-react';
import TripAdvisorWidget from './TripAdvisorWidget';

const Footer = () => {
  return (
    <footer className="bg-earth-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 font-playfair text-safari-200">
              Samburu Elephant Lodge
            </h3>
            <p className="text-earth-200 leading-relaxed mb-4">
              Experience authentic African luxury in the heart of Kenya's Samburu National Reserve, where wildlife roams free and cultural traditions thrive.
            </p>
            <p className="text-earth-300 text-sm mb-2">
              Committed to sustainable tourism and community development.
            </p>
            <p className="text-earth-300 text-sm">
              Managed by <a href="https://creekoxley.com" target="_blank" rel="noopener noreferrer" className="text-safari-200 hover:text-safari-100 transition-colors underline">Creek Oxley</a>
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-safari-200">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-earth-200 hover:text-safari-200 transition-colors">About Us</a></li>
              <li><a href="/accommodation" className="text-earth-200 hover:text-safari-200 transition-colors">Accommodation</a></li>
              <li><a href="#experiences" className="text-earth-200 hover:text-safari-200 transition-colors">Experiences</a></li>
              <li><a href="/community" className="text-earth-200 hover:text-safari-200 transition-colors">Community</a></li>
              <li><a href="#contact" className="text-earth-200 hover:text-safari-200 transition-colors">Contact</a></li>
              <li>
                <a 
                  href="/lovable-uploads/Special Offers – Valid till 30th November 2025.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-earth-200 hover:text-safari-200 transition-colors"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Special Offers (Nov 2025)
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-safari-200">
              Contact Information
            </h4>
            <div className="space-y-2 text-earth-200">
              <p>677 Samburu National Reserve</p>
              <p>Isiolo, 60300, Kenya</p>
              <p>Phone: +254 110 463 062</p>
              <p>WhatsApp: +254 796 099 657</p>
              <p>Email: info@samburuelephantlodge.co.ke</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-safari-200">
              Follow Us
            </h4>
            <div className="space-y-3">
              <div className="flex flex-col space-y-2">
                <a 
                  href="https://api.whatsapp.com/send?phone=254796099657" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-earth-200 hover:text-safari-200 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </a>
                <a 
                  href="https://instagram.com/samburu_elephant_lodge" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-earth-200 hover:text-safari-200 transition-colors"
                >
                  <Instagram className="w-4 h-4 mr-2" />
                  Instagram
                </a>
                <a 
                  href="https://www.facebook.com/profile.php?id=61575155937407" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-earth-200 hover:text-safari-200 transition-colors"
                >
                  <Facebook className="w-4 h-4 mr-2" />
                  Facebook
                </a>
                <a 
                  href="https://tiktok.com/@samburu.elephant.lodge" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-earth-200 hover:text-safari-200 transition-colors"
                >
                  <Music className="w-4 h-4 mr-2" />
                  TikTok
                </a>
                <a 
                  href="https://www.linkedin.com/in/samburu-elephant-lodge" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-earth-200 hover:text-safari-200 transition-colors"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
                <a 
                  href="https://x.com/samburuelephant" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-earth-200 hover:text-safari-200 transition-colors"
                >
                  <Twitter className="w-4 h-4 mr-2" />
                  X (Twitter)
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-earth-700 mt-8 pt-8">
          <TripAdvisorWidget />
          <div className="text-center mt-4">
            <p className="text-earth-300">
            © 2025 Samburu Elephant Lodge. All rights reserved. | 
            <span className="ml-2">Sustainable Tourism • Wildlife Conservation • Community Development</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
