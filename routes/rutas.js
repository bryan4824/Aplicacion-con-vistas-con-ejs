import { Router } from "express"
const router = Router()

router.get("/", function (req, res) {// esta es la ruta para la view de home 
	res.render("home")
})

router.get("/contacto", function (req, res) {// esta en la ruta para la view de contacto
	res.render("contacto")
})

router.get("/info", function (req, res){// esta en la ruta para la view de acerca de nosotros
	res.render("info")
})
export default router// 
