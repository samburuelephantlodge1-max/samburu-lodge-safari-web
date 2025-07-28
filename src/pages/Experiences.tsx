import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Experiences from "@/components/Experiences";
import { updatePageMeta } from "@/utils/seo";

const ExperiencesPage = () => {
  useEffect(() => {
    updatePageMeta(
      "Safari Experiences - Wildlife Adventures at Samburu Elephant Lodge",
      "Discover unique safari experiences, cultural encounters, and wildlife adventures in Samburu National Reserve. Game drives, nature walks, and Samburu cultural visits.",
      "/experiences"
    );
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Experiences />
      <Footer />
    </div>
  );
};

export default ExperiencesPage;