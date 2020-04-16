import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart04";
import instruction from "./instruction.md";

const convertData = (input) => {
  const species = Array.from(new Set(input.map(({species}) => species)));
  //inputのspeciesをspecies:○○という形で重複なく配列にするためSetとArray.form
  return species.map((species) =>{//出来た配列をmapしていく
    return{
      id: species,//花の名前
      data: input
        .filter((item) => item.species === species)
        //inputの花の名前が配列speciesと同じのをfilter
        .map(({sepalLength: x, petalWidth: y })=>({x,y})),
        //その要素のsepalLegthをx,同様にyとする。そしてそれを{x,y}としてオブジェクトに
      };
     }); // ここを作りましょう！
};

const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer04"
      dataUrl="data/iris.json"
      convertData={convertData}
      instruction={instruction}
      title="Lesson 04"
      Chart={Chart}
    />
  );
};

export default Lesson;
