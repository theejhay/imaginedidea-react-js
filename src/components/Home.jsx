import Carousel from "./Carousel"
import CustomButton from "./CustomButton";
import Movie from "./Movie";
import Toggle from "./Toggle";
import ToggleText from "./ToggleText";
function Home() {
    return (
        <>
         <Carousel />
         <CustomButton text="Register Me" color="green" disabled={true}  />
         <ToggleText />
        </>
    )
}

export default Home;