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
        // this.router.get('/readUsers', this.getReadUser.bind(this));
        // this.router.post('/createProyecto', this.postCreateProyecto.bind(this));
        this.router.post('/crearRegistro', this.postCrearRegistro.bind(this));
        this.router.get('/consultarRegistro', this.getConsultarRegistro.bind(this));
        this.router.get('/consultarRegistros', this.getConsultarRegistros.bind(this));
        this.router.post('/eliminarRegistro', this.postEliminarRegistro.bind(this));

    }

    /**
     * Ruta del usuario
     * Consulta un registro
    */
    private getConsultarRegistro(req: Request, res: Response) {
        try {
            console.log("Consulta exitosa")
            res.status(200).send("Consulta exitosa");
        } catch (err: any) {
            console.log(err);
            res.status(500).send("Error fatal:" + err);
        }
    }

    /**
     * Ruta del usuario
     * Consulta multiples registros
    */
     private getConsultarRegistros(req: Request, res: Response) {
        try {
            console.log("Prueba consultar registros exitosa")
            res.status(200).send("Prueba consultar registros exitosa");
        } catch (err: any) {
            console.log(err);
            res.status(500).send("Error fatal:" + err);
        }
    }

    /**
     * Ruta del usuario
     * Crea un registro
    */
     private async postCrearRegistro(req: Request, res: Response) {
        try {
            console.log(req.body);
            // await db.Proyecto.create(req.body);
            console.log("Registro exitoso!");
            res.status(200).send("Registro exitoso!");
        } catch (err: any) {
            console.log(err);
            res.status(500).send("Error fatal:" + err);
        }
    }

    /**
     * Ruta del usuario
     * Elimina un registros registro
    */
     private async postEliminarRegistro(req: Request, res: Response) {
        try {
            console.log(req.body);
            // await db.Proyecto.delete(req.body);
            console.log("Registro eliminado!");
            res.status(200).send("Registro eliminado");
        } catch (err: any) {
            console.log(err);
            res.status(500).send("Error fatal:" + err);
        }
    }
}

export default Base;