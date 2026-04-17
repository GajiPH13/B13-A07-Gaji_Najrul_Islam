import React from "react";
import FooterLogo from "../../assets/logo-xl.png";
import Instagram from "../../assets/instagram.png";
import FaceBook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";

const footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-[#244D3F]  p-10">
      <aside>
        <img src={FooterLogo} alt="" />
        <p className="font-regular text-[16px] text-white">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
      </aside>
      <nav >
        <p className="font-medium text-white">Social Links</p>
        <div className="grid grid-flow-col gap-4 ">
          <a>
            <img src={Instagram} alt="Linkedin" />
          </a>
          <a>
            <img src={FaceBook} alt="facebook" />
          </a>
          <a >
            <img src={twitter} alt="X" />
          </a>
        </div>
      </nav>
      
      <div className="flex justify-between sm:gap-50 md:gap-120 border-t border-zinc-30 opacity-25 pt-5">
        <div>
            <p className="text-[#FAFAFA] text-[10px] ">Copyright © {new Date().getFullYear()} - All right reserved</p>
        </div>
        <div className="flex gap-4 ">                      
            <p className="text-[#F8FAFC] text-[10px]">Privacy Policy</p>
            <p className="text-[#F8FAFC] text-[10px]">Terms of Service</p>
            <p className="text-[#F8FAFC] text-[10px]">Cookies</p>
        </div>
      </div>
    </footer>
  );
};

export default footer;
