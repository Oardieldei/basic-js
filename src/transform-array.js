function transform(arr) {
	if (!(arr instanceof Array)) {
		throw new Error("'arr' parameter must be an instance of the Array!")
	}

	const result = []
	let doubleNext = false
	let previousValue
	let previousCopies = 0

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === '--double-next') {
			if (i + 1 < arr.length) {
				doubleNext = true
			}
			continue
		}

		if (arr[i] === '--double-prev') {
			if (previousCopies > 0) {
				result.push(previousValue)
				previousCopies++
			}
			continue
		}

		if (arr[i] === '--discard-next') {
			if (i + 1 < arr.length) {
				previousValue = arr[i + 1]
				previousCopies = 0
				i++
			}
			continue
		}

		if (arr[i] === '--discard-prev') {
			if (previousCopies > 0) {
				result.pop()
				previousCopies--
			}
			continue
		}

		previousValue = arr[i]

		if (doubleNext) {
			result.push(arr[i])
			previousCopies = 2
			doubleNext = false
		} else {
			previousCopies = 1
		}

		result.push(arr[i])
	}

	return result
}

module.exports = {
	transform
}