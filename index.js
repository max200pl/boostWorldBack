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

	.get("/", (req, res) => res.render("index"))


	/* blocks */
	.get("/advantages", (req, res) => res.render("advantages"))
	.get("/article-content", (req, res) => res.render("article-content"))
	.get("/article-list", (req, res) => res.render("article-list"))
	.get("/comment-list-small", (req, res) => res.render("comment-list-small"))
	.get("/comment-list", (req, res) => res.render("comment-list"))
	.get("/comment-preview", (req, res) => res.render("comment-preview"))
	.get("/faq-contacts", (req, res) => res.render("faq-contacts"))
	.get("/features", (req, res) => res.render("features"))
	.get("/home-hero", (req, res) => res.render("home-hero"))
	.get("/personal-cabinet-info", (req, res) => res.render("personal-cabinet-info"))
	.get("/privacy-page", (req, res) => res.render("privacy-page"))
	.get("/product-item", (req, res) => res.render("product-item"))
	.get("/product-list-catalog", (req, res) => res.render("product-list-catalog"))
	.get("/product-list-recomendation", (req, res) => res.render("product-list-recomendation"))
	.get("/purchase-error", (req, res) => res.render("purchase-error"))
	.get("/purchase-success", (req, res) => res.render("purchase-success"))
	.get("/service-form", (req, res) => res.render("service-form"))
	.get("/service-hero", (req, res) => res.render("service-hero"))
	.get("/service-list", (req, res) => res.render("service-list"))

	.listen(PORT, () => console.log(`Listening on ${PORT}`));
