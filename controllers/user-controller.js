//Import the user schema
const { User } = require("../models");

//Create the user controller
const userController = {
  //GET Routes
  //get all users
  getAllUsers(req, res) {
    User.find({})
      .sort({ _id: -1 })
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  //get one user by id and populate thought and friend data
  getUserById({ params }, res) {
    User.findOne({ _id: params.userId })
      .select("-__v")
      .populate({
        path: "friends",
      })
      .populate({
        path: "thoughts",
      })
      .then((dbUserData) => {
        // If no user is found, send 404
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
  //POST Routes
  //create a new user
  async createUser(req, res) {
    try {
        const user = await User.create(req.body);
        res.json(user);
    } catch (err) {
      console.log(err);
        res.status(500).json(err);
    }
},
  // createUser({ body }, res) {
  //   User.create(body)
  //     .then((dbUserData) => res.json(dbUserData))
  //     .catch((err) => res.status(400).json(err));
  // },
  //PUT Routes
  //update a user by _id
  updateUser({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.userId }, body, {
      new: true,
      runValidators: true,
    })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.status(400).json(err));
  },
  //DELETE Routes
  //delete a user by _id
  deleteUser({ params }, res) {
    User.findOneAndDelete({ _id: params.userId })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.status(400).json(err));
  },
  //POST route
  //add a new friend to a user's friend list
  addFriend({ params }, res) {
    User.findOneAndUpdate(
      { _id: params.userId },
      { $push: { friends: params.friendId } },
      { new: true, runValidators: true }
    )
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.json(err));
  },
  //remove a friend from a user's friend list
  removeFriend({ params }, res) {
    User.findOneAndUpdate(
      { _id: params.userId },
      { $pull: { friends: params.friendId } },
      { new: true }
    )
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.json(err));
  },
};
module.exports = userController;