const jwt = require('jsonwebtoken');

const authenticate = async (req, res, next) => {
    
    const { authorization } = req.headers;
    if (!authorization) {
      return  res.status(401).json({ error: "Authorization Token Required" });
    }
    const token = authorization.split(" ")[1];
    try {
        const { id } = jwt.verify(token, process.env.JWT_SECRETKEY);
        req.user = id;
        next()
    } catch (err) {
        console.log(err);
        res.status(401).json({ error: "Unauthorized Token" });
    }
 
}

module.exports = authenticate