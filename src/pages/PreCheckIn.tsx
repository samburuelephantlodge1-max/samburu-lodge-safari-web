import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PreCheckInForm from "@/components/PreCheckInForm";
import { updatePageMeta } from "@/utils/seo";

const PreCheckIn = () => {
  useEffect(() => {
    updatePageMeta(
      "Pre Check-In - Samburu Elephant Lodge Guest Information",
      "Complete your pre-arrival information for a seamless check-in at Samburu Elephant Lodge. Streamline your safari experience arrival process.",
      "/pre-check-in"
    );
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <PreCheckInForm />
      <Footer />
    </div>
  );
};

export default PreCheckIn;
