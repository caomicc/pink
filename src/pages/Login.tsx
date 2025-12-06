"use client";

import React, { useState } from "react";
import { wallpapers, user } from "~/configs";
import { useStore, type StoreState } from "~/stores";
import type { MacActions } from "~/types";
import { BsQuestionSquareFill } from "react-icons/bs";
import { CgSleep } from "react-icons/cg";
import { RiRestartLine, RiShutDownLine } from "react-icons/ri";

export default function Login(props: MacActions) {
  const [password, setPassword] = useState("");
  const [sign, setSign] = useState("Click to enter");
  const dark = useStore((state: StoreState) => state.dark);

  const keyPress = (e: React.KeyboardEvent) => {
    const keyCode = e.key;
    if (keyCode === "Enter") loginHandle();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  const loginHandle = () => {
    if (user.password === "" || user.password === password) {
      // not set password or password correct
      props.setLogin(true);
    } else if (password !== "") {
      // password not null and incorrect
      setSign("Incorrect password");
    }
  };

  return (
    <div
      className="h-full w-full login text-center"
      style={{
        background: `url(${
          dark ? wallpapers.night : wallpapers.day
        }) center/cover no-repeat`
      }}
      onClick={() => loginHandle()}
    >
      <div className="inline-block w-auto relative top-1/2 -mt-40">
        {/* Avatar */}
        <img className="rounded-full h-24 w-24 my-0 mx-auto" src={user.avatar} alt="img" />
        <div className="font-semibold mt-2 text-xl text-white">{user.name}</div>

        {/* Password Input */}
        <div className="mx-auto grid grid-cols-5 w-44 h-8 mt-4 rounded-md backdrop-blur-2xl bg-gray-300/50">
          <input
            className="text-sm text-white col-start-1 col-span-4 outline-none bg-transparent px-2"
            type="password"
            placeholder="Enter Password"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={keyPress}
            value={password}
            onChange={handleInputChange}
          />
          <div className="col-start-5 col-span-1 flex items-center justify-center">
            <BsQuestionSquareFill className="text-white ml-1" />
          </div>
        </div>

        <div className="mt-2 cursor-pointer text-sm text-gray-200">
          {sign}
        </div>
      </div>

      {/* buttons */}
      <div className="text-sm fixed bottom-16 inset-x-0 mx-auto flex flex-row space-x-4 w-max">
        <div
          className="flex items-center flex-col text-white w-24 cursor-pointer"
          onClick={(e) => props.sleepMac(e)}
        >
          <div className="flex items-center justify-center h-10 w-10 bg-gray-700 rounded-full">
            <CgSleep className="text-[40px]" />
          </div>
          <span>Sleep</span>
        </div>
        <div
          className="flex items-center flex-col text-white w-24 cursor-pointer"
          onClick={(e) => props.restartMac(e)}
        >
          <div className="flex items-center justify-center h-10 w-10 bg-gray-700 rounded-full">
            <RiRestartLine className="text-4xl" />
          </div>
          <span>Restart</span>
        </div>
        <div
          className="flex items-center flex-col text-white w-24 cursor-pointer"
          onClick={(e) => props.shutMac(e)}
        >
          <div className="flex items-center justify-center h-10 w-10 bg-gray-700 rounded-full">
            <RiShutDownLine className="text-4xl" />
          </div>
          <span>Shut Down</span>
        </div>
      </div>
    </div>
  );
}
