import express from "express";
import {createStory,  readStory, updateStory, deleteStory} from './controller';

/* networks es que exporta las rutas*/ 
const storyRouter = express.Router();

storyRouter.route("/create").post(createStory);
storyRouter.route("/read/:story_id").get(readStory);
storyRouter.route("/update/:story_id").put(updateStory);
storyRouter.route("/delete/:story_id").delete(deleteStory);

export default storyRouter;
