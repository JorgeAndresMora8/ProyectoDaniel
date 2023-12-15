export function authAdmin(req, res, next){ 
    req.user.admin == false ?  res.render("notAdmin"): next();
}