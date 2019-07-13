# adjective-adjective-animal-lite
### Suitably random and reasonably unique (and fairly adorable) human readable ids

## Usage
The library export is a function. Call the function with the number of adjectives you want before the animal. Default is 2.

``` javascript
var generate = require("adjective-adjective-animal");

generate().then(console.log);
// "supercurious-senior-woodlouse"

generate(5).then(console.log);
// "unquiet-calm-omniscient-ornate-industrious-deer"
```

## Thanks
Thanks to [@a-type](https://github.com/a-type/adjective-adjective-animal/issues) for the word lists