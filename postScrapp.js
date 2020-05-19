var postsRAW = document.querySelectorAll('._427x');

var generalReactions = ['Like', 'Love', 'Care', 'Wow', 'Haha', 'Angry', 'Sad'];

class Post {
	constructor(element, id) {
		this.id = id;
		this.element = element;
		this.reactons = element.querySelector('._81hb') ? Number(element.querySelector('._81hb').innerText) : 0;
		this.revealReactionsButton = element.querySelector('._3dlh._3dli');
		this.timestamp = element.querySelector('.timestampContent').innerText;
		this.reactionCount = 0;
		if (element.querySelector('._355t._4vn2')) {
			var str = element.querySelector('._355t._4vn2').innerText;
			str = str.substring(0, str.length - 7);
			this.shareCount = Number(str);
		}
		else {
			this.shareCount = 0;
		}
		this.postURL = `https://www.facebook.com/${element.querySelector('.fsm.fwn.fcg a').getAttribute('href')}`
		if (element.querySelector('a._3hg-._42ft')) {
			var str = element.querySelector('a._3hg-._42ft').innerText;
			str = str.length === 9 ? str.substring(0, str.length - 8) : str.substring(0, str.length - 9);
			this.comments = str;
		}
		else {
			this.comments = 0;
		}
	}

	revealReactions() {
		document.querySelector('a.layerCancel._42ft') ? document.querySelector('a.layerCancel._42ft').click() : null;
		if (this.revealReactionsButton) {
			this.revealReactionsButton.click()
			return true;
		}
		else {
			this.reactions = [];
			return false;
		}
	}

	countEveryReaction() {
		const key = setInterval(() => {
			var parent = document.querySelector(`._4-i2._50f4`);
			if (parent && parent.querySelectorAll(`._43o4._4470 li`)) {
				var reactions = parent.querySelectorAll('._43o4._4470 li');
				this.reactions = {};
				for (let i = 0; i < reactions.length; i++) {
					let reaction = reactions[i];
					const mainEL = reaction.querySelector('span span');
					const mainELAriaLabel = mainEL.getAttribute('aria-label');
					const ReactionType = mainELAriaLabel.split(' ')[mainELAriaLabel.split(' ').length - 1];
					if (generalReactions.includes(ReactionType)) {
						const count = Number(mainEL.innerText);
						this.reactions[ReactionType] = count;
						this.reactionCount += count;
					}
				}
				document.querySelector('a.layerCancel._42ft').click()
				clearInterval(key);
			}
		}, 50);
	}


	logInfo() {
		return console.log(
			"\nElement -", this.element,
			"\nTotal Reactions -", this.reactionCount,
			"\nReactions -", this.reactions,
			"\nShares -", this.shareCount,
			"\ntimestamp -", this.timestamp,
			"\npostURL -", this.postURL,
			"\ncomments -", this.comments
		)
	}

	giveInfo() {
		return {
			totalReactions: this.reactionCount,
			reactions: this.reactions,
			shares: this.shareCount,
			timestamp: this.timestamp,
			postURL: this.postURL,
			comments: this.comments
		}
	}
}

var posts = []

for (var i = 0; i < postsRAW.length; i++) {
	posts.push(new Post(postsRAW[i], i))
}

for (let i = 0; i < posts.length; i++) {
	setTimeout(() => {
		let hasReactions = posts[i].revealReactions();
		if (hasReactions) {
			posts[i].countEveryReaction()
		}
		console.log(i, posts.length);
	}, 1000 * i);
}

function logPostData() {
	for (let i = 0; i < posts.length; i++) {
		let log = posts[i].logInfo();
		console.log(log);
	}
}


function storePostData() {
	const logs = [];
	for (let i = 0; i < posts.length; i++) {
		let log = posts[i].giveInfo();
		logs.push(log);
	}

	return logs;
}
