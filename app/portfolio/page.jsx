"use client";
import React, { memo } from "react";
import Hero from "../components/hero";
import { Nav } from "@/components/nav";
import Map from "../components/map";
import Footer from "@/components/footer";

const portfolio = () => {
  return (
    <div>
      <Nav />
      <Hero />

      <Map />
      <Footer />
    </div>
  );
};

export default memo(portfolio);
