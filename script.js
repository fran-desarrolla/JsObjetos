// defino el objeto que voy a utilizar mediante class
const precioPanComun = 90
const precioPanPapa = 100
const precioCarne = 150
const precioPollo = 200
const precioQueso = 40
const precioJamon = 70
const precioLechuga = 30
const precioTomate = 45

class Combo {
    constructor(pan, precioPan, medallon, cantidadMedallon, precioMedallon, queso, jamon, lechuga, tomate, precioQueso, precioJamon, precioLechuga, precioTomate) {

        this.pan = pan;
        this.precioPan = precioPan;
        this.medallon = medallon;
        this.cantMedallon = cantidadMedallon;
        this.precioMedallon = precioMedallon;
        this.queso = queso;
        this.jamon = jamon;
        this.lechuga = lechuga;
        this.tomate = tomate;
        this.precioQueso = precioQueso;
        this.precioJamon = precioJamon;
        this.precioLechuga = precioLechuga;
        this.precioTomate = precioTomate;
    }
    seleccionaPan() {
        this.pan = prompt("seleccione el tipo de pan que desea (normal - de papa)")
        while (this.pan !== "normal" && this.pan !== "de papa" && this.pan !== "fin") {
            this.pan = prompt("seleccione el tipo de pan que desea (normal - de papa)")
        }
        if (this.precioPan == "normal") {
            this.pan = precioPanComun

        } else {

            this.precioPan = precioPanPapa
        }

        console.log("Pan " + this.pan + ": $" + this.precioPan)

    }
    seleccionaMedallon() {

        this.medallon = prompt("seleccione el tipo de medallon que desea (carne - pollo)")

        while (this.medallon !== "carne" && this.medallon !== "pollo") {
            medallon = prompt("seleccione el tipo de medallon que desea (carne - pollo)")
        }

        this.cantMedallon = prompt("seleccione la cantidad de medallones (1 - 2 - 3)")

        while (isNaN(this.cantMedallon) || this.cantMedallon < 1 || this.cantMedallon > 3) {
            this.cantMedallon = prompt("seleccione la cantidad de medallones (1 - 2 - 3)")
        }
        this.cantMedallon = parseInt(this.cantMedallon)

        if (this.medallon == "pollo") {
            this.precioMedallon = precioPollo * this.cantMedallon
        } else {
            this.precioMedallon = precioCarne * this.cantMedallon
        }


        if (this.cantMedallon == 1) {
            console.log(this.cantMedallon + " medallón de " + this.medallon + ":$" + this.precioMedallon)
        } else {
            console.log(this.cantMedallon + " medallones de " + this.medallon + ":$" + this.precioMedallon)
        }
    }


    seleccionaQueso() {
        this.queso = prompt("¿Desea su hamburguesa con queso? (sí - no)").toLowerCase()


        while (this.queso !== "si" && this.queso !== "no" && this.queso !== "sí") {
            this.queso = prompt("¿Desea su hamburguesa con queso? (sí - no)").toLowerCase()
        }

        if (this.queso == "no") {
            console.log("Sin queso")
        } else {
            this.precioQueso = precioQueso
            console.log("Con queso: $" + this.precioQueso)
        }
    }

    seleccionaJamon() {
        this.jamon = prompt("¿Desea su hamburguesa con jamón? (sí - no)").toLowerCase()


        while (this.jamon !== "si" && this.jamon !== "no" && this.jamon !== "sí") {
            this.jamon = prompt("¿Desea su hamburguesa con queso? (sí - no)").toLowerCase()
        }

        if (this.jamon == "no") {
            console.log("Sin jamón")
        } else {
            this.precioJamon = precioJamon
            console.log("Con jamón: $" + this.precioJamon)
        }
    }

    seleccionaLechuga() {
        this.lechuga = prompt("¿Desea su hamburguesa con lechuga? (sí - no)").toLowerCase()


        while (this.lechuga !== "si" && this.lechuga !== "no" && this.lechuga !== "sí") {
            this.lechuga = prompt("¿Desea su hamburguesa con lechuga? (sí - no)").toLowerCase()
        }

        if (this.lechuga == "no") {
            console.log("Sin lechuga")
        } else {
            this.precioLechuga = precioLechuga
            console.log("Con lechuga: $" + this.precioLechuga)
        }
    }

}

const combo1 = new Combo()

combo1.seleccionaPan()
combo1.seleccionaMedallon()
combo1.seleccionaQueso()
combo1.seleccionaJamon()
combo1.seleccionaLechuga()