const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Handlining GET requests for users",
  });
});

router.post("/", (req, res, next) => {
  const user = {
    name: req.body.name,
    email: req.body.email,
  };
  res.status(201).json({
    message: "Handlining POST requests for users",
    user: user,
  });
});

router.get("/:userId", (req, res, next) => {
  const id = req.params.userId;
  if (id === "special") {
    res.status(200).json({
      message: "You discovered special ID",
      id: id,
    });
  } else {
    res.status(200).json({
      message: "You passed an ID",
    });
  }
});

router.patch("/:usersId", (req, res, next) => {
  res.status(200).json({
    message: "Updated user!",
  });
});

router.delete("/:usersId", (req, res, next) => {
  res.status(200).json({
    message: "Deleted user!",
  });
});

module.exports = router;
