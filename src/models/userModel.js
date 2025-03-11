const pool = require("../config/database");

const getUsers = async () => {
    const result = await pool.query("SELECT * FROM users");
    return result.rows;
};

module.exports = { getUsers };
