export default function isAdmin(req, res, next){ 
    if (req.user.admin == false) res.status(400).json({Error:"You arent authorizated of enter this page"})
    next() 
}