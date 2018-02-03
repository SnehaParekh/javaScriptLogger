window.console = (function(originalConsole) {

    if (!window.console || !originalConsole)
        originalConsole = {};
    var isDebugMode = false,
        logList = {
            logs: [],
            errors: [],
            infos: [],
            warnings: []
        }
    return {
        log: function() {
            logList.logs.push(arguments)
            isDebugMode && originalConsole.log && originalConsole.log.apply(originalConsole, arguments);
        },
        error: function() {
            logList.errors.push(arguments)
            isDebugMode && originalConsole.error && originalConsole.error.apply(originalConsole, arguments);
        },
        info: function(v) {
            logList.infos.push(arguments)
            isDebugMode && originalConsole.info && originalConsole.info.apply(originalConsole, arguments);
        },
        warn: function() {
            logList.warnings.push(arguments)
            isDebugMode && originalConsole.warn && originalConsole.warn.apply(originalConsole, arguments);
        },
        debug: function(bool) {
            isDebugMode = bool;
        },
        logList: function() {
            return logList;
        }
    };

}(window.console));