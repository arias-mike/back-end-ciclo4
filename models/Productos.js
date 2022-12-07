const conexion = require("../db/ConectionDB");

const Productos = conexion.Schema({
    nombre: {
        type: String
    },
    codigo: {
        type: String
    },
    cantidad: {
        type: Number
    },
    precioVenta: {
        type: Number
    },
    precioCompra: {
        type: Number
    },
    stockMinimo: {
        type: Number
    },
    descripcion: {
        type: String
    },
    unidadMedida: {
        type: String
    }
}, {
    colection: "Productos",
    versionKey:false
});

module.exports = conexion.model("Productos", Productos);