import React, { useState, useEffect } from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  PieChart,
  Pie,
} from "recharts";
import useWindowDimensions from "../../utils/useWindowDimensions";
import CourseList from "../../components/CourseList";
import { assets } from "../../assets/assets";
const Dashboard = () => {
  const { width } = useWindowDimensions();
  const [barWidth, setBarWidth] = useState(400);
  useEffect(() => {
    if (width < 368) {
      setBarWidth(200);
    } else if (width < 768) {
      setBarWidth(500);
    } else if (width < 1024) {
      setBarWidth(600);
    } else {
      setBarWidth(728);
    }
  }, [width]);
  const data = [
    {
      name: "Sun",
      Hour: 16,
    },
    {
      name: "Mon",
      Hour: 10,
    },
    {
      name: "Tues",
      Hour: 0,
    },
    {
      name: "Wed",
      Hour: 5,
    },
    {
      name: "Thu",
      Hour: 20,
    },
    {
      name: "Fri",
      Hour: 9,
    },
    {
      name: "Sat",
      Hour: 4,
    },
  ];
  const courses = [
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

  const highest = Math.max(...data.map((item) => item.Hour));
  const lowest = Math.min(...data.map((item) => item.Hour));
  return (
    <div className="p-[5%] md:pt-[10%]">
      <div>
        <p className="font-bold text-[40px] mb-10">
          Hello Chanda, Check your progress hah!
        </p>
      </div>
      <div className="flex flex-col justify-around max-md:flex max-md:flex-col lg-flex lg:flex-row">
        <div>
          <BarChart width={barWidth} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Hour" fill="#30BA96" />
          </BarChart>
          <div className="text-primary">
            The higest duration for this week:{highest}h
          </div>
          <div className="text-red-500">
            The lowest duration for this week:{lowest}h
          </div>
        </div>
        <div className="w-[350px] h-[300px] border-primary border flex p-5">
          <div>
            <p className="text-[16px] font-bold mb-10">Courses in process</p>
            <div className="relative w-50 h-50">
              <svg className="w-full h-full" viewBox="0 0 36 36">
                <circle
                  cx="18"
                  cy="18"
                  r="15.9155"
                  fill="none"
                  stroke="#E5E7EB"
                  strokeWidth="4"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="15.9155"
                  fill="none"
                  stroke="#F59E0B"
                  strokeWidth="4"
                  strokeDasharray="30 100"
                  strokeLinecap="round"
                  transform="rotate(-90 18 18)"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-gray-800 font-semibold">
                {30}%
              </span>
            </div>
          </div>
          <div>
            <div className="flex w-full ">
              <div className="text-[#F59E0B] text-[40px]">.</div>
              <div className="mt-7">Course processing</div>
            </div>
            <div className="flex w-full ">
              <div className="text-secondary text-[40px]">.</div>
              <div className="mt-7">Total Course 3/5</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-[40px] font-bold mt-10">Your Course</p>
        <CourseList courses={courses} />
      </div>
    </div>
  );
};

export default Dashboard;
