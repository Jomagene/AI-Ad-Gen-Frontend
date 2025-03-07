import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="py-10 bg-white px-2">
      <div className="flex flex-col items-center justify-center text-center gap-4">
        <Image width={200} height={200} src="/genz-logo.svg" alt="logo" />

        <p className="text-[16px] md:text-[18px] text-[#121316] font-nunito font-medium">
          Create Ads easily and effortlessly in minutes
        </p>

        <p className="font-normal text-[#5F5F5F] text-[14px]">
          2025 genz.ad. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
