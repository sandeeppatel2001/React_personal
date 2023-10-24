import React from "react";
import "./Person.css"; // Import your CSS file
import { useDispatch } from "react-redux";
import { savedataaction } from "../../store";
import { deletmain } from "./sendreq";
const Person = (props) => {
  const dispatch = useDispatch();
  const { name, title, email, education, research, resumeLink, imageSrc } =
    props.data;
  const key = props.index;
  const del = async () => {
    console.log("delete.js runnig", key);
    dispatch(savedataaction.delete(key));
    deletmain(key, "people");
  };
  return (
    <div className="person">
      <div className="image-wrapper">
        <img
          className="person-image"
          src={imageSrc}
          alt={`${name}'s profile`}
        />
      </div>
      <div className="person-details">
        <div style={{ display: "flex" }}>
          <h1
            className="people"
            style={{ paddingRight: "2%", color: "#00ffff" }}
          >
            {name}
          </h1>
          <h3
            style={{
              paddingTop: "1%",
              textDecoration: "underline",
              cursor: "pointer",
              color: "#00ffff",
            }}
            onClick={del}
          >
            Delete
          </h3>
        </div>
        <i style={{ color: "#ff69b4" }}>{title}</i>

        <table>
          <tbody>
            <tr>
              <td>Email:</td>
              <td className="info_left" style={{ color: "red" }}>
                {email}
              </td>
            </tr>
            <tr>
              <td>Education:</td>
              <td className="info_left">{education}</td>
            </tr>
            <tr>
              <td></td>
              <td className="info_left">{<hr></hr>}</td>
            </tr>

            <tr style={{ paddingTop: "200px" }}>
              <td
                style={{
                  width: "20%",
                }}
              >
                Current Research:
              </td>
              {/* <td>
                <hr></hr>
              </td> */}
              <td className="info_left">{research}</td>
            </tr>
            <tr>
              <td>
                <a href={resumeLink}>Resume</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Person;
