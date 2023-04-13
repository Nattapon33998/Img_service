const upload = require("../middleware/upload");
const cors = require("cors");
const express = require("express");
const router = express.Router();

router.use(cors());

router.post("/upload", upload.single("file"), async (req, res) => {
  if (req.file === undefined) return res.send("you must select a file.");
  const imgUrl = `http://localhost:8080/file/${req.file.filename}`;
  return res.status(200).json({ imgUrl });
});

module.exports = router;
