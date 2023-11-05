import { Sequelize, DataTypes } from 'sequelize';
import { createHmac } from 'node:crypto'
    const sequelize = new Sequelize("freedb_nutripalDB","freedb_todos","gQu?nyPUn@B5mW9",{
    dialect: "mysql",
    host:"sql.freedb.tech",
    port:3306,
});

function hashString() {
    // Convert the string to bytes (Uint8Array)
    const inputString = Math.random()
    const secret = "ini saltnya"
    const hash = createHmac('sha256', secret)
        .update(String( inputString ))
        .digest('hex');
    return hash;
}

const Todos =  sequelize.define('Todos', {

    id_todo: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue:  hashString
    },
    status: {
        type: DataTypes.STRING(20),
        defaultValue: "ACTIVE"
    },
    todo: {
        type: DataTypes.TEXT,
        allowNull: false
    },
}
);




if (sequelize.authenticate()) console.log("connection success")

await sequelize.sync()
Todos.create({
    todo: "iyain deh"
})