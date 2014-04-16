'use strict';

```javascript
var File = require('file');
var localFile = require('local-file');

File.use({
  dir: './public/upload',
  baseurl: '/upload'
});

// ...

var file = yield File.save(stream); // 呼叫 File._save
var file2 = yield File.save(filepath);

var file = yield file.get(id);

file.url; // getter
file.path; // getter
```
