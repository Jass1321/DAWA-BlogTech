import express from "express";
import {createStory,  readStory, updateStory, deleteStory, showAllStory} from './controller';

/* networks es que exporta las rutas*/ 
const storyRouter = express.Router();

storyRouter.route("/create").post(createStory);
storyRouter.route("/read/:id").get(readStory);
storyRouter.route("/list/").get(showAllStory);
storyRouter.route("/update/:id").put(updateStory);
storyRouter.route("/delete/:id").delete(deleteStory);

export default storyRouter;
