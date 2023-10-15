import React from "react";
import "./People.css"; // Import your main CSS file
import Person from "./Person"; // Import the Person component

const People = () => {
  return (
    <div className="page">
      <div id="wrapper">
        <div id="content_wrapper">
          <div className="inner">
            <div id="main" className="inner_wrapper">
              <br />
              <Person
                name="Toni Stark"
                title="NANO-MATERIALS LAB Members"
                email="sandeepkrpatel2002@gmail.com"
                education="Ph.D. in Materials Engineering at IIT-Jammu and joined the Nano-materials lab in fall 2022"
                research="Polymer nanomaterials research"
                resumeLink="https://cvowl.com/jammu/cv/builder"
                imageSrc="https://upload.wikimedia.org/wikipedia/en/4/47/Iron_Man_%28circa_2018%29.png"
              />

              <Person
                name="Mr Saurabh Kumar jha"
                title="NANO-MATERIALS LAB Members"
                email="sandeepkrpatel2002@gmail.com"
                education="Ph.D. major in materials engineering at IIT Jammu, M.Tech (2018-2020) from National institute of technology, Jamshedpur in surface science and engineering from department of chemistry"
                research="Polymer nanomaterials research"
                resumeLink="https://cvowl.com/jammu/cv/builder"
                imageSrc="URL_TO_IMAGE2"
              />

              {/* Add more people using the Person component */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;
