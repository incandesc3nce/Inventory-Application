import { Request, Response } from "express";
import { createItem } from "../../db/queries/itemsQueries";
import { getCategories } from "../../db/queries/categoriesQueries";
import { getGenres } from "../../db/queries/genresQueries";
import Category from "../../types/Category";
import Genre from "../../types/Genre";

export const addItemController = async (req: Request, res: Response) => {
  const categories: Category[] = await getCategories();
  const genres: Genre[] = await getGenres();
  const emptyItem = {
    title: "",
    description: "",
    category: "",
    genre: "",
    img_url: "",
  };
  res.render("itemForm", {
    title: "Add Item",
    item: emptyItem,
    action: "/items/new",
    categories: categories,
    genres: genres,
  });
};

export const createItemController = async (req: Request, res: Response) => {
  const { title, description, category, genre, img_url } = req.body;
  if (!title || !description || !category || !genre || !img_url) {
    return res.status(400).send("All input is required");
  }

  await createItem(
    title,
    description,
    category,
    genre,
    img_url,
  );

  res.redirect("/items");
}