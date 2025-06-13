import heroImages from "@/components/home/hero_images";
let $ = require("jquery");
if (typeof window !== "undefined") window.$ = window.jQuery = require("jquery");
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

export default function Hero() {
  const heroConfig = {
    autoplayTimeout: 3000,
    loop: true,
    autoplay: true,
    dots: false,
    nav: false,
    items: 1,
  };

  return (
    <div className="container-fluid">
      <div className="row hero-m">
        <div className="col-12 black position-relative">
          <div className="row justify-content-center align-items-center border-top">
            <div className="col-md-12 p-0">
              <OwlCarousel {...heroConfig}>
                {heroImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt="image"
                    priority
                    className="object-fit-cover hero-size"
                  />
                ))}
              </OwlCarousel>
            </div>

            <div className="hero-overlay text-center">
              <motion.h3
                className="fw-bold"
                initial={{ opacity: 0, y: 60, scale: 0.95, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                transition={{ duration: 1, delay: 0.2, type: 'spring', stiffness: 60 }}
              >
                CLOTHES, JEWELRY, JOURNALS & MORE
              </motion.h3>

              <motion.p
                className="fw-light mt-5"
                initial={{ opacity: 0, y: 60, scale: 0.95, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                transition={{ duration: 1, delay: 0.5, type: 'spring', stiffness: 60 }}
              >
                With our wide range of quality best sellers and selling offers
                you can shop limitless and timelessly.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
