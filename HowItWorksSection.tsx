import { motion } from "framer-motion";
import { UserPlus, FileSearch, Bell, Package } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Register & Login",
    description: "Create your student account with your campus email and department details.",
  },
  {
    icon: FileSearch,
    step: "02",
    title: "Report Item",
    description: "Submit a detailed report of your lost or found item with photos and location.",
  },
  {
    icon: Bell,
    step: "03",
    title: "Get Matched",
    description: "Our system matches lost items with found reports and notifies you instantly.",
  },
  {
    icon: Package,
    step: "04",
    title: "Claim & Collect",
    description: "Verify your ownership and collect your item from the designated location.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 hero-gradient" />
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple Steps to{" "}
            <span className="text-gradient">Recovery</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Getting your lost items back has never been easier. Follow these simple steps.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-border" />
              )}
              
              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Step Number */}
                <div className="relative mb-4">
                  <div className="w-20 h-20 hero-gradient rounded-2xl flex items-center justify-center shadow-lg glow-primary">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                    {step.step}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
