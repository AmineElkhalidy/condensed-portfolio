import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Marquee from "react-fast-marquee";
import { testimonials } from "@/constants";
import Link from "next/link";

const Testimonials = () => {
  return (
    <section className="pt-20 lg:pt-32">
      <div className="text-center mb-14">
        <h2 className="text-4xl text-center font-extrabold md:text-5xl font-secondary">
          Testimonials
        </h2>
        <p className="text-muted-foreground mt-2">
          What my clients say about my work
        </p>
      </div>

      <div className="overflow-y-hidden">
        <Marquee className="h-full">
          {testimonials.map((item) => (
            <Card
              key={item.description}
              className="bg-gray-100 border-none mx-4 lg:mx-6 max-w-sm h-[350px]"
            >
              <CardHeader>
                <CardContent className="pt-4 px-0 italic">
                  &quot;{item.description}&quot;
                </CardContent>
                <CardTitle className="flex items-center gap-x-2">
                  <div>
                    <h3 className="text-lg">{item.name}</h3>
                  </div>
                </CardTitle>
              </CardHeader>
            </Card>
          ))}
        </Marquee>
      </div>

      <div className="w-full flex items-center justify-center mt-16">
        <Link
          href="https://upwork.com"
          className="font-medium py-3 px-12 border rounded-full text-muted-foreground transition-all hover:bg-sky-700 hover:text-white"
        >
          See more on Upwork
        </Link>
      </div>
    </section>
  );
};

export default Testimonials;
