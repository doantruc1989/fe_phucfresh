import React from "react";
import { TabView, TabPanel } from "primereact/tabview";
import Link from "next/link";
import HeroProps from "../HeroProps";

function Hero8() {
  const dalat = {
    sortField: "Đà Lạt",
    search: "bybrand",
    filter: "1",
  };
  const binhan = {
    sortField: "Bình An Farm",
    search: "bybrand",
    filter: "1",
  };
  const egarden = {
    sortField: "E-garden",
    search: "bybrand",
    filter: "1",
  };
  const vietgap = {
    sortField: "Vietgap",
    search: "bybrand",
    filter: "1",
  };

  return (
    <div className="mt-12">
      <Link href={"/vnfruit"}>
        <h1 className="text-3xl uppercase font-medium mt-3">
          TRÁI CÂY VIỆT NAM
        </h1>
      </Link>
      <div>
        <TabView>
        <TabPanel header="Bình An Farm">
          <div className="text-center">
              <HeroProps props={binhan} />
            </div>
          </TabPanel>
          <TabPanel header="Đà lạt">
          <div className="text-center">
              <HeroProps props={dalat} />
            </div>
          </TabPanel>
        
          <TabPanel header="E-garden">
          <div className="text-center">
              <HeroProps props={egarden} />
            </div>
          </TabPanel>
          <TabPanel header="Vietgap">
          <div className="text-center">
              <HeroProps props={vietgap} />
            </div>
          </TabPanel>
        </TabView>
      </div>
    </div>
  );
}

export default Hero8;
