var msg = require("../models/msgModel")

addMsg = async (req, res, next) => {
    //console.log(req.body);
    await new msg({
      pseudo: req.body.pseudo,
      content: req.body.content,
      likes: req.body.likes
    }).save().then((err, data) => {
        if (err) {
          res.status(500).json(err);
        } else {
          console.log(data);
          res.status(200).json(data);
        }
      });
  };

  list = async (req, res, next) => {
    try {
      await msg.find().then((data) => {
        console.log(data);
        res.status(200).json(data);
      });
    } catch {
      (err) => res.status(500).json(err);
    }
  };

  modiflikes = async (req, res, next) => {
    try {
      msg1 = msg.findById(req.params.id)
      msg1.likes = likes + 1
      await msg.findByIdAndUpdate(req.params.id, { $set: msg1 });
      res.status(200).json(itemToUpdate);
    } catch (error) {
      res.json(error);
    }
  };
  deleteMsg = async (req, res, next) => {
    try {
      await msg.findByIdAndDelete(req.params.id);
      res.status(200).json("msg deleted !");
    } catch (error) {
      res.json(error);
    }
  };
  modifMsg = async (req, res, next) => {
    try {
      await msg.findByIdAndUpdate(req.params.id, { $set: req.body });
      res.status(200).json(itemToUpdate);
    } catch (error) {
      res.json(error);
    }
  };
module.exports = {addMsg, list, modiflikes, deleteMsg, modifMsg}