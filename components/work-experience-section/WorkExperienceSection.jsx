import Image from 'next/image';
import React from 'react';

const WorkExperienceSection = () => {
  return (
    <div id="experience">
      <div className="flex justify-center text-xl font-bold mt-28 text-color-black">
        Work Experience
      </div>
      <div className="work-experience-section container mx-auto about-me-section shadow-xl ">
        <div className="insitution-image-div ">
          <Image height={150} width={150} src={'/assets/gakk.jpg'} alt="img" />
        </div>
        <div className="details-div">
          <p className="text-xl text-start  ">Software Engineer (Frontend)</p>
          <p className="text-base text-start  ">Gakk Media Ltd</p>

          <ul className="work-experience-section-ul">
            <li>
              <p className="text-md text-start ">
                Implemented new features of{' '}
                <span className="font-bold">Shadhin</span> streaming platform
                which is currently number one audio streaming platform of
                Bangladesh with a huge user base.
              </p>
            </li>
            <li>
              <p className="text-md text-start ">
                Build a reporting management system from scratch for viewing
                various kind of data report and which is used by
                telecommunication clients.
              </p>
            </li>
            <li>
              <p className="text-md text-start ">
                Converted designs from figma to pixel perfect design and made
                them functional for different projects.
              </p>
            </li>
            <li>
              <p className="text-md text-start ">
                Fixed existing bugs and contributed in performance improvement
                of Shadhin.
              </p>
            </li>
            <li>
              <p className="text-md text-start ">
                Refactored old unmaintainable codes to readable, maintainable
                and clean code . Also tried to follow best practices while
                coding any new feature.
              </p>
            </li>
          </ul>
          <div className="mt-5">
            <p className="text-md text-start font-bold ">Reference:</p>
            <p className="text-md text-start ">Kamrul Hasan Ananda</p>
            <p className="text-md text-start ">Frontend team lead (Shadhin) </p>
            <p className="text-md text-start ">
              Mail:{' '}
              <span>
                <a href="mailto:anandasadhinmusic@gmail.com">
                  anandasadhinmusic@gmail.com
                </a>
              </span>
            </p>
          </div>
        </div>
        <div className="duration-div">
          <p className="text-base font-bold text-center">Duration:</p>
          <p className="text-base text-center">Ocotber 2022 - Present</p>
        </div>
      </div>

      <div className="work-experience-section container mx-auto about-me-section shadow-xl p-8">
        <div className="insitution-image-div">
          <div className="bg-slate-400 h-20 w-24 flex justify-center items-center font-bold text-white text-3xl">
            H
          </div>
        </div>
        <div className="details-div">
          <p className="text-xl text-start  ">Software Developer</p>
          <p className="text-base text-start  ">Hashcode</p>

          <ul className="work-experience-section-ul">
            <li>
              <p className="text-md text-start ">
                Developed and maintained web and mobile applications using
                JavaScript, React, React Native and Node.js.
              </p>
            </li>
            <li>
              <p className="text-md text-start ">
                Collaborated with cross-functional teams to design and implement
                new features.
              </p>
            </li>
            <li>
              <p className="text-md text-start ">
                Resolved performance issues for different client products.
              </p>
            </li>
            <li>
              <p className="text-md text-start ">
                Converted figma design to functional components as per project
                requirement.
              </p>
            </li>
          </ul>
          <div className="mt-5">
            <p className="text-md text-start font-bold ">Reference:</p>
            <p className="text-md text-start ">Kamrul Hasan Ananda</p>
            <p className="text-md text-start ">Frontend team lead (Shadhin) </p>
            <p className="text-md text-start ">
              Mail:{' '}
              <span>
                <a href="mailto:anandasadhinmusic@gmail.com">
                  anandasadhinmusic@gmail.com
                </a>
              </span>
            </p>
          </div>
        </div>
        <div className="duration-div">
          <p className="text-base font-bold text-center">Duration:</p>
          <p className="text-base text-center">January 2022 - September 2022</p>
        </div>
      </div>

      <div className="work-experience-section container mx-auto about-me-section shadow-xl">
        <div className="insitution-image-div">
          <Image
            height={150}
            width={150}
            src={'/assets/asthait.jpg'}
            alt="img"
          />
        </div>
        <div className="details-div ">
          <p className="text-xl text-start  ">Software Engineer (Intern)</p>
          <p className="text-base text-start  ">Astha.IT</p>

          <ul className="work-experience-section-ul">
            <li>
              <p className="text-md text-start ">
                I was one of the selected trainees among many fresh graduates
                for having training on different stacks of software development
                by the industry experts.
              </p>
            </li>
            <li>
              <p className="text-md text-start ">
                Build a mini e-commerce project from scratch and on React and
                Next JS training part.
              </p>
            </li>
            <li>
              <p className="text-md text-start ">
                Build a student management console project from scratch and on
                C# training part.
              </p>
            </li>
            <li>
              <p className="text-md text-start ">
                Got training on Javascript , Next JS , C#, Git.
              </p>
            </li>
          </ul>
        </div>
        <div className="duration-div">
          <p className="text-base font-bold text-center">Duration:</p>
          <p className="text-base text-center">July 2021 - October 2021</p>
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceSection;
