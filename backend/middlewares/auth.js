 const jwt = require('jsonwebtoken');
 const authenticate = async (req,res,next)=>{
    const token = req.header('Authorization');
    if(!token) return res.status(401).send('Access Denied. No Token Provided');
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRETKEY);
        req.user = decoded;
        next();
    }catch(err){
        res.status()
    }

}
