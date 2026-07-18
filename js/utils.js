export const addPending = () => {
  const total = document.querySelector(".total p");
  const pending = document.querySelector(".pending p");
  const completed = document.querySelector(".completedCard p");
  const totalTask = document.querySelector("#totalTask span");

  total.textContent = parseInt(total.textContent) + 1;
  totalTask.textContent = parseInt(totalTask.textContent) + 1;
  pending.textContent = parseInt(pending.textContent) + 1;
};

export const addCompleted = () => {
  const total = document.querySelector(".total p");
  const pending = document.querySelector(".pending p");
  const completed = document.querySelector(".completedCard p");

  completed.textContent = parseInt(completed.textContent) + 1;
  pending.textContent = parseInt(pending.textContent) - 1;
};

export const deletePending = () => {
  const total = document.querySelector(".total p");
  const pending = document.querySelector(".pending p");
  const completed = document.querySelector(".completedCard p");
  const totalTask = document.querySelector("#totalTask span");

  total.textContent = parseInt(total.textContent) - 1;
  totalTask.textContent = parseInt(totalTask.textContent) - 1;
  pending.textContent = parseInt(pending.textContent) - 1;
};

export const deleteCompleted = () => {
  const total = document.querySelector(".total p");
  const pending = document.querySelector(".pending p");
  const completed = document.querySelector(".completedCard p");
  const totalTask = document.querySelector("#totalTask span");

  total.textContent = parseInt(total.textContent) - 1;
  totalTask.textContent = parseInt(totalTask.textContent) - 1;
  completed.textContent = parseInt(completed.textContent) - 1;
};
