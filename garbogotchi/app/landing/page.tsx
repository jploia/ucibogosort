"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <>
      <div className="">
        <div className="flex">
          <p className="font-cabin text-7xl">Garba</p>
          <p className="font-jersey text-7xl">gotchi</p>
        </div>
        <p className="font-cabin text-md">
          Learn what being the #1 Cool School means.
        </p>
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "#37C218" }}
          className="font-jersey text-white text-3xl bg-neon-green px-3 py-1.5 rounded-3xl"
        >
          Start
        </motion.button>
      </div>
    </>
  );
}
