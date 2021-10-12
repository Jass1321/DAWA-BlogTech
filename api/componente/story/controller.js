/**
 * * Create_Story => user_id, title, author, text, dateTime => POST
 * * Read_Story => story_id => GET
 * * Update_Story => story_id, story_data => Show => PUT
 * * Delete_Story password => story_id => DELETE
 */

 import { response } from "../../../network";

 /*----------POST----------*/
 export const createStory = (req, res) => {
   //destructuración
   const { user_id, story_id, title, author, text, dateTime } = req.body;
   return response ({
     res,
     data: {user_id, story_id, title, author, text, dateTime}
   });
 };
 
 /*----------GET----------*/
 export const readStory = (req, res) => {
   const { user_id, story_id, title, author, text, dateTime } = req.body;
   return response({
     res,
     data: { title, author, text, dateTime },
   });
 };
 
 /*----------UPDATE----------*/
 export const updateStory = (req, res) => {
   const { user_id, story_id, title, author, text, dateTime } = req.body;
   return response({
     res,
     data: { title, author, text, dateTime },
   });
 };
 
 /*----------DELETE----------*/
 export const deleteStory = (req, res) => {
   const { story_id } = req.body;
   return response({
     res,
     data: { story_id },
   });
 };