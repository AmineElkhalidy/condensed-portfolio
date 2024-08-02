//@ts-nocheck
"use client";

import React, { useState, useEffect } from "react";
import { InfinitySpin } from "react-loader-spinner";

const Preloader = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  }, []);
  return (
    <>
      {loading && (
        <div className="w-full h-screen flex items-center justify-center">
          <InfinitySpin
            visible={true}
            width="200"
            color="#0369a1"
            ariaLabel="infinity-spin-loading"
          />
        </div>
      )}
      {!loading && <>{children}</>}
    </>
  );
};

export default Preloader;
