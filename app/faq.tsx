import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Link } from "lucide-react";
import { AiOutlineInstagram, AiFillFacebook, AiOutlineTwitter } from "react-icons/ai";




const FAQS = () => {
  return (
    <div className=" mt-10 md:py-10 bg-[#f6f5f4] w-full
        rounded-3xl
        
        ">
      <div className=" p-10 md:p-4 md:px-20">
        <div className="text-3xl md:text-7xl font-bold text-black">
          Have questions ?
        </div>
        <div className="  font-semibold text-3xl md:text-6xl text-gradient bg-gradient-to-r from-emerald-600 to-blue-300 bg-clip-text text-transparent">
          Get answers.
        </div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>What is Emiraxis?</AccordionTrigger>
            <AccordionContent>
              Emiraxis is your event staffing and social media marketing company, specializing in providing tailored solutions to elevate your brand. We offer professional event staffing services to ensure seamless and successful events, while also crafting engaging social media strategies to boost your online presence and connect with your audience.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Contact Us.</AccordionTrigger>
            <AccordionContent>
              +971 567913122
            </AccordionContent>
            <AccordionContent>
              Sales@emiraxis.com
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Career
            </AccordionTrigger>
            <AccordionContent>
              Join Emiraxis as a freelancer by simply clicking the button, which will directly take you to the varity of options
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
  <AccordionTrigger>
    Our Social Media
  </AccordionTrigger>
  <AccordionContent>
    <div style={{ display: "flex", gap: "10px" }}>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <AiOutlineInstagram size={32} />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <AiFillFacebook size={32} />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <AiOutlineTwitter size={32} />
      </a>
    </div>
  </AccordionContent>
</AccordionItem>
        </Accordion>


      </div>
    </div>);
}

export default FAQS;