import express from "express"
import cors from "cors";
const router = express.Router();
import UserModel from "../models/product.js";

/* GET users listing. */
router.post('/admin', cors({origin: ["http://localhost:3000/admin"]}), async (req, res, next) => {
  const { name, description, url } = req.body;
  console.log(`В БД передано: 
                name: ${name}
                description:${description}
                url: ${url}`);
  const doc = new UserModel();
  doc.name = name;
  doc.url = url;
  doc.description = description;
  await doc.save();
});

export default router;
