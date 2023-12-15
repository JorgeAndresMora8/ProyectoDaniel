export function creditCartFormValidation({cardCode, password}){ 
    if(!cardCode || cardCode.lenght<=0) throw new Error("card code space missing"); 
    if(!password || password.lenght<=0) throw new Error("card password missing")
}