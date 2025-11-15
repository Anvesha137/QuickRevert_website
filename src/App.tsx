import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { Challenge } from "./components/challenge";
import { Solution } from "./components/solution";
import WpFeatures from "./components/wpfeatures";
import HomeIntegration from "./components/homeintegration";
import HomePreFooter from "./components/homePreFooter";
import Footer from "./components/footer";

export default function App() {
  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      <Hero />
      <Challenge />
      <Solution />
      <WpFeatures />
      <HomeIntegration />
      <HomePreFooter />
      <Footer />
    </div>
  );
}