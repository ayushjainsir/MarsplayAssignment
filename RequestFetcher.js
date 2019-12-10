const request = require('request');
const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://fchhltfc:vcyFNRGGWwzAIXdQPiTMXcEXz5nYAYLV@satao.db.elephantsql.com:5432/fchhltfc';

request('https://my-json-server.typicode.com/ayushjainsir/MarsplayAssignment/db', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
console.log(res.body);
console.log(res.body.posts);
processAllQuery(res.body);

});

async function processAllQuery(res){
	
	const client = new pg.Client(connectionString);
	client.connect();
	for(var i =0;i<res.posts.length;i++){
		var qry= queryForPosts(res.posts[i].id,res.posts[i].title);
		console.log(qry);
		await inserIntoDB(qry, client);
	}
	for(var i =0;i<res.comments.length;i++){
		var qry= queryForComments(res.comments[i].body,res.comments[i].postId);
		console.log(qry);
		await inserIntoDB(qry, client);
	}
	var qry= queryForProfile(res.profile.name);
	console.log(qry);
	await inserIntoDB(qry, client);
	client.end();	
}

async function inserIntoDB(qry, client) {
	
	let result = await client.query(qry);
	console.log("query successfuly insterted"+result);
}

function queryForPosts(id, title){
	return "INSERT INTO fchhltfc.post_aj (id, tittle) VALUES("+id+", '"+title+"');";
}
function queryForComments(body, post_id){
	return "INSERT INTO fchhltfc.comments_aj (body, post_id) VALUES('"+body+"', "+post_id+");";
}
function queryForProfile(name){
	return "INSERT INTO fchhltfc.profile_aj(name) VALUES('"+name+"')";
}