const { Post } = require("../models/postModel");

class PostController {
  /**
   * METHOD: GET
   * API: /api/v1/posts
   * ACCESS: USER | SUPER_ADMIN
   */
  static async index(req, res) {
    try {
      console.log(req.body);
      return res.status(200).json({
        message: "Success",
      });
    } catch (error) {
      console.log(error);
    }
  }
  /**
   * METHOD: POST
   * API: /api/v1/posts
   * ACCESS: USER | SUPER_ADMIN
   */
  static async store(req, res) {
    try {
      const newPost = new Post({ ...req.body });

      await newPost.save();

      return res.status(1).send({
        message: "Success fuck",
        post: newPost,
      });
    } catch (error) {
      console.log(error);
    }
  }
  static async update(req, res) {}
  static async delete(req, res) {}
  static async single(req, res) {}
}

module.exports = {
  PostController,
};
