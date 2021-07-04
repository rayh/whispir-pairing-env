import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import path from "path";

// Controllers (route handlers)
import * as homeController from "./controllers/home";

function createApp() {
  // Create Express server
  const app = express();

  // Express configuration
  app.set("port", parseInt((process.env.PORT || 3000) as any));
  app.use(cookieParser());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));

  app.use(
    express.static(path.join(__dirname, "public"), {maxAge: 31557600000})
  );

  /**
   * Primary app routes.
   */
  app.get("/", homeController.index);

  return app;
}

export default createApp;
