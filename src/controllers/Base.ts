import { Request, Response } from "express";
import AbstractController from "./AbstractController";
import db from '../models';

class Base extends AbstractController {
    // Singleton
    // Atributo de clase
    private static instance: Base;

    /**
     * static getInstance
    */
    public static getInstance(): AbstractController {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new Base("Base");
        return this.instance;
    }
    /**
     * Inicia todas las rutas de la aplicación
    */
    protected initRoutes(): void {
        this.router.post('/crearRegistro', this.postCrearRegistro.bind(this));
        this.router.get('/consultarRegistro', this.getConsultarRegistro.bind(this));
        this.router.get('/consultarRegistros', this.getConsultarRegistros.bind(this));
        this.router.post('/eliminarRegistro', this.postEliminarRegistro.bind(this));

    }

    /**
     * Ruta POST /crearRegistro
     * Crea un registro
    */
     private async postCrearRegistro(req: Request, res: Response) {
        try {
            console.log(req.body);
            await db.Proyecto.create(req.body);
            console.log("Registro exitoso!");
            res.status(200).send("Registro exitoso!");
        } catch (err: any) {
            console.log(err);
            res.status(500).send("Error fatal:" + err);
        }
    }

    /**
     * Ruta GET /consultarRegistro
     * Consulta un registro por id
    */
    private async getConsultarRegistro(req: Request, res: Response) {
        try {
            const data = await db.Proyecto.findAll({
                where: {
                    id: req.body.id
                }})
            console.log("Consulta exitosa");
            res.status(200).send(data);
        } catch (err: any) {
            console.log(err);
            res.status(500).send("Error fatal:" + err);
        }
    }

    /**
     * Ruta GET /consultarRegistros
     * Consulta todos los registros 
     * SELECT * FROM TABLE Proyectos
    */
     private  async getConsultarRegistros(req: Request, res: Response) {
        try {
            console.log("Prueba consultar registros exitosa")
            const data = await db.Proyecto.findAll()
            res.status(200).send(data);
        } catch (err: any) {
            console.log(err);
            res.status(500).send("Error fatal:" + err);
        }
    }


    /**
     * Ruta POST /eliminarRegistro
     * Elimina un registro registro por id
    */
     private async postEliminarRegistro(req: Request, res: Response) {
        try {
            console.log(req.body);
            await db.Proyecto.destroy({
                where: {
                    id: req.body.id
                }});
            console.log("Registro id: %s eliminado!", req.body.id);
            res.status(200).send("Registro eliminado");
        } catch (err: any) {
            console.log(err);
            res.status(500).send("Error fatal:" + err);
        }
    }
}

export default Base;