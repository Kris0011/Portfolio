import React from "react";

export default function Experience() {
  const experience = [
    
      {
          date: "Jan 2024 - Feb 2024",
          title: "DUHacks 3.0",
          description: "Part of Organizing team of a 3000-participant hybrid hackathon. Developed the duhacks 3.0 website. Presented a Next.js hands-on session to 120+ developers, simplifying concepts."
      },

      {
        date : "Oct 2023 - Nov 2023" ,
        title : "Hacktoberfest 2023",
        description : "Contributed to open source projects . Maintained some repositories under GDSC DDU  and helped beginners in their first PRs."
      },
      {
        date: "Sept 2023 - Present",
        title: "Google Developer Student Club , DDU",
        description: "Led sessions on Open Source and Git-Github for 200+ participants. Organized tech & non-tech events and ensured smooth execution."
    },
  
  
  
  ];

  return (
    <div className="">
      <div id="timeline" className="timeline">


       { experience.map((exp, index) => (
         
         <div className="timeline__item" key={index}>
          <div className="timeline__item-header">
            <button
              className="timeline__arrow"
              type="button"
              id="item1"
              aria-labelledby="item1-name"
              aria-expanded="false"
              aria-controls="item1-ctrld"
              aria-haspopup="true"
              data-item="1"
            >
              <svg
                className="timeline__arrow-icon"
                viewBox="0 0 24 24"
                width="24px"
                height="24px"
              >
                <use href="#arrow" />
              </svg>
            </button>
            <span className="timeline__dot"></span>
            <span id="item1-name" className="timeline__meta">
              <time className="timeline__date" dateTime={exp.date}>
                {exp.date}
              </time>
              <br />
              <h3 className="font-bold text-lg">{exp.title}</h3>
            </span>
          </div>
          <div
            className="timeline__item-body timeline__item-body--expanded"
            id="item1-ctrld"
            role="region"
            aria-labelledby="item1"
            aria-hidden="true"
          >
            <div className="timeline__item-body-content flex">
            <div className='mr-2 mt-1'>
            <svg fill="#ffffff" height="12px" width="12px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"></path> </g></svg>
            </div>
              <p className=" text-sm">
                {exp.description}
              </p>
            </div>
          </div>
        </div>

        ))

       }

          
        


        
      </div>
    </div>
  );
}
