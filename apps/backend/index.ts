import express, { json } from "express";
import { TrainModel, GenerateImage, GenerateImageFromPack } from "common/types";
import { prisma } from "db";

const app = express();
const PORT = process.env.PORT || 3000;
const USER_ID = "qwdeww";

app.use(express.json());

app.post("/ai/training", async (req, res) => {
  const parsedBody = TrainModel.safeParse(req.body);

  if (!parsedBody.success) {
    res.status(411).json({
      message: "Input incorrect",
    });
    return;
  }

  const data = await prisma.model.create({
    data: {
      name: parsedBody.data.name,
      type: parsedBody.data.type,
      age: parsedBody.data.age,
      ethinicity: parsedBody.data.ethinicity,
      eyeColour: parsedBody.data.eyeColour,
      bald: parsedBody.data.bald,
      userId: USER_ID,
    },
  });

  res.json({
    modelId: data.id,
  });
});

app.post("/ai/generate", async (req, res) => {
  const parsedBody = GenerateImage.safeParse(req.body);
  if (!parsedBody.success) {
    res.status(411).json({});
  }
  const data = await prisma.outputImages.create({
    data: {
      prompt:parsedBody.?data.?prompt
      userId: USER_ID
      modelId: parsedBody.data.modelId
      image
    }
  })
});

app.post("/package/generate", (req, res) => {});

app.get("/package/bulk", (req, res) => {});

app.get("/image", (req, res) => {});

app.listen(PORT, () => {
  console.log("server is running on 3000");
});
