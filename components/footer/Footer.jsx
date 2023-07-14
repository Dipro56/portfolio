import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [year, setYear] = useState();

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  useEffect(() => {});
  return (
    <div className="footer mt-28 py-10">
      <p className='text-2xl'>&copy;Sadat Shahriar Bari {currentYear}</p>
    </div>
  );
};

export default Footer;
