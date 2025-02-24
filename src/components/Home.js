import { LoaderData } from "../context/loaderContext";
import "../styles/about.css";
import Loader from "./Loader/Loader";
import TypewritingButton from "./TypewritingButton";
import { motion } from "framer-motion";

// Animation Variants
const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const slideFromLeft = {
  hidden: { x: "-100%", opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1 } },
};

const slideFromRight = {
  hidden: { x: "100%", opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1 } },
};

const Home = ({scrollToContact}) => {
  const { isLoading } = LoaderData();
  if (isLoading) {
    return <Loader />;
  }
  return (
    <motion.div
      className="scroll-mt-20"
      initial="hidden"
      animate="visible"
      variants={fadeInVariant}
    >
      <motion.div className="initial !mb-10" id="home">
        <motion.div
          className="div1"
          variants={fadeInVariant}
          initial="hidden"
          animate="visible"
        >
          <div className="para">
            <h1 className="heading text-center">
            ABACUS '25 “Ideas Converge and Possibilities Unfold”
            </h1>
            <p className="pres text-center text-white">
              Navigating the Future, One Innovation at a Time
            </p>

            <div className="button-container text-center">
              <motion.button
                className="cursor-pointer mt-10 mb-6 px-6 py-4 bg-gradient-to-br from-red-300 via-red-500 to-red-800 text-white font-bold rounded-full shadow-lg hover:shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-shadow focus:outline-none focus:shadow-[0_0_15px_rgba(255,223,47,0.8)] z-100"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{ pointerEvents: "auto" }}
                onClick={scrollToContact}
              >
                Contact Us!!
              </motion.button>
            </div>
          </div>
        </motion.div>
        <motion.div className="new">
          <motion.div
            className="div2 !my-24"
            variants={fadeInVariant}
            initial="hidden"
            animate="visible"
          >
            <img
              className="logo"
              src={require("../assets/images/logo copy.png")}
              alt="Abacus Logo"
            />
            <div className="home_bgcircle1__MiYGt !my-[340px] md:!my-68 xl:!my-8 lg:!my-68"></div>
          </motion.div>
          <TypewritingButton />
        </motion.div>
      </motion.div>
      <motion.div className="about-section">
        <motion.h2
          className="h2 scroll-mt-36 lg:!mt-16 lg:mx-20 !mx-auto text-2xl lg:text-5xl font-bold text-[#fcfcfc] text-center mb-8 overflow-hidden [text-shadow:6px_2px_4px_#c03e3e]"
          id="about"
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Abacus-2025
        </motion.h2>
        <motion.div
          className="about bg-transparent overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="first" variants={slideFromLeft}>
            <img
              src={require("../assets/images/logo.jpeg")}
              alt="Abacus Logo"
              className="h-[0] w-[0] !mx-auto lg:mx-20 lg:h-[35%] lg:w-[45%] xl:h-[85%] xl:w-[65%] "
            />
          </motion.div>
          <motion.div
            className="second py-10 flex flex-col"
            variants={slideFromRight}
          >
            <p className="text-white text-justify">
              The conglomeration of the brightest minds enhancing the
              participant’s knowledge and creative potentials. The 3-day annual
              symposium showcases 15+ events and flagship contests of crystal
              gazing technology. Abacus's coverage and deliberations of earlier
              symposia have been a grand success with insatiable thirst for
              technological development rejuvenating the technology with
              innovation. This year, Abacus is back offline on a grander scale
              with an innovative edge to all the events.
            </p>
            <motion.button
              className=".but !my-8 !mx-auto xl:!mx-0 lg:w-[23%]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Read More
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
