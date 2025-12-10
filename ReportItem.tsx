import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  MapPin, ArrowLeft, Upload, X, Camera, Search, Package, 
  Calendar, FileText, Tag, Building2, ImageIcon, CheckCircle
} from "lucide-react";
import { toast } from "sonner";

const categories = [
  { value: "electronics", label: "Electronics", icon: "📱" },
  { value: "clothing", label: "Clothing & Accessories", icon: "👕" },
  { value: "documents", label: "Documents & ID Cards", icon: "📄" },
  { value: "bags", label: "Bags & Backpacks", icon: "🎒" },
  { value: "keys", label: "Keys", icon: "🔑" },
  { value: "jewelry", label: "Jewelry & Watches", icon: "💍" },
  { value: "books", label: "Books & Stationery", icon: "📚" },
  { value: "sports", label: "Sports Equipment", icon: "⚽" },
  { value: "other", label: "Other", icon: "📦" },
];

const campusLocations = [
  { value: "library", label: "Central Library" },
  { value: "cafeteria", label: "Main Cafeteria" },
  { value: "lecture-hall-a", label: "Lecture Hall A" },
  { value: "lecture-hall-b", label: "Lecture Hall B" },
  { value: "science-building", label: "Science Building" },
  { value: "engineering-block", label: "Engineering Block" },
  { value: "sports-complex", label: "Sports Complex" },
  { value: "admin-building", label: "Admin Building" },
  { value: "parking-lot", label: "Parking Lot" },
  { value: "student-center", label: "Student Center" },
  { value: "dormitory", label: "Dormitory" },
  { value: "outdoor-area", label: "Outdoor/Campus Grounds" },
  { value: "other", label: "Other Location" },
];

type ReportType = "lost" | "found";

