import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

const packages = [
  {
    name: "Single Session",
    price: "₹800",
    duration: "Per Session",
    description: "Perfect for initial assessment or minor acute pain relief.",
    features: [
      "Detailed Physical Assessment",
      "Diagnosis & Treatment Plan",
      "Manual Therapy / Modalities",
      "Basic Exercise Prescription",
      "45-60 Minutes Duration"
    ],
    highlighted: false
  },
  {
    name: "Recovery Package",
    price: "₹3,500",
    duration: "5 Sessions",
    description: "Ideal for mild sports injuries and short-term rehabilitation.",
    features: [
      "Everything in Single Session",
      "Progressive Treatment Plan",
      "Advanced Electrotherapy",
      "Targeted Strengthening",
      "Save ₹500 overall"
    ],
    highlighted: true
  },
  {
    name: "Complete Rehab",
    price: "₹6,500",
    duration: "10 Sessions",
    description: "Comprehensive care for post-op recovery & chronic conditions.",
    features: [
      "Everything in Recovery Package",
      "Sports-Specific Conditioning",
      "Preventive Care Strategy",
      "Priority Booking",
      "Save ₹1,500 overall"
    ],
    highlighted: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            Transparent <span className="text-teal-600">Pricing</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            Affordable and effective treatment plans tailored for the New Delhi community. Choose the package that best fits your recovery journey.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 ${
                pkg.highlighted 
                  ? 'bg-teal-600 text-white shadow-xl scale-105 md:-translate-y-4 z-10' 
                  : 'bg-white text-slate-900 shadow-md border border-slate-100'
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-teal-200 text-teal-900 text-sm font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className={`text-xl font-bold mb-2 ${pkg.highlighted ? 'text-teal-50' : 'text-slate-900'}`}>
                  {pkg.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-4xl font-extrabold">{pkg.price}</span>
                  <span className={`text-sm font-medium ${pkg.highlighted ? 'text-teal-100' : 'text-slate-500'}`}>
                    / {pkg.duration}
                  </span>
                </div>
                <p className={`text-sm ${pkg.highlighted ? 'text-teal-100' : 'text-slate-500'}`}>
                  {pkg.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 ${pkg.highlighted ? 'text-teal-200' : 'text-teal-600'}`} />
                    <span className={`text-sm ${pkg.highlighted ? 'text-teal-50' : 'text-slate-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <WhatsAppButton 
                text="Choose Package" 
                className={`w-full ${
                  pkg.highlighted 
                    ? 'bg-white text-teal-700 hover:bg-teal-50' 
                    : 'bg-teal-50 text-teal-700 hover:bg-teal-100'
                }`} 
              />
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center text-sm text-slate-500">
          <p>* Home visits are available in South & Central Delhi at an additional cost of ₹300-₹500 per session.</p>
        </div>
      </div>
    </section>
  );
}
