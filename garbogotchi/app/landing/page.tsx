"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <>
      <p className="font-cabin text-7xl">Garbagotchi</p>
      <p className="font-cabin text-md">
        Learn what being the #1 Cool School means.
      </p>
      <a className="font-jersey text-white text-3xl bg-neon-green px-3 py-1.5 rounded-3xl">
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "dark-green" }}
          className="px-3 py-1.5 rounded-3xl"
        >
          Start
        </motion.button>
      </a>
    </>
  );
}
