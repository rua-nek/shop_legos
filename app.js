var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var createError = require("http-errors");
var { engine } = require("express-handlebars");
var mainRouter = require("./routes/main");

var app = express();

// thiết lập view engine
app.set("views", path.join(__dirname, "views"));
app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// sử dụng router chính
app.use("/", mainRouter);

// bắt lỗi 404 và chuyển tiếp tới bộ xử lý lỗi
app.use(function (req, res, next) {
  next(createError(404));
});

// bộ xử lý lỗi
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
