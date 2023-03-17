import axios from "axios";

const API_URL = "https://nc-games-8s4d.onrender.com/api";

export const getReviews = () => {
	return axios.get(`${API_URL}/reviews`);
};

export const getReviewById = (review_id) => {
	return axios.get(`${API_URL}/reviews/${review_id}`);
};

export const getCommentsForReview = (review_id) => {
	return axios.get(`${API_URL}/reviews/${review_id}/comments`);
};

export const patchReviewVotes = (review_id, inc_votes) => {
	return axios.patch(`${API_URL}/reviews/${review_id}`, { inc_votes });
};
