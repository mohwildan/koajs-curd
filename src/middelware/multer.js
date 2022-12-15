import Multer from "@koa/multer";
import path from "path";

const multer = Multer({
  storage: Multer.diskStorage({}),
  fileFilter: (_req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
      cb(new Error("Unsupported file type!"), false);
      return;
    }
    cb(null, true);
  },
});

export default multer;
