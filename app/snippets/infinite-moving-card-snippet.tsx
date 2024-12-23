"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="pb-40 rounded-md flex flex-col antialiased my-4 dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "The team was exceptional in managing operations and staffing. Their professionalism added a touch of excellence to our event.",
    name: "Sara M.",
    title: "Gitex Global 2024",
  },
  {
    quote:
      "Seamless coordination and outstanding crowd management. We couldn’t have asked for a better partner for such a high-profile concert!.",
    name: "Rahul K.",
    title: "Vishal Mishra Concert:",
  },
  {
    quote: "Outstanding marketing strategies and staff support. Our event received excellent feedback, and attendee engagement was incredible",
    name: "Lina H.",
    title: "Taste Of Dubai",
  },
  {
    quote:
      "Efficient logistics and exceptional branding. Their attention to detail ensured a successful and stress-free event experience.",
    name: "Ahmed S.",
    title: "China Homelife Dubai",
  },
  {
    quote:
      "From staffing to PR, they handled everything flawlessly. Truly a one-stop solution for event success!",
    name: "Emily J.",
    title: "Aks Holi Night",
  },
];
