import Image from 'next/image';
import React from 'react';

const EducationSection = () => {
  return (
    <>
      <div id='education' className='flex justify-center text-3xl font-bold text-color-black'>Academic Background</div>
      <div className="education-section container mx-auto about-me-section shadow-xl">
        <div className="session-dev slide-in">
          <p className="text-2xl text-center">2018-2022</p>
          <p className="text-3xl font-semibold text-center mt-2">
            Bachelor&apos;s Degree
          </p>
        </div>
        <div className="details-dev slide-in">
          <p className="text-3xl text-start ">
            Bachelor of Science in Software Engineering
          </p>
          <p className="text-xl text-start ">
            Department of Computer Scienece & Engineering , Islamic University
            Of Technology (IUT)
          </p>

          <ul className="education-section-ul">
            <li>
              <p className="text-md text-start ">CGPA 3.25 /4.00</p>
            </li>
            <li>
              <p className="text-md text-start ">
                CGPA 3.49 /4.00 in Final 2 year
              </p>
            </li>
          </ul>
        </div>
        <div className="insitution-image-div ">
          <Image height={150} width={150} src={'/assets/IUT.png'} alt='img' />
        </div>
      </div>

      <div className="education-section container mx-auto about-me-section shadow-xl ">
        <div className="session-dev slide-in">
          <p className="text-2xl text-center">2014-2016</p>
          <p className="text-3xl font-semibold text-center mt-2">
            Higher Secondary
          </p>
        </div>
        <div className="details-dev slide-in">
          <p className="text-3xl text-start ">
            Higher-Secondary School Certificate (HSC)
          </p>
          <p className="text-xl text-start ">
            Government Azizul Haque College , Bogura
          </p>

          <ul className="education-section-ul">
            <li>
              <p className="text-md text-start ">Group: Science</p>
            </li>
            <li>
              <p className="text-md text-start ">GPA 5.00 /5.00</p>
            </li>
          </ul>
        </div>
        <div className="insitution-image-div">
          <Image height={150} width={150} src={'/assets/ahc.jpg'} alt='img' />
        </div>
      </div>

      <div className="education-section container mx-auto about-me-section shadow-xl">
        <div className="session-dev slide-in">
          <p className="text-2xl text-center">2012-2014</p>
          <p className="text-3xl font-semibold text-center mt-2">Secondary</p>
        </div>
        <div className="details-dev slide-in">
          <p className="text-3xl text-start ">
            Secondary School Certificate (SSC)
          </p>
          <p className="text-xl text-start ">
            Bogura Cantonment Public School & College , Bogura
          </p>

          <ul className="education-section-ul">
            <li>
              <p className="text-md text-start ">Group: Science</p>
            </li>
            <li>
              <p className="text-md text-start ">GPA 5.00 /5.00</p>
            </li>
          </ul>
        </div>
        <div className="insitution-image-div">
          <Image height={150} width={150} src={'/assets/bcpsc.png'} alt='img' />
        </div>
      </div>
    </>
  );
};

export default EducationSection;