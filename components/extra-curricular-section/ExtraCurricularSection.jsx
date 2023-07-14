import React from 'react';

const ExtraCurricularSection = () => {
  return (
    <>
      <div id='extra-curricular' className="flex justify-center text-3xl font-bold mt-28 text-color-black">
        Extra Curricular Activities
      </div>
      <div className="work-experience-section container mx-auto about-me-section shadow-xl p-20 skill-section">
        <p className="my-3 slide-in">
          <span className="font-bold">1. Problem solving: </span> &nbsp; Solved
          around 450 problems on various online platforms and contest.Most of
          them are from Codeforces, Hackerrank, Leetcode.
        </p>
        <hr />
        <p className="my-3 slide-in-right ">
          <span className="font-bold">2. Web development instructor: </span>{' '}
          &nbsp; I was a web development instructor of IUT Dev Community.
        </p>
        <hr />
        <p className="my-3 slide-in">
          <span className="font-bold">3. Volunteering: </span> &nbsp;
          Volunteered in ICT Fest 2019 hackathon to make the event successfull.
        </p>
        <hr />
        <p className="my-3 slide-in-right">
          <span className="font-bold">4. Event management: </span> &nbsp;
          Created a football community for my school over 1.5k members and
          arranged BCPSC Football tournament for 2 years.
        </p>
        <hr />
      </div>
    </>
  );
};

export default ExtraCurricularSection;
