//Import router from express
const router = require("express").Router();

//Import all methods from thought-controller
const { getAllThoughts, getThoughtById, addThought, updateThought, removeThought, addReaction, removeReaction } = require("../../controllers/thought-controller");

// /api/thoughts/
router.route("/").get(getAllThoughts).post(addThought);

// /api/thoughts/:id
router.route("/:thoughtId").get(getThoughtById).put(updateThought).delete(removeThought);

// /api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions").post(addReaction);

// /api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;