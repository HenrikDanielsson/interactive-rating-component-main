import thanks from './images/illustration-thank-you.svg';
import star from './images/icon-star.svg';
import './App.css';

function App() {
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div className="app">
			<main>
				<section class="start">
					<div class="star mb2">
						<img src={star} />
					</div>
					<h1>How did we do?</h1>
					<p>
						Please let us know how we did with your support request. All
						feedback is appreciated to help us improve our offering!
					</p>
					<ul className="mb2">
						<li className="star">1</li>
						<li className="star">2</li>
						<li className="star">3</li>
						<li className="star">4</li>
						<li className="star">5</li>
					</ul>
					<button onClick={(e) => handleSubmit(e)}>Submit</button>
				</section>

				<section className="end hidden">
					<img className="mt1 mb2" src={thanks} />
					<p className="mb2">
						<span className="boxed">
							You selected <span data-rating>5</span> out of 5
						</span>
					</p>
					<p claclassNamess="big">Thank you!</p>
					<p>
						We appreciate you taking the time to give a rating. If you ever need
						more support, don’t hesitate to get in touch!
					</p>
				</section>
			</main>
		</div>
	);
}

export default App;
