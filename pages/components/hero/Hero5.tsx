import Link from "next/link";
import React from "react";

function Hero5() {
  return (
    <Link href="/importfruit">
      <div className="mt-12 flex flex-col md:flex-row gap-3">
        <div className="relative">
          <img src="/image/hero5_1.png" alt="hero3_1" />
        </div>

        <div className="relative">
          <img src="/image/hero5_2.png" alt="hero3_1" />
        </div>
      </div>
    </Link>
  );
}

export default Hero5;
