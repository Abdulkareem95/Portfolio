"use client";

import React from "react";

import { companies, testimonials } from "@/Data";


const Skills = () => {
  return (
    <div className="py-20" id="skills">

      <h1 className="heading">
        My
        <span className="text-purple"> Skills</span>
      </h1>

     

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-52 gap-2">
                <img
                  src={company.img}
                  alt={company.name}
                  className=" md:w-15 w-20 "
                />
                {/* <img
                  src={company.nameImg}
                  alt={company.name}
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
                  className="md:w-24 w-20"
                /> */}
              </div>
            </React.Fragment>
          ))}
        </div>
        
      </div>
   
  );
};

export default Skills;