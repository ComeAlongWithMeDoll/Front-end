import ProfileCard from "./ProfileCard";
import Greeting from "./Greeting";
import React from "react";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <Greeting />
      <ProfileCard />
    </div>
  );
}

export default App;
