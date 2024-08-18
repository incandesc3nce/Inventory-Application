import { Request, Response } from "express";
import { getItemById, updateItem } from "../../db/queries/itemsQueries";
import { getCategories } from "../../db/queries/categoriesQueries";
import { getGenres } from "../../db/queries/genresQueries";
import Item from "../../types/Item";
import Category from "../../types/Category";
import Genre from "../../types/Genre";

const getItemRow = async (id: number) => {
  const item: Item = await getItemById(id);
  return item;
};

export const editItemController = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  const item: Item = await getItemRow(id);
  const categories: Category[] = await getCategories();
  const genres: Genre[] = await getGenres();
  res.render("itemForm", {
    title: "Edit Item",
    item: item,
    categories: categories,
    genres: genres,
  });
};

export const updateItemController = async (req: Request, res: Response) => {
  const { id, title, description, categoryId, genreId, img_url } = req.body;
  if (!id || !title || !description || !categoryId || !genreId || !img_url) {
    return res.status(400).send("All input is required");
  }

  await updateItem(
    id,
    title,
    description,
    categoryId,
    genreId,
    img_url,
  );

  res.redirect("/items");
}