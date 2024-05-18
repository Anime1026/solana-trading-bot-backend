import express, { Router, Request, Response } from 'express';

import { exitBot, runListener } from './buy';

export const router: Router = express.Router();

router.get("/start-bot", (req: Request, res: Response) => {
    runListener();

    res.json({ state: true });
});

router.get("/stop-bot", (req: Request, res: Response) => {
    exitBot();
    console.log("stopped bot");
    res.json({ state: true });
})