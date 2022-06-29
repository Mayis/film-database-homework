"use strict";

const personalMovieDB = {
	count: numberOfFilms(),
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	showMyDB() {
		return personalMovieDB.privat ? personalMovieDB : `sorry its private`;
	},
	ratePersonByCount() {
		if (personalMovieDB.count < 10) {
			return "Դուք նայել եք բավականին քիչ ֆիլմեր";
		} else if (numberOfFilms < 30) {
			return "Դուք ֆիլմի սիրահար եք";
		} else {
			return "Դուք կինոման եք !!!";
		}
	},
	yourFvoriteGenres() {
		for (let i = 0; i < 3; i++) {
			let myGenres;
			do {
				myGenres = prompt(`${i + 1} : Ձեր նախընտրելի ժանրը`);
			} while (!isNaN(myGenres));
			personalMovieDB.genres.push(myGenres);
		}
	}
};

function numberOfFilms() {
	let numberOfFilms;
	do {
		numberOfFilms = +prompt("Քանի՞ ֆիլմ եք դիտել այսօր", "");
	} while (isNaN(numberOfFilms) || numberOfFilms <= 0);

	return numberOfFilms;
}
function getFilmAndRate() {
	let a;
	let b;
	for (let i = 0; i < 2; i++) {
		do {
			a = prompt(`${i + 1} : Նշեք վերջին ֆիլմը, որը դիտել եք`);
		} while (a === "" || a === null);
		do {
			b = +prompt(`${i + 1} : 1-10 ինչքա՞ն կգնահատեք այդ ֆիլմը`, "");
		} while (b === 0 || isNaN(b));
		a.trim();
		personalMovieDB.movies[a] = b;
	}
}

getFilmAndRate();
console.log(personalMovieDB);
