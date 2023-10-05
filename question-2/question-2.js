function resolvedPromise(message, timeout) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(message);
      }, timeout);
    });
  } 

  function rejectedPromise(error, timeout) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(error);
      }, timeout);
    });
  }

  resolvedPromise("delayed success!", 500)
    .then((message) => {
      console.log("message:", message);
    });
  
  rejectedPromise("delayed exception!", 500)
    .catch((error) => {
      console.error("error:", error);
    });
  