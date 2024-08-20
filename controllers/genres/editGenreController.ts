import { Request, Response } from "express";
import { getGenreById, updateGenre } from "../../db/queries/genresQueries";
import Genre from "../../types/Genre";

const getGenreRow = async (id: number) => {
  const genre: Genre = await getGenreById(id);
  if (!genre) {
    throw new Error(`404: Couldn't find genre with id ${id}`);
  }
  return genre;
};

export const editGenreController = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  try {
    const genre: Genre = await getGenreRow(id);
    res.render("genreForm", {
      title: "Edit Genre",
      genre: genre,
      action: `/genres/${id}/edit`,
    });
  } catch (err) {
    console.log(err);
    res.render("404");
  }
};

export const updateGenreController = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  const { name } = req.body;
  if (!name) {
    return res.status(400).send("All input is required");
  }
  await updateGenre(id, name);

  res.redirect("/genres");
};