import express from "express";
import bodyParser from "body-parser";

//for database connection 
import pg from "pg";

const db = new pg.Client({
  user: "postgres",
  password: "pass",
  host: "localhost",
  port: 5432,
  database: "auth_l1",
});
db.connect();


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  console.log("\n---------From Registration--------");
  const username = req.body.username;
  const password = req.body.password;
  console.log(username);
  console.log(password);

  try {

    const checkResult = await db.query('select * from users where email=$1', [username])

    if (checkResult.rows.length <= 0) {
      const result = await db.query("insert into users(email,password) values($1,$2) RETURNING *", [username, password]);
      // console.log("Registration : ", result);
      res.render("secrets.ejs");
    } else {
      res.send("emil alrady exist");
    }

  } catch (error) {
    console.log("Error while registration : ", error);
  } finally {
    db.end();
  }
});

app.post("/login", async (req, res) => {
  console.log("\n----------From Login--------------");
  const username = req.body.username;
  const password = req.body.password;
  // console.log(username);
  // console.log(password);
  try {

    const checkResult = await db.query("select * from users where email=$1 and password=$2", [username, password]);

    if (checkResult.rows.length > 0) {
      res.render("secrets.ejs");
    }
    else {
      res.send("Email and Password does not math. Please enter valid credentials.");
    }

  } catch (error) {
    console.log("Erro occured : ", error);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
