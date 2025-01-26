"use client";

import BinProps from "@/app/components/BinProps";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function BinContainer(props: Readonly<{ bins: BinProps[] }>) {
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
      <div className="flex gap-[2rem] min-h-screen justify-center items-center flex-wrap">
        {props.bins.map((bin, index) => {
          return (
            <Image
              key={index}
              src={bin.src}
              width={400}
              height={400}
              alt={bin.alt}
            />
          );
        })}
      </div>
    </>
  );
}
