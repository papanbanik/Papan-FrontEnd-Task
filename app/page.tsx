import Hero from "./components/Hero"
import Destination from "./components/Destination"
import TrustBy from "./components/TrustBy"
import FeatureTour from "./components/FeatureTour"
import Offer from "./components/Offer"
import Footer from "./components/Footer"
import Hotels from "./components/Hotels"
import  Payment  from "./components/Payment"
import  PlayStore  from "./components/PlayStore"
const Home = () => {
  return (
    <div>
      <Hero />
      <TrustBy />
      <Destination />
      <FeatureTour/>
      <Offer/>
      <Hotels/>
      <PlayStore/>
      <Payment/>
      <Footer/>
      </div>
       );
};

export default Home;