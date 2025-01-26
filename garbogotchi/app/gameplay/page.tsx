"use client";

import BinContainer from "@/app/components/BinContainer";
import { useEffect, useState } from "react";

export default function GameplayPage() {
  const binType = [
    {
      name: "compost",
      src: "/compost.PNG",
      alt: "small green bin with banana peel logo on it",
    },
    {
      name: "recycle",
      src: "/recycle.PNG",
      alt: "small blue bin with a recycling logo on it",
    },
    {
      name: "landfill",
      src: "/trash.PNG",
      alt: "small black bin with a trash wrapper logo on it",
    },
  ];

  async function getData() {
    const url = "http://127.0.0.1:5000?get_prompts=10";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error;
    }
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div style={{ backgroundColor: "#8FB6F4" }}>
        <BinContainer bins={binType} />
      </div>
    </>
  );
}
