import Image from "next/image";
import React from "react";

const Ad: React.FC = () => {
  return (
    <>
      <h2 className="mt-4">
        毎週日曜あさ7時大好評放送中！{" "}
        <a
          href="http://www.aikatsu.net/"
          target="_brank"
          className="inline-block cursor-pointer text-blue-400 underline"
        >
          アイカツプラネット！
        </a>
      </h2>
      <div className="max-w-md m-2">
        <Image
          src="/planet.jpg"
          alt="アイカツプラネット！"
          width={960}
          height={540}
          objectFit="contain"
        />
      </div>
    </>
  );
};

export default Ad;
