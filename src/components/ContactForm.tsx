import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { supabase } from "@/lib/supabase";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Form validation function
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!form.message.trim()) newErrors.message = "Message is required";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    // Clear error when user types
    if (errors[e.target.name]) {
      setErrors(prev => ({ ...prev, [e.target.name]: "" }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) return;
    
    setIsLoading(true);
    setIsSuccess(false);

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([{
          name: form.name,
          email: form.email,
          message: form.message
        }]);

      if (error) throw error;

      toast({
        title: "Thank you!",
        description: "Your message was sent successfully.",
      });
      
      setIsSuccess(true);
      setForm({ name: "", email: "", message: "" });
      
      // Reset success after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);

    } catch (error) {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="contact" className="py-16 animate-fade-in">
      <h2 className="font-playfair text-3xl md:text-4xl mb-8 text-primary font-bold text-center">
        Contact Me
      </h2>
      
      {/* Success Indicator */}
      {isSuccess && (
        <div className="max-w-xl mx-auto mb-6 p-4 bg-green-100 text-green-700 rounded-lg text-center">
          Thank you! Your message has been received.
        </div>
      )}
      
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-card/80 shadow-card rounded-2xl p-8 flex flex-col gap-6 border border-border"
      >
        <div>
          <label htmlFor="name" className="block text-base font-medium mb-1 text-foreground">
            Name
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your Name"
            value={form.name}
            required
            onChange={onChange}
            className={errors.name ? "border-red-500" : ""}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="email" className="block text-base font-medium mb-1 text-foreground">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={form.email}
            required
            onChange={onChange}
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="message" className="block text-base font-medium mb-1 text-foreground">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            placeholder="How can I help you?"
            value={form.message}
            required
            rows={5}
            onChange={onChange}
            className={errors.message ? "border-red-500" : ""}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-500">{errors.message}</p>
          )}
        </div>
        
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full mt-4"
        >
          {isLoading ? "Sending..." : "Send"}
        </Button>
      </form>
    </section>
  );
};

export default ContactForm;
