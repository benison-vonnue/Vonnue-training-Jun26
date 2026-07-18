import { init as modalInit } from "./components/modal.js";
import { handleFormSubmit } from "./components/form.js";
import { init as taskInit } from "./components/task.js";

function init() {
  modalInit();
  handleFormSubmit();
  taskInit();
}

init();
