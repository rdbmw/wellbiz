var	express	=	require('express');
var	app	=	express();

app.set('port',	(process.env.PORT	||	3000));
app.use('/',	express.static(__dirname));
console.log(__dirname);
app.listen(app.get('port'),		function()	{
		console.log('Server  	started:	http://localhost:'	+	app.get('port')	+	'/');
});
//
var livereload = require('livereload');
var lrserver = livereload.createServer();
lrserver.watch([__dirname]);
