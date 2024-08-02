import React from "react";

const Heading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="text-3xl text-center font-extrabold md:text-4xl lg:text-5xl font-secondary mb-10 md:mb-20">
      {children}
    </h2>
  );
};

export default Heading;
