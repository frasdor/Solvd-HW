const translations = {
	en: {
	greet: "Hello",
	intro: "Welcome to our website"
},
	fr: {
		greet: "Bonjour",
		intro: "Bienvenue sur notre site web"
	}
};

const language = "fr";
const greeting = "greet";
const introduction = "intro";

function localize(string, ...keys) {
    return keys.map(key => translations[language][key]).join('');
}

const localizedGreeting = localize`${greeting}`;
const localizedIntroduction = localize`${introduction}`;

console.log(localizedGreeting); 
console.log(localizedIntroduction); 