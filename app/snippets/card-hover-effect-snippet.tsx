import { HoverEffect } from "@/components/ui/card-hover-effect";
import { MdEvent, MdGroup, MdCampaign, MdHandshake, MdLocalShipping, MdBrush } from "react-icons/md";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
    {
        icon : <div className="bg-blue-100 p-4 rounded-full"><MdEvent className="w-8 h-8 text-blue-600" /></div>,
        title: "Event Management",
        description:
          "We build fully responsive websites that look great on all devices. Our websites are designed to convert visitors into customers.",
      
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><MdGroup className="w-8 h-8 text-blue-600" /></div>,
        title: "Event Staffing",
        description:
        "Providing skilled staff, including ushers, hosts, supervisors, and managers, ensuring smooth operations and guest satisfaction."
       
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><MdCampaign className="w-8 h-8 text-blue-600" /></div>,
        title: "Marketing & Promotions",
        description:
          "Strategizing and executing effective campaigns to maximize event reach through PR, digital marketing, and influencer collaborations.",
      
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><MdHandshake className="w-8 h-8 text-blue-600" /></div>,
        title: "Sponsorship Coordination",
        description:
          "Securing partnerships and managing sponsorship deliverables for optimal exposure and brand alignment.",
      
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><MdLocalShipping className="w-8 h-8 text-blue-600" /></div>,
        title: "Logistics & Operations",
        description:
          "End-to-end management of logistics, from vendor coordination to on-ground event operations, ensuring flawless execution.",
      
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><MdBrush className="w-8 h-8 text-blue-600" /></div>,
        title: "Branding & Design",
        description:
          "Creating impactful visuals and branding materials, from banners to social media assets, that resonate with your audience.",
     
      },
];
