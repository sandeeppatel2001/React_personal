import { Overlay } from "react-overlays";

const Over = () => (
  <Overlay
    children="This is an overlay"
    placement="top"
    strategy="fixed"
    onClose={() => console.log("The overlay was closed")}
  />
);
export default Over;
