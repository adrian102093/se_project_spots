const editProfileBtn = document.querySelector(".profile__edit-btn");

const editProfileButton = document.querySelector("#profile__edit-button");
const editProfileCloseButton =
  editProfileModal.querySelector(".modal__close-btn");

const newPostBtn = document.querySelector(".edit-profile-modal");
const newPostModal = document.querySelector("#edit-profile-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");

editProfileBtn.addEventListener("click", function () {
  editProfileModal.classList.add("modal_is-opened");
});

editProfilecloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});

newPostBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
});

newPostloseBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
});
