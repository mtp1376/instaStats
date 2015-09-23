nodes = window._sharedData.entry_data.ProfilePage[0].user.media.nodes;

likes = {count: 0, index: 0};
comments = {count: 0, index: 0};

for (i = 0; i< nodes.length; i++){
	if (nodes[i].likes.count > likes.count){
		likes.count = nodes[i].likes.count;
		likes.index = i;
	}
	if (nodes[i].comments.count > comments.count){
		comments.count = nodes[i].comments.count;
		comments.index = i;
	}
}

console.log(nodes[likes.index]); // for most liked
console.log(nodes[comments.index]); // for most commented
