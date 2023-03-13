"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
const mailingLists = [
  {
    id: 1,
    title: "Newsletter",
    description: "Last message sent an hour ago",
    users: "621 users",
  },
  {
    id: 2,
    title: "Existing Customers",
    description: "Last message sent 2 weeks ago",
    users: "1200 users",
  },
  {
    id: 3,
    title: "Trial Users",
    description: "Last message sent 4 days ago",
    users: "2740 users",
  },
];

export default function Home() {
  const [intro, setIntro] = React.useState(true);

  const [options, setOptions] = React.useState(false);
  const [optionSelected, setOptionSelected] = React.useState("");

  const [timer, setTimer] = React.useState(false);
  const [selectedMailingLists, setSelectedMailingLists] = React.useState(
    mailingLists[0]
  );

  function handleOptionSelected(option: string) {
    setOptionSelected(option);
    setSelectedMailingLists(mailingLists[0]);
    setTimer(false);
  }
  return (
    <div className="bg-black h-screen overflow-y-hidden">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        {/* hero */}
        <AnimatePresence>
          {intro && (
            <div>
              <motion.div
                className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                // @ts-ignore
                from={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.4 }}
                >
                  <motion.h1
                    className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                  >
                    Take-A-Break <br /> We all know you need it.
                  </motion.h1>
                  <motion.h2
                    className="mt-6 text-2xl leading-8 text-[#eaeaea]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                  ></motion.h2>
                  <motion.h2
                    className="mt-6 text-lg leading-8 text-[#eaeaea]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                  >
                    Take-A-Break is an immersive experience that helps you take
                    a break and find your focus.
                  </motion.h2>
                  <motion.div
                    className="mt-10 flex items-center justify-center gap-x-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
                  >
                    <button
                      onClick={() => {
                        setIntro(false);
                        setOptions(true);
                      }}
                      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Get started
                    </button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {options && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 2 }}
            >
              <div>
                <video
                  src={require("../public/homevideo.mp4")}
                  autoPlay
                  loop
                  className="absolute inset-0 w-full h-screen object-cover"
                />
                <div className="mx-auto max-w-2xl py-24 sm:px-6 sm:py-32 lg:px-8 bg-white z-50">
                  <div className="bg-white z-50 relative isolate overflow-hidden bg-transparent px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
                    <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-black sm:text-4xl">
                      What are you into?
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-black">
                      This will help find the best experience for you.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                      <span
                        onClick={() => {
                          setOptions(false);
                          setTimer(true);
                          setOptionSelected("Waterfalls");
                        }}
                        className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-0.5 text-sm font-medium text-indigo-800"
                      >
                        Waterfalls
                      </span>
                      <span
                        onClick={() => {
                          setOptions(false);
                          setTimer(true);
                          setOptionSelected("Forests");
                        }}
                        className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-0.5 text-sm font-medium text-indigo-800"
                      >
                        Forests
                      </span>
                      <span
                        onClick={() => {
                          setOptions(false);
                          setTimer(true);
                          setOptionSelected("Beaches");
                        }}
                        className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-0.5 text-sm font-medium text-indigo-800"
                      >
                        Beaches
                      </span>
                      <span
                        onClick={() => {
                          setOptions(false);
                          setTimer(true);
                          setOptionSelected("Mountains");
                        }}
                        className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-0.5 text-sm font-medium text-indigo-800"
                      >
                        Mountains
                      </span>
                      <span
                        onClick={() => {
                          setOptions(false);
                          setTimer(true);
                          setOptionSelected("Lakes");
                        }}
                        className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-0.5 text-sm font-medium text-indigo-800"
                      >
                        Lakes
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
