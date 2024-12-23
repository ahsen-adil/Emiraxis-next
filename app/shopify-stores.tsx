"use client";

import Image from "next/image";

const stores = [
  { image: "/images/project2.jpg", name: "Event 1", location: "New York" },
  { image: "/images/project1.jpg", name: "Event 2", location: "Los Angeles" },
  { image: "/images/project4.jpg", name: "Event 3", location: "Chicago" },
  { image: "/images/project5.jpg", name: "Event 4", location: "San Francisco" },
  { image: "/images/project2.jpg", name: "Event 5", location: "Miami" },
  { image: "/images/project1.jpg", name: "Event 6", location: "Dallas" },
  { image: "/images/project4.jpg", name: "Event 7", location: "Seattle" },
  { image: "/images/project5.jpg", name: "Event 8", location: "Boston" },
];

const ShopifyStores = () => {
  return (
    <section
      className="mt-10 md:py-10 bg-[#f6f5f4] w-full rounded-3xl"
    >
      <div className="p-4 mx-auto relative z-10 w-full">
        <div className="text-4xl py-10 md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-500 bg-opacity-50">
          Our Best Projects
        </div>

        <p className="mt-4 text-lg font-normal text-neutral-800 max-w-lg text-center mx-auto">
          Events successfully executed
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10 px-10">
          {stores.map((store, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg"
            >
              <Image
                src={store.image}
                alt={store.name}
                width={400}
                height={400}
                className="rounded-lg transition-transform duration-300 group-hover:scale-110"
              />
              <div
                className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <h3 className="text-white text-xl font-semibold">
                  {store.name}
                </h3>
                <p className="text-white text-sm">{store.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopifyStores;
