import React from "react";
import "./Person.css"; // Import your CSS file

const Person = ({
  name,
  title,
  email,
  education,
  research,
  resumeLink,
  imageSrc,
}) => {
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
        <h4 className="people">{name}</h4>
        <i>{title}</i>
        <p>{research}</p>
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
              <td>Current Research:</td>
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
