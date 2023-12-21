import Render from "./components/render.js";
import { users } from "./helpers/users.js";

const root = document.querySelector(".root");

const render = new Render(users, root);
render.render();
