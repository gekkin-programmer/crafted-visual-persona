
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);

    // Simulate async mail send.
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Thank you!",
        description: "Your message was sent successfully.",
      });
      setForm({ name: "", email: "", message: "" });
    }, 1200);
  }

  return (
    <section id="contact" className="py-16 animate-fade-in">
      <h2 className="font-playfair text-3xl md:text-4xl mb-8 text-primary font-bold text-center">
        Contact Me
      </h2>
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
          />
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
          />
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
          />
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
