const jwt = require("jsonwebtoken");

const verifyToken=(token)=>{
    return new Promise((resolve, reject)=>{
        jwt.verify(token, "MYSECRETKEY", (err, user)=>{
            if(err){
                return reject(err);
            }

            resolve(user);
        })
    })
}

module.exports = ()=>{
    return async(req, res, next)=>{
        try{
            if(!req.headers.authorization){
                res.send("Headers not provided or invalid")
            }
            if(!req.headers.authorization.startsWith("Bearer ")){
                res.send("Headers not provided or invalid")
            }

            var token  = req.headers.authorization.split("Bearer ")[1];
            const user = await verifyToken(token);
            // console.log(user.user[0])
            req.user = user.user[0];
            next()
        }
        catch(e){
            res.send(e.message);
        }
    }
}