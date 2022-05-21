import { useState } from 'react';
import thanks from './images/illustration-thank-you.svg';
import star from './images/icon-star.svg';
import './App.css';

function App() {
	const [vote, setVote] = useState(0);
	const [voted, setVoted] = useState(false);
	const numbers = [1, 2, 3, 4, 5];

	const handleSubmit = (e) => {
		e.preventDefault();
		if (vote === 0) return;
		setVoted(true);
	};
	const handleStar = (e) => {
		const starElements = document.querySelectorAll('.active');
		starElements.forEach((item) => item.classList.remove('active'));
		e.target.classList.add('active');
		setVote(e.target.innerText);
	};

	const starvoter = numbers.map((number) => (
		<li className="star" key={number} onClick={(e) => handleStar(e)}>
			{number}
		</li>
	));

	return (
		<div className="app">
			<main>
				{!voted && (
					<section className="start">
						<div className="star mb2">
							<img src={star} alt="A star." />
						</div>
						<h1>How did we do?</h1>
						<p>
							Please let us know how we did with your support request. All
							feedback is appreciated to help us improve our offering!
						</p>
						<ul className="mb2">{starvoter}</ul>
						<button onClick={(e) => handleSubmit(e)}>Submit</button>
					</section>
				)}
				{voted && (
					<section className="end">
						<img className="mt1 mb2" src={thanks} alt="Thank you for voting." />
						<p className="mb2">
							<span className="boxed">You selected {vote} out of 5</span>
						</p>
						<p className="big">Thank you!</p>
						<p>
							We appreciate you taking the time to give a rating. If you ever
							need more support, don’t hesitate to get in touch!
						</p>
					</section>
				)}
			</main>
		</div>
	);
}

export default App;
