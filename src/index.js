import React from "react";
import ReactDOM from "react-dom";

const name = "shubham";
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/150/300";
const links = "https://www.facebook.com";

ReactDOM.render(
  <>
    <h1 contentEditable="true"> My name is {name} </h1>
    <img src={img1} alt="random imageserror" />
    <img src={img2} alt="random imageserror" />
    <a href = {links} target= "_blank">
    <img src={img3} alt="random imageserror" />
    </a>
  </>,

  document.getElementById("root")
);
