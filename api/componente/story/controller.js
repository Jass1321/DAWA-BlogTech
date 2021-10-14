/**
 * * Create_Story => user_id, title, author, text, dateTime => POST
 * * Read_Story => story_id => GET
 * * Update_Story => story_id, story_data => Show => PUT
 * * Delete_Story password => story_id => DELETE
 */
 import { nanoid } from "nanoid";
 import { response } from "../../../network";
 import { list, find, remove, refresh, store } from "../../../store/dummy";

 const STORY_TABLE = "stories";

 /*----------POST----------*/
 export const createStory =  async (req, res) => {
   const story = req.body;
    /*creamos el data del user nuevo */
    const  data = { 
      id: nanoid(), 
      title: story.title,
      author: story.author,
      text: story.text,
      dataTime: story.dataTime,
      user_id: story.user_id,
    };
    const stories = await store(STORY_TABLE, data);
    return response({ res, data: stories, status: 201});
 };
 
 /*----------GET----------*/
 export const readStory = async (req, res) => {
  const { id } = req.params;
  const story = await find(STORY_TABLE, id);
  return response({ res, data: story });
 };
 
//---LISTA DE HISTORIAS---
export const showAllStory = async (req, res) => {
  const stories = await list(STORY_TABLE);
  return response({res, data: stories});
};

/*----------UPDATE----------*/
export const updateStory = async (req, res) => {
  const { id } = req.params;
  const story = req.body;
  const  osi = { 
    title: story.title,
    author: story.author,
    text: story.text,
    dataTime: story.dataTime,
    user_id: story.user_id,
  };
  const stories = await refresh(STORY_TABLE, id);
  if (!stories) {
    return response({ res, ok: false, data: { error: "History not found" } });
  }
  return response({ res, data:  osi });
};
 
 /*----------DELETE----------*/
export const deleteStory = async (req, res) => {
  const { id } = req.params;
  const story = await remove(STORY_TABLE, id);
  if (!story) {
    return response({ res, ok: false, data: { error: "History not found" } });
  }

  return response({ res, data: { success: "History deleted successfully!" } });
};