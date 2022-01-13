import * as fs from "fs";
import { InferGetStaticPropsType, NextPage } from "next";
import * as path from "path";
import React from "react";
import { Timeline } from "react-twitter-widgets";
import Ad from "../components/Ad";
import Button from "../components/Button";
import Control from "../components/Control";
import Share from "../components/Share";
import { Kakugen } from "../types/kakugen";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Home: NextPage<Props> = ({ kakugen }) => {
  return (
    <>
      <Control kakugen={kakugen} />

      <div className="container mx-auto px-2">
        <h1 className="text-center mt-12 text-2xl font-bold">アイカツ格言ボタン！</h1>
        <Ad />
        <article>
          <section className="my-8">
            <h2 className="text-lg">1st Season</h2>
            {kakugen
              .filter((item) => {
                return String(item.season) === "1";
              })
              .map((item, index) => {
                return <Button key={`s1${index}`} kakugen={item} />;
              })}
          </section>
          <section className="my-8">
            <h2 className="text-lg">2nd Season</h2>
            {kakugen
              .filter((item) => {
                return String(item.season) === "2";
              })
              .map((item, index) => {
                return <Button key={`s2${index}`} kakugen={item} />;
              })}
          </section>
          <section className="my-8">
            <h2 className="text-lg">3rd Season</h2>
            {kakugen
              .filter((item) => {
                return String(item.season) === "3";
              })
              .map((item, index) => {
                return <Button key={`s3${index}`} kakugen={item} />;
              })}
          </section>
        </article>

        <div className="max-w-xs m-2">
          <Timeline
            dataSource={{
              sourceType: "profile",
              screenName: "aikatsu_anime",
            }}
            options={{
              height: "400",
            }}
          />
        </div>

        <Share kakugen={kakugen} />
      </div>
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const jsonPath = path.join(process.cwd(), "src", "assets", "kakugen.json");
  const jsonText = fs.readFileSync(jsonPath, "utf-8");
  const kakugen = JSON.parse(jsonText) as Kakugen[];

  return {
    props: { kakugen },
  };
};
