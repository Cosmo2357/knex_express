"use strict";
import express, { Request, Response } from "express";
let router = express.Router();

router
  .route("/")
  .get((req: Request, res: Response) => {
    res.send("Hello from get Users");
  })
  .put(async (req: Request, res: Response) => {})
  .delete(async (req: Request, res: Response) => {});

module.exports = router;
