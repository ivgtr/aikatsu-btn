import React from "react";
import { useRecoilState } from "recoil";
import type { Kakugen } from "../types/kakugen";
import { audioState } from "../utils/play";

type props = {
  kakugen: Kakugen;
};

const Button: React.FC<props> = ({ kakugen }) => {
  const [audio, setAudio] = useRecoilState(audioState);

  const play = (link: string) => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    const tmp = new Audio(link);
    setAudio(tmp);
    tmp.play();
  };

  return (
    <button
      onClick={() => {
        play(kakugen.link);
      }}
      className="btn m-1 cursor-pointer"
    >{`${kakugen.id} ${kakugen.title}`}</button>
  );
};

export default Button;
