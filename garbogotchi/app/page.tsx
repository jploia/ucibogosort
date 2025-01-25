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
        className="object-fill min-h-screen"
      >
        <div className="flex-1 h-screen w-100% justify-center items-center">
          <div className="flex justify-center flex-wrap">
            <p className="font-cabin text-9xl">Garba</p>
            <p className="font-jersey text-9xl">gotchi</p>
          </div>
          <p className="flex gap-[2rem] justify-center flex-wrap font-cabin text-xl">
            Learn what being in a top 10 Cool School means.
          </p>
          <Link
            className="flex justify-center flex-wrap font-cabin text-md pt-4"
            href="/gameplay"
          >
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "#202AB7" }}
              className="font-jersey text-white text-6xl bg-dark-blue px-3 py-1.25 rounded-3xl"
            >
              Start
            </motion.button>
          </Link>
        </div>
      </div>
    </>
  );
}
