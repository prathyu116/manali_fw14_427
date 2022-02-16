module.exports=function(permittedRoles){
    return function(req,res,body){
    const user=req.user;

    let isPermitted=false;
    permittedRoles.map(roles=>{

        if(user,roles.include(role)){
         isPermitted==true   
        }
        
    });
    if(!isPermitted){
        return res.status(403).send({message:"permission denied"})
    }
return next();
}
}