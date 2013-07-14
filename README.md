errortoenglish
--------------

Translate IE JavaScript error messages to english

```
npm install errortoenglish
```

usage
-----
```js
errorToEnglish = require("errortoenglish");
errorToEnglish("オーバーフローしました。", function(err, translation){
   translation === "Overflow";
}
```

I use this in [Muscula](http://muscula.com), to translate errors logged. (soon)
