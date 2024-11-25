/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let dominios = [".com", ".es", ".net"];

  let nombre = "";
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < dominios.length; l++) {
          nombre = pronoun[i] + adj[j] + noun[k] + dominios[l];
          document.getElementById("generado").innerHTML += nombre + "<br>";
        }
      }
    }
  }

  console.log("Hello Rigo from the console!");
};
