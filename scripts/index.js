// Select elements for Edit Profile modal
const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseButton = editProfileModal.querySelector(
  ".modal__close-button"
);

// Select elements for New Post modal
const newPostBtn = document.querySelector(".profile__add-btn"); // matches your HTML
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-button");

// Helpers
const openModal = (m) => m.classList.add("modal_is-opened");
const closeModal = (m) => m.classList.remove("modal_is-opened");

// Open/close Edit Profile modal
editProfileBtn.addEventListener("click", () => openModal(editProfileModal));
editProfileCloseButton.addEventListener("click", () =>
  closeModal(editProfileModal)
);

// Open/close New Post modal
newPostBtn.addEventListener("click", () => openModal(newPostModal));
newPostCloseBtn.addEventListener("click", () => closeModal(newPostModal));
