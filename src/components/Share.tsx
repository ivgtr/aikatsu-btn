import React, { useEffect, useState } from "react";
import { TwitterIcon, TwitterShareButton } from "react-share";
import type { Kakugen } from "../types/kakugen";

type Props = { kakugen: Kakugen[] };

const Share: React.FC<Props> = ({ kakugen }) => {
  const [shareTitle, setShareTitle] = useState<string>("");
  const randomTitle = () => {
    const { title, id } = kakugen[Math.floor(Math.random() * kakugen.length)];
    setShareTitle(`今週のアイカツ格言！\n${id}話 ${title}`);
  };
  useEffect(() => {
    randomTitle();
  }, []);
  return (
    <nav className="fixed right-4 bottom-4">
      <ul>
        <li className="flex flex-col items-center">
          <span className="text-xs">共有する</span>
          <TwitterShareButton
            url="https://aikatsu.odayaka.work/"
            title={shareTitle}
            onClick={() => randomTitle()}
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>
        </li>
      </ul>
    </nav>
  );
};

export default Share;
