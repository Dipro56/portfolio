import React from 'react';

const SkillSection = () => {
  
  return (
    <>
      <div id='skills' className="flex  justify-center text-3xl font-bold mt-28 text-color-black">Skills</div>
      <div className="work-experience-section container mx-auto about-me-section shadow-xl p-20 skill-section slide-in">
        <div className="">
          <p className="text-start text-2xl font-bold my-2">
            Programming Language:{' '}
            <span className="text-xl font-normal">
              &nbsp; Javascript, Typescript, C++.
            </span>
          </p>
        </div>
        <div className="">
          <p className="text-start text-2xl font-bold my-2">
            Frontend Technology:{' '}
            <span className="text-xl font-normal">
              &nbsp; React JS, Next JS, Redux, HTML, CSS, Tailwind, Bootstrap.
            </span>
          </p>

          <p className="text-start text-2xl font-bold my-2">
            Backend Technology:{' '}
            <span className="text-xl font-normal">
              &nbsp; Node JS, Express JS, MongoDB.
            </span>
          </p>

          <p className="text-start text-2xl font-bold my-2">
            Application Development:{' '}
            <span className="text-xl font-normal">&nbsp; React Native</span>
          </p>

          <p className="text-start text-2xl font-bold my-2">
            Tools:{' '}
            <span className="text-xl font-normal">
              &nbsp; Github, Gitlab, Trello, Latex, VS Code.
            </span>
          </p>

          <p className="text-start text-2xl font-bold my-2">
            Also worked with:{' '}
            <span className="text-xl font-normal">
              &nbsp; C#, Dart, Flutter, Figma.
            </span>
          </p>

          <p className="text-start text-2xl font-bold my-2">
            Soft Skills:{' '}
            <span className="text-xl font-normal">
              &nbsp; Teamwork, Communicatoin, Problem Solving.
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default SkillSection;
