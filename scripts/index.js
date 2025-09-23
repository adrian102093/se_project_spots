// Select elements for Edit Profile modal
const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseButton =
  editProfileModal.querySelector(".modal__close-btn");

// Select elements for New Post modal
const newPostBtn = document.querySelector(".profile__new-post-btn"); // <-- update selector to your actual button
const newPostModal = document.querySelector("#new-post-modal"); // <-- make sure this matches your HTML id
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");

// Open/close Edit Profile modal
editProfileBtn.addEventListener("click", function () {
  editProfileModal.classList.add("modal_is-opened");
});

editProfileCloseButton.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});

// Open/close New Post modal
newPostBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
});

newPostCloseBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
});
