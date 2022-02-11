function translateJSONtoMysql(jsonFileName) {   // 把json文件转换到数据库
    const fs = require('fs');
    const mysql = require('mysql');
    var filePath = jsonFileName;
    var realName = jsonFileName.split('.')[0]
    fs.readFile(filePath, 'utf-8', (err, data) => {
        var sqlconnection = mysql.createConnection({
            host: '192.168.0.106',
            user: 'root',
            password: '',
            database: 'wechatrecord'
        });
        sqlconnection.connect();
        var sql = `create table ${realName}(`;
        if (err) { console.log(err); }
        else {
            var dataObj = JSON.parse(data);
            var keys = Object.keys(dataObj[0]);
            for (var k = 0; k < keys.length; k++) {
                sql = sql + keys[k] + ' varchar(300),'
            }
            sql = sql.substring(0, sql.length - 1);
            sql = sql + ');';
            sqlconnection.query(sql, function (err, result) {
                if (err) {
                    console.log('[SELECT ERROR] - ', err.message);
                    return;
                }
            });

            for (var i = 0; i < dataObj.length; i++) {
                var insertSql = `insert into ${realName} values(`;
                for (var j = 0; j < keys.length; j++) {
                    insertSql = insertSql + "'" + Object.values(dataObj[i])[j] + "',";
                }
                insertSql = insertSql.substring(0, insertSql.length - 1);
                insertSql = insertSql + ');';
                sqlconnection.query(insertSql, function (err, result) {
                    if (err) {
                        console.log('[SELECT ERROR] - ', err.message);
                        return;
                    }
                });
            }
        }
    })
}
translateJSONtoMysql('result.json') 
