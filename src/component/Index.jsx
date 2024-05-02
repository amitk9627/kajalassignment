import React, { useState, useEffect } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Index() {
  const data = [
    {
      image: "img4.jpg",
      title: "SWIMMING POOL",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sapiente mollitia.",
    },
    {
      image: "img5.jpg",
      title: "RESTAURANT",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sapiente mollitia.",
    },
    {
      image: "img6.jpg",
      title: "TREKKING",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sapiente mollitia.",
    },
  ];

  const sliderImages = [
    {
      url: "/images/img3.jpg",
      title: "Luxurious Accommodation",
    },
    {
      url: "/images/img4.jpg",
      title: "Image 2 Title",
    },
    {
      url: "/images/img5.jpg",
      title: "Image 3 Title",
    },
  ];

  // const settings = {
  //   width: 1000,
  //   height: 500,
  //   images: sliderImages.map(image => ({ url: image.url, title: image.title })),
  //   showNavs: true,
  //   slideRenderer: (url, title) => (
  //     <div className="slider-item relative">
  //       <img src={url} alt={title} className="w-full h-auto" />
  //       <div className="slider-title absolute bottom-0 left-0 bg-black text-white px-2 py-1">{title}</div>
  //     </div>
  //   ),
  // };

  const testimonialData = [
    {
      image: "../images/avatar1.png",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad hic ex necessitatibus sapiente veritatis consectetur veniam id unde sed vel, obcaecati dolorum iure deserunt cumque fuga tenetur omnis mollitia sunt dolore accusamus? sajdiueksdejrei kasjdoidedjidjdfiwjfi Quaerat.",
      name: "Sumit Kumar",
      designation: "",
    },
    {
      image: "../images/avatar2.png",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad hic ex necessitatibus sapiente veritatis consectetur veniam id unde sed vel, obcaecati dolorum iure deserunt cumque fuga tenetur omnis mollitia sunt dolore accusamus? sajdiueksdejrei kasjdoidedjidjdfiwjfi Quaerat.",
      name: "Nisha Thapa",
      designation: "",
    },
    {
      image: "../images/avatar1.png",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad hic ex necessitatibus sapiente veritatis consectetur veniam id unde sed vel, obcaecati dolorum iure deserunt cumque fuga tenetur omnis mollitia sunt dolore accusamus? sajdiueksdejrei kasjdoidedjidjdfiwjfi Quaerat.",
      name: "Gautam Kumar",
      designation: "",
    },
  ];

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0 && !scrolled) {
        setScrolled(true);
      } else if (window.scrollY === 0 && scrolled) {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <div>
      <div
        className=" "
        style={{
          backgroundImage: "url('/images/img.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "635px",
        }}
      >
        <nav
          className={`fixed w-full z-50 top-0 transition duration-300 ease-in-out ${
            scrolled ? "bg-blue-950 shadow-md" : "bg-transparent"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="text-white">Logo</div>
              <div className="hidden sm:block">
                <div className="flex justify-between h-16 items-center space-x-4">
                  <a
                    href="#"
                    className={`text-white ${
                      scrolled ? "hover:text-blue-200" : "hover:text-blue-300"
                    }`}
                  >
                    HOME
                  </a>
                  <a
                    href="#"
                    className={`text-white ${
                      scrolled ? "hover:text-blue-200" : "hover:text-blue-300"
                    }`}
                  >
                    ABOUT US
                  </a>
                  <a
                    href="#"
                    className={`text-white ${
                      scrolled ? "hover:text-blue-200" : "hover:text-blue-300"
                    }`}
                  >
                    ACCOMMODATION
                  </a>
                  <a
                    href="#"
                    className={`text-white ${
                      scrolled ? "hover:text-blue-200" : "hover:text-blue-300"
                    }`}
                  >
                    EVENTS &amp; CONFERENCE
                  </a>
                  <a
                    href="#"
                    className={`text-white ${
                      scrolled ? "hover:text-blue-200" : "hover:text-blue-300"
                    }`}
                  >
                    EXPERIENCE
                  </a>
                  <a
                    href="#"
                    className={`text-white ${
                      scrolled ? "hover:text-blue-200" : "hover:text-blue-300"
                    }`}
                  >
                    GALLERY
                  </a>
                  <a
                    href="#"
                    className={`text-white ${
                      scrolled ? "hover:text-blue-200" : "hover:text-blue-300"
                    }`}
                  >
                    CONTACT US
                  </a>
                  <button className="bg-blue-400 rounded-xl px-2 p-1 text-white hover:text-black">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="flex justify-center items-center h-full">
          <div>
            <div className="text-center text-[80px] text-white">
              Hotel & Resort
            </div>
            <div className="text-blue-400 text-center py-8 leading-8 font-semibold">
              TAKE ADVANTAGE OF THIS AMAZING EXCLUSIVE
              <br /> OFFER DON'T MISS THIS OPPORTUNITY FOR YOUR BUSINESS
            </div>
          </div>
        </div>
      </div>
      {/* About */}
      <div className="p-4">
        <div className="text-center text-blue-950 text-[40px] font-semibold">
          About Corbett Nirvana
        </div>
        <div className="w-full pt-12 grid grid-cols-2 max-md:grid-cols-1 gap-5">
          <div className="">
            <div className=" ">
              <img
                src="/images/img3.jpg"
                alt=""
                className="rounded shadow-2xl"
              />
            </div>
          </div>
          <div className="">
            <p className=" text-justify">
              Corbett Nirvana Resort is a blissful cocoon amidst verdant nature
              providing an undulating view of the scenic mountain ranges, built
              with highly equipped and elegant furnishings to ensure your
              peaceful stay. The Resort is located in the heart of Jim Corbett
              National Park, one of India’s most popular wildlife destinations.
              Surrounded by lush green forests and breathtaking landscapes, our
              resort offers a tranquil escape from the hustle and the bustle of
              city life. The resort is designed by highlighting the beauty of
              nature to provide maximum comfort, with amenities such as
              air-conditioning, attached baths, and private balconies
              overlooking the stunning surroundings. Whether you are here for a
              family vacation, a romantic getaway, For a solo adventure, we have
              something to offer everyone.
            </p>
          </div>
        </div>
      </div>
      <div className="pt-14 text-[50px] text-center font-bold text-blue-950">
        Have A Fun With Our Amazing
      </div>
      <div className="flex justify-center items-center pt-10">
        <div className="grid grid-cols-3 max-sm:grid-cols-1 w-full  max-sm:gap-y-6 ">
          {data.map((items, index) => (
            <div
              key={index}
              className=" rounded  m-2 bg-white text-blue-950 shadow-2xl "
            >
              <div>
                <img
                  src={"./images/" + items.image}
                  alt=""
                  className=" w-full rounded"
                />
              </div>
              <div>
                <h1 className="font-bold text-[25px] pt-6  text-center ">
                  {items.title}
                </h1>
              </div>
              <p className=" text-[20px] py-3 px-10 text-center ">
                {items.content}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full grid grid-cols-2 p-20 max-md:grid-cols-1 gap-8 ">
        {/* Why choose us */}
        <div className=" bg-blue-950 px-12  rounded-2xl shadow-2xl">
          <div className="text-white text-[50px] text-center py-8">
            Why Choose Us?
          </div>
          <p className=" text-justify pb-12 text-white">
            Indulge in an extraordinary escape at Jim Corbeet Resort, where
            every moment is a seamless blend of luxury and tranquility. Nestled
            in a picturesque setting surrounded by, our resort offers an
            unrivaled location that invites you to unwind and reconnect with
            nature. From the moment you arrive, our dedicated team of staff
            members is committed to ensuring your stay exceeds all expectations.
            With personalized concierge services and meticulous attention to
            detail, we strive to create a welcoming atmosphere where you can
            relax and rejuvenate in style.
          </p>
        </div>

        <div className="">
          <div className="pt-10">
            <img
              src="/images/img3.jpg"
              alt=""
              className="rounded shadow-2xl "
            />
          </div>
        </div>
      </div>
      {/* Travel */}
      <div className="pt-10">
        <div className="text-[40px] text-blue-950 pb-10 text-center font-semibold">
          Travel Highlights: Elevating Your Emotions, One Journey at a Time
        </div>
        <div className="flex justify-center items-center h-screen">
          <SimpleImageSlider
            className="shadow-2xl h-full w-full"
            height={500}
            width={'100%'}
            images={sliderImages}
            showNavs={true}
          />
        </div>
      </div>
      {/* Testimonials */}
      <div className="w-full flex justify-center items-center pt-10 ">
        <div className="w-[90%] py-10">
          <div className="text-[35px] font-semibold text-center text-blue-950">
            Testimonials
          </div>
          <div className="h-[2px] rounded-full mb-20 w-[12%] bg-blue-950 mx-auto"></div>
          <div className="flex justify-center items-center">
            <div className="w-[90%] gap-12 grid grid-cols-3 mt-4 max-md:grid-cols-1">
              {testimonialData.map((items, index) => (
                <div
                  key={index}
                  className="bg-slate-100 border p-12 px-6 text-center relative hover:shadow-2xl max-sm:pb-10"
                >
                  <div className="absolute top-[-45px] left-[40%] w-[25%] h-[25%] rounded-full  ">
                    {/* <div className='w-full h-full'>{items.image}</div> */}
                    <img
                      src={items.image}
                      alt=""
                      className="w-full rounded-full shadow-lg"
                    />
                    {/* <AccountCircleIcon className='text-[80px] text-blue-950 '/> */}
                  </div>
                  <div className="pt-2">
                    <FormatQuoteIcon className="text-blue-950 transform -scale-x-100 -scale-y-100 " />
                    {items.content}
                    <FormatQuoteIcon className="text-blue-950" />
                    <div className="absolute bottom-8 max-sm:bottom-0  ">
                      <span className="text-blue-950 font-bold text-[18px]">
                        {items.name}
                      </span>{" "}
                      <span className="text-[12px]">{items.designation}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}

      <footer className="bg-blue-950 text-black mt-10 p-4 ">
        <div className="container mx-auto px-4 py-8 ">
          <div className="grid grid-cols-3 items-center max-md:grid-cols-2 max-sm:grid-cols-1 text-white gap-4">
            <div className="mb-8 ">
              <h2 className="text-xl font-semibold mb-4 ">About Us</h2>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                eget risus velit. consectetur adipiscing elit. risus velit.
              </p>
            </div>
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 ">Useful Links</h2>
              <ul className="">
                <li>Home</li>
                <li>Accomodation</li>
                <li>Experience</li>
                <li>Gallery</li>
              </ul>
            </div>
            <div className="mb-8 ">
              <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
              <ul className="">
                <li>123 Main Street</li>
                <li>City, State ZIP</li>
                <li>Phone: 123-456-7890</li>
                <li>Email: info@example.com</li>
              </ul>
            </div>
            <div className="">
              <h2 className="text-xl font-semibold mb-4 ">Support</h2>
              <ul className="">
                <li>Privacy Policy</li>
                <li>Terms & Condition</li>
              </ul>
            </div>
            <div className="">
              <h2 className="text-xl font-semibold mb-4 ">
                Events & Conferences
              </h2>
              <ul className="">
                <li>Mice & Corporate Meetings</li>
                <li>Social Events</li>
              </ul>
            </div>
            <div className="">
              <h2 className="text-xl font-semibold mb-4 ">Follow Us</h2>
              <div className="flex gap-3 ">
                <div>
                  <a href="#">
                    <FacebookIcon />
                  </a>
                </div>
                <div>
                  <a href="#">
                    <InstagramIcon />
                  </a>
                </div>
                <div>
                  <a href="#">
                    <YouTubeIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
         
        </div> <hr className="my-2 border-gray-600" />
        <div className="text-center text-white">
          <p>&copy; 2024 Your Company. All rights reserved. Kajal</p>
        </div>
      </footer>
    </div>
  );
}

export default Index;
