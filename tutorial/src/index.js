import './index.css';
import React from "react";
import ReactDOM from "react-dom/client";

const BookList = () => {
	return (
		<section className='booklist'>
			<Book />
			<Book />
			<Book />
		</section>
	);
};

const Book = () => {
	return (
		<article className='book'>
			<Image />
			<Title />
			<Author />
		</article>
	);
};

const Image = () => (
	<img
		src="https://images-na.ssl-images-amazon.com/images/I/81fyoFoaxlL._AC_UL600_SR600,400_.jpg"
		alt="Dog Man: Twenty Thousand Fleas Under the Sea: A Graphic Novel (Dog Man 11): From the Creator of Captain Underpants"
	/>
);
const Title = () => (
	<h2>
		Dog Man: Twenty Thousand Fleas Under the Sea: A Graphic Novel (Dog Man 11):
		From the Creator of Captain Underpants
	</h2>
);
const Author = () => <h4>Dav Pilkey</h4>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
