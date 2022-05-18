import DeleteData from "../helpers/deleteData.js";
import PutData from "../helpers/putData.js";
import { USER_url } from "../helpers/users.js";

let btnCancel = document.getElementById("cancel");
let inputName = document.getElementById("name");
let inputEmail = document.getElementById("email");
let inputPassword = document.getElementById("password");
let btnEdit = document.getElementById("edit");
let btnSave = document.getElementById("save");
let btnDelete = document.getElementById("delete");
let form = document.querySelector("form");
let infoUser;

document.addEventListener("DOMContentLoaded", () => {
  infoUser = JSON.parse(sessionStorage.getItem("infoUser"));

  const { id, name, password, email } = infoUser;

  inputName.value = name;
  inputEmail.value = email;
  inputPassword.value = password;
  btnDelete.setAttribute('id', id);
});

btnCancel.addEventListener("click", () => {
  inputName.setAttribute("disabled", "");
  inputEmail.setAttribute("disabled", "");
  inputPassword.setAttribute("disabled", "");

  btnEdit.classList.remove("d-none");
  btnCancel.classList.add("d-none");
  btnSave.classList.add("d-none");
});

btnEdit.addEventListener("click", () => {
  inputEmail.removeAttribute("disabled");
  inputName.removeAttribute("disabled");
  inputPassword.removeAttribute("disabled");

  btnSave.classList.remove("d-none");
  btnCancel.classList.remove("d-none");
  btnEdit.classList.add("d-none");
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const { id } = infoUser;
  let url = `${USER_url}/${id}`;
  let newInfoUser = {
    name: inputName.value,
    email: inputEmail.value,
    password: inputPassword.value,
  };

  newInfoUser.id = id;
  sessionStorage.setItem("infoUser", JSON.stringify(newInfoUser));
  
  await PutData(url, newInfoUser);
});

btnDelete.addEventListener('click', (e) => {
  e.preventDefault();
  let id = e.target.id;
  let url = `${USER_url}/${id}`;

  DeleteData(url).then(() => {
    window.location.href = "../index.html";
    sessionStorage.removeItem('infoUser')
  })
});
