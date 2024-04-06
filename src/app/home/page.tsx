"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const home = () => {
  return (
    <>
      <div className="mt-10 md:mt-0">
        {" "}
        {/* Adjusted margin for smaller screens */}
        <div className="p-5 md:p-20 flex flex-col md:flex-row items-center justify-center md:h-screen">
          {" "}
          {/* Flex direction changed for smaller screens */}
          <div className="text-center md:text-left mb-10 md:mb-0">
            {" "}
            {/* Center text on small screens, left align on medium and larger screens */}
            <h1 className="text-4xl md:text-8xl mt-10 mb-5 md:mb-10">
              Welcome to Kilkari –{" "}
            </h1>{" "}
            {/* Adjusted text size for smaller screens */}
            <h1 className="text-2xl md:text-5xl mb-5 md:mb-10">
              Where Every Stitch Tells a Story!
            </h1>
            <Link
              href="/contact-us"
              className="border border-foreground rounded-2xl text-lg md:text-2xl max-w-64 text-center p-2 hover:bg-foreground hover:text-background inline-block md:inline"
            >
              Contact Us Now
            </Link>
          </div>
          <div className="md:p-10">
            <Image
              className="border border-foreground rounded-xl p-4"
              src="/Images/dresses/6.png"
              alt="Image 1"
              width={650}
              height={650}
            />
          </div>
        </div>
      </div>
      <hr />
      <div className="pt-20 text-center">
        <h1 className="text-4xl">__ Quality That Speaks for Itself __</h1>
        <p className="text-xl p-10 md:pt-10 md:pl-60 md:pr-60 pb-20 text-center">
          We understand the importance of quality when it comes to your babys
          clothing. That is why we meticulously select fabrics that are gentle
          on delicate skin and ensure every stitch is made with precision and
          care. With Kilkari, you can trust that your little one will always be
          dressed in the finest attire.
        </p>
        <Link href={"/about"}>
          <div className="m-10">
            <Image
              className="inline border border-foreground rounded-xl align-middle p-4"
              src="/Images/dresses/29.png"
              alt="Image 1"
              width={720}
              height={415}
            />
          </div>
        </Link>
      </div>
      <hr />
      <div className="md:hidden mt-10 md:mt-0">
        <div className="p-5 md:p-20 flex flex-col md:flex-row items-center justify-center md:h-screen">
          <div className="text-center md:text-left mb-10 md:mb-0 md:pl-20">
            <h1 className="text-4xl md:text-5xl mt-10 mb-5 md:mb-10">
              Discover Our Exquisite Collection: –{" "}
            </h1>
            <p>
              From soft, organic cotton rompers to elegant hand-knitted
              cardigans, each piece in our collection is lovingly crafted to
              envelop your baby in cozy elegance. Whether you are looking for an
              adorable outfit for a special occasion or simply seeking everyday
              essentials, Kilkari has you covered.
            </p>

            <div className="hidden sm:block mt-10">
              <Link
                href="/contact-us"
                className="mt-5 border border-foreground rounded-2xl text-lg md:text-2xl max-w-64 text-center p-2 hover:bg-foreground hover:text-background inline-block md:inline"
              >
                View Collection
              </Link>
            </div>
          </div>

          <Carousel
            opts={{
              align: "start",
            }}
            className=" md:h-auto md:w-auto border border-foreground rounded-xl md:ml-20"
          >
            <CarouselContent>
              <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <Image
                        className="border border-foreground rounded-xl"
                        src="/Images/dresses/1.png"
                        alt="Image 1"
                        width={500}
                        height={500}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <Image
                        className="border border-foreground rounded-xl"
                        src="/Images/dresses/3.png"
                        alt="Image 1"
                        width={500}
                        height={500}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <Image
                        className="border border-foreground rounded-xl"
                        src="/Images/dresses/4.png"
                        alt="Image 1"
                        width={500}
                        height={500}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <Image
                        className="border border-foreground rounded-xl"
                        src="/Images/dresses/5.png"
                        alt="Image 1"
                        width={500}
                        height={500}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <Image
                        className="border border-foreground rounded-xl"
                        src="/Images/dresses/27.png"
                        alt="Image 1"
                        width={500}
                        height={500}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
          <div className="visible md:hidden">
            <Link
              href="/contact-us"
              className="mt-5 border border-foreground rounded-2xl text-lg md:text-2xl max-w-64 text-center p-2 hover:bg-foreground hover:text-background inline-block md:inline"
            >
              View Collection
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden sm:block mt-10 md:mt-0">
        <div className="p-5 md:p-20 flex flex-col md:flex-row items-center justify-center md:h-screen">
          <div className="text-center md:text-left mb-10 md:mb-0 md:pr-20">
            <h1 className="text-4xl md:text-5xl mt-10 mb-5 md:mb-10">
              Discover Our Exquisite Collection: –{" "}
            </h1>
            <p>
              From soft, organic cotton rompers to elegant hand-knitted
              cardigans, each piece in our collection is lovingly crafted to
              envelop your baby in cozy elegance. Whether you are looking for an
              adorable outfit for a special occasion or simply seeking everyday
              essentials, Kilkari has you covered.
            </p>
            <div className="hidden sm:block mt-10">
              <Link
                href="/gallery"
                className="mt-5 border border-foreground rounded-2xl text-lg md:text-2xl max-w-64 text-center p-2 hover:bg-foreground hover:text-background inline-block md:inline"
              >
                View Collection
              </Link>
            </div>
          </div>

          <div className="md:ml-auto md:mr-10">
            {" "}
            {/* Adjust margin-left and margin-right for medium screens and larger */}
            <Carousel
              opts={{
                align: "start",
              }}
              className="md:h-auto md:w-auto border border-foreground rounded-xl"
            >
              <CarouselContent>
                <CarouselItem>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <Image
                          className="border border-foreground rounded-xl"
                          src="/Images/dresses/7.png"
                          alt="Image 1"
                          width={500}
                          height={500}
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <Image
                          className="border border-foreground rounded-xl"
                          src="/Images/dresses/8.png"
                          alt="Image 1"
                          width={500}
                          height={500}
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <Image
                          className="border border-foreground rounded-xl"
                          src="/Images/dresses/9.png"
                          alt="Image 1"
                          width={500}
                          height={500}
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <Image
                          className="border border-foreground rounded-xl"
                          src="/Images/dresses/10.png"
                          alt="Image 1"
                          width={500}
                          height={500}
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <Image
                          className="border border-foreground rounded-xl"
                          src="/Images/dresses/24.png"
                          alt="Image 1"
                          width={500}
                          height={500}
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <div className="visible md:hidden">
              <Link
                href="/contact-us"
                className="mt-5 border border-foreground rounded-2xl text-lg md:text-2xl max-w-64 text-center p-2 hover:bg-foreground hover:text-background inline-block md:inline"
              >
                View Collection
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="md:flex justify-center p-8 md:p-20 pb-12 items-center align-middle ">
        <h1 className="justify-center text-3xl md:text-5xl mb-4 md:mb-8 m-10 text-center">
          Connect with us
        </h1>
        <div className="flex flex-col md:flex-row md:space-x-8 justify-center">
          <div className="mb-8 md:mb-0 text-center">
            <div className="text-xl md:text-3xl font-semibold mb-2">
              Main Office
            </div>
            <div className="text-base md:text-lg">
              E-131/4th,
              <br /> Lav Kush,
              <br /> Sukhliya,
              <br /> Indore
            </div>
          </div>
          <div className="text-center">
            <div className="text-xl md:text-3xl font-semibold mb-2">
              Social Media
            </div>
            <div className="text-base md:text-lg">
              Facebook
              <br />
              Instagram
              <br />
              Twitter
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden p-5"></div>
    </>
  );
};

export default home;
