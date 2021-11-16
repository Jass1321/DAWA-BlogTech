/**
 * * Create_Story => user_id, title, author, text, dateTime => POST
 * * Read_Story => story_id => GET
 * * Update_Story => story_id, story_data => Show => PUT
 * * Delete_Story password => story_id => DELETE
 */
 
 import { response } from "../../../network";
 import { list, find, remove, refresh, store } from "../../../store/dummy";
 import  storyModel  from "./model";

 /*----------POST----------*/
 export const createStory =  async (req, res) => {
   const story = req.body;
    /*creamos el data del user nuevo */
    const  data = { 
      title: story.title,
      author: story.author,
      text: story.text,
      dataTime: story.dataTime,
      user_id: story.user_id,
    };
    const stories = await store(storyModel, data);
    return response({ res, data: stories, status: 201});
 };
 
 /*----------GET----------*/
 export const readStory = async (req, res) => {
  const { id } = req.params;
  const story = await find({value: id, model: storyModel});
  console.log(story);

  if (!story) {
      response({ res, ok: false, status: 404, data: "error, story not found"
      });
  }
  return response({res, data: story});
 };
 
//---LISTA DE HISTORIAS---
export const showAllStory = async (req, res) => {
  const stories = await list(storyModel);
  console.log(await list(storyModel));
  return response({res, data: stories});
};

/*----------UPDATE----------*/
export const updateStory = async (req, res) => {
  const { id } = req.params;
  const story = await refresh({model: storyModel, id: id, data: req.body}); //busca la story a editar por id

  if (!story) {
    return response({ res, ok: false, data: { error: "History not found" }, status: 404 });
  }
  return response({ res, data: story });
};
 
 /*----------DELETE----------*/
export const deleteStory = async (req, res) => {
  const { id } = req.params;
  const story = await remove(storyModel, id);
  if (!story) {
    return response({ res, ok: false, data: { error: "History not found" } });
  }
  return response({ res, data: { success: "History deleted successfully!" } });
};