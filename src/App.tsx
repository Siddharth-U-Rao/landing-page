import { Layout } from "./Components/Layout";
import { AboutUs } from "./Components/Sections/AboutUs";
import { Brands } from "./Components/Sections/Brands";
import { CTA } from "./Components/Sections/Calltoaction";
import { Hero } from "./Components/Sections/Hero";
import { Pricing } from "./Components/Sections/Pricing";
import { Services } from "./Components/Sections/Services";

function App() {
  return (
    <Layout title="EdgeAI">
      <Hero />
      <Brands />
      <Services />
      <AboutUs/>
      <Pricing/>
      <CTA/>
    </Layout>
    
  );
}

export default App;
