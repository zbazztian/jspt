var express = require('express');

express().get('/some/path', function(req, res) {
    var foo = req.query;
    if (typeof foo.someparam !== 'string') {
        foo.someparam.indexOf()
    }
});
