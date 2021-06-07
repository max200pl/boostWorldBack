const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;
const bodyParser = require("body-parser");

express()
	.use(express.static(path.join(__dirname, "public")))
	.use(bodyParser.urlencoded({ extended: false }))
	.use(bodyParser.json())
	.set("trust proxy", true)
	.engine("html", require("ejs").renderFile)
	.set("view engine", "html")
	.set("views", path.join(__dirname, "views"))

	.get("/article-content", (req, res) => res.render("article-content"))
	.get("/faq-contacts", (req, res) => res.render("faq-contacts"))
	.get("/privacy-page", (req, res) => res.render("privacy-page"))
	.get("/purchase-error", (req, res) => res.render("purchase-error"))
	.get("/purchase-success", (req, res) => res.render("purchase-success"))

	.listen(PORT, () => console.log(`Listening on ${PORT}`));
