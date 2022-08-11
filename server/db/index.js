// CONNECTION
const { Pool } = require('pg');
const client = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
});

// DEFAULT QUERIES
const query = async (text, params) => await client.query(text, params);
const queryWithError = async (text, params) => {
    /**
     * Use this query to create or insert data.
     * This will return false if there was an error in the request.
     */
    let error = false;
    await client.query(text, params).catch(_ => (error = true));
    return !error;
};

// USERS
const userQueries = {};

// Here's a sample test query
userQueries['getAllUserAges'] = async () => {
    // query all user ages
    const response = await client.query('SELECT user_age FROM users');
    // If we don't have any rows in our response or no 'rows' property, return 0
    if (!response.rows?.length > 0) return 0;

    // Add all ages and return
    return Number(response.reduce((curr, nxt) => curr.user_age + nxt.user_age));
};

userQueries['getUserData'] = async userId => {
    const response = await client.query(
        'SELECT * FROM users WHERE user_id=$1',
        [userId]
    );
    if (!response.rows?.length > 0) return null;
    return response.rows[0];
};

// EXPORTS
module.exports = {
    // Basic Queries
    query,
    queryWithError,

    // Predefined user queries
    ...userQueries,
};
