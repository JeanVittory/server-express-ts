import { Router } from "express";
import {
  getLanguage,
  postLanguage,
  getLanguageByParams,
  deleteLanguage,
  updateLanguage,
} from "../controllers/language.controllers";

const route = Router();

route.get("/", getLanguage);
route.get("/:id", getLanguageByParams);
route.post("/post", postLanguage);
route.put("/:id", updateLanguage);
route.delete("/:id", deleteLanguage);

export { route };
