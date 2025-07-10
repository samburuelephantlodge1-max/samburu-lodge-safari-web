import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PreCheckInForm from "@/components/PreCheckInForm";

const PreCheckIn = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <PreCheckInForm />
      <Footer />
    </div>
  );
};

export default PreCheckIn;
