"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Main() {
  return (
    <>
      <div
        style={{
          backgroundImage: "url('/landingbg.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="object-fill h-screen w-100%"
      >
        <div className="flex absolute h-[100vh] w-[100vw] justify-center items-center">
          <div>
            <div className="flex justify-center flex-wrap">
              <p className="font-cabin text-8xl">Garba</p>
              <p className="font-jersey text-8xl">gotchi</p>
            </div>
            <p className="flex gap-[2rem] justify-center flex-wrap font-cabin text-md">
              Learn what being in a top 10 Cool School means.
            </p>
            <Link
              className="flex justify-center flex-wrap font-cabin text-md pt-4"
              href="/gameplay"
            >
              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: "#202AB7" }}
                className="font-jersey text-white text-6xl bg-dark-blue px-3 py-1.25 rounded-2xl"
              >
                Start
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
