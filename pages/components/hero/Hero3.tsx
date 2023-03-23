import Link from "next/link";
import React from "react";

function Hero3() {
  return (
    <div className="mt-12 flex flex-col md:flex-row gap-3">
      <div className="relative w-full">
        <Link href="/fruitgift">
          <img className="w-full" src="/image/hero3_1.png" alt="hero3_1" />
        </Link>
      </div>

      <div className="relative w-full">
        <Link href="/fruitgift">
          <img className="w-full" src="/image/hero3_2.png" alt="hero3_1" />
        </Link>
      </div>
    </div>
  );
}

export default Hero3;
