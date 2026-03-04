import { motion } from 'motion/react';
import WhatsAppButton from './WhatsAppButton';
import { ArrowRight, Activity, HeartPulse, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-teal-50/50">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-100/30 rounded-l-full blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-100/30 rounded-r-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 text-teal-800 font-medium text-sm mb-6">
              <Activity className="w-4 h-4" />
              <span>Specializing in Sports Injury Recovery</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Reclaim Your <span className="text-teal-600">Strength</span> & Move Without Pain
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Ease Life Physiotherapy Clinic provides expert care, advanced rehab techniques, and personalized treatment plans to help you get back to your active lifestyle.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <WhatsAppButton text="Book Your Session" className="w-full sm:w-auto text-lg px-8 py-4" />
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-slate-600 font-medium hover:text-teal-600 transition-colors px-6 py-4"
              >
                Explore Services <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-4 border-t border-slate-200 pt-8">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-teal-600 mb-1">500+</div>
                <div className="text-sm text-slate-500">Happy Patients</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-teal-600 mb-1">10+</div>
                <div className="text-sm text-slate-500">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-teal-600 mb-1">100%</div>
                <div className="text-sm text-slate-500">Commitment</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:ml-auto w-full max-w-lg mx-auto"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] bg-slate-200">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Physiotherapy session"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              
              {/* Floating badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute bottom-6 left-6 bg-white p-4 rounded-2xl shadow-lg flex items-center gap-4"
              >
                <div className="bg-teal-100 p-3 rounded-full text-teal-600">
                  <HeartPulse className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Expert Care</div>
                  <div className="text-sm text-slate-500">Personalized Rehab</div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute top-12 right-4 bg-white p-4 rounded-2xl shadow-lg flex items-center gap-3 hidden sm:flex"
              >
                <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="font-bold text-slate-900 text-sm">Certified Pros</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
