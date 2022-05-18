import { USER_url } from "../helpers/users.js";
import PostData from "../helpers/postData.js";
import GetData from "../helpers/getData.js";

const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email");
  let password = document.getElementById("password").value;
  let user = await GetData(USER_url);
  let infoUser = {
    id: crypto.randomUUID(),
    name,
    email: email.value,
    password,
  };

  if ((email.value || name || password) == "") {
    alert("porfavor completa todos los campos");
  } else {
    if (user.length == 0) {

      await PostData(USER_url, infoUser);
      window.location.href = "../index.html";

    } else {

      user.forEach(async (user) => {
        const { email: emailUser } = user;
        if (email.value === emailUser) {
          alert("email already registered");
        } else {
          await PostData(USER_url, infoUser);
          window.location.href = "../index.html";
        }
      });
    }
  }
});
