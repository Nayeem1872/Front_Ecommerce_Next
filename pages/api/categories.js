import { mongooseConnect } from "@/lib/mongoose";
import { Category } from "@/models/Category";

export default async function handler(req, res) {
  await mongooseConnect();

  if (req.method === "GET") {
    const ids = req.query.ids; // Assuming the ids are passed as query parameters

    try {
      const categories = await Category.find({ _id: { $in: ids } });
      res.json(categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
