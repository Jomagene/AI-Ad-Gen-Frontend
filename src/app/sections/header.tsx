"use client";

import { useState } from "react";
import logo from "@/components/images/logo.png"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="w-full px-[40px] lg:h-[80px] lg:px-[80px] border-b border-[#F8E6F8] bg-white shadow-md sticky top-0 z-40">
      <div className=" flex items-center justify-between md:px-6 h-full">
        <div>
          <Link href="/">
            <Image
              src={logo}
              alt="Adgen AI Logo"
              width={150}
              height={40}
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6  font-nunito text-gray-600">
          <Link href="/features" className="hover:text-purple-700">
            Features
          </Link>
          <Link href="/how-it-works" className="hover:text-purple-700">
            How it works
          </Link>
          <Link href="/pricing" className="hover:text-purple-700">
            Pricing
          </Link>
        </nav>

        {/* Buttons */}
        <div className="hidden md:flex font-manrope text-[15px] items-center space-x-4 pr-4">
            <Link href="/signin" className="text-light-purple font-medium lg:hover:text-dark-purple/90">
              Sign in
            </Link>
          <Button className="bg-light-purple hover:bg-dark-purple/70" asChild>
            <Link
              href="/signup"
              className=" text-white px-4 py-2 rounded-md"
            >
              Create account
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md border-t absolute z-10 w-screen right-[20px]">
          <nav className="flex flex-col items-center py-4 space-y-4">
            <Link
              href="/features"
              className="text-gray-600 hover:text-purple-700"
            >
              Features
            </Link>
            <Link
              href="/how-it-works"
              className="text-gray-600 hover:text-purple-700"
            >
              How it works
            </Link>
            <Link
              href="/pricing"
              className="text-gray-600 hover:text-purple-700"
            >
              Pricing
            </Link>
            <Button variant="ghost" asChild>
              <Link href="/signin" className="text-[#520052]">
                Sign in
              </Link>
            </Button>
            <Button
              className="bg-dark-purple text-white px-4 py-2 rounded-md"
              asChild
            >
              <Link href="/signup">Create account</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
