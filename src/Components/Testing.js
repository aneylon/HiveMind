import "./Testing.css";
const Testing = () => {
  return (
    <div
      style={{
        padding: 15,
        height: "450px",
      }}
    >
      <div
        style={{
          width: "450px",
          height: "450px",
          zIndex: "8",
          background:
            "linear-gradient( 0deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.3) 10%, rgba(0, 0, 0, 0.1) 100% )",
          opacity: "0.1",
          position: "absolute",
          bottom: "100%",
          animation: "scanline 5s linear infinite",
        }}
      ></div>
      <div
        style={{
          content: " ",
          position: "absolute",
          top: 15,
          left: 15,
          width: "450px",
          height: "450px",
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(0,0,0,0.15), rgba(0,0,0,0.15) 1px, rgba(255,255,255,0.15) 1px, rgba(255,255,255,0.15) 2px)",
          padding: 5,
        }}
      ></div>
      <div
        class="terminal"
        style={{
          // backgroundColor: "black",
          width: "450px",
          height: "450px",
          backgroundImage: "radial-gradient(rgba(0,150,0,0.75), black 120%",
          fontFamily: "VT323, monospace",
          padding: 5,
          color: "lightgreen",
          textShadow: "0 0 6px lightgreen",
        }}
      >
        <p style={{ padding: 5, height: "100%" }}>this is a test</p>
      </div>
    </div>
  );
};
export default Testing;

/* References
https://codepen.io/luxonauta/pen/PoNOoqB
https://codepen.io/jcubic/pen/BwBYOZ
https://medium.com/@benjamib/retro-terminal-ui-ae9ac8eae71a
https://dev.to/ekeijl/retro-crt-terminal-screen-in-css-js-4afh
https://css-tricks.com/old-timey-terminal-styling/
https://codesandbox.io/s/crt-terminal-in-css-js-forked-l9nerw
*/
