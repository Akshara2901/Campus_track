import { motion } from "framer-motion";
import { FileText, Search, Shield, Bell, MapPin, CheckCircle } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Report Lost Items",
    description: "Quickly submit detailed reports of your lost belongings with photos and descriptions.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Search,
    title: "Report Found Items",
    description: "Found something? Help reunite items with their owners by reporting your find.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Shield,
    title: "Admin Verification",
    description: "All claims are verified by campus administrators to ensure secure item returns.",
    color: "bg-emerald-500/10 text-emerald-500",
  },
  {
    icon: MapPin,
    title: "Location Tracking",
    description: "Track where items were lost or found with precise campus location mapping.",
    color: "bg-violet-500/10 text-violet-500",
  },
  {
    icon: Bell,
    title: "Instant Notifications",
    description: "Get notified immediately when your lost item is found or a match is identified.",
    color: "bg-rose-500/10 text-rose-500",
  },
  {
    icon: CheckCircle,
    title: "Easy Claim Process",
    description: "Streamlined verification and claim process to get your belongings back quickly.",
    color: "bg-sky-500/10 text-sky-500",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative">
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
            Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need to{" "}
            <span className="text-gradient">Find & Return</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our comprehensive platform makes it easy to report, track, and recover lost items on campus.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card glass-card-hover p-6 rounded-2xl"
            >
              <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-4`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
