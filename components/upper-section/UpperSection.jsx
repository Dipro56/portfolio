import React from 'react';
import Navbar from '../navbar/Navbar';
import Image from 'next/image';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

const UpperSection = () => {
  return (
    <div className="upper-section-bg">
      <Navbar />
      <div className="profile-image-section ">
        <Image
          className="border-radius"
          height={200}
          width={200}
          src={'/assets/me.jpg'}
          alt='img'
        />
      </div>
      <div className="name-profession-section">
        <p className="text-3xl xl:text-5xllg:text-5xl md:text-4xl sm:text-4xl font-semibold">
          Sadat Shahriar Bari
        </p>
      </div>
      <div className="name-profession-section">
        <p className="lg:text-2xl sm:text-xl font-semibold">
          Software Engineer | Learner
        </p>
      </div>

      <div className="button-div">
        <Link href="/Sadat_Shahriar__CV.pdf" target="_blank">
          <button className="cv-button text-md mr-2">View CV</button>
        </Link>

        <Link href="/Sadat_Shahriar__CV.pdf" target="_blank" download>
          <button className="cv-button text-md ml-2">Download CV</button>
        </Link>
      </div>

      <div className="round-button-div">
        <Link href={'https://web.facebook.com/shahriar.dipro'} target="_blank">
          <button className="round-button">
            <FaFacebookF className="custom-icon-size" />
          </button>
        </Link>
        <Link
          href={'https://www.linkedin.com/in/sadat-shahriar-bari/'}
          target="_blank"
        >
          <button className="round-button">
            <FaLinkedinIn className="custom-icon-size" />
          </button>
        </Link>

        <Link href={'https://github.com/Dipro56'} target="_blank">
          <button className="round-button">
            <FaGithub className="custom-icon-size" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UpperSection;
