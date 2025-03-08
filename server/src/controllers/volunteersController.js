import db from "../config/db";

export const getVolunteers = (req, res) => {
  db.query("SELECT * FROM volunteers", (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Database error" });
    }
    res.json(results);
  });
};

export const addVolunteer = (req, res) => {};
