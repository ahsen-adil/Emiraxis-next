"use client";

import Link from "next/link";
import Navbar from "@/components/navbar";
import Image from "next/image";

const plans = [
  {
    index: 0,
    name: "Basic Plan",
    image: "/images/staff10.jpg",
    heading: "Start your journey with essential features.",
    description:
      "Get a fully responsive design with quick turnaround times and reliable development support for your basic needs.",
    button: "Apply Now",
  },
  {
    index: 1,
    name: "Premium Plan",
    image: "/images/staff9.jpg",
    heading: "Scale up with advanced tools and design.",
    description:
      "Perfect for startups looking to create a strong online presence with custom designs and scalable solutions.",
    button: "Apply Now",
  },
  {
    index: 2,
    name: "Enterprise Plan",
    image: "/images/staff4.jpg",
    heading: "Achieve your business goals effortlessly.",
    description:
      "Tailored for businesses that need dedicated support, unlimited revisions, and a fully optimized website for conversions.",
    button: "Apply Now",
  },
  {
    index: 3,
    name: "Custom Plan",
    image: "/images/staff10.jpg",  // Fixed missing image path
    heading: "Your vision, our expertise, limitless potential.",
    description:
      "Work with us to create a completely custom solution designed specifically for your business and unique requirements.",
    button: "Apply Now",
  },
];

const Career = () => {
  return (
    <div className="w-full bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar
        scrollToWebsiteDesign={() => {}}
        scrollToGraphicDesign={() => {}}
        scrollToShopifyStores={() => {}}
        scrollToBrands={() => {}}
        scrollToServices={() => {}}
      />

      <div className="flex items-center justify-center flex-col">
        <div className="text-5xl pb-10 md:pb-20 text-slate-300 px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500 bg-opacity-50">
          Explore Our Plans <br /> Choose What Fits You Best
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10 px-6 w-full max-w-screen-xl mx-auto pb-20">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="h-full flex flex-col items-center justify-between border border-gray-600 rounded-3xl p-6 bg-black/[0.85] text-center text-slate-200 relative"
            >
              <div className="relative w-full h-52 md:h-72 lg:h-80">
                <Image
                  src={plan.image}
                  alt={plan.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg text-center">
                  <div className="text-white px-4">
                    <h2 className="text-xl font-semibold mb-2">{plan.heading}</h2>
                    <p className="text-sm mb-4">{plan.description}</p>
                    <Link
                      href="/apply"
                      className="rounded-full py-2 px-6 bg-white border-2 border-gray-600 text-gray-600 hover:bg-transparent hover:text-white transition-all"
                    >
                      {plan.button}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
