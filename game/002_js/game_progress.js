if (!localStorage.getItem("gameProgress")) {
	localStorage.setItem("gameProgress", JSON.stringify({
		chapterUnlocked: 1,
		freemodeUnlocked: false,
		unlockedLocations: []
	}));
}
setup.progress = JSON.parse(localStorage.getItem("gameProgress"));
State.variables.unlockedLocations = setup.progress.unlockedLocations.slice();

setup.saveProgress = function (changes) {
	const current = JSON.parse(localStorage.getItem("gameProgress"));
	const updated = Object.assign({}, current, changes);
	localStorage.setItem("gameProgress", JSON.stringify(updated));
	setup.progress = updated;
};