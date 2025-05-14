if (!localStorage.getItem("playProgress")) {
	localStorage.setItem("playProgress", JSON.stringify({
		chapterUnlocked: 1,
		dailyUnlocked: false,
		noticeRead: false,
		mainRead: false,
		msNotice: false,
		dsNotice: false,
		asNotice: false,
		unlockedLocations: []
	}));
}
setup.progress = JSON.parse(localStorage.getItem("playProgress"));
State.variables.unlockedLocations = setup.progress.unlockedLocations.slice();

setup.saveProgress = function (changes) {
	const current = JSON.parse(localStorage.getItem("playProgress"));
	const updated = Object.assign({}, current, changes);
	localStorage.setItem("playProgress", JSON.stringify(updated));
	setup.progress = updated;
};

setup.unlockLocation = function (name) {
	const progress = setup.getProgress();
	if (!progress.unlockedLocations.includes(name)) {
		progress.unlockedLocations.push(name);
		setup.saveProgress({ unlockedLocations: progress.unlockedLocations });
	}
};