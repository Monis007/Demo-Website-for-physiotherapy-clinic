import { motion } from 'motion/react';
import { Activity, Bone, Dumbbell, PersonStanding, Stethoscope, Zap } from 'lucide-react';

const services = [
  {
    icon: <Activity className="w-8 h-8" />,
    title: "Sports Injury Recovery",
    description: "Specialized rehabilitation programs for athletes to recover faster and prevent future injuries. We treat sprains, strains, and ligament tears."
  },
  {
    icon: <Bone className="w-8 h-8" />,
    title: "Orthopedic Physiotherapy",
    description: "Treatment for musculoskeletal conditions including back pain, neck pain, arthritis, and joint stiffness to restore mobility."
  },
  {
    icon: <PersonStanding className="w-8 h-8" />,
    title: "Post-Surgical Rehab",
    description: "Comprehensive care following orthopedic surgeries like ACL reconstruction, joint replacements, and fracture repairs."
  },
  {
    icon: <Stethoscope className="w-8 h-8" />,
    title: "Manual Therapy",
    description: "Hands-on techniques including joint mobilization, manipulation, and soft tissue release to reduce pain and improve function."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Electrotherapy",
    description: "Advanced modalities like TENS, Ultrasound, and Laser therapy to accelerate healing, reduce inflammation, and manage pain."
  },
  {
    icon: <Dumbbell className="w-8 h-8" />,
    title: "Strength & Conditioning",
    description: "Customized exercise programs to build strength, improve flexibility, and enhance overall physical performance."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            Our Specialized <span className="text-teal-600">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            We offer comprehensive physiotherapy solutions tailored to your specific needs, focusing on effective recovery and long-term wellness.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-50 rounded-2xl p-8 hover:bg-teal-50 hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-teal-100 group"
            >
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-teal-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
