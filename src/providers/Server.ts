// const express = require('express'); //NodeJS
import express, { Response } from 'express';
import AbstractController from '../controllers/AbstractController';
import db from '../models';

class Server {
    // Atributos de la clase
    private app: express.Application;
    private port: number;
    private env: string;

    // Constructor
    constructor(appInit: { port: number; env: string; middlewares: any[]; controllers: AbstractController[]; }) {
        this.app = express()
        this.port = appInit.port;
        this.env = appInit.env;
        this.loadMiddlewares(appInit.middlewares);
        this.routes(appInit.controllers);
        this.connectDB();
    }

    // Metodos
    /**
     * Cargar los middlewares
     */
    private loadMiddlewares(middlewares: any[]): void {
        middlewares.forEach((middleware: any) => {
            this.app.use(middleware);
        });
    }
    /**
     * Conecta la base de datos
     */
    private async connectDB() {
        await db.sequelize.sync();
    }

    /**
     *  Rutas y controlador
     */
    private routes(controllers: AbstractController[]): void {
        // Ruta auxiliar para verificar el funcionamiento de la app
        this.app.get('/', (_: any, res: Response) => {
            res.status(200).send({
                message: "The backend module is working",
                documentation: 'http://github.com'
            })
        })

        controllers.forEach((controller: AbstractController) => {
            this.app.use(`/${controller.prefix}`, controller.router);
        })
    }
    /**
     * async init
     */
    public async init() {
        // await this.app.listen(this.port,()=>{
        //     console.log(`Server: Running @'http://localhost:${this.port}'`)
        // })

        this.app.listen(this.port, () => {
            console.log(`Server: Running @'http://localhost:${this.port}'`)
        })
    }
}

export default Server;
