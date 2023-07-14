import Image from 'next/image';
import React from 'react';

const WorkExperienceSection = () => {
  return (
    <div id='experience'>
      <div  className="flex justify-center text-3xl font-bold mt-28 text-color-black">
        Work Experience
      </div>
      <div  className="work-experience-section container mx-auto about-me-section shadow-xl ">
        <div className="insitution-image-div  slide-in">
          <Image height={150} width={150} src={'/assets/gakk.jpg'} alt='img' />
        </div>
        <div className="details-div  slide-in-right">
          <p className="text-3xl text-start ">Software Engineer (Frontend)</p>
          <p className="text-xl text-start ">Gakk Media Ltd</p>

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
              Mail: <span><a href='mailto:anandasadhinmusic@gmail.com'>anandasadhinmusic@gmail.com</a></span>
            </p>
          </div>
        </div>
        <div className="duration-div">
          <p className="text-xl font-bold text-center">Duration:</p>
          <p className="text-xl text-center">Ocotber 2022 - Present</p>
        </div>
      </div>

      <div className="work-experience-section container mx-auto about-me-section shadow-xl">
        <div className="insitution-image-div  slide-in ">
          <Image height={150} width={150} src={'/assets/asthait.jpg'} alt='img' />
        </div>
        <div className="details-div  slide-in-right">
          <p className="text-3xl text-start ">Software Engineer (Intern)</p>
          <p className="text-xl text-start ">Astha.IT</p>

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
          <p className="text-xl font-bold text-center">Duration:</p>
          <p className="text-xl text-center">July 2022 - September 2022</p>
        </div>
      </div>

      <div className="work-experience-section container mx-auto about-me-section shadow-xl">
        <div className="insitution-image-div  slide-in">
          <Image height={150} width={150} src={'/assets/ionnolytic.jpg'} alt='img' />
        </div>
        <div className="details-div ">
          <p className="text-3xl text-start ">Software Engineer (Intern)</p>
          <p className="text-xl text-start ">Innolytic.IT</p>

          <ul className="work-experience-section-ul">
            <li>
              <p className="text-md text-start ">
                It was my academic intership during undergrade.
              </p>
            </li>
            <li>
              <p className="text-md text-start ">
                Worked here as a flutter developer and worked in there client
                project Qurom.
              </p>
            </li>
            <li>
              <p className="text-md text-start ">
                Build the whole project from scratch as per desgin.
              </p>
            </li>
            <li>
              <p className="text-md text-start ">
                Refactored and fixed bug of the project.
              </p>
            </li>
            <li>
              <p className="text-md text-start ">
                Got training on Flutter, Dart, Version Control.
              </p>
            </li>
          </ul>
          <div className="mt-5">
            <p className="text-md text-start font-bold ">Reference:</p>
            <p className="text-md text-start ">S M Mahmudul Hasan</p>
            <p className="text-md text-start ">Chairman</p>
            <p className="text-md text-start ">
              Mail: <span><a href='mailto:shohan.cse.sust@gmail.com'>shohan.cse.sust@gmail.com</a></span>
            </p>
          </div>
        </div>
        <div className="duration-div  slide-in-right">
          <p className="text-xl font-bold text-center">Duration:</p>
          <p className="text-xl text-center">February 2021 - June 2022</p>
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceSection;