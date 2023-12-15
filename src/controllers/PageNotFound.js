export function pageNotFoundGET(req, res){ 
    res.render("pageNotFound");
}

export function pageNotFoundPOST(req, res){ 
    res.status(404).json({
        Method:"POST", 
        Details:"Page not found"
    })
}

export function pageNotFoundPUT(req, res){ 
    res.status(404).json({
        Method:"PUT", 
        Details:"Page not found"
    })
}

export function pageNotFoundDELETE(req, res){ 
    res.status(404).json({
        Method:"DELETE", 
        Details:"Page not found"
    })
}