const ReportItem = () => {
  const [reportType, setReportType] = useState<ReportType>("lost");
  const [formData, setFormData] = useState({
    itemName: "",
    category: "",
    description: "",
    location: "",
    customLocation: "",
    date: "",
    contactInfo: "",
  });
  const [images, setImages] = useState<{ file: File; preview: string }[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newImages = Array.from(files).slice(0, 4 - images.length).map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setImages((prev) => [...prev, ...newImages].slice(0, 4));
  };

  const removeImage = (index: number) => {
    setImages((prev) => {
      const newImages = [...prev];
      URL.revokeObjectURL(newImages[index].preview);
      newImages.splice(index, 1);
      return newImages;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast.success(
      reportType === "lost" 
        ? "Lost item report submitted! We'll notify you when it's found." 
        : "Found item report submitted! We'll help find the owner."
    );
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="glass-card border-b sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 hero-gradient rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold text-foreground">
                Campus<span className="text-gradient">Track</span>
              </span>
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Page Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              Report an <span className="text-gradient">Item</span>
            </h1>
            <p className="text-muted-foreground">
              Fill in the details below to report a lost or found item
            </p>
          </div>

          {/* Report Type Toggle */}
          <div className="flex justify-center mb-8">
            <div className="glass-card p-1.5 rounded-2xl inline-flex gap-1">
              <button
                type="button"
                onClick={() => setReportType("lost")}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                  reportType === "lost"
                    ? "hero-gradient text-primary-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Search className="w-5 h-5" />
                Lost Item
              </button>
              <button
                type="button"
                onClick={() => setReportType("found")}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                  reportType === "found"
                    ? "bg-accent text-accent-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Package className="w-5 h-5" />
                Found Item
              </button>
            </div>
          </div>

          {/* Form */}
          <motion.form
            key={reportType}
            initial={{ opacity: 0, x: reportType === "lost" ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            onSubmit={handleSubmit}
            className="glass-card p-6 md:p-8 rounded-3xl space-y-6"
          >
            {/* Image Upload */}
            <div className="space-y-3">
              <Label className="flex items-center gap-2 text-base">
                <ImageIcon className="w-5 h-5 text-primary" />
                Upload Images (Optional)
              </Label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {images.map((img, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative aspect-square rounded-xl overflow-hidden border-2 border-border group"
                  >
                    <img
                      src={img.preview}
                      alt={`Upload ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-2 right-2 w-7 h-7 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </motion.div>
                ))}
                {images.length < 4 && (
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="aspect-square rounded-xl border-2 border-dashed border-border hover:border-primary hover:bg-primary/5 transition-colors flex flex-col items-center justify-center gap-2 text-muted-foreground hover:text-primary"
                  >
                    <Camera className="w-8 h-8" />
                    <span className="text-xs font-medium">Add Photo</span>
                  </button>
                )}
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
                className="hidden"
              />
              <p className="text-xs text-muted-foreground">
                Upload up to 4 images of the item
              </p>
            </div>

            {/* Item Name */}
            <div className="space-y-2">
              <Label htmlFor="itemName" className="flex items-center gap-2 text-base">
                <FileText className="w-5 h-5 text-primary" />
                Item Name
              </Label>
              <Input
                id="itemName"
                placeholder="e.g., Blue Backpack, iPhone 13, Student ID Card"
                value={formData.itemName}
                onChange={(e) => handleChange("itemName", e.target.value)}
                required
              />
            </div>

            {/* Category */}
            <div className="space-y-2">
              <Label className="flex items-center gap-2 text-base">
                <Tag className="w-5 h-5 text-primary" />
                Category
              </Label>
              <Select
                value={formData.category}
                onValueChange={(value) => handleChange("category", value)}
              >
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat.value} value={cat.value}>
                      <span className="flex items-center gap-2">
                        <span>{cat.icon}</span>
                        <span>{cat.label}</span>
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description" className="flex items-center gap-2 text-base">
                <FileText className="w-5 h-5 text-primary" />
                Description
              </Label>
              <Textarea
                id="description"
                placeholder="Provide a detailed description of the item (color, brand, distinguishing features, contents, etc.)"
                value={formData.description}
                onChange={(e) => handleChange("description", e.target.value)}
                className="min-h-[120px] resize-none"
                required
              />
            </div>

            {/* Location */}
            <div className="space-y-2">
              <Label className="flex items-center gap-2 text-base">
                <Building2 className="w-5 h-5 text-primary" />
                {reportType === "lost" ? "Last Seen Location" : "Found Location"}
              </Label>
              <Select
                value={formData.location}
                onValueChange={(value) => handleChange("location", value)}
              >
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Select campus location" />
                </SelectTrigger>
                <SelectContent>
                  {campusLocations.map((loc) => (
                    <SelectItem key={loc.value} value={loc.value}>
                      {loc.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {formData.location === "other" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <Input
                    placeholder="Specify the location"
                    value={formData.customLocation}
                    onChange={(e) => handleChange("customLocation", e.target.value)}
                    className="mt-2"
                  />
                </motion.div>
              )}
            </div>

            {/* Date */}
            <div className="space-y-2">
              <Label htmlFor="date" className="flex items-center gap-2 text-base">
                <Calendar className="w-5 h-5 text-primary" />
                {reportType === "lost" ? "Date Lost" : "Date Found"}
              </Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => handleChange("date", e.target.value)}
                max={new Date().toISOString().split("T")[0]}
                required
              />
            </div>

            {/* Contact Info */}
            <div className="space-y-2">
              <Label htmlFor="contactInfo" className="flex items-center gap-2 text-base">
                <MapPin className="w-5 h-5 text-primary" />
                Contact Information
              </Label>
              <Input
                id="contactInfo"
                placeholder="Phone number or email for contact"
                value={formData.contactInfo}
                onChange={(e) => handleChange("contactInfo", e.target.value)}
                required
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                size="lg"
                variant={reportType === "lost" ? "default" : "accent"}
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <Upload className="w-5 h-5" />
                    </motion.div>
                    Submitting...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Submit {reportType === "lost" ? "Lost" : "Found"} Item Report
                  </span>
                )}
              </Button>
            </div>
          </motion.form>

          {/* Help Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center text-muted-foreground text-sm mt-6"
          >
            Need help? Contact the campus lost & found office at{" "}
            <a href="mailto:lostandfound@campus.edu" className="text-primary hover:underline">
              lostandfound@campus.edu
            </a>
          </motion.p>
        </motion.div>
      </main>
    </div>
  );
};

export default ReportItem;
