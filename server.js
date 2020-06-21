const express = require("express");
const PORT = 8080;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));
app.listen(PORT, function () {
  console.log(`server running listening on PORT ${PORT}`);
});
