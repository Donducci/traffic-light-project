import React, { useState } from "react";

//include images into your bundle


//create your first component
export function Home () {
const [selectedColor, setSelectedColor] = useState();
return (
<div>
<div className="trafficTop"></div>
<div className="container">
<div className="red light" onClick={() => setSelectedColor("red")} style={{boxShadow:selectedColor==="red" ? "0px 0px 40px 20px #fff" : ""}}></div>
<div className="yellow light" onClick={() => setSelectedColor("yellow")} style={{boxShadow:selectedColor==="yellow" ? "0px 0px 40px 20px #fff" : ""}}></div>
<div className="green light" onClick={() => setSelectedColor("green")} style={{boxShadow:selectedColor==="green" ? "0px 0px 40px 20px #fff" : ""}}></div>
</div>
</div>
);
};

export default Home;
