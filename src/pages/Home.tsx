import Facts from "@/components/HomePageSections/Facts";
import heroImg from "../assets/hero.png";
import ImageSlider from "../components/HomePageSections/ImageSlider";
import OurAdvisor from "../components/HomePageSections/OurAdvisor";
import OurExecutives from "../components/HomePageSections/OurExecutives";
import ThreeDot from "../components/HomePageSections/ThreeDot";
import VideoSection from "../components/HomePageSections/VideoSection";
import Footer from "./Footer";
import StepToCreateCV from "../components/HomePageSections/StepToCreateCV";
import WhyTrucv from "../components/HomePageSections/WhyTrucv";
// import Collaborators from "../components/HomePageSections/Collaborators";
interface HomeProps {
  loginModel: boolean;
  setLoginModel:React.Dispatch<React.SetStateAction<boolean>>;
}

const Home:React.FC<HomeProps> = ({setLoginModel}) => {
  return (
    <div className="flex justify-center items-center flex-col gap-8 overflow-hidden">
     <div className="relative w-full">
      <div className="flex justify-around items-center flex-wrap-reverse gap-10 md:gap-20 border-b-4 border-amber-300 md:h-[80vh]">
        <div className="flex justify-center items-center flex-col gap-4 pb-4" data-aos="fade-up">
          <div className="flex justify-center items-center gap-2">
          <p className="text-white bg-[#006666] px-6 py-4 font-bold rounded-lg text-2xl sm:text-3xl md:text-4xl" data-aos="fade-right">
            TruCV
          </p>
          <div className="flex lg:hidden relative rounded-lg p-[2px] bg-gradient-to-r from-[#03257e] via-[#006666] to-[#f14419]" data-aos="fade-left">
              <button
                className="w-full bg-white text-[20px] px-6 py-4 font-bold rounded-lg text-[#03257e] hover:text-[#f14419]"
                onClick={()=>setLoginModel(true)}
              >
                Login
              </button>
            </div>
          </div>
          <p className="text-[#03257E] text-center text-2xl sm:text-3xl md:text-5xl font-bold" data-aos="fade-up">
            Your Verifiable CV<br></br> on Blockchain
          </p>
          <p className="text-[#f14419] text-center font-bold text-xl sm:text-2xl" data-aos="fade-up">
            [ Academic & Professional Credentials ]
          </p>
        </div>
        <div className="relative w-fit ">
          <img
            src={heroImg}
            alt="hero-img"
            className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] rounded-b-full object-cover"
            data-aos="zoom-in"
          />
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] lg:w-[350px] lg:h-[350px] bg-[#03257e] rounded-full -z-10"></div>
        </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-[#03257e] via-[#006666] to-[#f14419]">
        </div>
      </div>

      <ImageSlider />
      <ThreeDot />
      <Facts />
      <ThreeDot />
      <WhyTrucv />
      <ThreeDot />
      <StepToCreateCV />
      <ThreeDot />
      <VideoSection />
      <ThreeDot />
      {/* <Collaborators />
      <ThreeDot /> */}
      <OurExecutives />
      <ThreeDot />
      <OurAdvisor />
      <Footer />
    </div>
  );
};

export default Home;
