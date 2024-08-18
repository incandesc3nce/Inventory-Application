import { Request, Response } from "express";
import { getItemById, updateItem } from "../../db/queries/itemsQueries";
import { getCategories, getCategoryById } from "../../db/queries/categoriesQueries";
import { getGenres, getGenreById } from "../../db/queries/genresQueries";
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
  const itemCategory = await getCategoryById(item.category_id);
  const itemGenre = await getGenreById(item.genre_id);
  item.category = itemCategory.name;
  item.genre = itemGenre.name;

  const categories: Category[] = await getCategories();
  const genres: Genre[] = await getGenres();
  res.render("itemForm", {
    title: "Edit Item",
    item: item,
    action: `/items/${id}/edit`,
    categories: categories,
    genres: genres,
  });
};

export const updateItemController = async (req: Request, res: Response) => {
  const { id, title, description, category, genre, img_url } = req.body;
  if (!id || !title || !description || !category || !genre || !img_url) {
    return res.status(400).send("All input is required");
  }

  await updateItem(
    id,
    title,
    description,
    category,
    genre,
    img_url,
  );

  res.redirect("/items");
}