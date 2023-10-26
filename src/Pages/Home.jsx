import AboutUs from "./Shared/AboutUs";
import Banner from "./Shared/Banner";
import Services from "./Shared/Services";


const Home = () => {
    return (
        <div >
            <div>
                <Banner></Banner>
            </div>
            <div>
                <AboutUs></AboutUs>
            </div>
            <div>
                <Services></Services>
            </div>
        </div>
    );
};

export default Home;