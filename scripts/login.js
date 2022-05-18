import GetData from "../helpers/getData.js";
import { USER_url } from "../helpers/users.js";
const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let data = await GetData(USER_url);
  data.forEach((user) => {
    const { email: emailUser, password: passwordUser } = user;
    if ((email.value || password.value) == "") {
      alert("Ingrese todos los datos");
    } else {
      if (emailUser == email.value) {
        if (passwordUser == password.value) {
          let dataUser = data.find((item) => item.email == emailUser);
          sessionStorage.setItem("infoUser", JSON.stringify(dataUser));
          form.reset();
          window.location.href = "../pages/home.html";
          
        } else {
          alert("Invalid password");
        }
      } else {
        alert("El usuario no existe");
      }
    }
  });
});
