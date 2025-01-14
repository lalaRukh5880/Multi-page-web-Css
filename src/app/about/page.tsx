import React from 'react';

const About = () => {
  return (
    <div>
      <section
        className='about'
        style={{
          backgroundImage: "url(about.png)",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className='about-content'>
          <h2>About Us</h2>
          <p>
            At our flower shop, we offer an exquisite variety of beautifully crafted flower bouquets to suit every occasion. Whether you’re celebrating a birthday, anniversary, or simply want to brighten someone’s day, our stunning arrangements are designed to leave a lasting impression. We pride ourselves on providing reliable delivery services across all areas of Karachi, ensuring your chosen bouquet reaches your loved ones within a day. Experience the joy of gifting fresh, vibrant flowers with our exceptional service and attention to detail.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
