
("use strict");

userAutorisation();

let isAutorizated = false;

const listElements = document.getElementById("list");
const nameElement = document.querySelector(".add-form-name");
const textElement = document.querySelector(".add-form-text");
const buttonElements = document.querySelector(".add-form-button");
const deleteButtonElement = document.querySelector(".delete-button");
export let comments = [];

export function getComments() {
  return comments;
}

export const сomments = (newComments) => {
  comments = newComments;
};

export function getFetch() {
  // showLoadingIndicator();
  // hideAddForm();

  getElements()
    .then((responseData) => {
      const appComment = responseData.comments.map((comment) => {
        return {
          name: comment.author.name,
          date: format(new Date(comment.date), "dd/MM/yyyy hh:mm"),
          text: comment.text,
          likes: comment.likes,
          islike: false,
        };
      });
      comments = appComment;
      renderComments(comments);
      deleteLoadingIndicator();
    })
    .catch((error) => {
      console.log(error);
    });
}
getFetch();

const listElement = document.getElementById("list");
const nameInputElement = document.getElementById("name-input");
const commentInputElement = document.getElementById("comment-input");
