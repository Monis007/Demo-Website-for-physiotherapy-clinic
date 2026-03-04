import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Marathon Runner",
    text: "After a severe hamstring tear, I thought my running days were over. The team at Ease Life got me back on track in just 3 months. Highly recommended for sports injuries!",
    rating: 5
  },
  {
    name: "Priya Desai",
    role: "IT Professional",
    text: "Sitting at a desk all day gave me terrible neck and shoulder pain. The manual therapy sessions here worked wonders. I finally feel pain-free.",
    rating: 5
  },
  {
    name: "Vikram Singh",
    role: "Post-Op Patient",
    text: "Recovering from knee surgery was daunting, but the structured rehab program and constant encouragement from the physios made the process smooth and effective.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            What Our <span className="text-teal-600">Patients Say</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            Don't just take our word for it. Read about the experiences of those who have recovered with us.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-teal-100" />
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-600 italic mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div>
                <div className="font-bold text-slate-900">{testimonial.name}</div>
                <div className="text-sm text-teal-600 font-medium">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
