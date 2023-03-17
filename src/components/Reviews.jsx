import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getReviews } from "../utils/api";
const Reviews = () => {
	const [reviews, setReviews] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getReviews()
			.then((response) => {
				setReviews(response.data.reviews);
				setIsLoading(false);
			})
			.catch((error) => {
				console.error("Error fetching reviews:", error);
				setIsLoading(false);
			});
	}, []);

	return (
		<div>
			<h2>Reviews</h2>
			{isLoading ? (
				<p>Loading reviews...</p>
			) : (
				<section>
					<ul className="list">
						{reviews.map((review) => (
							<div className="box" key={review.review_id}>
								<li>
									<h2 className="reviewTitle">{review.title}</h2>
									<img
										src={review.review_img_url}
										alt={review.review_title}
										width="150px"
										height="150px"
									/>
									<p className="category">Category: {review.category}</p>
									<p>Author: {review.owner}</p>
									<div>Date Posted: {review.created_at}</div>
									<p>Votes: {review.votes}</p>
									<Link to={`/reviews/${review.review_id}`}>
										<button className="button">Read More...</button>
									</Link>
								</li>
							</div>
						))}
					</ul>
				</section>
			)}
		</div>
	);
};

export default Reviews;
