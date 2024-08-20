import { Request, Response } from "express";
import { deleteGenre, getGenreById } from "../../db/queries/genresQueries";
import { getItemsByGenre } from "../../db/queries/itemsQueries";
import Item from "../../types/Item";
import Genre from "../../types/Genre";

export const deleteGenreController = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  try {
    const items: Item[] = await getItemsByGenre(id);
    if (items.length > 0) {
      const genre: Genre = await getGenreById(id);
      res.render("genre", {
        title: "Genre",
        message: "Cannot delete genre with items in it",
        genre: genre,
        items: items,
      });
      return;
    }
    await deleteGenre(id);
    res.redirect("/genres");
  } catch (err) {
    console.log(err);
    res.render("404");
  }
};
