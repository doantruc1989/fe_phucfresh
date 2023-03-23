import Link from "next/link";
import React from "react";

function Hero13() {
  return (
    <Link href="/friedfood">
      <div className="mt-12 flex flex-col md:flex-row gap-3">
        <div className="relative w-full">
          <img
            className="w-full h-80"
            src="/image/hero13_1.png"
            alt="hero13_1"
          />
        </div>

        <div className="relative w-full">
          <img
            className="w-full h-80"
            src="/image/hero13_2.png"
            alt="hero13_1"
          />
        </div>
      </div>
    </Link>
  );
}

export default Hero13;
