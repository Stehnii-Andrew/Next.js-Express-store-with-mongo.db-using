import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";
import "./ctrl/dbcontroller.js";
// import * as dbctrl from "../ctrl/dbcontroller.js";

// import mongoose from "mongoose";
// import UserModel from "./models/product.js"



import indexRouter from "./routes/index.js";
import adminRouter from "./routes/admin.js";

const app = express();

// view engine setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join('./public')));
app.use(cors({origin: ["http://localhost:3000"]}));
app.set('view engine', 'ejs');

app.use('/', indexRouter);
app.use('/', adminRouter);


// console.log(dbctrl.findItems());


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



export default app;
