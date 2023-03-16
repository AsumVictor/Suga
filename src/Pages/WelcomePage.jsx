import React from "react";
import Button, { ButtonOutline, Features } from "../Components/Utitlity";
import WelcomeHeader from "../Components/Header";
import HeroBg from "./../assets/Images/heroBg.png";
import HeroBgMobile from "./../assets/Images/heroBgMobile.png";
import Group from "./../assets/Images/cummunityPic.png";
import Valinetine from "./../assets/Images/valentine.png";
import FeaturesData from "../Components/Features";

export default function WelcomePage() {
    console.log(FeaturesData);
  return (
    <>
      <WelcomeHeader />
      <section
        id="hero"
        className="py-5 flex flex-col md:flex-row px-3 relative md:px-10 w-full mt-20"
      >
        <picture>
          <source
            media="(min-width: 700px)"
            srcset={HeroBg}
            className="w-11/12 absolute"
          />

          <img src={HeroBgMobile} alt="GFG" className="w-11/12 absolute" />
        </picture>

        <div className="w-full md:w-7/12 py-5 px-3 md:px-10 justify-center items-center z-10">
          <h1 className="text-4xl font-bold mt-2 text-center">
            Best Dating site in
            <strong className="text-Pink900"> African</strong>
          </h1>
          <p className="px-5 md:px-20 text-center mt-10">
            SuGa's Playground connects you with like-minded individuals to help
            you find love and happiness through our fun and easy-to-use dating
            site.
          </p>
          <div className="flex justify-center">
            <Button Extend="hidden md:block self-center mt-10">
              Join the Community
            </Button>
            <Button Extend="block md:hidden self-center mt-10">
              Create an account
            </Button>
          </div>

          <div className="flex flex-row flex-wrap justify-around space-y-3 items-center mt-10">
            <img src={Group} alt="Community" width={250} />
            <p className="font-bold px-5 text-center">
              Join 2,000+ people from different part of the world
            </p>
          </div>
        </div>
        <div className="hidden md:block w-5/12 mt-10 z-10">
          <img src={Valinetine} alt="Love" />
        </div>
      </section>
      <section
        id="whyus"
        className="w-full py-10 mt-4 md:mt-20 px-3 md:px-10 flex flex-row flex-wrap"
      >
        <div className="w-full md:w-4/12 mt-5">
          <h2 className="text-4xl capitalize font-bold text-center underline text-Pink900">
            Why Suga ?
          </h2>
          <p className="mt-7 px-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Laudantium, rem nostrum id quos ipsam consequuntur magnam modi nobis
            omnis debitis. Temporibus repellat incidunt nihil mollitia quia rem
            quisquam sit cumque.
          </p>
        </div>
        <div className="w-full md:w-7/12 flex flex-auto flex-wrap justify-around pb-2">
       {FeaturesData.map(feature=>(
          <Features 
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
          />
       ))}
        </div>
      </section>
    </>
  );
}
