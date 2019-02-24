
const nomnoml = require('nomnoml');

const btoa = (data) => Buffer.from(data).toString('base64');

hexo.extend.tag.register('nomnoml', function(args, content){
    var svg = nomnoml.renderSvg('#fill: #ffffff; \n'+content);
    return '<img src="data:image/svg+xml;base64,'+btoa(svg)+'" />';
}, {ends: true});