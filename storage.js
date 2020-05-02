if(!window) {
    throw new Error("storage works only in browser that support local and Sesssion Storage.");
}

/**
 * 
 * @param {Object} config 
 */
function Storage(config = {type = localStorage, async = false}) {

    if(!config.type && (config.type === localStorage || config.type === sessionStorage)) {
        throw new TypeError("config type should be localStorage or sessionStorage.");
    }
    
    this.get = function(key) {
        
    }

    this.set = function(key, value) {

    }

    this.delete = function(key) {

    }
}

export default Storage;