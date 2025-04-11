import React from 'react'
import footerLogo from "../../assets/website/online-shop_3176363.png";
import Banner from "../../assets/website/pexels1.png";
import { FaInstagram } from 'react-icons/fa6';
import {
  FaFacebook,

  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa"; 


const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};


const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div style={BannerImg}
    className="text-white mb-20">
      <div className="container">
        <div data-aos="zoon-in" className="grid md:grid-cols-3 pv-44 pt-5">
          {/* company detailes */}
          <div className="py-8 px-4">
            <h1
             className="sm:text-3xl text-xl font-bold
             sm:text-left text-justify mb-3 flex
             items-center gap-3"
            >
               <img src={footerLogo} alt=''
               className="max-w-[50px]"/>
              Shopsy
              </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Quos doloremque molestiae atque.
               Illo fugiat consectetur officiis voluptate! Quae,
                magnam exercitationem.
            </p>
          </div>

          {/* Footer links */}
          <div className="grid grid-cols-2 sm:grid-cols-3
          col-span-2 md:pl-10">
            <div>
              <div className=" py-8 px-4">
                 <h1 
                 className="sm:text-3xl text-xl font-bold 
                 sm:text-left text-justify mb-3"
                 >
                  Important Links 
                 </h1>
                 <ul>
                  {
                    FooterLinks.map((link) =>(
                      <li className="cursor-pointer
                      hover:text-primary"
                      key={link.title}
                      >
                       <span>{link.title}</span>
                      </li>
                    ))
                  }
                 </ul>
              </div>
            </div>
             {/* social links */}
             <div>
              <div className="flex items-center gap-3
              mt-6">
              <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Sivakasi , Tamil nadu</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt />
                  <p>+91 123456789</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer
