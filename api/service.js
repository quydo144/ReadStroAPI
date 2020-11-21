const mssql = require("../dbConnect.js");
const pool = mssql.pool;
mssql.poolConnection;

module.exports = {
    deleteHistory: async (uid_user, callBack) => {
        await pool.request()
            .input('uid_user', mssql.sql.VarChar, uid_user)
            .query('delete from HistoryReadStory where uid_user = @uid_user',
                (error, results, fields) => {
                    if (error) {
                        callBack(error);
                    }
                    return callBack(null, results);
                }
            );
    },

    createHistory: async (data, callBack) => {
        await pool.request()
            .input('uid_user', mssql.sql.NVarChar, data.uid_user)
            .input('id_story', mssql.sql.NVarChar, data.id_story)
            .input('chapter', mssql.sql.Int, data.chapter)
            .input('location', mssql.sql.VarChar, data.location)
            .query('INSERT INTO HistoryReadStory(uid_user, id_story, chapter, location) VALUES (@uid_user, @id_story, @chapter, @location)',
                (error, results, fields) => {
                    if (error) {
                        callBack(error);
                    }
                    return callBack(null, results);
                }
            );
    },

    updateHistory: async (data, callBack) => {
        await pool.request()
            .input('uid_user', mssql.sql.NVarChar, data.uid_user)
            .input('id_story', mssql.sql.NVarChar, data.id_story)
            .input('chapter', mssql.sql.Int, data.chapter)
            .input('location', mssql.sql.VarChar, data.location)
            .query('UPDATE HistoryReadStory set chapter = @chapter, location = @location WHERE uid_user = @uid_user and id_story = @id_story',
                (error, results, fields) => {
                    if (error) {
                        callBack(error);
                    }
                    return callBack(null, results);
                }
            );
    },

    getHistory: async (uid_user, callBack) => {
        var value = uid_user;
        await pool.request()
            .input('value', mssql.sql.VarChar, value)
            .query("select * from HistoryReadStory where uid_user = @value",
                (error, results, fields) => {
                    if (error) {
                        callBack(error);
                    }
                    return callBack(null, results.recordset[0]);
                }
            );
    }
};