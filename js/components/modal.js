export const init = () => {
  const addBtn = document.querySelector("#openModal");
  const modal = document.querySelector("#modal");
  const exitBtn = document.querySelector("#exitModal");

  const callBack = () => {
    modal.classList.toggle("none");
  };

  addBtn.addEventListener("click", callBack);
  exitBtn.addEventListener("click", callBack);
};
