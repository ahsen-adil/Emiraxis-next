"use client";

import Image from "next/image";

const designs = [
  { image: "/images/project2.jpg"},
  { image: "/images/project1.jpg"},
  { image: "/images/project4.jpg"},
  { image: "/images/project5.jpg"},
];

const GraphicDesign = () => {
  return (
    <section className="mt-10 md:py-10  w-full rounded-3xl">
      <div className="p-4 mx-auto relative z-10 w-full">
        <div className="text-4xl  md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50">
        Marketing
        </div>

        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto">
        We create impactful social media strategies and content that boost your
        brand&apos;s online presence and engagement.
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10 px-10">
          {designs.map((design, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg">
              <Image
                src={design.image}
                alt=""
                width={400}
                height={400}
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GraphicDesign;
