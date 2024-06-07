"use client";

import Image from "next/image";
import Draggable from "react-draggable";
import { useState, useLayoutEffect, useEffect } from "react";
import { PlayProvider } from "@playhtml/react";
import dynamic from "next/dynamic";

const CanMoveElement = dynamic(
  () => import("@playhtml/react").then((mod) => mod.CanMoveElement),
  { ssr: false },
);

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);
  const [position, setPosition] = useState<{
    top: number;
    left: number;
  } | null>(null);
  const [isSecondVisible, setIsSecondVisible] = useState(true);
  const [secondPosition, setSecondPosition] = useState<{
    top: number;
    left: number;
  } | null>(null);
  const [IsThirdVisible, setIsThirdVisible] = useState(false);
  const [thirdPosition, setThirdPosition] = useState<{
    top: number;
    left: number;
  } | null>(null);
  const [IsFourthVisible, setIsFourthVisible] = useState(false);
  const [fourthPosition, setFourthPosition] = useState<{
    top: number;
    left: number;
  } | null>(null);
  const [IsFifthVisible, setIsFifthVisible] = useState(false);
  const [fifthPosition, setFifthPosition] = useState<{
    top: number;
    left: number;
  } | null>(null);
  const [IsSixthVisible, setIsSixthVisible] = useState(false);
  const [sixthPosition, setSixthPosition] = useState<{
    top: number;
    left: number;
  } | null>(null);
  const [IsSeventhVisible, setIsSeventhVisible] = useState(false);
  const [seventhPosition, setSeventhPosition] = useState<{
    top: number;
    left: number;
  } | null>(null);
  const [IsEighthVisible, setIsEighthVisible] = useState(false);
  const [eighthPosition, setEighthPosition] = useState<{
    top: number;
    left: number;
  } | null>(null);

  useLayoutEffect(() => {
    const timer = setTimeout(() => {
      const randomTop = 0 * (window.innerHeight - 345); // 345 is the height of the element
      const randomLeft = 0 * (window.innerWidth - 425); // 425 is the width of the element
      setPosition({ top: randomTop, left: randomLeft });
    }, 200); // 500ms delay

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const secondRandomTop = 0.15 * (window.innerHeight - 400); // 400 is the height of the second element
      const secondRandomLeft = 0.15 * (window.innerWidth - 500); // 500 is the width of the second element
      setSecondPosition({ top: secondRandomTop, left: secondRandomLeft });
    }, 350); // 1 second delay

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsThirdVisible(true);
    }, 0); // 500ms delay
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const thirdRandomTop = 0.25 * (window.innerHeight - 200); // 200 is the height of the third element
      const thirdRandomLeft = 0.25 * (window.innerWidth - 300); // 300 is the width of the third element
      setThirdPosition({ top: thirdRandomTop, left: thirdRandomLeft });
    }, 500); // 700ms delay

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFourthVisible(true);
    }, 0); // 500ms delay
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const fourthRandomTop = 0.35 * (window.innerHeight - 200); // Adjust height
      const fourthRandomLeft = 0.35 * (window.innerWidth - 300); // Adjust width
      setFourthPosition({ top: fourthRandomTop, left: fourthRandomLeft });
    }, 700); // 1.2 second delay
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFifthVisible(true);
    }, 0); // Adjust delay as needed
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const fifthRandomTop = 0.55 * (window.innerHeight - 460); // Adjust height
      const fifthRandomLeft = 0.55 * (window.innerWidth - 200); // Adjust width
      setFifthPosition({ top: fifthRandomTop, left: fifthRandomLeft });
    }, 950);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSixthVisible(true);
    }, 0); // Adjust delay as needed
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const sixthRandomTop = 0.7 * (window.innerHeight - 200); // Adjust height
      const sixthRandomLeft = 0.7 * (window.innerWidth - 300); // Adjust width
      setSixthPosition({ top: sixthRandomTop, left: sixthRandomLeft });
    }, 1100); // Adjust delay as needed
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSeventhVisible(true);
    }, 0); // Adjust delay as needed
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const seventhRandomTop = 0.9 * (window.innerHeight - 200); // Adjust height
      const seventhRandomLeft = 0.9 * (window.innerWidth - 300); // Adjust width
      setSeventhPosition({ top: seventhRandomTop, left: seventhRandomLeft });
    }, 1250); // Adjust delay as needed
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsEighthVisible(true);
    }, 0); // Adjust delay as needed
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const eighthRandomTop = 1 * (window.innerHeight - 200); // Adjust height
      const eighthRandomLeft = 1 * (window.innerWidth - 300); // Adjust width
      setEighthPosition({ top: eighthRandomTop, left: eighthRandomLeft });
    }, 300); // Adjust delay as needed
    return () => clearTimeout(timer);
  }, []);

  const handleClose = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsVisible(false);
  };

  const handleSecondClose = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsSecondVisible(false);
  };

  return (
    <div className="">
      <PlayProvider>
        <div className="hidden sm:block relative bg-white h-screen w-full">
          {isVisible && position && (
            <CanMoveElement>
              <div
                className=" absolute z-50 w-[425px] h-[360px] rounded-xl bg-neutral-900 border border-neutral-800 overflow-hidden drop-shadow-2xl"
                style={{ top: position.top, left: position.left }}
              >
                <div className="absolute w-[423px] h-[358px] border rounded-innerw border-white opacity-20"></div>
                <div className="flex flex-col items-center">
                  <div className="h-7 w-full bg-neutral-700 flex flex-row items-center">
                    <div className="absolute left-0 flex flex-row items-center space-x-2 p-2">
                      <button className="h-3 w-3 rounded-full bg-redw cursor-pointer"></button>
                      <div className="h-3 w-3 rounded-full bg-yelloww"></div>
                      <div className="h-3 w-3 rounded-full bg-greenw"></div>
                      <div className="pl-1 text-sm text-neutral-300 opacity-80 font-inter font-semibold">
                        desc.sh
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <Image
                      className=""
                      src="/desc.png"
                      alt=""
                      draggable="false"
                      width={425}
                      height={400}
                      layout=""
                      objectFit=""
                      priority
                    />
                  </div>
                </div>
              </div>
            </CanMoveElement>
          )}

          {IsEighthVisible && eighthPosition && (
            <CanMoveElement>
              <div
                className="absolute z-50 w-[150px] h-[140px] rounded-xl border border-neutral-800 overflow-hidden drop-shadow-2xl"
                style={{ top: eighthPosition.top, left: eighthPosition.left }}
              >
                <div className="absolute w-[423px] h-[343px] border rounded-innerw border-white opacity-20"></div>
                <div className="flex flex-col">
                  <div className="h-7 w-full bg-neutral-700 flex flex-row items-center">
                    <div className="absolute left-0 flex flex-row items-center space-x-2 p-2">
                      <button className="h-3 w-3 rounded-full bg-redw cursor-pointer"></button>
                      <div className="h-3 w-3 rounded-full bg-yelloww"></div>
                      <div className="h-3 w-3 rounded-full bg-greenw"></div>
                      <div className="pl-1 text-sm text-neutral-300 opacity-80 font-inter font-semibold">
                        hi.inv
                      </div>
                    </div>
                  </div>
                  <div className="absolute z-100 mt-7 pt-3 h-32 bg-pink-500 opacity-90 w-full">
                    <a
                      className="cursor-pointer"
                      draggable="false"
                      href="https://forms.gle/wHnKsnj8U9PLc4bN7"
                    >
                      <button
                        type="button"
                        className="group text-gray-900 px-4 py-1 flex flex-row items-center"
                      >
                        <div className="-ml-1.5 absolute w-0 bg-white h-6 group-hover:w-32 opacity-40"></div>
                        <div className="text-center text-sm font-dm text-white">
                          Demo
                        </div>
                        <Image
                          draggable="false"
                          className=" rotate-45 ml-2 mt-0.5 fill-white"
                          src="/arrow.svg"
                          width={15}
                          height={15}
                          alt="arrow"
                        />
                      </button>
                    </a>
                    <a
                      className="cursor-pointer"
                      draggable="false"
                      href="https://lu.ma/mvd"
                    >
                      <button
                        type="button"
                        className="group text-gray-900 rounded px-4 py-1 flex flex-row items-center"
                      >
                        <div className="-ml-1.5 absolute w-0 bg-white h-6 group-hover:w-32 opacity-40"></div>
                        <div className="text-center text-sm font-dm text-white">
                          Attend
                        </div>
                        <Image
                          draggable="false"
                          className=" rotate-45 transition duration-150 ml-2 mt-0.5 fill-white"
                          src="/arrow.svg"
                          width={15}
                          height={15}
                          alt="arrow"
                        />
                      </button>
                    </a>
                    <a
                      className="cursor-pointer"
                      draggable="false"
                      href="https://twitter.com/mvdemos_"
                    >
                      <button
                        type="button"
                        className="group text-gray-900 rounded px-4 py-1 flex flex-row items-center"
                      >
                        <div className="-ml-1.5 absolute w-0 bg-white h-6 group-hover:w-32 opacity-40"></div>
                        <div className="text-center text-sm font-dmx text-white">
                          Twitter
                        </div>
                        <Image
                          draggable="false"
                          className=" rotate-45 transition duration-150 ml-2 mt-0.5 fill-white"
                          src="/arrow.svg"
                          width={15}
                          height={15}
                          alt="arrow"
                        />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </CanMoveElement>
          )}

          {IsThirdVisible && (
            <CanMoveElement>
              <div className="absolute top-12 left-12 w-[200px] h-[120px] z-50 rounded-xl bg-neutral-900 border border-neutral-800 overflow-hidden drop-shadow-2xl">
                <div className="absolute w-[198px] h-[198px] border rounded-innerw border-white opacity-20"></div>
                <div className="flex flex-col items-center">
                  <div className="h-7 w-full bg-neutral-700 flex flex-row items-center">
                    <div className="absolute left-0 flex flex-row items-center space-x-2 p-2">
                      <button className="h-3 w-3 rounded-full bg-redw "></button>
                      <div className="h-3 w-3 rounded-full bg-yelloww"></div>
                      <div className="h-3 w-3 rounded-full bg-greenw"></div>
                      <div className="pl-1 text-sm text-neutral-300 opacity-80 font-inter font-semibold">
                        logo.sh
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <Image
                      className=""
                      src="/logo.png"
                      alt=""
                      draggable="false"
                      width={200}
                      height={200}
                      layout=""
                      objectFit=""
                      priority
                    />
                  </div>
                </div>
              </div>
            </CanMoveElement>
          )}

          {isSecondVisible && secondPosition && (
            <CanMoveElement>
              <div
                className="absolute z-40 w-[500px] h-[400px] rounded-xl bg-neutral-900 border border-neutral-800 overflow-hidden drop-shadow-2xl"
                style={{ top: secondPosition.top, left: secondPosition.left }}
              >
                <div className="absolute w-[498px] h-[398px] border rounded-innerw border-white opacity-20"></div>
                <div className="flex flex-col items-center">
                  <div className="h-7 w-full bg-neutral-700 flex flex-row items-center">
                    <div className="absolute left-0 flex flex-row items-center space-x-2 p-2">
                      <button className="h-3 w-3 rounded-full bg-redw cursor-pointer"></button>
                      <div className="h-3 w-3 rounded-full bg-yelloww"></div>
                      <div className="h-3 w-3 rounded-full bg-greenw"></div>
                      <div className="pl-1 text-sm text-neutral-300 opacity-80 font-inter font-semibold">
                        hands.jpg
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <Image
                      className=""
                      src="/hands.jpg"
                      alt=""
                      draggable="false"
                      width={500}
                      height={400}
                      layout=""
                      objectFit=""
                      priority
                    />
                  </div>
                </div>
              </div>
            </CanMoveElement>
          )}

          {IsThirdVisible && thirdPosition && (
            <CanMoveElement>
              <div
                className="absolute z-40 w-[300px] h-[200px] rounded-xl bg-neutral-900 border border-neutral-800 overflow-hidden drop-shadow-2xl"
                style={{ top: thirdPosition.top, left: thirdPosition.left }}
              >
                <div className="absolute w-[498px] h-[398px] border rounded-innerw border-white opacity-20"></div>
                <div className="flex flex-col items-center">
                  <div className="h-7 w-full bg-neutral-700 flex flex-row items-center">
                    <div className="absolute left-0 flex flex-row items-center space-x-2 p-2">
                      <button className="h-3 w-3 rounded-full bg-redw cursor-pointer"></button>
                      <div className="h-3 w-3 rounded-full bg-yelloww"></div>
                      <div className="h-3 w-3 rounded-full bg-greenw"></div>
                      <div className="pl-1 text-sm text-neutral-300 opacity-80 font-inter font-semibold">
                        darwin.gif
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <Image
                      className=""
                      src="/steven.gif"
                      alt=""
                      draggable="false"
                      width={300}
                      height={200}
                      layout=""
                      objectFit=""
                      priority
                    />
                  </div>
                </div>
              </div>
            </CanMoveElement>
          )}

          {IsFourthVisible && fourthPosition && (
            <CanMoveElement>
              <div
                className="absolute z-40 w-[250px] h-[160px] rounded-xl bg-neutral-900 border border-neutral-800 overflow-hidden drop-shadow-2xl"
                style={{ top: fourthPosition.top, left: fourthPosition.left }}
              >
                <div className="absolute w-[498px] h-[398px] border rounded-innerw border-white opacity-20"></div>
                <div className="flex flex-col items-center">
                  <div className="h-7 w-full bg-neutral-700 flex flex-row items-center">
                    <div className="absolute left-0 flex flex-row items-center space-x-2 p-2">
                      <button className="h-3 w-3 rounded-full bg-redw cursor-pointer"></button>
                      <div className="h-3 w-3 rounded-full bg-yelloww"></div>
                      <div className="h-3 w-3 rounded-full bg-greenw"></div>
                      <div className="pl-1 text-sm text-neutral-300 opacity-80 font-inter font-semibold">
                        flash.gif
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <Image
                      className=""
                      src="/flash.gif"
                      alt=""
                      draggable="false"
                      width={300}
                      height={200}
                      layout=""
                      objectFit=""
                      priority
                    />
                  </div>
                </div>
              </div>
            </CanMoveElement>
          )}

          {IsFifthVisible && fifthPosition && (
            <CanMoveElement>
              <div
                className="absolute z-40 w-[200px] h-[460px] rounded-xl bg-neutral-900 border border-neutral-800 overflow-hidden drop-shadow-2xl"
                style={{ top: fifthPosition.top, left: fifthPosition.left }}
              >
                <div className="absolute w-[198px] h-[458px] border rounded-innerw border-white opacity-20"></div>
                <div className="flex flex-col items-center">
                  <div className="h-7 w-full bg-neutral-700 flex flex-row items-center">
                    <div className="absolute left-0 flex flex-row items-center space-x-2 p-2">
                      <button className="h-3 w-3 rounded-full bg-redw cursor-pointer"></button>
                      <div className="h-3 w-3 rounded-full bg-yelloww"></div>
                      <div className="h-3 w-3 rounded-full bg-greenw"></div>
                      <div className="pl-1 text-sm text-neutral-300 opacity-80 font-inter font-semibold">
                        digicam.gif
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <Image
                      className=""
                      src="/digicam.gif"
                      alt=""
                      draggable="false"
                      width={200}
                      height={640}
                      layout=""
                      objectFit=""
                      priority
                    />
                  </div>
                </div>
              </div>
            </CanMoveElement>
          )}

          {IsSixthVisible && sixthPosition && (
            <CanMoveElement>
              <div
                className="absolute z-40 w-[300px] h-[150px] rounded-xl bg-neutral-900 border border-neutral-800 overflow-hidden drop-shadow-2xl"
                style={{ top: sixthPosition.top, left: sixthPosition.left }}
              >
                <div className="absolute w-[298px] h-[148px] border rounded-innerw border-white opacity-20"></div>
                <div className="flex flex-col items-center">
                  <div className="h-7 w-full bg-neutral-700 flex flex-row items-center">
                    <div className="absolute left-0 flex flex-row items-center space-x-2 p-2">
                      <button className="h-3 w-3 rounded-full bg-redw cursor-pointer"></button>
                      <div className="h-3 w-3 rounded-full bg-yelloww"></div>
                      <div className="h-3 w-3 rounded-full bg-greenw"></div>
                      <div className="pl-1 text-sm text-neutral-300 opacity-80 font-inter font-semibold">
                        beefjerky.w
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <Image
                      className=""
                      src="/beefjerky.jpg"
                      alt=""
                      draggable="false"
                      width={300}
                      height={150}
                      layout=""
                      objectFit=""
                      priority
                    />
                  </div>
                </div>
              </div>
            </CanMoveElement>
          )}

          {IsSeventhVisible && seventhPosition && (
            <CanMoveElement>
              <div
                className="absolute z-40 w-[350px] h-[450px] rounded-xl bg-neutral-900 border border-neutral-800 overflow-hidden drop-shadow-2xl"
                style={{ top: seventhPosition.top, left: seventhPosition.left }}
              >
                <div className="absolute w-[348px] h-[448px] border rounded-innerw border-white opacity-20"></div>
                <div className="flex flex-col items-center">
                  <div className="h-7 w-full bg-neutral-700 flex flex-row items-center">
                    <div className="absolute left-0 flex flex-row items-center space-x-2 p-2">
                      <button className="h-3 w-3 rounded-full bg-redw cursor-pointer"></button>
                      <div className="h-3 w-3 rounded-full bg-yelloww"></div>
                      <div className="h-3 w-3 rounded-full bg-greenw"></div>
                      <div className="pl-1 text-sm text-neutral-300 opacity-80 font-inter font-semibold">
                        zap.gif
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <Image
                      className=""
                      src="/zap.gif"
                      alt=""
                      draggable="false"
                      width={350}
                      height={450}
                      layout=""
                      objectFit=""
                      priority
                    />
                  </div>
                </div>
              </div>
            </CanMoveElement>
          )}
        </div>

        {/* mobile */}

        <div className="sm:hidden relative bg-white h-screen w-full p-2 space-y-2">
          <div className="relative flex flex-row w-full items-center justify-between">
            <div className="relative w-40 h-[105px] z-50 rounded-xl bg-neutral-900 border border-neutral-800 overflow-hidden drop-shadow-2xl">
              <div className="absolute h-[calc(100%-0.5px)] w-[calc(100%-0.5px)] m-[0.5px] border rounded-innerw border-white opacity-20"></div>
              <div className="flex flex-col items-center">
                <div className="h-7 w-full bg-neutral-700 flex flex-row items-center">
                  <div className="absolute left-0 flex flex-row items-center space-x-2 p-2">
                    <button className="h-3 w-3 rounded-full bg-redw "></button>
                    <div className="h-3 w-3 rounded-full bg-yelloww"></div>
                    <div className="h-3 w-3 rounded-full bg-greenw"></div>
                    <div className="pl-1 text-sm text-neutral-300 opacity-80 font-inter font-semibold">
                      logo.sh
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <Image
                    className=""
                    src="/logo.png"
                    alt=""
                    draggable="false"
                    width={200}
                    height={200}
                    layout=""
                    objectFit=""
                    priority
                  />
                </div>
              </div>
            </div>
            <div className="relative animate-bounce">
              <img src="/tamo.gif" className="mt-4 pl-2 h-12"></img>
            </div>
            <div className="relative">
              <img src="/dolan.gif" className="h-24"></img>
            </div>
          </div>
          <div className="relative z-50 w-full  rounded-xl bg-neutral-900 border border-neutral-800 overflow-hidden drop-shadow-2xl">
            <div className="absolute h-[calc(100%-0.5px)] w-[calc(100%-0.5px)] m-[0.5px] border rounded-innerw border-white opacity-20"></div>
            <div className="flex flex-col items-center">
              <div className="h-7 w-full bg-neutral-700 flex flex-row items-center">
                <div className="absolute left-0 flex flex-row items-center space-x-2 p-2">
                  <button className="h-3 w-3 rounded-full bg-redw cursor-pointer"></button>
                  <div className="h-3 w-3 rounded-full bg-yelloww"></div>
                  <div className="h-3 w-3 rounded-full bg-greenw"></div>
                  <div className="pl-1 text-sm text-neutral-300 opacity-80 font-inter font-semibold">
                    desc.sh
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <Image
                  className=""
                  src="/desc.png"
                  alt=""
                  draggable="false"
                  width={425}
                  height={400}
                  layout=""
                  objectFit=""
                  priority
                />
              </div>
            </div>
          </div>

          <div className="flex flex-row w-full space-x-2">
            <a className="cursor-pointer" href="https://lu.ma/5tngn4bz">
              <div className="relative z-50 w-full rounded-xl bg-neutral-900 border border-neutral-800 overflow-hidden drop-shadow-2xl">
                <div className="absolute h-[calc(100%-0.5px)] w-[calc(100%-0.5px)] m-[0.5px] border rounded-innerw border-white opacity-20"></div>
                <div className="absolute h-[calc(100%-0.5px)] w-[calc(100%-0.5px)] m-[0.5px] flex flex-col justify-center items-center">
                  <img
                    draggable="false"
                    className="relative h-12 w-12 rotate-45 transition duration-150 ml-2 mt-0.5 fill-pink-400"
                    src="/arrow.svg"
                  />
                </div>

                <div className="flex flex-col items-center">
                  <div className="h-7 w-full bg-neutral-700 flex flex-row items-center">
                    <div className="absolute left-0 flex flex-row items-center space-x-2 p-2">
                      <button className="h-3 w-3 rounded-full bg-redw cursor-pointer"></button>
                      <div className="h-3 w-3 rounded-full bg-yelloww"></div>
                      <div className="h-3 w-3 rounded-full bg-greenw"></div>
                      <div className="pl-1 text-sm text-neutral-300 opacity-80 font-inter font-semibold">
                        luma.attend
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <Image
                      className="bg-zinc-900 opacity-50"
                      src="/sm_luma.avif"
                      alt=""
                      draggable="false"
                      width={450}
                      height={425}
                      layout=""
                      objectFit=""
                      priority
                    />
                  </div>
                </div>
              </div>
            </a>
            <a
              className="cursor-pointer"
              href="https://forms.gle/Q4JpYkfQxpWw2DjY7"
            >
              <div className="relative z-50 w-full rounded-xl bg-neutral-900 border border-neutral-800 overflow-hidden drop-shadow-2xl">
                <div className="absolute h-[calc(100%-0.5px)] w-[calc(100%-0.5px)] m-[0.5px] border rounded-innerw border-white opacity-20"></div>
                <div className="absolute h-[calc(100%-0.5px)] w-[calc(100%-0.5px)] m-[0.5px] flex flex-col justify-center items-center">
                  <img
                    draggable="false"
                    className="relative h-12 w-12 rotate-45 transition duration-150 ml-2 mt-0.5 fill-pink-400"
                    src="/arrow.svg"
                  />
                </div>

                <div className="flex flex-col items-center">
                  <div className="h-7 w-full bg-neutral-700 flex flex-row items-center">
                    <div className="absolute left-0 flex flex-row items-center space-x-2 p-2">
                      <button className="h-3 w-3 rounded-full bg-redw cursor-pointer"></button>
                      <div className="h-3 w-3 rounded-full bg-yelloww"></div>
                      <div className="h-3 w-3 rounded-full bg-greenw"></div>
                      <div className="pl-1 text-sm text-neutral-300 opacity-80 font-inter font-semibold">
                        demo.apply
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <Image
                      className="bg-zinc-900 opacity-50"
                      src="/weld.png"
                      alt=""
                      draggable="false"
                      width={450}
                      height={425}
                      layout=""
                      objectFit=""
                      priority
                    />
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="pb-2">
            <a
              className="cursor-pointer"
              href="https://x.com/mvdemos_/status/1793397722357383480"
            >
              <div className="relative z-50 w-full rounded-xl bg-neutral-900 border border-neutral-800 overflow-hidden drop-shadow-2xl">
                <div className="absolute h-[calc(100%-0.5px)] w-[calc(100%-0.5px)] m-[0.5px] border rounded-innerw border-white opacity-20"></div>
                <div className="absolute h-[calc(100%-0.5px)] w-[calc(100%-0.5px)] m-[0.5px] flex flex-col justify-center items-center">
                  <img
                    draggable="false"
                    className="relative h-12 w-12 rotate-45 transition duration-150 ml-2 mt-0.5 fill-pink-400"
                    src="/arrow.svg"
                  />
                </div>
                <div className="flex flex-col items-center">
                  <div className="h-7 w-full bg-neutral-700 flex flex-row items-center">
                    <div className="absolute left-0 flex flex-row items-center space-x-2 p-2">
                      <button className="h-3 w-3 rounded-full bg-redw cursor-pointer"></button>
                      <div className="h-3 w-3 rounded-full bg-yelloww"></div>
                      <div className="h-3 w-3 rounded-full bg-greenw"></div>
                      <div className="pl-1 text-sm text-neutral-300 opacity-80 font-inter font-semibold">
                        twitter dot com
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <Image
                      className="bg-zinc-900 opacity-50"
                      src="/dali.gif"
                      alt=""
                      draggable="false"
                      width={450}
                      height={425}
                      layout=""
                      objectFit=""
                      priority
                    />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </PlayProvider>
    </div>
  );
}
