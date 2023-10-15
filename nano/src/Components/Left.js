import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import LoginOverlay from "./LoginOverlay";

const LeftColumn = styled.div`
  flex: 1;

  //   border: white solid 2px;
`;
const Header = styled.h5`
  font-family: "Playfair Display", serif;
  font-size: 24px;
  font-weight: bold;
  // color: white; /* Text color */
  color: #ff69b4;
`;

const DeleteIcon = styled.a`
  font-size: 22px;
  color: #ff69b4; /* Text color */
  font-weight: bold;

  padding-left: 3%;
  text-decoration: underline;
  cursor: pointer;
`;

const RContent = styled.p`
  //   font-family: "Playfair Display", serif;
  font-size: 20px;
  color: white; /* Text color */
  padding-left: 2%;
  margin: 2%;
  cursor: pointer;
`;
const researchcontent = [
  "Mechanical behaviour of materials",
  "Mechanical behaviour of materials",
  "Mechanical behaviour of materials",
  "Mechanical behaviour of materials",
];

const Left = () => {
  const [Rcont, setRcont] = useState(researchcontent);
  useEffect(() => {}, []);
  const [Isshow, setIsshow] = useState(0);
  const del = (index) => {
    console.log("del", index);
    const newcont = Rcont.filter((_, i) => i !== index);
    setRcont(newcont);
  };
  const ladd = (event) => {
    setIsshow(1);
    console.log("pppppppppp");
  };
  const subdata = (data) => {
    console.log("left.js  ", data);
    setRcont([data, ...Rcont]);
    setIsshow(0);
  };
  return (
    <LeftColumn>
      <Header>Research Interests</Header>
      <DeleteIcon onClick={ladd}>Add</DeleteIcon>
      {/* <DeleteIcon>Delete</DeleteIcon> */}
      {Isshow && <LoginOverlay item={subdata} />}
      <div style={{ paddingTop: "4%" }}>
        {Rcont.map((e, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              margin: "-3%",
            }}
          >
            <RContent>{e}</RContent>
            <RContent onClick={() => del(i)}>🗑</RContent>
          </div>
        ))}
      </div>
    </LeftColumn>
  );
};

export default Left;
