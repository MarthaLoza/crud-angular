import { Request, Response, text } from "express";

import pool from '../database';

class GamesController {

    public async list ( req: Request, res: Response) {
        const games = await pool.query('SELECT * FROM games');
        res.json(games);
    }

    public async getOne ( req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM games WHERE id = $1', id);
        if(games.length > 0){
            return res.json(games[0]);
        }
        res.status(404).json({text: "The game doesn't exists"});
        console.log(games);
        res.json(games)
    }

    public async create (req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO games (${this:name}) VALUES (${this:csv})', req.body);        
        res.json({message: 'Game Saved'});
    }

    public async update (req: Request, res: Response): Promise<void> {
        req.body.id = req.params.id;
        const { id, title, description, image } = req.body;
        console.log(req.body);
        
        await pool.query('UPDATE games SET title = $1, description = $2, image = $3 WHERE id = $4', [title, description, image, id])
        res.json({message: 'The game was updated' });
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM games WHERE id = $1', id)
        res.json({message: 'The game was deleted' });
    }
   
}

export const gamesController = new GamesController();