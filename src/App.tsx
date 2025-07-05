import { Routes, Route} from "react-router-dom";
import { useState, lazy, Suspense, useEffect } from "react";
import { OktoClientConfig,OktoProvider } from "@okto_web3/react-sdk";
import PrivateRoute from "./protectRoute";
import Navbar from "./pages/Navbar";
import ThreeDotLoader from "./components/Loader/ThreeDotLoader";

// Lazy-loaded pages
const HomePage = lazy(() => import("./pages/HomePage"));
const CvOutputPage = lazy(() => import("./pages/CvOutputPage"));
const Home = lazy(() => import("./pages/Home"));
const DashBoard = lazy(() => import("./pages/DashBoard"));
const Resume = lazy(() => import("./pages/ResumeTem"));
const RefundPolicy = lazy(() => import("./pages/RefundPolicy"));
const About = lazy(() => import("./pages/About"));
const TermsAndConditions = lazy(() => import("./pages/TermCond"));
const CancellationPolicy = lazy(() => import("./pages/CancellationPol"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
import AOS from "aos";
import "aos/dist/aos.css";
import AppPrivacyPolicy from "./pages/AppPrivacy";

function App() {

  const [loginModel, setLoginModel] = useState(false);
   const config: OktoClientConfig = {
      environment:"production",
      clientPrivateKey:import.meta.env.VITE_OKTO_CLIENT_PRIVATE_KEY,
      clientSWA:import.meta.env.VITE_OKTO_CLIENT_SWA,
    };

      useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: false,     // whether animation should happen only once
    });
  }, []);

  return (
    <div>
        <OktoProvider  config={config}>
          <Navbar loginModel={loginModel} setLoginModel={setLoginModel} />
          <Suspense fallback={<div className="flex justify-center items-center text-3xl text-[#03257e] font-bold h-[80vh]" data-aos="zoom-in">Loading {""} <ThreeDotLoader w={2} h={2} yPos={'end'} /></div>}>
            <Routes>
              <Route
                path="/"
                element={<Home loginModel={loginModel} setLoginModel={setLoginModel} />}
              />
              <Route path="new-cv/:id" element={<Resume />} />
              <Route path="/refund-policy" element={<RefundPolicy />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
              <Route path="/cancellation-policy" element={<CancellationPolicy />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/pprivacy-policy" element={<AppPrivacyPolicy />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                 <Route path="/create-cv" element={<HomePage />} />
                <Route path="/dashboard" element={<DashBoard />} />
                <Route path="cv/:id" element={<CvOutputPage />} />
              <Route element={<PrivateRoute />}>
                
              </Route>
            </Routes>
          </Suspense>
        </OktoProvider>
    </div>
  );
}

export default App;
