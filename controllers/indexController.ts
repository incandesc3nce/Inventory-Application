import { Request, Response } from "express";

export const indexController = async (req: Request, res: Response) => {
  res.render("index", { title: "The Silver Screen Inventory" });
};
