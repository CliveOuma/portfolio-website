"use client"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

const Service = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // For tablets and smaller laptops
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // For mobile screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div id="service" className="services pt-20 py-10 px-5 sm:px-10 lg:px-20">
      <div className="text-center mb-8">
        <div className="flex justify-center my-5 lg:py-8">
          <div className="flex  items-center">
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
            <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
              Services
            </span>
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          </div>
        </div>
        <div className="title text-center mt-10">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-white font-bold">
            <b>
              I <span className="text-blue-600">focus</span> on making your{" "}
              <span className="text-blue-600">business</span> grow
            </b>
          </h1>
        </div>
      </div>

      {/* Slider Section */}
      <div className="listContainer">
        <Slider {...settings}>
          <div className="box p-3 sm:p-5 mt-6 sm:mt-10">
            <div className="bg-gray-100 shadow-lg rounded-lg w-full h-[250px] flex flex-col p-5">
              <h2 className="text-lg sm:text-xl font-semibold mb-2 text-indigo-500">
                Responsive Web Design
              </h2>
              <p className="text-gray-700 text-sm mt-5 sm:text-base">
                I craft visually appealing websites that seamlessly adapt to various devices across desktops, tablets, and mobiles.
              </p>
            </div>
          </div>

          <div className="box p-3 sm:p-5 mt-6 sm:mt-10">
            <div className="bg-gray-100 shadow-lg rounded-lg w-full h-[250px] flex flex-col p-5">
              <h2 className="text-lg sm:text-xl font-semibold mb-2 text-indigo-500">
                Single Page Applications
              </h2>
              <p className="text-gray-700 text-sm mt-5 sm:text-base">
                I develop SPAs that provide a smooth and continuous user experience without the need for page reloads, enhancing overall application usability.
              </p>
            </div>
          </div>

          <div className="box p-3 sm:p-5 mt-6 sm:mt-10">
            <div className="bg-gray-100 shadow-lg rounded-lg w-full h-[250px] flex flex-col p-5">
              <h2 className="text-lg sm:text-xl font-semibold mb-2 text-indigo-500">
                Brand Portfolio Websites
              </h2>
              <p className="text-gray-700 text-sm mt-5 sm:text-base">
                Elevate your brand with a captivating online presence. I craft brand portfolio websites that showcase your unique identity and achievements.
              </p>
            </div>
          </div>

          <div className="box p-3 sm:p-5 mt-6 sm:mt-10">
            <div className="bg-gray-100 shadow-lg rounded-lg w-full h-[250px] flex flex-col p-5">
              <h2 className="text-lg sm:text-xl font-semibold mb-2 text-indigo-500">
                E-commerce WebApps
              </h2>
              <p className="text-gray-700 text-sm mt-5 sm:text-base">
                Dive into the world of seamless online shopping experiences with E-commerce WebApps.
              </p>
            </div>
          </div>

          <div className="box p-3 sm:p-5 mt-6 sm:mt-10">
            <div className="bg-gray-100 shadow-lg rounded-lg w-full h-[250px] flex flex-col p-5">
              <h2 className="text-lg sm:text-xl font-semibold mb-2 text-indigo-500">
                Existing Websites Upgrade
              </h2>
              <p className="text-gray-700 text-sm mt-5 sm:text-base">
                Revitalize your digital presence by upgrading existing websites with cutting-edge features and modern aesthetics.
              </p>
            </div>
          </div>

          <div className="box p-3 sm:p-5 mt-6 sm:mt-10">
            <div className="bg-gray-100 shadow-lg rounded-lg w-full h-[250px] flex flex-col p-5">
              <h2 className="text-lg sm:text-xl font-semibold mb-2 text-indigo-500">
                Landing Pages
              </h2>
              <p className="text-gray-700 text-sm mt-5 sm:text-base">
                I create custom landing pages tailored to your unique specifications for a compelling digital presence.
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default Service
