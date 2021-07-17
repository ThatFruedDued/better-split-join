Array.prototype.originalJoin = Array.prototype.join;
Array.prototype.join = function (str) {
	if (this.length === 0) {
		return this.originalJoin(str);
	}
	for (const element of this) {
		if (!(element instanceof Array)) {
			return this.originalJoin(str);
		}
	}
	const newArray = [];
	for (const element of this) {
		newArray.push(element.join(str));
	}
	return newArray;
}

Array.prototype.split = function (str) {
	if (this.length === 0) {
		return [];
	}
	let hasString = false,
		hasArray = false;
	for (const element of this) {
		if (!(typeof element === 'string' || element instanceof Array)) {
			throw new Error('Invalid array for split');
		} else if (typeof element === 'string') {
			hasString = true;
		} else {
			hasArray = true;
		}
	}
	if (hasString && hasArray) throw new Error('Invalid array for split');
	const newArray = [];
	for (const element of this) {
		newArray.push(element.split(str));
	}
	return newArray;
}