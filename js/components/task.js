import { addCompleted, deleteCompleted, deletePending } from "../utils.js";

export const init = () => {
  const taskContainer = document.querySelector("#taskContainer");
  taskContainer.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (btn.classList.contains("complete")) {
      btn.parentElement.parentElement.classList.add("completed");
      addCompleted();
    }
    if (btn.classList.contains("delete")) {
      if (btn.parentElement.parentElement.classList.contains("completed")) {
        deleteCompleted();
      } else {
        deletePending();
      }
      btn.parentElement.parentElement.remove();
    }
  });
};
