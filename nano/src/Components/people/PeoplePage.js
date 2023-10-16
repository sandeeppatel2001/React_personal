import React, { useState } from "react";
import "./People.css"; // Import your main CSS file
import Person from "./Person"; // Import the Person component
import Form from "./Form";
import { useSelector, useDispatch } from "react-redux";
import { savedataaction } from "../../store";
import { havetoshwoaction } from "../../store";
const list = [
  {
    name: "Toni Stark",
    title: "NANO-MATERIALS LAB Members",
    email: "sandeepkrpatel2002@gmail.com",
    education:
      "Ph.D. in Materials Engineering at IIT-Jammu and joined the Nano-materials lab in fall 2022",
    research:
      "Tony Stark has worn multiple different armors in his MCU appearances. For Iron Man, Stan Winston and his company built metal and rubber versions of the armors featured in the film,[70] while Iron Man comic book artist Adi Granov designed the Mark III with illustrator Phil Saunders.[71] Industrial Light & Magic (ILM) created the digital armors in the film,[72] with The Orphanage and The Embassy doing additional work. To help with animating the more refined suits, information was sometimes captured by having Downey wear only the helmet, sleeves and chest of the costume over a motion capture suit.",
    resumeLink: "https://cvowl.com/jammu/cv/builder",
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/en/4/47/Iron_Man_%28circa_2018%29.png",
  },
  {
    name: "Toni Stark2",
    title: "NANO-MATERIALS LAB Members",
    email: "sandeepkrpatel2002@gmail.com",
    education:
      "Ph.D. in Materials Engineering at IIT-Jammu and joined the Nano-materials lab in fall 2022",
    research:
      "Tony Stark has worn multiple different armors in his MCU appearances. For Iron Man, Stan Winston and his company built metal and rubber versions of the armors featured in the film,[70] while Iron Man comic book artist Adi Granov designed the Mark III with illustrator Phil Saunders.[71] Industrial Light & Magic (ILM) created the digital armors in the film,[72] with The Orphanage and The Embassy doing additional work. To help with animating the more refined suits, information was sometimes captured by having Downey wear only the helmet, sleeves and chest of the costume over a motion capture suit.",

    resumeLink: "https://cvowl.com/jammu/cv/builder",
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/en/4/47/Iron_Man_%28circa_2018%29.png",
  },
];
const People = () => {
  const [Isshow, setIsshow] = useState(false);
  const dispatch = useDispatch();
  const flist = useSelector((state) => state.counter.formlist);
  const show = useSelector((state) => state.havetoshow.show);
  console.log("sssss", flist);
  // const formfun = (e) => {
  //   e.preventdefault();
  //   console.log(e);
  //   setIsshow(0);
  // };
  const butfun = (e) => {
    setIsshow(1);
    dispatch(havetoshwoaction.revrertfun());
  };
  return (
    <div className="page">
      <div className="m">
        {show && <button onClick={butfun}>Add New Member</button>}
        {!show && <Form></Form>}
      </div>
      <div id="wrapper">
        <div id="content_wrapper">
          <div className="inner">
            <div id="main" className="inner_wrapper">
              <br />
              {flist.map((e, i) => {
                console.log("people.js", i);
                return <Person data={e} key={i} index={i}></Person>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;
