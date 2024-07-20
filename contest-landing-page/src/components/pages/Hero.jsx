import React from "react";
import heroImage from "../../assets/heroimage.png";
import Button from "./Button";

const Hero = () => {
  return (
    <>
      <div className="relative w-full h-[270px] sm:h-[360px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[550px] overflow-hidden">
        <img
          src={heroImage}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-contain"
          style={{ objectPosition: "center" }}
        />
      </div>
      <div className="flex justify-center mt-1 sm:flex justify-center mt-4 lg: mt-5">
        <Button
          text="Register now"
          link="https://forms.gle/GeCCGATNAbi8ke728"
          className="justify-center"
        />
      </div>
    </>
  );
};

export default Hero;
