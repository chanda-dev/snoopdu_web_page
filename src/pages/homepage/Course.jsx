import React from "react";
import CourseList from "../../components/CourseList";
import { assets } from "../../assets/assets";
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
    <div className="py-10 px-[5%]">
      <div className="flex">
        <div className="flex justify-between w-[50%]">
          <p className="font-semibold text-[16px] underline underline-offset-5">
            All
          </p>
          <p className="font-semibold text-[16px]">Development</p>
          <p className="font-semibold text-[16px]">Data Science</p>
          <p className="font-semibold text-[16px]">Game Development</p>
          <p className="font-semibold text-[16px]">Fundemental Of Computer</p>
          <p className="font-semibold text-[16px]">UX/UI design</p>
        </div>
        <div className=" flex justify-between w-[20%] ml-[30%]">
          <p className="font-semibold text-[16px]">Paid</p>
          <p className="font-semibold text-[16px]">All level</p>
          <p className="font-semibold text-[16px]">Computer Science</p>
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
