const users=require('../users.json');
function getA11Users(req,res){
    try{
        res.json(users)

    }catch(err){
        console.log(err)
    }
}
function getUsers(req,res){
    try{
        let id=parseInt(req.params.id);
    let user=users.find((user)=>user.id===id);
    res.json(user)
}catch(err)
{
    console.log(err)
}
}

module.exports={
    getA11Users,
    getUsers
}