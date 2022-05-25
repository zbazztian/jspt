var express = require('express');

express().get('/some/path', function(req, res) {
    var foo = req.query.someparam;
    if (typeof foo !== 'string') {
        foo.indexOf()
    }
});
