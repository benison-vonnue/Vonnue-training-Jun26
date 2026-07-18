import { addPending } from "../utils.js";

export const handleFormSubmit = () => {
  const form = document.querySelector("#taskForm");
  const taskCard = document.querySelector("#taskCard");
  const taskCardClone = taskCard.cloneNode(true);
  const taskContainer = document.querySelector("#taskContainer");
  const modal = document.querySelector("#modal");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const name = formData.get("name");
    const priority = formData.get("priority");
    const assignee = formData.get("assignee");
    const date = formData.get("date");
    console.log(name, priority, assignee, date);
    if (name === "") return;
    if (priority === "") return;
    if (assignee === "") return;
    if (date === "") return;

    const setPriorty = (el, priority) => {
      const priorityElement = el.querySelector(".priority");
      priorityElement.classList.add(priority);
    };

    const h3 = taskCardClone.querySelector("h3");
    h3.textContent = name;
    const nameSpan = taskCardClone.querySelector(".name");
    nameSpan.textContent = assignee;
    const dueSpan = taskCardClone.querySelector(".date");
    dueSpan.textContent = date;

    setPriorty(taskCardClone, priority);
    taskCardClone.classList.remove("none");
    taskCardClone.removeAttribute("id");
    taskContainer.appendChild(taskCardClone);
    form.reset();
    modal.classList.add("none");
    addPending();
  });
};
