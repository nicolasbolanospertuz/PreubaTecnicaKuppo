import React from "react";
import Banner from "./components/banner/banner";
import ExtraInfo from "./components/extraInfo/extraInfo";

const App = () => {
  return (
    <div class="master">
      <div class="Banner">
        <Banner />
      </div>
      <div className="extraInfo">
        <ExtraInfo />
      </div>
    </div>
  );
};

export default App;
