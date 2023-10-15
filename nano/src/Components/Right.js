import styled from "styled-components";
import { useEffect, useState } from "react";
import Newsinput from "./Newsinput";
const RightColumn = styled.div`
  flex: 1;
  padding: 3%;

  background-color: black; /* Background color */
  color: white; /* Text color */
  // overflow-y: scroll;
  height: 50%;
  //   border: white solid 0px;
`;
const Scroller = styled.div`
  flex: 1;
  padding: 3%;
  background-color: black; /* Background color */
  color: white; /* Text color */
  overflow-y: scroll;
  height: 15rem;
  // border: #ff69b4 solid 2px;
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
  // color: white; /* Text color */
  color: #00ffff;
  font-weight: bold;
  cursor: pointer;
  padding-left: 3%;
  text-decoration: underline;
`;

// const NewsTitle = styled.h6`
//   font-family: "Playfair Display", serif;
//   font-size: 22px;
//   cursor: pointer;
//   text-decoration: underline;
//   // color: white; /* Text color */
//   color: #ff69b4;
// `;

const NewsContent = styled.p`
  font-family: "Playfair Display", serif;
  font-size: 16px;
  color: white; /* Text color */
`;
const Right = () => {
  useEffect(() => {}, []);
  const [Isshow, setIsshow] = useState(1);
  const [Newdata, setNewdata] = useState([
    {
      h: "Best Oral Presentation",
      c: `Swanand has won the best oral presentation in the 34th Annual
    Student's Symposium at Department of Materials Engineering, IISc.
    Congratulations!`,
    },
  ]);
  const Radd = (event) => {
    setIsshow(0);
    console.log("pppppppppp");
  };
  const subdata = (data) => {
    console.log("left.js  ", data);
    setNewdata([{ h: data[0], c: data[1] }, ...Newdata]);
    setIsshow(1);
  };
  const del = (index) => {
    console.log("right.js--delfun", index);
    const updata = Newdata.filter((_, i) => i !== index);
    setNewdata(updata);
    console.log(updata);
  };
  return (
    <RightColumn>
      <div style={{ display: "flex" }}>
        <Header>News</Header>
        <Header style={{ paddingLeft: "7%" }} onClick={Radd}>
          Add
        </Header>
      </div>
      <hr style={{ marginTop: "-5%" }}></hr>
      {/* <DeleteIcon>Delete</DeleteIcon> */}
      {!Isshow && <Newsinput fun={subdata}></Newsinput>}
      <Scroller>
        {/* <DeleteIcon>🗑</DeleteIcon> */}

        {Newdata.map((e, i) => {
          return (
            <div>
              <div style={{ display: "flex" }}>
                <DeleteIcon>{e.h}</DeleteIcon>
                <DeleteIcon
                  key={i}
                  onClick={() => {
                    del(i);
                  }}
                >
                  🗑
                </DeleteIcon>
              </div>
              <NewsContent>{e.c}</NewsContent>
            </div>
          );
        })}
      </Scroller>

      {/* Add more news items here */}
    </RightColumn>
  );
};
export default Right;
