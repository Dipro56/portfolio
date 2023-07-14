import React from 'react';

const AboutMeSection = () => {
  return (
    <div id='about' className="container mx-auto about-me-section shadow-xl slide-in-right text-color-black">
      <div className="about-me-div">
        <p className="text-3xl font-bold text-color-black">About me</p>
        <p className="text-xl mt-8 font-normal">
          I am always enthusiastic about learning new things. I always try to
          follow the best programming practices and provide a stable solution
          for any problem that i solve. Currently working as a Software Engineer
          (Front-end). Areas of my expertise are web and mobile application
          development with framework related to Javascript specially Next.js,
          React native framework and React library.
          <br />
          <br />
          Apart from this you are always welcome to poke me on having
          conversation about football, cricket and music.
        </p>
      </div>
      <div className="basic-info-div">
        <p className="text-3xl font-bold ">Basic Information</p>
        <div className="work-experience-section container mx-auto about-me-section skill-section">
          <p className="my-3 text-xl">
            <span className="font-bold text-xl">Date of birth: </span> &nbsp;
            August 21, 1996.
          </p>
          <hr />
          <p className="my-3  text-xl">
            <span className="font-bold text-xl">Phone: </span> &nbsp;
            +8801717680510
          </p>
          <hr />
          <p className="my-3 text-xl">
            <span className="font-bold text-xl">Email: </span> &nbsp;
            <a href='mailto:sadatshahriarbari@gmail.com'>sadatshahriarbari@gmail.com</a>
          </p>
          <hr />
          <p className="my-3 text-xl">
            <span className="font-bold text-xl">Address: </span> &nbsp; Dhaka
            Bashundhara Block C Road 4 House 127 6-A.
          </p>
          <hr />
          <p className="my-3 text-xl">
            <span className="font-bold text-xl">Blood group: </span> &nbsp; B+
          </p>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
