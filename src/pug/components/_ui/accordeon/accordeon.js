const accordeons = document.querySelectorAll(
	".accordeon:not(.--expanded-default)",
);

if (accordeons.length) {
	const expandItem = (target) => {
		const item = target.closest(".accordeon__item");
		const parent = target.closest(".accordeon");

		const isToggleMode = parent.classList.contains("--js--toggle-mode");

		if (isToggleMode) {
			const prevItem = parent.querySelector(".accordeon__item.expanded");

			prevItem && prevItem !== item
				? prevItem.classList.remove("expanded")
				: null;
		}

		item.classList.toggle("expanded");
	};

	const onClickHandler = (evt) => {
		expandItem(evt.currentTarget);
	};

	const onEnterClickHandler = (evt) => {
		if (evt.keyCode === 13 || evt.key === "Enter") {
			expandItem(evt.currentTarget);
		}
	};

	accordeons.forEach((accordeon) => {
		const openers = accordeon.querySelectorAll(".accordeon__item-header");

		accordeon.classList.contains("--js--expanded-first-default")
			? accordeon
					.querySelector(".accordeon__item:first-child")
					.classList.add("expanded")
			: null;

		openers.forEach((opener) => {
			opener.addEventListener("click", onClickHandler);
			opener.addEventListener("keydown", onEnterClickHandler);
		});
	});
}
