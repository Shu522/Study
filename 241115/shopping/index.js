import { data } from "./data.js";
import { makeCard } from "./func.js";

const container = document.querySelector(".container");

data.forEach((v) =>
  container.insertAdjacentHTML("beforeend", makeCard(v.image, v.name, v.money))
);
