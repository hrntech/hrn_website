"use client"
// components/FeaturesSection.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Users, Brain, Lightbulb } from "lucide-react";

const features = [
  {
    icon: <Users size={90} className="text-[#dd4545]" />,
    title: "Advanced Tools",
    description: "Scelerisque viverra mauris in aliquam sem fringilla ut.",
  },
  {
    icon: <Brain size={90} className="text-[#dd4545]" />,
    title: "Innovation",
    description: "Sit amet volutpat consequat mauris nunc congue nisi.",
  },
  {
    icon: <Lightbulb size={90} className="text-[#dd4545]" />,
    title: "Creative Ideas",
    description: "Sagittis aliquam malesuada bibendum arcu vitae elem.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="flex justify-center flex-wrap gap-20 py-10 bg-white">
      {features.map((feature, idx) => (
        <FeatureCard
          key={idx}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </section>
  );
}

function FeatureCard({ icon, title, description }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex  items-center text-left max-w-xs flex-wrap justify-center "
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        animate={hovered ? { scale: [1, 1.2, 1] } : { scale: 1 }}
        transition={{
          duration: 1,
          repeat: hovered ? Infinity : 0,
          ease: "easeInOut",
        }}
        className=""
      >
        {icon}
      </motion.div>
      <div className="ml-5">
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
}
