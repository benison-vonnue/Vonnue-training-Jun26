import { addCompleted, deleteCompleted } from "../utils.js";

export const init = () => {
  const taskContainer = document.querySelector("#taskContainer");
  taskContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("complete")) {
      e.target.parentElement.parentElement.classList.add("completed");
      addCompleted();
    }
    if (e.target.parentElement.parentElement.classList.contains("delete")) {
      e.target.parentElement.parentElement.parentElement.parentElement.remove();
      deleteCompleted();
    }
  });
};
