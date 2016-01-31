//===-------- content.js - implements scan for deletion --------===//
//
//	Searches the current Facebook page context for "Like" features
//	and removes them. This happens on interval only on the client-
//	side. Meanwhile, the user is still able to "Like" posts on the
//	site - they just won't be able to see it. The recipient of the
//	user's likes will receive the like regardless.
//
//===-----------------------------------------------------------===//

function scanParallelIteration() {
	var likeSentence = document.getElementsByClassName("UFILikeSentence"),
		likeButton = document.getElementsByClassName("UFICommentLikeButton");

	for(var i = 0; i < likeSentence.length; i++) {
		likeSentence[i].remove();
	}

	for(var j = 0; j < likeButton.length; j++) {
		likeButton[j].remove();
	}
}

window.setInterval(scanParallelIteration, 1);