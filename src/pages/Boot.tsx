"use client";

import { useState, useEffect } from "react";
import { useInterval } from "~/hooks";
import { FaApple } from "react-icons/fa";

interface BootProps {
  restart: boolean;
  sleep: boolean;
  setBooting: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

const loadingInterval = 1;
const bootingInterval = 500;

export default function Boot({ restart, sleep, setBooting }: BootProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [percent, setPercent] = useState<number>(0);

  useEffect(() => {
    if (restart && !sleep) setLoading(true);
  }, [restart, sleep]);

  useInterval(
    () => {
      const newPercent = percent + 0.15;
      if (newPercent >= 100) {
        setTimeout(() => {
          setBooting(false);
          setLoading(false);
        }, bootingInterval);
      } else setPercent(newPercent);
    },
    loading ? loadingInterval : null
  );

  const handleClick = () => {
    if (sleep) setBooting(false);
    else if (restart || loading) return;
    else setLoading(true);
  };

  return (
    <div className="h-full w-full bg-black flex items-center justify-center" onClick={handleClick}>
      <FaApple className="text-white -mt-4 h-20 w-20 sm:h-24 sm:w-24" />
      {loading && (
        <div
          className="absolute top-1/2 inset-x-0 w-56 h-1 sm:h-1.5 bg-gray-500 rounded overflow-hidden mt-16 sm:mt-24 mx-auto"
        >
          <span
            className="absolute top-0 bg-white h-full rounded-sm"
            style={{
              width: `${percent.toString()}%`
            }}
          />
        </div>
      )}
      {!restart && !loading && (
        <div
          className="absolute top-1/2 inset-x-0 mt-16 sm:mt-20 mx-auto text-sm text-gray-200 text-center"
        >
          Click to {sleep ? "wake up" : "boot"}
        </div>
      )}
    </div>
  );
}
