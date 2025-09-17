const db = require("../config/db"); // ✅ correct


// Signup
exports.signup = (req, res) => {
  const { email, password } = req.body;

  const sqlCheck = "SELECT * FROM users WHERE email = ?";
  db.query(sqlCheck, [email], (err, result) => {
    if (err) return res.status(500).json({ message: "Database error" });
    if (result.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }

    const sqlInsert = "INSERT INTO users (email, password) VALUES (?, ?)";
    db.query(sqlInsert, [email, password], (err, result) => {
      if (err) return res.status(500).json({ message: "Error creating user" });
      res.json({ success: true, message: "Signup successful!" });
    });
  });
};

// Login
exports.login = (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
  db.query(sql, [email, password], (err, result) => {
    if (err) return res.status(500).json({ message: "Database error" });
    if (result.length > 0) {
      res.json({ success: true, user: result[0] });
    } else {
      res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  });
};
