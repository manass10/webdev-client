const bgRed = { backgroundColor: "#ff7070", color: "white", padding: "1rem", marginBottom: "0.5rem" };
const bgBlue = { backgroundColor: "#7070ff", color: "white", padding: "1rem", marginBottom: "0.5rem" };
const bgYellow = { backgroundColor: "#ffeb3b", color: "black", padding: "1rem", marginBottom: "0.5rem" };
const bgGreen = { backgroundColor: "#4caf50", color: "white", padding: "1rem", marginBottom: "0.5rem" };

export default function StyleObjectsDemo() {
  return (
    <div>
      <div style={bgRed}>Styled with the bgRed object</div>
      <div style={bgBlue}>Styled with the bgBlue object</div>
      <div style={bgYellow}>Styled with the bgYellow object</div>
      {/* On your own: fourth box styled by a bgGreen object */}
      <div style={bgGreen}>Styled with the bgGreen object</div>
    </div>
  );
}
