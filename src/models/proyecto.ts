//
import {Model} from 'sequelize';

interface ProyectoAttributes{
    id:number;
    pregnancies:number;
    glucose:number;
    bloodpressure:number;
    skinthickness:number;
    insulin:number;
    bmi:number;
    diabetespedigree:number;
    age:number;
    outcome:boolean;
}

module.exports = (sequelize: any, DataTypes: any)=>{
    class Proyecto extends Model<ProyectoAttributes> implements ProyectoAttributes{
        id!:number;
        pregnancies!:number;
        glucose!:number;
        bloodpressure!:number;
        skinthickness!:number;
        insulin!:number;
        bmi!:number;
        diabetespedigree!:number;
        age!:number;
        outcome!:boolean;

        static associate(models:any){
            // Relaciones en la base de datos
            /*
            Proyecto.belongsToMany(models.User, {through: 'AssignacionProyecto}) // Muchos a muchos (Tabla intermedia)
            */
        }
    }

    Proyecto.init({
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        pregnancies: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        glucose: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        bloodpressure: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        skinthickness: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        insulin: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        bmi: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        diabetespedigree: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        age: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        outcome: {
          type: DataTypes.BOOLEAN,
          allowNull: false
        }
      }, {
        sequelize,
        modelName: 'Proyecto',
      });
      return Proyecto;
};