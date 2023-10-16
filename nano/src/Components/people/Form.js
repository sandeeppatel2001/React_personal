import { useDispatch } from "react-redux";
import { savedataaction } from "../../store";
import { havetoshwoaction } from "../../store";
const Form = () => {
  const dispatch = useDispatch();
  const takedata = (e) => {
    e.preventDefault();
    dispatch(havetoshwoaction.revrertfun());
    console.log(e.target);
    dispatch(
      savedataaction.adddata({
        name: "Tonitttererter",
        title: "NANO-MATERIALS LAB Members",
        email: "sandeepkrpatel2002@gmail.com",
        education:
          "Ph.D. in Materials Engineering at IIT-Jammu and joined the Nano-materials lab in fall 2022",
        research:
          "Tony Stark has worn multiple different armors in his MCU appearances. For Iron Man, Stan Winston and his company built metal and rubber versions of the armors featured in the film,[70] while Iron Man comic book artist Adi Granov designed the Mark III with illustrator Phil Saunders.[71] Industrial Light & Magic (ILM) created the digital armors in the film,[72] with The Orphanage and The Embassy doing additional work. To help with animating the more refined suits, information was sometimes captured by having Downey wear only the helmet, sleeves and chest of the costume over a motion capture suit.",

        resumeLink: "https://cvowl.com/jammu/cv/builder",
        imageSrc:
          "https://upload.wikimedia.org/wikipedia/en/4/47/Iron_Man_%28circa_2018%29.png",
      })
    );
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
                <input placeholder="Name"></input>
              </div>
              <hr />
              <div>
                <label style={{ paddingRight: "2%" }}>Member of</label>
                <input placeholder="Member of" />
              </div>
              <hr />
              <div>
                <label style={{ paddingRight: "2%" }}>Your Description</label>
                <textarea placeholder="Description"> </textarea>
              </div>
              <hr />
              <div>
                <label style={{ paddingRight: "2%" }}>Email</label>
                <input type="email" placeholder="email"></input>
              </div>
              <hr />
              <div>
                <label style={{ paddingRight: "2%" }}>Education</label>
                <textarea placeholder="Description"> </textarea>
              </div>
              <hr />
              <div>
                <label style={{ paddingRight: "2%" }}>Current Research</label>
                <textarea id="desc"> </textarea>
              </div>
              <hr />
              <div>
                <label style={{ paddingRight: "2%" }}>Resume</label>
                <input type="url" placeholder="Url"></input>
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
