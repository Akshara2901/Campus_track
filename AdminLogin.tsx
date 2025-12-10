import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, Mail, Lock, ArrowLeft, ShieldCheck, AlertTriangle } from "lucide-react";
import { toast } from "sonner";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast.success("Admin login successful! Redirecting to dashboard...");
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Side - Illustration */}
      <div className="hidden lg:flex flex-1 bg-foreground items-center justify-center p-12 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(0_0%_100%/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(0_0%_100%/0.05)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative z-10 text-center text-background"
        >
          <div className="w-32 h-32 bg-accent rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
            <ShieldCheck className="w-16 h-16 text-accent-foreground" />
          </div>
          <h3 className="text-3xl font-bold mb-4">Administrator Portal</h3>
          <p className="text-background/70 max-w-sm mx-auto">
            Manage campus lost and found items, verify claims, and maintain organized records.
          </p>
          
          {/* Security Notice */}
          <div className="mt-8 p-4 bg-background/10 rounded-xl backdrop-blur-sm border border-background/20">
            <p className="text-sm text-background/80 flex items-center justify-center gap-2">
              <Lock className="w-4 h-4" />
              Secure encrypted connection
            </p>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-primary/20 rounded-full blur-2xl" />
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          {/* Back Link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          {/* Logo */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-foreground rounded-xl flex items-center justify-center shadow-lg">
              <MapPin className="w-6 h-6 text-background" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">
                Campus<span className="text-gradient">Track</span>
              </h1>
              <p className="text-sm text-muted-foreground">Admin Console</p>
            </div>
          </div>

          {/* Admin Notice */}
          <div className="flex items-center gap-3 p-4 bg-accent/10 border border-accent/20 rounded-xl mb-6">
            <AlertTriangle className="w-5 h-5 text-accent shrink-0" />
            <p className="text-sm text-accent font-medium">
              Admin Access Only — Authorized personnel only
            </p>
          </div>

          {/* Welcome Text */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Admin Sign In</h2>
            <p className="text-muted-foreground">
              Access the administrative dashboard to manage campus items.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="admin-email">Admin Email</Label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="admin-email"
                  type="email"
                  placeholder="admin@campus.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-12"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="admin-password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="admin-password"
                  type="password"
                  placeholder="Enter admin password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-12"
                  required
                />
              </div>
            </div>

            <Button type="submit" variant="accent" className="w-full" size="lg" disabled={isLoading}>
              {isLoading ? "Authenticating..." : "Access Dashboard"}
            </Button>
          </form>

          {/* Help Text */}
          <p className="text-center text-muted-foreground text-sm mt-6">
            Contact IT support if you need access credentials
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminLogin;
