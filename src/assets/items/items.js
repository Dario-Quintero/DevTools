import { DATABASE } from "./back-end/database";
import { DEPLOY as BACKEND_DEPLOY } from "./back-end/deploy";
import { DOCUMENTATION as BACKEND_DOCUMENTATION } from "./back-end/documentation";
import { PRACTICE as BACKEND_PRACTICE } from "./back-end/practice";

import { CSS } from "./front-end/css";
import { DEPLOY as FRONTEND_DEPLOY } from "./front-end/deploy";
import { DOCUMENTATION as FRONTEND_DOCUMENTATION } from "./front-end/documentation";
import { PRACTICE as FRONTEND_PRACTICE } from "./front-end/practice";
import { UXUI } from "./front-end/uxui";

import { PLATFORMS } from "./courses/platforms";
import { VIDEOS } from "./courses/videos";

import { EXTENSIONS } from "./extensions/extensions";

const ITEMS = [].concat(
  DATABASE,
  BACKEND_DEPLOY,
  BACKEND_DOCUMENTATION,
  BACKEND_PRACTICE,
  CSS,
  FRONTEND_DEPLOY,
  FRONTEND_DOCUMENTATION,
  FRONTEND_PRACTICE,
  UXUI,
  PLATFORMS,
  VIDEOS,
  EXTENSIONS,
);


let TAGS = []
ITEMS.forEach(item => { TAGS=[...TAGS, ...item.tags]})
TAGS = [...new Set(TAGS)]

export {ITEMS, TAGS}