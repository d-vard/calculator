const btn = document.querySelector("#calc");
const calc = {
	plus(val1, val2) {
		return val1 + val2;
	},
	minus(val1, val2) {
		return val1 - val2;
	},
	multiplication(val1, val2) {
		return val1 * val2;
	},
	division(val1, val2) {
		return val1 / val2;
	},
};
btn.addEventListener("click", function () {
	const inps = document.querySelectorAll(`input[type="number"]`);
	let validCount = 0;
	inps.forEach((inp) => {
		if (inp.value === "") {
			inp.classList.add("error");
		} else {
			validCount++;
			inp.classList.remove("error");
		}
	});
	if (validCount !== 2) return;
	const val1 = +document.querySelector("#num-1").value;
	const val2 = +document.querySelector("#num-2").value;
	const operation = document.querySelector("#operations").value;
	const wrapper = document.querySelector(".result");
	wrapper.innerHTML = calc[operation](val1, val2);
});
