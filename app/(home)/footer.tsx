import React from "react";
import { Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
    return (
    <div className="pb-6">
      <div className="container">
        <div className="bg-primary w-full min-h-fit sm:rounded-[46px] rounded-[20px] max-sm:px-8 p-5 flex items-center max-lg:flex-col-reverse justify-between gap-4 relative overflow-clip isolate">
          <div className="flex-1 w-full flex flex-col items-center justify-between gap-y-3 min-[550px]:ps-5">
              <div className="text-white">
                <div className="flex items-center justify-center flex-col gap-4 my-2">
                  <h4 className="font-SatoshiBold xl:text-5xl lg:text-4xl md:text-5xl text-4xl max-[550px]:text-3xl max-[450px]:text-2xl text-center cursor-pointer">
                    Let's Work Together
                  </h4>
                  <h5 className="text-center">
                    Ready to optimize your operations? Get in touch today.
                  </h5>
                </div>
              <h4 className="font-SatoshiBold xl:text-5xl lg:text-4xl md:text-5xl text-4xl max-[550px]:text-3xl max-[450px]:text-2xl cursor-pointer mt-5">
                <a  >waris.mariam@outlook.com</a>
              </h4>
              <div className="flex items-center justify-center gap-4 mt-2">
                <div className="flex items-center gap-2">
                    <a href="http://wa.me/+971525850238"><Phone className="text-white" /></a>
                    <a href="tel:+971525850238">
                      <span className="text-white">+971 52 585 0238</span>
                    </a>
                </div>
                <a href="https://www.linkedin.com/in/mariam-waris" className="flex items-center gap-2">
                    <Linkedin className="text-white" />
                </a>
                <a href="mailto:murriam05@gmail.com" className="flex items-center gap-2">
                    <Mail className="text-white" />
                </a>
              </div>
              </div>
              <hr className="bg-white w-full" />
            <p className="font-medium text-white text-[17px] max-[450px]:text-sm max-lg:mt-5 max-sm:text-center">
              @techassure. All right reserved | Built by <a href="https://abdullahsajid.me" target="_blank" className="underline">Abdullah Sajid</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
