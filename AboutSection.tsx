import { motion } from "framer-motion";
import { Sparkles, Target, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Digitalizing the{" "}
              <span className="text-gradient">Lost & Found</span> Experience
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              The Campus Track – Intelligent Lost & Found Locator is a web-based system designed to help 
              students and college authorities efficiently manage lost and found items within the campus. 
              The platform allows students to register, log in, and report items they have lost or discovered. 
              Administrators can verify these reports, manage item listings, and facilitate the return of 
              belongings to the rightful owners.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              By digitalizing the traditional lost-and-found process, Campus Track improves accuracy, 
              speeds up item recovery, and provides an organized and accessible solution for the entire 
              campus community.
            </p>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {[
              {
                icon: Sparkles,
                title: "Smart Technology",
                description: "Advanced matching algorithms to connect lost items with their owners quickly.",
                color: "bg-primary/10 text-primary",
              },
              {
                icon: Target,
                title: "Accuracy First",
                description: "Detailed reporting and verification ensures items reach the right people.",
                color: "bg-accent/10 text-accent",
              },
              {
                icon: Users,
                title: "Community Driven",
                description: "Built for students and staff to create a helpful campus ecosystem.",
                color: "bg-emerald-500/10 text-emerald-500",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="glass-card glass-card-hover p-6 rounded-2xl flex items-start gap-4"
              >
                <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center shrink-0`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
