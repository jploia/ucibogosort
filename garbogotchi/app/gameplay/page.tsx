"use client";

import BinContainer from "@/app/components/BinContainer";
// import Item from "@/app/components/Item";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// import "./globals.css";

export default function GameplayPage() {
  const binType = [
    {
      name: "compost",
      src: "/compost.PNG",
      alt: "small green bin with banana peel logo on it",
    },
    {
      name: "landfill",
      src: "/trash.PNG",
      alt: "small black bin with a trash wrapper logo on it",
    },
    {
      name: "recycle",
      src: "/recycle.PNG",
      alt: "small blue bin with a recycling logo on it",
    },
  ];

  interface ItemProps {
    url: string;
    landfill: string;
    compost: string;
    recycle: string;
  }

  const [promptIndex, setPromptIndex] = useState(0);
  const [prompts, setPrompts]: [ItemProps[], any] = useState([]);

  const [loadedImage, setLoadedImage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [userClick, setUserClick] = useState(false);
  const [userScore, setUserScore] = useState(0);

  async function getData() {
    const url = "http://127.0.0.1:5000/get_prompts?num_prompts=10";
    const response = await fetch(url);
    if (!response.ok) {
      console.error(`Response status: ${response.status}`);
    } else {
      const json = await response.json();
      console.log(json);
      setPrompts(json.prompts);
      console.log(prompts[promptIndex]);
      setLoadedImage(true);
      setIsLoading(false);
    }
  }

  const handleClick = (binNum: number) => {
    if (!userClick) {
      setUserClick(true);
      if (
        (binNum == 0 && parseInt(prompts[promptIndex].compost) == 0) ||
        (binNum == 1 && parseInt(prompts[promptIndex].landfill) == 0) ||
        (binNum == 2 && parseInt(prompts[promptIndex].recycle) == 0)
      ) {
        setUserScore(userScore + 1);
      }
    }
  };

  const nextButtonClick = () => {
    if (userClick) {
      setUserClick(false);
      setPromptIndex(promptIndex + 1);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loadedImage && !isLoading) {
    if (!userClick) {
      return (
        <>
          <div style={{ backgroundColor: "#8FB6F4" }}>
            <div className="h-[100vh] w-[100vw] justify-center items-center flex">
              <motion.div key={0} whileHover={{ scale: 1.1 }}>
                <Image
                  src={binType[0].src}
                  width={400}
                  height={400}
                  alt={binType[0].alt}
                  onClick={function () {
                    handleClick(0);
                  }}
                />
              </motion.div>
              <motion.div
                className="h-screen  flex items-center justify-center"
                key={1}
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  src={binType[1].src}
                  width={400}
                  height={400}
                  alt={binType[1].alt}
                  onClick={function () {
                    handleClick(1);
                  }}
                />
              </motion.div>
              <motion.div key={2} whileHover={{ scale: 1.1 }}>
                <Image
                  src={binType[2].src}
                  width={400}
                  height={400}
                  alt={binType[2].alt}
                  onClick={function () {
                    handleClick(2);
                  }}
                />
              </motion.div>
              <div className="items-center">
                <Image
                  src={prompts[promptIndex].url}
                  className="place-items-center"
                  width={225}
                  height={225}
                  alt={prompts[promptIndex].url}
                />
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <div>
          <p>Your score is: {userScore}</p>
          <button onClick={nextButtonClick}>YES YES YES!!!! AFFIRM</button>
        </div>
      );
    }
  }
}
