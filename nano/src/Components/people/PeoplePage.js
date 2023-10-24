import React, { useState, useEffect } from "react";
import "./People.css"; // Import your main CSS file
import Person from "./Person"; // Import the Person component
import Form from "./Form";
import { useSelector, useDispatch } from "react-redux";
import { savedataaction } from "../../store";
import { havetoshwoaction } from "../../store";
import { submitDataToBackend } from "./sendreq";
import "./button.css";
const People = () => {
  const [Isshow, setIsshow] = useState(false);

  const dispatch = useDispatch();
  const flist = useSelector((state) => state.counter.formlist);
  const show = useSelector((state) => state.havetoshow.show);
  console.log("sssss", flist);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await submitDataToBackend("", "people", "GET");
        // Assuming data is an array, set it in your flist
        dispatch(savedataaction.adddata(data));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const butfun = (e) => {
    setIsshow(1);
    dispatch(havetoshwoaction.revrertfun());
  };
  return (
    <div className="page">
      <div className="m">
        {show && (
          <button
            className="btn three"
            style={{
              backgroundColor: "#ff69b4",
            }}
            onClick={butfun}
          >
            ➕Add New Member
          </button>
        )}
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
