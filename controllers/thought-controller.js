//Import thoughts and user from models
const { Thought, User } = require("../models");
//Create a thought controller
const thoughtController = {
  //Get all thoughts
  getAllThoughts(req, res) {
    //Find all thoughts and populate the thoughts
    Thought.find({})
      .sort({ _id: -1 })
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => {
        res.status(400).json(err);
      });
  },
  //Get a single thought by id
  getThoughtById({ params }, res) {
    Thought.findOne({ _id: params.thoughtId })
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res.status(404).json({ message: "No thought found with this id!" });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },
  //POST to create a new thought
  async addThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      const user = await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $addToSet: { thoughts: thought._id } },
        { runValidators: true, new: true }
      );
      if (!user) {
        return res.status(404).json({ message: "No user found with this id" });
      }
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // addThought(req, res) {
  //   Thought.create(body)
  //     .then(({ _id }) => {
  //       console.log(_id);
  //       return User.findOneAndUpdate(
  //         { _id: body.userId },
  //         { $push: { thoughts: _id } },
  //         { new: true }
  //       );
  //     })
  //     .then((dbUserData) => {
  //       if (!dbUserData) {
  //         res.status(404).json({ message: "No user found with this id!" });
  //         return;
  //       }
  //       res.json(dbUserData);
  //     })
  //     .catch((err) => res.json(err));
  // },
  //PUT to update a thought by id
  updateThought({ params, body }, res) {
    console.log(params.thoughtId);
    console.log(body);
    Thought.findOneAndUpdate({ _id: params.thoughtId }, body, {
      new: true,
      runValidators: true,
    })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No thought found with this id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.status(400).json(err));
  },
  //DELETE a thought by id
  removeThought({ params }, res) {
    Thought.findOneAndDelete({ _id: params.thoughtId })
      .then((deletedThought) => {
        if (!deletedThought) {
          return res
            .status(404)
            .json({ message: "No thought found with this id!" });
        }
        console.log(deletedThought);
        User.findOneAndUpdate(
          { username: deletedThought.username },
          { $pull: { thoughts: params.thoughtId } },
          { new: true }
        ).then((dbUserData) => {
          if (!dbUserData) {
            res.status(404).json({ message: "No user found with this id!" });
            return;
          }
          res.json(dbUserData);
        });
      })
      .catch((err) => res.status(400).json(err));
  },
  //POST to create a reaction
  addReaction({ params, body }, res) {
    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $push: { reactions: body } },
      { new: true, runValidators: true }
    )
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.status(400).json(err));
  },
  //DELETE a reaction
  removeReaction({ params }, res) {
    Thought.findOneAndUpdate(
      //when reaction id matches with the params.reactionId passed
      { _id: params.thoughtId },
      //remove a specific reply from reactions
      { $pull: { reactions: { reactionId: params.reactionId } } },
      { new: true }
    )
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => res.json(err));
  },
};
//Export thoughts controller
module.exports = thoughtController;
