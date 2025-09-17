const db = require("../config/db");

const User = {
  create: (name, email, password, callback) => {
    const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    db.query(sql, [name, email, password], callback);
  },

  findByEmailAndPassword: (email, password, callback) => {
    const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
    db.query(sql, [email, password], callback);
  }
};

module.exports = User;
