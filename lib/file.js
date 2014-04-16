'use strict';

var fs = require('fs');
var isReadable = require('isstream').isReadable;
var Promise = require('bluebird');

module.exports = File;

function File(id, options) {
  this.id = id;
  this.options = options || {};
}

File._save = function (stream, cb) {
  throw new Error('Not implemented.');
};

File._get = function (id, cb) {
  throw new Error('Not implemented.');
};

File.save = function (stream) {
  if (typeof stream === 'string') {
    stream = fs.createReadStream(string);
  }

  if (!isReadable(stream)) {
    throw new Error('The first argument must to be a readable stream.');
  }

  return new Promise(function (resolve, reject) {
    this._save(stream, function (err, id, options) {
      if (err) {
        reject(err);
      } else {
        if (!(options.url && options.path)) {
          throw new Error('options.url or options.path is not a String');
        }
        var file = new File(id, options);
        resolve(file);
      }
    });
  }.bind(this));
};

File.get = function (id) {
  return new Promise(function (resolve, reject) {
    this._get(id, function (err) {
      if (err) {
        reject(err);
      } else {
        if (!(options.url && options.path)) {
          throw new Error('options.url or options.path is not a String');
        }
        var file = new File(id, options);
        resolve(id, options);
      }
    });
  }.bind(this));
};

Object.defineProperty(File.prototype, 'url', {
  get: function () {
    return this.options.url;
  }
});

Object.defineProperty(File.prototype, 'url', {
  get: function () {
    return this.options.path;
  }
});
