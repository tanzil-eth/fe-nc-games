import React, { useState, useEffect } from "react";
import { getCommentsForReview } from "../utils/api.js";

const Comments = ({ review_id }) => {
	const [comments, setComments] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		getCommentsForReview(review_id)
			.then(({ data }) => {
				setComments(data.comments);
				setIsLoading(false);
			})
			.catch((error) => {
				console.error("Error fetching comments:", error);
				setIsLoading(false);
			});
	}, [review_id]);

	if (isLoading) {
		return <div>Loading comments...</div>;
	}

	return (
		<div className="comments-container">
			{comments.map((comment) => (
				<div key={comment.comment_id} className="comment-box">
					<p>{comment.body}</p>
					<p>Votes: {comment.votes}</p>
					<p>Author: {comment.author}</p>
					<p>Created at: {comment.created_at.toString()}</p>
				</div>
			))}
		</div>
	);
};

export default Comments;
