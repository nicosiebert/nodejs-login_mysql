const config = require("./mysqlconfig");
const con = config.connection;

exports.register = async function(email, passw, req, res){
    let verificar =`SELECT email FROM client WHERE email ='${email}'`;
    let crear = `INSERT INTO client ( email, passw) VALUES ('${email}', '${passw}')`;
    await con.query(verificar, (error, results, fields) =>{
        if(error){
            res.send({err:error});
            console.log(error);
        }
        if(results.length > 0){
            res.send({err:"!user"});
        }else{
            con.query(crear, (er, result, field)=>{
                if(er){
                    res.send({tryagain:"tryagain"});
                }else{
                    req.session.user = email;
                    res.send({register:"successfully"});
                    return  
                }
                return
            })
            return

        }
        return
    })
    return
}

exports.login = function login(email, passw, req, res){
    let consulta = `SELECT email, user FROM client WHERE email = '${email}' AND passw = '${passw}'`;
    con.query(consulta, (err, results, fields)=>{
        if(err){
            res.send({err:"!err"});
        }
        if(results.length){
            req.session.user = email;
            res.send({login:"successfully"});
            return
        }else{
            res.send({err:"!user"});
        }
        return
    })
    return

}