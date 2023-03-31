import React from "react";
import { TabView, TabPanel } from "primereact/tabview";
import Link from "next/link";
import HeroProps from "../HeroProps";

function Hero6() {
  const nho = {
    condition2: "nho",
    search: "byname",
    filter: "2",
  };
  const tao = {
    condition2: "táo",
    search: "byname",
    filter: "2",
  };
  const cherry = {
    condition2: "cherry",
    search: "byname",
    filter: "2",
  };
  const cam = {
    condition2: "cam",
    search: "byname",
    filter: "2",
  };
  const le = {
    condition2: "le",
    search: "byname",
    filter: "2",
  };
  return (
    <div className="mt-12">
      <Link href={"/importfruit"}>
        <h1 className="text-3xl uppercase font-medium mt-3">
          TRÁI CÂY NHẬP KHẨU
        </h1>
      </Link>
      <div>
        <TabView>
          <TabPanel header="Táo">
            <div className="text-center">
              <HeroProps props={tao} />
            </div>
          </TabPanel>
          <TabPanel header="Cherry">
            <div className="text-center">
              <HeroProps props={cherry} />
            </div>
          </TabPanel>
          <TabPanel header="Nho">
            <div className="text-center">
              <HeroProps props={nho} />
            </div>
          </TabPanel>
          <TabPanel header="Cam Quýt">
            <div className="text-center">
              <HeroProps props={cam} />
            </div>
          </TabPanel>
          <TabPanel header="Lê">
            <div className="text-center">
              <HeroProps props={le} />
            </div>
          </TabPanel>
        </TabView>
      </div>
    </div>
  );
}

export default Hero6;
