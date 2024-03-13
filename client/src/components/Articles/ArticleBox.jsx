import React, { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/ste.jpeg";
import img2 from "../../assets/doc.png";
import img3 from "../../assets/mind.jpeg";
import img4 from "../../assets/old.jpeg";
import img5 from "../../assets/liver.jpeg";
import img6 from "../../assets/doc2.jpeg";
import img7 from "../../assets/drug.jpeg";
import img8 from "../../assets/eyes.jpeg";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const descriptions = [
    "Malfunctioning immune cells may cause type 2 diabetes in obesity",
    "Can Blue Light Blocking Technology Combat Digital Eye Strain?",
    "Development and Validation of a Risk Score",
    "Addressing the threat of loneliness and depression in older adults",
    "Progress towards elimination of viral hepatitis",
    "Global Cancer Surgery: pragmatic solutions to improve cancer surgery outcomes",
    "A life-course approach to women’s health",
    "Which migraine medications are most helpful?",
  ];

  const articleLinks = [
    "https://www.medicalnewstoday.com/articles/malfunctioning-immune-cells-may-cause-type-2-diabetes-in-obesity",
    "https://www.news-medical.net/health/Can-Blue-Light-Blocking-Technology-Combat-Digital-Eye-Strain.aspx",
    "https://jamanetwork.com/journals/jama/article-abstract/2814884",
    "https://www.thelancet.com/journals/lanhl/article/PIIS2666-7568(23)00267-2/fulltext?dgcid_tlcom_nc3",
    "https://www.thelancet.com/commissions/viral-hepatitis-elimination-progress",
    "https://www.thelancet.com/commissions/global-cancer-surgery-2",
    "https://www.nature.com/articles/s41591-023-02777-8",
    "https://www.health.harvard.edu/blog/which-migraine-medications-are-most-helpful-202402053014",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    dotsClass: "slick-dots horizontal-dots",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto my-8 rounded-lg overflow-hidden">
      <Slider {...settings} afterChange={(index) => setCurrentSlide(index)}>
        {articleLinks.map((link, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
              transition: { duration: 0.5, delay: index * 0.2 },
            }}
            className="p-4"
          >
            <a href={link} target="_blank" rel="noopener noreferrer">
              <motion.img
                src={
                  index === 0
                    ? img7
                    : index === 1
                    ? img8
                    : index === 2
                    ? img1
                    : index === 3
                    ? img4
                    : index === 4
                    ? img5
                    : index === 5
                    ? img6
                    : index === 6
                    ? img3
                    : img2
                }
                alt={`Article ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.2 }}
              />
            </a>
            <div className="mt-4">
              <motion.p
                className="text-lg md:text-xl font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: index * 0.2 } }}
              >
                {descriptions[index]}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
