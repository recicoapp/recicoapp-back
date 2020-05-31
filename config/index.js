//port
process.env.PORT = process.env.PORT || 3000;

//environment
process.env.NODE_ENV = process.env.NODE_ENV || "dev";

//expiration time
process.env.TOKEN_EXPIRATION = 60 * 60 * 24 * 30;

//seed for jwt
process.env.SEED = process.env.SEED || "seed-en-dev";

//BD
let urlDB;

if (process.env.NODE_ENV === "dev") {
  urlDB = "mongodb://localhost:27017/recicoAppDB";
} else {
  urlDB = process.env.MONGO_URI;
}
process.env.URLDB = urlDB;
