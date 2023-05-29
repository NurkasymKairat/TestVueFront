import { createApp } from "vue";
import App from "./App.vue";

import "bootstrap-reboot/dist/reboot.min.css";

import "./assets/sass/style.scss";

import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faCircleHalfStroke,
  faEnvelope,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-brands-svg-icons";

library.add(faCircleHalfStroke, faEnvelope, faLock);

let app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
