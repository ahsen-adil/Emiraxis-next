"use client";

import Link from "next/link";
import Navbar from "@/components/navbar";
import Image from "next/image";

const plans = [
  {
    index: 0,
    name: "Basic Plan",
    image: "/images/career1.jpg",
    heading: "Hospitality Professionals",
    description:
      "Join our team of waitstaff, bartenders, and storekeepers. Be part of leading events in the hospitality sector.",
    button: "Apply Now",
    href: "/apply/basic", // Unique link for Basic Plan
  },
  {
    index: 1,
    name: "Premium Plan",
    image: "/images/career2.jpg",
    heading: "Brand Representatives",
    description:
      "Become a promoter, host, or ambassador for exciting brands. Expand your horizons and join glamorous events today",
    button: "Apply Now",
    href: "/apply/premium", // Unique link for Premium Plan
  },
  {
    index: 2,
    name: "Enterprise Plan",
    image: "/images/career3.jpg",
    heading: "Experienced Event Experts",
    description:
      "Have 3+ years in events? Apply for project-based roles in staging, operations, or marketing with top companies",
    button: "Apply Now",
    href: "/apply/enterprise", // Unique link for Enterprise Plan
  },
  {
    index: 3,
    name: "Custom Plan",
    image: "/images/career4.jpg",
    heading: "Event Enthusiasts",
    description:
      "Looking for opportunities in registration, ticketing, crowd control, or guiding? Apply to join the event industry now",
    button: "Apply Now",
    href: "/apply/custom", // Unique link for Custom Plan
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
                      href={plan.href} // Dynamically use the unique link for each plan
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
