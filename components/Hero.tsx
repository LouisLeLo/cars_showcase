"use client";

import Image from "next/image";
import { CustomButton } from ".";

const hero = () => {
  const handleScroll = () => {

  }

  return (
    <div className="hero">
      <div className="flex-1 mt-36 padding-x">
        <h1 className="hero__title">
          Find, book, or rent a car -- quickly and easily!
        </h1>

        <p className="hero__subtitle">
          Streamline your car rental experience with out effortles booking process.
        </p>

        <CustomButton 
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        ></CustomButton>
      </div>

      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain"></Image>
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  )
}

export default hero