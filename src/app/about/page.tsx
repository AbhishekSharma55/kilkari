"use client";
import React from "react";
import { MapComponent } from "../../components/providers/google-map-api";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 pt-20">
      <div className="text-4xl text-center p-10">A B O U T U S</div>
      <hr className="pt-10 md:pb-10" />
      <div className="pt-5 flex flex-col lg:flex-row mb-12">
        <div className="p-5 md:p-0 lg:w-1/2 lg:order-1 flex items-center justify-center">
          <Image
            src="/Images/dresses/6.png"
            alt="Our Mission"
            width={600}
            height={400}
            className="w-full lg:w-auto rounded-xl"
          />
        </div>
        <div className="mt-10 md:mt-0 lg:w-1/2 lg:order-2 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-center">
            At Kilkari, our mission is to ensure that every newborn baby is
            clothed in comfort and style, fostering a sense of warmth and care
            from the very start of life. We are committed to expanding our reach
            to the international market, striving to become a global leader in
            providing high-quality clothing for infants worldwide. Our core
            values of quality craftsmanship, compassion, and innovation drive us
            forward, inspiring excellence in every aspect of our business, from
            the meticulous design of our garments to the exceptional service we
            offer to our customers.
          </p>
        </div>
      </div>
      <hr className="pt-10 pb-10" />

      {/* Our Story */}
      <div className="flex flex-col lg:flex-row mb-12">
        <div className="lg:w-1/2 lg:order-2 flex items-center justify-center">
          <Image
            src="/Images/dresses/ourstory.png"
            alt="Our Story"
            width={600}
            height={400}
            className="w-full lg:w-auto rounded-xl"
          />
        </div>
        <div className="mt-10 md:mt-0 lg:w-1/2 lg:order-1 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-lg text-center">
            Kilkari was established with a clear vision to revolutionize the way
            people access childcare services. Since our inception, we have
            overcome numerous hurdles and evolved into a pioneering force in the
            childcare industry. From our modest beginnings, we have expanded our
            reach and offerings, catering to the diverse needs of families
            nationwide. Through it all, our dedication to excellence and
            innovation has never faltered.
          </p>
        </div>
      </div>
      <hr className="pt-10 pb-10" />
      {/* Our Services */}
      <div className="flex flex-col lg:flex-row mb-12">
        <div className="lg:w-1/2 lg:order-1 flex items-center justify-center">
          <Image
            src="/Images/dresses/9.png"
            alt="Our Services"
            width={600}
            height={400}
            className="w-full lg:w-auto rounded-xl"
          />
        </div>
        <div className="mt-10 md:mt-0 lg:w-1/2 lg:order-2 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-center">
            At Kilkari, our array of services is crafted meticulously to cater
            to the distinctive needs of families seeking childcare solutions.
            From top-tier childcare facilities to specialized educational
            programs, we provide a holistic approach to early childhood
            development. Our commitment extends beyond conventional services, as
            we strive to foster a nurturing environment where children can
            thrive. With a team of passionate professionals, we go above and
            beyond to ensure every family experience with us is nothing short of
            exceptional.
          </p>
        </div>
      </div>
      <hr className="pt-10 pb-10" />
      {/* Our Team */}
      <div className="flex flex-col lg:flex-row mb-12">
        <div className="lg:w-1/2 lg:order-2 flex items-center justify-center">
          <Image
            src="/Images/dresses/ourteam.png"
            alt="Our Team"
            width={600}
            height={400}
            className="w-full lg:w-auto rounded-xl"
          />
        </div>
        <div className="lg:w-1/2 lg:order-1 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold mb-4">Our Team</h2>
          <p className="text-lg text-center">
            Meet the dedicated team driving the mission at Kilkari, spearheaded
            by the visionary founder Shashi Sharma. Our diverse ensemble brings
            together expertise spanning various disciplines, from early
            childhood education to healthcare and beyond. United in our
            commitment to excellence, we collaborate seamlessly to ensure the
            highest quality of service delivery. By leveraging our collective
            knowledge and experience under Shashi Sharmas leadership, we strive
            to exceed expectations and make a meaningful difference in the lives
            of the families we serve.
          </p>
        </div>
      </div>

      <hr className="pt-10 pb-10" />
      {/* Contact Us */}
      <div className="items-center">
        <div className="text-center items-center justify-center pb-10">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg text-center mb-2">
            Have questions or want to learn more about Kilkari?
          </p>
          <div className="pb-2">
            <Link href="/contact-us">Contact us today!</Link>
          </div>
          <ul className=" pl-4 list-none">
            <li>Phone: 7389757639 / 8982187011</li>
            <li>Email: shashisharma291170@gmail.com</li>
            <li>Address: E-131/4th, Lav Kush, Sukhliya, Indore</li>
          </ul>
        </div>
      </div>

      <div className="m-20 mt-10">
        <MapComponent apiKey="AIzaSyCFhEDNuglphpfWdZmblFNibEle7_Np_M0" />
      </div>
    </div>
  );
};

export default AboutPage;
