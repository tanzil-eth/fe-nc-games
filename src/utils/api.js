import axios from "axios";

export const getReviews = () => {
	return axios.get("https://nc-games-8s4d.onrender.com/api/reviews");
};
