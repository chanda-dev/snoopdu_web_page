import React from "react";
import { assets } from "../../assets/assets";
import TextButton from "../../components/TextButton";
import { useState } from "react";
const Founder = () => {
  const [isReadMore, setIsReadMore] = useState(false);
  const handleReadMore = () => {
    if (isReadMore == false) {
      setIsReadMore(true);
    } else {
      setIsReadMore(false);
    }
  };

  return (
    <div>
      <div>
        <p className="text-[40px] font-bold">Message from the founder</p>
      </div>
      <div className="mt-16 flex">
        <img
          src={assets.Founder}
          alt=""
          className=" rounded-[50%] w-[290px] h-[290px] mr-10"
        />
        <div>
          <p className="text-[25px] font-semibold mb-[20px]">
            Chansocheata Poum
          </p>
          <p className="text-[20px] mb-[30px]">
            Thank you for visiting Snoopedu,
          </p>

          {isReadMore ? (
            <div>
              <p className="text-[20px] mb-[20px]">
                Our purpose is to make Snoopdu a community for those who
                dedicate their love for Science, Technology, Engineering, Art,
                and Mathematics with diverse experiences to improve learning
                experience for young people who want to explore, learn and
                create things that make an impact in the world through these
                subjects. We enjoy and value relationships with like-minded
                people throughout the innovation and education community and we
                find deep satisfaction in seeing our programs being of service
                to schools, educators, and parents who are involved in a child’s
                education.
              </p>

              <p className="text-[20px] mb-[20px]">
                Our purpose is to make Snoopdu a community for those who
                dedicate their love for Science, Technology, Engineering, Art,
                and Mathematics with diverse experiences to improve learning
                experience for young people who want to explore, learn and
                create things that make an impact in the world through these
                subjects. We enjoy and value relationships with like-minded
                people throughout the innovation and education community and we
                find deep satisfaction in seeing our programs being of service
                to schools, educators, and parents who are involved in a child’s
                education.
              </p>
              <p className="text-[20px] mb-[20px]">
                We began with a broad idea of using technology to solve the
                problem of equitable access to quality education. However, as
                soon as we took the first step with our product design on a
                virtual learning environment, we knew that we actually had many
                unvalidated assumptions. Education product is very complex and
                has so many factors involved that we need to learn so much to
                prove the concept. Then we decided not to go forward with our
                product route.
              </p>
              <p className="text-[20px] mb-[20px]">
                Just like other startup stories, we have the PIVOT story. We
                went back to the fundamentals – what drove us to start thinking
                of an education company in the first place? Fundamentally, we
                want to make the learning experience fun for young people to
                foster lifelong learning and building skills in problem-solving,
                computational thinking, and collaboration which are the key
                skills for the 21st century. But how? The answer for us at that
                time was to get into the classroom with the students as soon as
                possible. After lots of hustl, we got our first school partner
                to sign us to run a coding program for their students. We
                designed our first program and trained our first three
                facilitators. Throughout the course of our pilot program, we got
                students texting us on weekends to help them with their code.
                Then we got feedback from parents saying “thank you” to us and
                requesting us to “keep going”. That is when we know we’re on the
                right track.
              </p>
              <p className="text-[20px] mb-[20px]">
                One year later, we had three programs and a web application of a
                learning portal to assist with our teaching, a sister non-profit
                initiative, WESTEAM Cambodia with a mission to bring our
                learning experiences to students in the rural area of Cambodia.
                This is completely different from what we had in mind when we
                first started. We are proud and happy with the community and
                product we have built.
              </p>
              <p className="text-[20px] mb-[20px]">
                Our mission is nowhere near accomplished. It is not just about
                why Snoopedu exists, whom we serve or what we do, but also how
                we do it that distinguishes us. The structural change in
                education to make learning a lifelong journey by making learning
                a fun, collaborative, creative, and empowering experience for
                every student is the main pillar to achieving sustainable
                development. However, we believe a major big dream still starts
                with the mini but impactful first step, in our context, we
                started with one classroom at a time.
              </p>
              <p className="text-[20px] mb-[20px]">
                We are grateful to many school partners, technology partners,
                industry partners, and technology practitioners who have worked
                with us on this journey. We are fortunate to work with many
                individuals who share the same belief that a better world starts
                with a better classroom. Thank you for your support.
              </p>
              <p className="text-[20px] mb-[20px]">
                We look forward to building new relationships and working with
                new schools, industry partners, and organizations, in the years
                ahead.
              </p>
              <p className="text-[20px]">Sincerely,</p>
              <p className="text-[20px] mb-[20px]">Socheata</p>

              <TextButton text={"Read less"} onClick={handleReadMore} />
            </div>
          ) : (
            <div>
              <p className="text-[20px] mb-[20px]">
                Our purpose is to make Snoopdu a community for those who
                dedicate their love for Science, Technology, Engineering, Art,
                and Mathematics with diverse experiences to improve learning
                experience for young people who want to
              </p>
              <TextButton text={"Read more"} onClick={handleReadMore} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Founder;
