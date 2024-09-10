const { Router } = require("express");
const { PostController } = require("../controllers/postController");

const router = Router();

router.get("/posts", PostController.index);
router.post("/posts", PostController.store);
router.put("/posts/:id", PostController.update);
router.delete("/posts/:id", PostController.delete);
router.get("/posts/:id", PostController.single);

module.exports = router;


