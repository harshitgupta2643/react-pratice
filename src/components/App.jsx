import React from "react";
import Form from "./Form";

var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      {userIsRegistered ? (
        <Form isRegister={userIsRegistered} />
      ) : (
        <Form isRegister={userIsRegistered} />
      )}
    </div>
  );
}

export default App;
