errortoenglish
--------------

Translate IE JavaScript error messages to english

```
npm install errortoenglish
```

[![Build Status](https://travis-ci.org/Muscula/errortoenglish.png)](https://travis-ci.org/Muscula/errortoenglish)

[![NPM version](https://badge.fury.io/js/errortoenglish.png)](http://badge.fury.io/js/errortoenglish)

[![Dependency Status](https://gemnasium.com/Muscula/errortoenglish.png)](https://gemnasium.com/Muscula/errortoenglish)


usage
-----
```js
errorToEnglish = require("errortoenglish");
errorToEnglish("オーバーフローしました。", function(err, translation){
   translation === "Overflow";
}
```

I use this in [Muscula](http://muscula.com), to translate errors logged.
