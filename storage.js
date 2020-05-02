if (!window) {
    throw new Error(
      "storage works only in browser that support local and Sesssion Storage."
    );
  }
  
  /**
   *
   * @param {Object} config
   */
  function Storage(config) {
    let newConfig = Object.assign(
      {},
      { type: localStorage, async: false },
      config
    );
    if (
      !newConfig.type &&
      (newConfig.type === localStorage || newConfig.type === sessionStorage)
    ) {
      throw new TypeError(
        "config type should be localStorage or sessionStorage."
      );
    }
  
    const { type, async } = newConfig;
  
    function wrapPromise(value) {
      return async ? Promise.resolve(value) : value;
    }
  
    this.get = function(key) {
      return wrapPromise(JSON.parse(type.getItem(key)));
    };
  
    this.set = function(key, value) {
      return wrapPromise(type.setItem(key, JSON.stringify(value)));
    };
  
    this.delete = function(key) {
      return wrapPromise(delete type[key]);
    };
  }
  
  export default Storage;
  