"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

const ScrollScreen = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 16000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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

  const data = [
    {
      id: 1,
      name: "Peter Pan",
      prof: "Motion Artist",
      tools: ["VS Code", "NextJS", "Javascript"],
      image:
        "https://cdn.dribbble.com/uploads/47179/original/35d07cfebd303e05e688078015da0cc2.mp4?1685645373",
    },
    {
      id: 2,
      name: "Fodera",
      prof: "Cloud Engineer",
      tools: ["VS Code", "NextJS", "Javascript"],
      image:
        "https://cdn.dribbble.com/uploads/47181/original/1e3a73a174484bef522b620c401cd00a.mp4?1685645427",
    },
    {
      id: 3,
      name: "Rasheedat",
      prof: "UI/UX Artist",
      tools: ["VS Code", "NextJS", "Javascript"],
      image:
        "https://cdn.dribbble.com/uploads/47180/original/1def7b9fb30832c4af4353b325d9c3af.mp4?1685645402",
    },
    {
      id: 4,
      name: "Tarry",
      prof: "Back End Engineer",
      tools: ["VS Code", "NextJS", "Javascript"],
      image:
        "https://cdn.dribbble.com/uploads/47180/original/1def7b9fb30832c4af4353b325d9c3af.mp4?1685645402",
    },
    {
      id: 5,
      name: "James",
      prof: "Front End Engineer",
      tools: ["VS Code", "NextJS", "Javascript"],
      image:
        "https://cdn.dribbble.com/uploads/47180/original/1def7b9fb30832c4af4353b325d9c3af.mp4?1685645402",
    },
  ];

  return (
    <div className="overflow-hidden">
      <div className="slider-container w-[99%] ">
        <Slider {...settings}>
          {data?.map((props: any) => (
            <div key={props.id}>
              <section className=" mx-2 h-[450px] overflow-hidden rounded-md relative ">
                <video
                  autoPlay
                  loop
                  muted
                  src={props?.image}
                  className="w-full h-full bg-slate-200 object-cover"
                />
                <div className="absolute w-full h-full top-0 opacity-90 bg-gradient-to-b from-transparent from-60% to-black " />
                <div className=" text-white absolute bottom-0 p-4 ">
                  <p className="text-[18px] font-bold uppercase">
                    {props.name}{" "}
                  </p>
                  <p className=" text-[12px]">{props.prof} </p>

                  <div className="flex flex-wrap w-full gap-3 mt-4">
                    {props.tools.map((el: string, i: number) => (
                      <p
                        key={i}
                        className="border rounded-full px-4 py-2 text-[12px] font-semibold "
                      >
                        {el}
                      </p>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ScrollScreen;
