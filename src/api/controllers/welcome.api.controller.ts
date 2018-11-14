import { Request, Response } from 'express';

export let welcomeMSG = (req: Request, res: Response) => {
  res.json({
    message: 'welcome to api',
  });
};
