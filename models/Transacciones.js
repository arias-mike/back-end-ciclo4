const conexion = require("../db/ConectionDB");

const Transacciones = conexion.Schema({
    usuario: {
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
    },
    proveedor: {
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
    },
    productos: {
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
    },
    totalCompra: {
        type: Number
    },
    codigoCompra: {
        type: String
    },
    tipoTransaccion: {
        type: String
    },
    comprador: {
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
    },
    vendedor: {
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
    colection: "Transacciones",
    versionKey:false
});

module.exports = conexion.model("Transacciones", Transacciones);