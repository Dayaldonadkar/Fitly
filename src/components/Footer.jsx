import React from "react";

const Footer = () => {
  return (
    <footer className="pt-10 bg-[#EEEEEE] dark:bg-[#18122B] dark:text-white">
      <main className="grid md:grid-cols-3 px-4 max_width">
        {/* logoSide section  */}
        <section className="sm:max-w-[10rem] space-y-3">
          <div className="flex items-center">
            <div className="h-[3rem]">
              <img src="/favicon.ico" alt="Logo_Image" />
            </div>
            <h1 className="font-bold text-4xl text-yellow_text ml-3 dark:text-[#E94560]">
              Fitly
            </h1>
          </div>
          <p>
            We have a mission to make people around the world better through a
            healthier diet
          </p>
        </section>

        {/* Links section  */}
        <section className="footer grid grid-cols-2 md:grid-cols-4 md:col-span-2">
          <div>
            <h1 className="">About</h1>
            <ul>
              <li>About Us</li>
              <li>Features</li>
              <li>News & Blog</li>
            </ul>
          </div>
          <div>
            <h1>Movement</h1>
            <ul>
              <li>What Eatly</li>
              <li>Support Us</li>
            </ul>
          </div>
          <div>
            <h1>Company</h1>
            <ul>
              <li>Why Eatly</li>
              <li>Capital</li>
              <li>Security</li>
            </ul>
          </div>
          <div>
            <h1>Support</h1>
            <ul>
              <li>FAQs</li>
              <li>Support Center</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </section>
      </main>
      <section className="max_width flex flex-col sm:flex-row justify-between items-center gap-1 px-4 py-8 text-sm">
        <div>@2023 Fitly. All rights reserved</div>
        <div className="flex space-x-4">
          <span>Terms & Agreements</span>
          <span>Privacy Policy</span>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
