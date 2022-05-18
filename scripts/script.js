import GetData from "../helpers/getData.js";
import { PALETAS } from "../helpers/users.js";
import PrintCard from "../modules/printCard.js";

const templateFragment = document.querySelector("#template").content;
const container = document.getElementById("containerCards");

document.addEventListener("DOMContentLoaded", async () => {
  let dataPaletas = await GetData(PALETAS);

  PrintCard(templateFragment, container, dataPaletas);
});
