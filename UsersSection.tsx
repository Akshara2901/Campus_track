import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GraduationCap, ShieldCheck, ArrowRight } from "lucide-react";

const UsersSection = () => {
  return (
    <section id="users" className="py-24 relative">
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
            User Categories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built for{" "}
            <span className="text-gradient">Everyone</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Whether you're a student or campus administrator, Campus Track has you covered.
          </p>
        </motion.div>

        {/* User Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Student Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card glass-card-hover p-8 rounded-3xl border-2 border-transparent hover:border-primary/20"
          >
            <div className="w-16 h-16 hero-gradient rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <GraduationCap className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold mb-3">For Students</h3>
            <p className="text-muted-foreground mb-6">
              Register with your campus credentials, report lost or found items, track recovery status, 
              and get notified when your belongings are found.
            </p>
            <ul className="space-y-3 mb-8">
              {["Quick item reporting", "Real-time tracking", "Instant notifications", "Secure claims"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex gap-3">
              <Link to="/student-login">
                <Button variant="outline">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button className="group">
                  Register
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Admin Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card glass-card-hover p-8 rounded-3xl border-2 border-transparent hover:border-accent/20"
          >
            <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <ShieldCheck className="w-8 h-8 text-accent-foreground" />
            </div>
            <h3 className="text-2xl font-bold mb-3">For Administrators</h3>
            <p className="text-muted-foreground mb-6">
              Manage all lost and found reports, verify claims, facilitate returns, 
              and maintain organized records of campus items.
            </p>
            <ul className="space-y-3 mb-8">
              {["Dashboard overview", "Claim verification", "Report management", "Analytics & insights"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/admin-login">
              <Button variant="accent" className="group">
                Admin Access
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UsersSection;
