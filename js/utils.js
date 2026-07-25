const total = document.querySelector(".total p");
const pending = document.querySelector(".pending p");
const completed = document.querySelector(".completedCard p");
const totalTask = document.querySelector("#totalTask span");

export const addPending = () => {
  total.textContent = parseInt(total.textContent) + 1;
  totalTask.textContent = parseInt(totalTask.textContent) + 1;
  pending.textContent = parseInt(pending.textContent) + 1;
};

export const addCompleted = () => {
  completed.textContent = parseInt(completed.textContent) + 1;
  pending.textContent = parseInt(pending.textContent) - 1;
};

export const deletePending = () => {
  total.textContent = parseInt(total.textContent) - 1;
  totalTask.textContent = parseInt(totalTask.textContent) - 1;
  pending.textContent = parseInt(pending.textContent) - 1;
};

export const deleteCompleted = () => {
  total.textContent = parseInt(total.textContent) - 1;
  totalTask.textContent = parseInt(totalTask.textContent) - 1;
  completed.textContent = parseInt(completed.textContent) - 1;
};
