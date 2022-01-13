import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import type { Kakugen } from "../types/kakugen";
import { audioState } from "../utils/play";

type Props = { kakugen: Kakugen[] };

const Control: React.FC<Props> = ({ kakugen }) => {
  const [audio, setAudio] = useRecoilState(audioState);

  useEffect(() => {}, [audio]);

  const randomPlay = () => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    const { link } = kakugen[Math.floor(Math.random() * kakugen.length)];
    const tmp = new Audio(link);
    setAudio(tmp);
    tmp.play();
  };

  return (
    <div className="fixed right-4 top-4">
      <button
        onClick={randomPlay}
        className="m-1 cursor-pointer text-xs px-2 py-1 bg-yellow-400 text-white font-semibold rounded hover:bg-yellow-500"
      >
        ランダム再生
      </button>
      <button
        onClick={() => {
          if (!audio) return;
          audio.pause();
          audio.currentTime = 0;
        }}
        className="m-1 cursor-pointer text-xs px-2 py-1 bg-red-400 text-white font-semibold rounded hover:bg-red-500"
      >
        停止
      </button>
    </div>
  );
};

export default Control;
