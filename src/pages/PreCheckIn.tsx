import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PreCheckIn = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-brand-cream to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-brown mb-4">Guest Services</p>
            <h1 className="text-4xl md:text-5xl font-light text-brand-brown mb-6 font-playfair">
              Pre-Check-In Form
            </h1>
            <p className="text-lg text-brand-brown/80 leading-relaxed font-light">
              Complete your pre-check-in information to ensure a smooth arrival at Samburu Elephant Lodge. 
              This form helps us prepare for your stay and customize your experience.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8 bg-brand-cream/20 border-b">
                <h2 className="text-2xl font-light text-brand-brown mb-4 font-playfair">
                  Guest Information Form
                </h2>
                <p className="text-brand-brown/80 font-light">
                  Please fill out the form below with your details. This information helps us provide 
                  personalized service and ensure all arrangements are ready for your arrival.
                </p>
              </div>

              <div className="p-4 text-center">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScGEk8S91atAi-BAq2lH2wUJKGHdqwKi3vmu5TsMuYa8rSktA/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-brand-brown text-white font-medium py-3 px-6 rounded-lg hover:bg-brand-brown-dark transition"
                >
                  Open Pre‑Check‑In Form
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PreCheckIn;
