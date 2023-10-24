import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import LoginOverlay from "./LoginOverlay";
import { deletmain, submitDataToBackend } from "./people/sendreq";
const LeftColumn = styled.div`
  flex: 1;

  // border: white solid 2px;
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
  useEffect(() => {
    try {
      const fetch = async () => {
        const data = await submitDataToBackend("", "left", "GET");
        // console.log(data);
        let a = [];
        data.forEach((element) => {
          a.push(element.data);
        });
        setRcont(a);
      };
      fetch();
    } catch (err) {
      console.log(err);
    }
  }, []);
  const [Isshow, setIsshow] = useState(false);
  const del = (index) => {
    console.log("del", index);
    const newcont = Rcont.filter((_, i) => i !== index);
    setRcont(newcont);
    deletmain(index, "left");
  };
  const ladd = (event) => {
    setIsshow(true);
    console.log("pppppppppp");
  };
  const subdata = (data) => {
    console.log("left.js", data);
    setRcont([data, ...Rcont]);
    setIsshow(false);
    submitDataToBackend({ data }, "left", "POST");
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
