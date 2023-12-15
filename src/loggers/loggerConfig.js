import log4js from "log4js";

log4js.configure({
    appenders:{
        consola:{type:"console"}, 
        errorFiles:{type:"file", filename:"./src/loggers/error.log"}, 
        warnFiles:{type:"file", filename:"./src/loggers/warn.log"}, 
        infoFiles:{type:"file", filename:"./src/loggers/info.log"},

        loggerWarn:{
            type:"logLevelFilter", 
            appender:"warnFiles", 
            level:"warn"
        }, 

        loggerError:{
            type:"logLevelFilter", 
            appender:"errorFiles", 
            level:"error"
        }, 

        loggerInfo:{
            type:"logLevelFilter", 
            appender:"infoFiles", 
            level:"info"
        }
    }, 

    categories:{
        default:{
            appenders:["consola"], 
            level:"trace"
        }, 

        info:{
            appenders:["loggerInfo"], 
            level:"all"
        }, 
        warn:{
            appenders:["loggerWarn", "loggerInfo" ], 
            level:"all"
        }, 
        error:{
            appenders:["loggerError", "loggerInfo"], 
            level:"all"
        }

    }
})

//Loggers to use
export const loggerInfo = log4js.getLogger("info"); 
export const loggerWarn = log4js.getLogger("warn"); 
export const loggerError = log4js.getLogger("error"); 
