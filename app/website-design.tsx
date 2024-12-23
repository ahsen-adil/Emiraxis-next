'use client'

import Image from "next/image"

const WebsiteDesign = () => {
    return (   
    <div className="text-white">
 <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
      <div className="text-4xl  md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50">
            Expert <br /> Event Staffing
      </div>
      <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto px-4">
         Delivering expert event staffing solutions for your event success
      </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-10">
    <div className="grid gap-4">
        <div>
            <Image
            width={500}
            height={500}
            priority
            className="h-auto max-w-full rounded-lg" src="/images/staff1.jpg" alt=""/>
        </div>
        <div>
            <Image
            width={500}
            height={500}
            priority
            className="h-auto max-w-full rounded-lg" src="/images/staff2.jpg" alt=""/>
        </div>
        <div>
            <Image
            width={500}
            height={500}
            priority
            className="h-auto max-w-full rounded-lg" src="/images/staff4.jpg" alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <Image
            width={500}
            height={500}
            priority
            className="h-auto max-w-full rounded-lg" src="/images/staff3.jpg" alt=""/>
        </div>
        <div>
            <Image
            width={500}
            height={500}
            priority
            className="h-auto max-w-full rounded-lg" src="/images/staff6.jpg" alt=""/>
        </div>
        <div>
            <Image
            width={500}
            height={500}
            priority
            className="h-auto max-w-full rounded-lg" src="/images/staff7.jpg" alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <Image
            width={500}
            height={500}
            priority
            className="h-auto max-w-full rounded-lg" src="/images/staff9.jpg" alt=""/>
        </div>
        <div>
            <Image
            width={500}
            height={500}
            priority
            className="h-auto max-w-full rounded-lg" src="/images/staff12.jpg" alt=""/>
        </div>
        <div>
            <Image
            width={500}
            height={500}
            priority
            className="h-auto max-w-full rounded-lg" src="/images/staff14.jpg" alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <Image
            width={500}
            height={500}
            priority
            className="h-auto max-w-full rounded-lg" src="/images/staff11.jpg" alt=""/>
        </div>
        <div>
            <Image
            width={500}
            height={500}
            priority
            className="h-auto max-w-full rounded-lg" src="/images/staff10.jpg" alt=""/>
        </div>
        <div>
            <Image
            width={500}
            height={500}
            priority
            className="h-auto max-w-full rounded-lg" src="/images/staff13.jpg" alt=""/>
        </div>
    </div>
    </div>
    </div> );
}
 
export default WebsiteDesign;