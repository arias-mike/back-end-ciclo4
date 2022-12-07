const conexion = require("../db/ConectionDB");

const Usuarios = conexion.Schema({
    usuario: {
        type: String
    },
    clave: {
        type: String
    },
    rol: {
        type: String
    },
    estado: {
        type: String
    },
    persona: {
        nombres: {
            type: String
        },
        apellidos: {
            type: String
        },
        tipoDoc: {
            type: String
        },
        numDoc: {
            type: String
        },
        direccion: {
            type: String
        },
        telefono: {
            type: String
        },
        correo: {
            type: String,
            required: true,
            unique: true
        }
    }
}, {
    colection: "Usuarios",
    versionKey:false
});

module.exports = conexion.model("Usuarios", Usuarios);