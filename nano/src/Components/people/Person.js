import React from "react";
import "./Person.css"; // Import your CSS file
import { useDispatch } from "react-redux";
import { savedataaction } from "../../store";
const Person = (props) => {
  const dispatch = useDispatch();
  const { name, title, email, education, research, resumeLink, imageSrc } =
    props.data;
  const key = props.index;
  const del = () => {
    console.log("delete.js runnig", key);
    dispatch(savedataaction.delete(key));
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
          <h1 className="people" style={{ paddingRight: "2%" }}>
            {name}
          </h1>
          <h3
            style={{
              paddingTop: "1%",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={del}
          >
            Delete
          </h3>
        </div>
        <i>{title}</i>

        <table>
          <tbody>
            <tr>
              <td>Email:</td>
              <td className="info_left">{email}</td>
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
