
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { updatePageMeta } from "@/utils/seo";

const ContactPage = () => {
  useEffect(() => {
    updatePageMeta(
      "Contact Samburu Elephant Lodge - Book Your Safari Adventure",
      "Get in touch with Samburu Elephant Lodge for reservations, inquiries, and safari bookings. Located in Samburu National Reserve, Kenya.",
      "/contact"
    );
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;
