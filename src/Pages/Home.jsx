import About from "../components/About/About";
import Banner from "../components/Banner/Banner";
import FAQ from "../components/FAQ/FAQ";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import ImpactStories from "../components/ImpactStories/ImpactStories";

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <HowItWorks />
            <ImpactStories />
            <FAQ />
        </div>
    );
};

export default Home;