"use client";

import { cn } from "@/lib/utils";
import { Item } from "@radix-ui/react-select";
import CountUp from "react-countup";

const stats = [
  {
    num: 2,
    text: "Years of experience",
  },
  {
    num: 25,
    text: "Projects completed",
  },
  {
    num: 6,
    text: "Technologies mastered",
  },
  {
    num: 600,
    text: "Code commits",
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((statsItem, index) => (
            <div
              className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
              key={index}
            >
              <CountUp
                end={statsItem.num}
                duration={5}
                delay={2}
                className="text-3xl xl:text-4xl font-semibold"
              />

              {/*  statsItem.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]", */}
              <p className={cn("leading-snug text-muted-foreground")}>
                {statsItem.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
