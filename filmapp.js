"use strict";
function numberOfFilms() {
	let numberOfFilms;
	do {
		numberOfFilms = +prompt("Քանի՞ ֆիլմ եք դիտել այսօր", "");
	} while (isNaN(numberOfFilms) || numberOfFilms <= 0);

	return numberOfFilms;
}
const personalMovieDB = {
	count: numberOfFilms(),
	movies: {},
	actors: {},
	genres: [],
	privat: true,
	showMyDB() {
		return personalMovieDB.privat ? `sorry its private` : personalMovieDB;
	},
	ratePersonByCount() {
		if (personalMovieDB.count < 10) {
			return "Դուք նայել եք բավականին քիչ ֆիլմեր";
		} else if (personalMovieDB.count < 30) {
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
				// additional way --!isNaN(myGenres) || myGenres.length > 20 || myGenres === null
			} while (!/^\w\D{1,20}$/g.test(myGenres) || myGenres === null);
			personalMovieDB.genres.push(myGenres.trim());
		}
		personalMovieDB.genres.forEach((val, i) =>
			console.log(`GANRES ${i + 1}: ${val}`)
		);
	},

	getFilmAndRate() {
		let a;
		let b;
		for (let i = 0; i < 2; i++) {
			do {
				a = prompt(`${i + 1} : Նշեք վերջին ֆիլմը, որը դիտել եք`);
			} while (a === "" || a === null);
			do {
				b = +prompt(`${i + 1} : 1-10 ինչքա՞ն կգնահատեք այդ ֆիլմը`, "");
			} while (b <= 0 || isNaN(b) || b > 10);
			a.trim();
			personalMovieDB.movies[a] = b;
		}
	},
	isVisibleMyDB() {
		return personalMovieDB.privat
			? (personalMovieDB.privat = false)
			: (personalMovieDB.privat = true);
	}
};
console.log(personalMovieDB.showMyDB());
// personalMovieDB.yourFvoriteGenres();
