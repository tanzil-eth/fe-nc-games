import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getReviewById } from "../utils/api.js";

const SingleReview = (props) => {
	const [singleReview, setSingleReview] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const { review_id } = useParams();

	useEffect(() => {
		setIsLoading(true);
		getReviewById(review_id)
			.then(({ data }) => {
				setSingleReview(data.review);
				setIsLoading(false);
			})
			.catch((error) => {
				console.error("Error fetching review:", error);
				setIsLoading(false);
			});
	}, [review_id]);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<section className="list">
			<ul className="largeBox">
				<li>
					<h2>{singleReview.title}</h2>
					<h3>Author:{singleReview.owner}</h3>
					<img
						className="imageLeft"
						src={singleReview.review_img_url}
						alt={singleReview.title}
					/>
					<h3>About the Game:</h3>
					<p>Category: {singleReview.category}</p>
					<p>Designer: {singleReview.designer}</p>
					<p>Votes: {singleReview.votes}</p>
					<div className="reviewBodyBox">
						<strong>Review:</strong>
						<br></br>
						{singleReview.review_body}
					</div>

					<h3>Comments:</h3>
					<Link to={`/api/reviews/${singleReview.review_id}/comments`}>
						Check out the comments for this review here! <br></br> So far we
						have {singleReview.comment_count}, why don't you say your piece?
					</Link>
				</li>
			</ul>
		</section>
	);
};

export default SingleReview;
