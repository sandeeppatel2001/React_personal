import { createSlice, configureStore } from "@reduxjs/toolkit";

const intialstate = {
  formlist: [],
};

const dataslice = createSlice({
  name: "form_data",
  initialState: intialstate,

  reducers: {
    adddata(state, action) {
      console.log("actionhhhhhhhhhhhhhhhhhhhh", action.payload);
      if (action.payload.id !== "form") state.formlist = action.payload;
      else state.formlist.push(action.payload);
    },
    delete(state, action) {
      state.formlist = state.formlist.filter((obj, i) => i !== action.payload);
    },
  },
});

const havetoshwo = createSlice({
  name: "addbuttonhavetoshow",
  initialState: { show: true },
  reducers: {
    revrertfun(state) {
      state.show = !state.show;
    },
  },
});
const store = configureStore({
  reducer: { counter: dataslice.reducer, havetoshow: havetoshwo.reducer },
});

export const savedataaction = dataslice.actions;
export const havetoshwoaction = havetoshwo.actions;
export default store;

// {
//   id: "",
//   name: "Toni Stark2",
//   title: "NANO-MATERIALS LAB Members",
//   email: "sandeepkrpatel2002@gmail.com",
//   education:
//     "Ph.D. in Materials Engineering at IIT-Jammu and joined the Nano-materials lab in fall 2022",
//   research:
//     "Tony Stark has worn multiple different armors in his MCU appearances. For Iron Man, Stan Winston and his company built metal and rubber versions of the armors featured in the film,[70] while Iron Man comic book artist Adi Granov designed the Mark III with illustrator Phil Saunders.[71] Industrial Light & Magic (ILM) created the digital armors in the film,[72] with The Orphanage and The Embassy doing additional work. To help with animating the more refined suits, information was sometimes captured by having Downey wear only the helmet, sleeves and chest of the costume over a motion capture suit.",

//   resumeLink: "https://cvowl.com/jammu/cv/builder",
//   imageSrc:
//     "https://upload.wikimedia.org/wikipedia/en/4/47/Iron_Man_%28circa_2018%29.png",
// },
