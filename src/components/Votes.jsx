import React, { useState } from "react";
import { patchReviewVotes } from "../utils/api.js";

const Votes = ({ review_id, votes }) => {
	const [voteChange, setVoteChange] = useState(0);
	const [isError, setIsError] = useState(false);

	const handleVote = (voteChange) => {
		setVoteChange((prevVoteChange) => prevVoteChange + voteChange);
		patchReviewVotes(review_id, voteChange)
			.then(() => {
				setIsError(false);
			})
			.catch((error) => {
				console.error("Error updating votes:", error);
				setIsError(true);
				setVoteChange((prevVoteChange) => prevVoteChange - voteChange);
			});
	};

	return (
		<div>
			<p>Votes: {votes + voteChange}</p>
			<button onClick={() => handleVote(1)}>Vote Up</button>
			<button onClick={() => handleVote(-1)}>Vote Down</button>
			{isError && <p>Could not update votes. Please try again later.</p>}
		</div>
	);
};

export default Votes;
