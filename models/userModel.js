const db = require('../config/db');
exports.getAllUsers = async()=>{
    const [users] = await db.execute('select * from users');
    return users;
};
