import React, { useEffect } from "react";
import CourseList from "../../components/CourseList";
import { assets } from "../../assets/assets";
import useWindowDimensions from "../../utils/useWindowDimensions";
const Course = () => {
  const courses = [
    {
      thumbnail: assets.IntroToCs,
      courseName: "Intro to CS",
      description: "Learn the basics of computer science and programming.",
      amountUser: 320,
      instrutor: "Chanda",
      tag: "development",
      price: 23,
      category: "Computer Science",
      level: "Beginner",
      rating: 4.5,
    },
    {
      thumbnail: assets.DsIntro,
      courseName: "Introduction to Data Science",
      description: "Explore the fundamentals of data science and analytics.",
      amountUser: 450,
      instrutor: "Makara",
      tag: "data-science",
      price: 30,
      category: "Data Science",
      level: "Beginner",
      rating: 4.8,
    },
    {
      thumbnail: assets.MlIntro,
      courseName: "Machine Learning Basics",
      description:
        "Understand the basics of machine learning and its applications.",
      amountUser: 500,
      instrutor: "Seth",
      tag: "data-science",
      price: 50,
      category: "Data Science",
      level: "Intermediate",
      rating: 4.7,
    },
    {
      thumbnail: assets.AAIntro,
      courseName: "Advanced Algorithms",
      description:
        "Dive deep into advanced algorithms and their implementations.",
      amountUser: 200,
      instrutor: "Ratha",
      tag: "development",
      price: 40,
      category: "Computer Science",
      level: "Advanced",
      rating: 4.6,
    },
    {
      thumbnail: assets.PyDs,
      courseName: "Python for Data Science",
      description:
        "Learn Python programming for data analysis and visualization.",
      amountUser: 600,
      instrutor: "Kakada",
      tag: "data-science",
      price: 35,
      category: "Data Science",
      level: "Intermediate",
      rating: 4.9,
    },
    {
      thumbnail: assets.Word2Vec,
      courseName: "Word2Vec",
      description: "Learn Word2Vec for word embeding",
      amountUser: 600,
      instrutor: "Kakada",
      tag: "data-science",
      price: 35,
      category: "Data Science",
      level: "Intermediate",
      rating: 4.9,
    },
  ];

  return (
    <div className="py-10">
      <div className="flex justify-around md:justify-around">
        <div className="flex flex-col md:flex md:flex-col lg:flex lg:flex-row">
          <p className="font-semibold text-[16px] md:mr-5 underline underline-offset-5">
            All
          </p>
          <p className="font-semibold text-[16px] md:mr-5">Development</p>
          <p className="font-semibold text-[16px] md:mr-5">Data Science</p>
          <p className="font-semibold text-[16px] md:mr-5">Game Development</p>
          <p className="font-semibold text-[16px] md:mr-5">
            Fundemental Of Computer
          </p>
          <p className="font-semibold text-[16px] md:mr-5">UX/UI design</p>
        </div>
        <div className="flex flex-col justify-between md:flex md:flex-col lg:flex lg:flex-row">
          <p className="font-semibold text-[16px] md:mr-5">Paid</p>
          <p className="font-semibold text-[16px] md:mr-5">All level</p>
          <p className="font-semibold text-[16px] md:mr-5">Computer Science</p>
        </div>
      </div>
      <div>
        <div className="my-10">
          <p className="text-[40px] font-bold">Popular Course</p>
        </div>
        <CourseList
          courses={courses}
          filter="rating"
          itemFilter={4.5}
          anotherFilter="tag"
          anotherItemFilter="data-science"
        />
      </div>
      <div>
        <div className="my-10">
          <p className="text-[40px] font-bold">Recommended Course </p>
        </div>
        <CourseList
          courses={courses}
          filter={"category"}
          itemFilter={"Data Science"}
        />
      </div>
    </div>
  );
};

export default Course;
