
const express = require("express");

const path = require("path");
const PORT = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const serversRoutes = require('./routes/servers.js');

express()
	.use(express.static(path.join(__dirname, "public")))
	.use(bodyParser.urlencoded({ extended: false }))
	.use(bodyParser.json())
	.use(serversRoutes)
	.set("trust proxy", true)
	.engine("html", require("ejs").renderFile)
	.set("view engine", "html")
	.set("views", path.join(__dirname, "views"))

	/* page */
	.get("/", (req, res) => res.render("home"))

	.get("/csgo-boosting", (req, res) => res.render("csgo-boosting"))
	.get("/facelt-boosting", (req, res) => res.render("facelt-boosting"))
	.get("/esea-boosting", (req, res) => res.render("esea-boosting"))
	.get("/esportal-boosting", (req, res) => res.render("esportal-boosting"))
	.get("/blog", (req, res) => res.render("blog"))
	.get("/article", (req, res) => res.render("article"))
	.get("/faq", (req, res) => res.render("faq"))
	.get("/termsOfService", (req, res) => res.render("termsOfService"))
	.get("/contact", (req, res) => res.render("contact"))
	.get("/accounts", (req, res) => res.render("accounts"))
	.get("/account-sell", (req, res) => res.render("account-sell"))
	.get("/checkout", (req, res) => res.render("checkout"))
	.get("/success", (req, res) => res.render("success"))
	.get("/fail", (req, res) => res.render("fail"))

	.listen(PORT, () => console.log(`Listening on ${PORT}`))


