import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  text?: string;
  className?: string;
}

export default function WhatsAppButton({ text = "Book Appointment", className = "" }: WhatsAppButtonProps) {
  const phoneNumber = "919876543210"; // Replace with actual number
  const message = "Hi, I would like to book an appointment at Ease Life Physiotherapy Clinic.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-teal-700 transition-colors ${className}`}
    >
      <MessageCircle className="w-5 h-5" />
      {text}
    </motion.a>
  );
}
