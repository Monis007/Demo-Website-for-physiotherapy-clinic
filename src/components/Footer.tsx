import { Activity, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <div className="bg-teal-600 p-2 rounded-lg">
                <Activity className="w-6 h-6" />
              </div>
              <span className="font-bold text-xl tracking-tight">Ease Life</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Specialized physiotherapy clinic in New Delhi focusing on sports injury recovery, orthopedic rehab, and pain management.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-teal-400 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition-colors">Services</a></li>
              <li><a href="#pricing" className="hover:text-teal-400 transition-colors">Pricing</a></li>
              <li><a href="#portfolio" className="hover:text-teal-400 transition-colors">Portfolio</a></li>
              <li><a href="#testimonials" className="hover:text-teal-400 transition-colors">Testimonials</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-500 shrink-0" />
                <span>123 Wellness Avenue, South Extension Part II, New Delhi, 110049</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-teal-500 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-teal-500 shrink-0" />
                <span>hello@easelifephysio.in</span>
              </li>
            </ul>
          </div>

          {/* Timings */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Clinic Hours</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-teal-500 shrink-0" />
                <div className="flex flex-col">
                  <span className="font-medium text-white">Mon - Sat</span>
                  <span className="text-slate-400">9:00 AM - 8:00 PM</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-slate-600 shrink-0" />
                <div className="flex flex-col">
                  <span className="font-medium text-white">Sunday</span>
                  <span className="text-slate-400">By Appointment Only</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Ease Life Physiotherapy Clinic. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
