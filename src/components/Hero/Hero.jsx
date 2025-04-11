import React from "react";
import Image1 from "../Hero/image11.jpg.png";
import Image2 from "../Hero/image12.jpg.png";
import Image3 from "../Hero/image13.jpg.png";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    tittle: "Upto 30% off on all Men's Wear",
    description:
      "Lorem his Life will forever be Changed. Dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    img: Image2,
    tittle: "Upto 70% off on all Products sale",
    description:
      "Lorem his Life will forever be Changed. Dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    img: Image3,
    tittle: "Upto 70% off on all Men's Wear",
    description:
      "Lorem his Life will forever be Changed. Dolor sit amet, consectetur adipiscing elit.",
  },
];

const Hero = ({handleOrderPopup} ) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, // Fixed typo
    cssEase: "ease-in-out",
    pauseOnHover: false, // Fixed typo
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden
     min-h-[550px] sm:min-h-[650px]
      bg-gray-100 flex justify-center
       items-center dark:bg-gray-950 
       dark:text-white duration-200">
        
      {/* Background Pattern */}
      <div className="h-[700px] w-[700px]
       bg-primary/40 absolute top-[-1%] 
       left-[50%] transform -translate-x-1/2
        -translate-y-1/2 rounded-3xl rotate-45 -z-9"></div>
      
      {/* Hero Section */}
      <div className="container pb-8 sm:pb-0">
     <Slider {...settings}>
      {ImageList.map((data) =>(
          <div key={data.id}>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="flex flex-col justify-center 
            gap-4 text-center sm:text-left">
              <h1
                data-aos="zoom-out"
                data-aos-duration="500"
                data-aos-once="true"
                className="text-5xl sm:text-6xl 
                lg:text-7xl font-bold"
              >
                {data.tittle}
              </h1>
              <p data-aos="fade-up" 
              data-aos-duration="500"
              data-aos-delay="100"
              className="text-sm"
              >
                {data.description}
              </p>
              
              <div 
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="300"
              >
                <button
                  onClick={handleOrderPopup}
                  className="bg-gradient-to-r 
                  from-primary to-secondary
                   text-white py-2 px-4 rounded-full"
                >
                  Order Now
                </button>
              </div>
              {/* image section */}
            </div>
            <div
            data-aos="zoom-in"
            data-aos-once="true"
            className="relative z-10"
            >
              <img
                src={data.img}
                alt=""
                className="w-[300px] h-[300px] sm:h-
                [450px] sm:w-[450px] sm:scale-105
                lg:scale-120 object-contain mx-auto"
              />
            </div>
          </div>
        </div>
      ))}
       
      
    </Slider>
      </div>
    </div>
  );
};

export default Hero;
