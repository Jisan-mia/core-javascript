const fs = require("fs");

module.exports = class FileSystem {
  static read(path) {
    return new Promise((resolve, reject) => {
      fs.readFile(path, (err, data) => {
        if (err) reject(err);
        resolve(data);
      });
    });
  }

  static write(path, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, String(content), err => {
            if(err) return reject(err)
            resolve()
        })
    })
  }
};
