

const host = "https://wedev-api.sky.pro/api/v2/vera-Bu/comments";
// let token = "Bearer bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck";

let token = null;
const getToken = () => {
  return token;
};
const setToken = (newToken) => {
  token = newToken;
};

function getElements() {
  return fetch(host, {
    method: "GET",
  }).then((response) => response.json());
}
function showAddForm() {
  const form = document.querySelector(".add-form");
  form.classList.remove("hidden");
}
function hideAddForm() {
  const form = document.querySelector(".add-form");
  form.classList.add("hidden");
}
function showLoadingIndicatorComments() {
  const loader = document.querySelector(".comment-loader");
  loader.classList.remove("hidden");
}
function deleteLoadingIndicatorComments() {
  const loader = document.querySelector(".comment-loader");
  loader.classList.add("hidden");
}
function showLoadingIndicator() {
  const loader = document.querySelector(".list-loader");
  loader.classList.remove("hidden");
}

function deleteLoadingIndicator() {
  const loader = document.querySelector(".list-loader");
  loader.classList.add("hidden");
}

// export function correctDate(date) {
//   let currentDate = new Date(date);
//   let todayDay = currentDate.getDate();
//   let todayMonth = currentDate.getMonth() + 1;
//   let todayYear = String(currentDate.getFullYear()).slice(-2);
//   let todayHours = currentDate.getHours();
//   let todayMinutes = currentDate.getMinutes();
//   todayDay = todayDay < 10 ? "0" + todayDay : todayDay;
//   todayMonth = todayMonth < 10 ? "0" + todayMonth : todayMonth;
//   todayHours = todayHours < 10 ? "0" + todayHours : todayHours;
//   todayMinutes = todayMinutes < 10 ? "0" + todayMinutes : todayMinutes;

//   let formattedDate = `${todayDay}.${todayMonth}.${todayYear} ${todayHours}:${todayMinutes} `;
//   return formattedDate;
// };

const buttonElement = document.getElementById("add-button");
const nameElement = document.querySelector(".add-form-name");
const textElement = document.querySelector(".add-form-text");
const listElement = document.getElementById("list");
// const nameInputElement = document.getElementById("name-input");
// const commentInputElement = document.getElementById("comment-input");

function postElements({ text, name }) {
  const nameInputElement = document.getElementById("name-input");
  const commentInputElement = document.getElementById("comment-input");
  return fetch(host, {
    method: "POST",
    headers: {
      Authorization: token,
    },
    body: JSON.stringify({
      text: text,
      name: name,
    }),
  })
    .then((response) => {
      if (response.status === 500) {
        throw new Error("Сервер упал, попробуй позже");
      } else if (response.status === 400) {
        throw new Error("Что-то не то, попробуй ввести данные заново");
      } else {
        return response.json();
      }
    })
    .then((responseData) => {
      //deleteLoadingIndicatorComments();
      showAddForm();
      nameInputElement.value = "";
      commentInputElement.value = "";
      getFetch();
      deleteLoadingIndicator();
    })
    .catch((error) => {
      //showAddForm();
      //deleteLoadingIndicatorComments();
      // buttonElement.disabled = false;
      console.error(error.message);
    });
}

function loginUser({ login, password }) {
  return fetch("https://wedev-api.sky.pro/api/user/login", {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
    }),
  }).then((response) => {
    if (response.status === 400) {
      throw new Error("Неверный логин или пароль");
    }
    return response.json();
  });
}

function autorizatedUser({ login, password, name }) {
  return fetch("https://wedev-api.sky.pro/api/user", {
    method: "POST",
    body: JSON.stringify({
      name,
      login,
      password,
    }),
  }).then((response) => {
    if (response.status === 400) {
      throw new Error("Такой пользователь уже существует");
    }
    return response.json();
  });
}
