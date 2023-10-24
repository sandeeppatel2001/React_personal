import { useDispatch } from "react-redux";
import { savedataaction } from "../../store";
import { havetoshwoaction } from "../../store";
import { useState } from "react";
import { submitDataToBackend } from "./sendreq";
const Form = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    member: "",
    email: "",
    des: "",
    res: "",
    url: "",
    edu: "",
    resumeurl: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // console.log("saaa", event.target, "name", name, "value", value);
    setFormData({
      ...formData,
      [name]: value,
    });

    console.log("formdataf", formData);
  };
  const takedata = async (e) => {
    e.preventDefault();
    dispatch(havetoshwoaction.revrertfun());
    console.log(e.target);
    const obj = {
      id: "form",
      name: formData.name,
      title: formData.member,
      email: formData.email,
      education: formData.edu,
      research: formData.res,

      resumeLink: formData.resumeurl,
      imageSrc: formData.url,
      // imageSrc:
      //   "https://upload.wikimedia.org/wikipedia/en/4/47/Iron_Man_%28circa_2018%29.png",
    };
    dispatch(savedataaction.adddata(obj));
    submitDataToBackend(obj, "people", "POST");
    console.log("ffffffffffffff", obj);
  };
  return (
    <div>
      <>
        <div id="m">
          <h1>Upload Image on peoplepage</h1>

          <div id="box">
            <div>
              <div>
                <label style={{ paddingRight: "2%" }}>Name</label>
                <input
                  name="name"
                  onChange={handleInputChange}
                  placeholder="Name"
                ></input>
              </div>
              <hr />
              <div>
                <label style={{ paddingRight: "2%" }}>Member of</label>
                <input
                  name="member"
                  value={formData.member}
                  onChange={handleInputChange}
                  placeholder="Member of"
                />
              </div>
              <hr />
              {/* <div>
                <label style={{ paddingRight: "2%" }}>Your Description</label>
                <textarea
                  name="des"
                  value={formData.des}
                  onChange={handleInputChange}
                  placeholder="Description"
                >
                  {" "}
                </textarea>
              </div> */}
              {/* <hr /> */}
              <div>
                <label style={{ paddingRight: "2%" }}>Email</label>
                <input
                  onChange={handleInputChange}
                  type="email"
                  placeholder="email"
                  name="email"
                  value={formData.email}
                ></input>
              </div>
              <hr />
              <div>
                <label style={{ paddingRight: "2%" }}>Education</label>
                <textarea
                  onChange={handleInputChange}
                  placeholder="edu-Description"
                  name="edu"
                  value={formData.edu}
                >
                  {" "}
                </textarea>
              </div>
              <hr />
              <div>
                <label style={{ paddingRight: "2%" }}>Current Research</label>
                <textarea
                  name="res"
                  value={formData.res}
                  onChange={handleInputChange}
                  id="desc"
                >
                  {" "}
                </textarea>
              </div>
              <hr />
              <div>
                <label style={{ paddingRight: "2%" }}>Resume</label>
                <input
                  onChange={handleInputChange}
                  type="url"
                  placeholder="Url"
                  name="resumeurl"
                  value={formData.resumeurl}
                ></input>
              </div>
              <hr />
              <div>
                <label style={{ paddingRight: "2%" }}>Image</label>
                <input
                  onChange={handleInputChange}
                  type="url"
                  placeholder="Image_Url"
                  name="url"
                  value={formData.url}
                ></input>
              </div>
              <hr />
              <div>
                <button onClick={(e) => takedata(e)}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};
export default Form;
