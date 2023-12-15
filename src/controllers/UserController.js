
export async function infoUser(req, res){ 
    const userInfo = req.user
    res.status(200).json(userInfo)
}

export async function logoutUser(req, res){ 
    res.clearCookie("token")
    res.status(200).json({"LOGOUT":"The user logged out succesfully "})
}