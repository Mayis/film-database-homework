"use strict";

const personalMovieDB = {
	count: numberOfFilms(),
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	showMyDB() {
		return personalMovieDB.privat ? `sorry its private` : personalMovieDB;
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
				// additional way --!isNaN(myGenres) || myGenres.length > 20 || myGenres === null
			} while (!/^\w\D{1,20}$/g.test(myGenres) || myGenres === null);
			personalMovieDB.genres.push(myGenres.trim());
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
		} while (b <= 0 || isNaN(b) || b > 10);
		a.trim();
		personalMovieDB.movies[a] = b;
	}
}

personalMovieDB.yourFvoriteGenres();
console.log(personalMovieDB);

// some examples with destructuring

let a, b;
[a, b] = [1, 2];

let c, d, all;
[c, d, ...all] = [1, 2, 3, 4, 50];

let arr = [1, [4, 5, 6], [7, 8, 9], 10];
const [a1, [b1, b2, b3]] = arr;

const obj = {
	firstname: "Angel",
	surname: "White",
	age: 30,
	maried: true,
	children: {
		boy: "alex",
		girl: "Tamara",
		isGoingSchool: true,
		sports: {
			boy: "boxing",
			girl: "swiming"
		}
	}
};
const { sportBoy, SportGirl } = obj.children.sports;
const { boy, girl } = obj.children;
const { firstname, surname } = obj;

function someArray(a, b, c) {
	return [a, b, c];
}
const [first, second, third] = someArray(15, "Jack", false);
