import JSONStream = require('jsonstream');

var transform: NodeJS.ReadWriteStream;

transform = JSONStream.parse();
transform = JSONStream.parse('*');
transform = JSONStream.parse(['foo/*', 'bar/*']);

transform = JSONStream.stringify();
transform = JSONStream.stringify('{', ',', '}');

transform = JSONStream.stringifyObject();
transform = JSONStream.stringifyObject('{', ',', '}');

// from https://www.npmjs.com/package/JSONStream#examples
{
    var stream = JSONStream.parse(['rows', true, 'doc']); //rows, ANYTHING, doc

    stream.on('data', function(data: any) {
        console.log('received:', data);
    });
    //emits anything from _before_ the first match
    stream.on('header', function (data: any) {
        console.log('header:', data); // => {"total_rows":129,"offset":0}
    });
}

{
    var stream = JSONStream.parse(['rows', true, 'doc', {emitKey: true}]); //rows, ANYTHING, doc, items in docs with keys

    stream.on('data', function(data: any) {
        console.log('key:', data.key);
        console.log('value:', data.value);
    });
}

{
    var stream = JSONStream.parse(['rows', true, 'doc', {emitPath: true}]); //rows, ANYTHING, doc, items in docs with keys

    stream.on('data', function(data: any) {
        console.log('path:', data.path);
        console.log('value:', data.value);
    });
}
