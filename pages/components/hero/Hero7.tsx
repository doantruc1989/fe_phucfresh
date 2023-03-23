import Link from 'next/link'
import React from 'react'

function Hero7() {
  return (
    <Link href="/vnfruit">
    <div className="mt-12 flex flex-col md:flex-row gap-3">
      <div className="relative">
        <img src="/image/hero7_1.png" alt="hero7_1"/>
      </div>

      <div className="relative">
        <img src="/image/hero7_2.png" alt="hero7_1"/>

      </div>
    </div>
    </Link>
  )
}

export default Hero7