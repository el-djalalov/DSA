class HashTable {
	constructor(size = 6) {
		this.keyMap = new Array(size);
	}

	_hashFunction(key) {
		let sum = 0;

		const PRIME_NUMBER = 31;
		for (let i = 0; i < Math.min(key.length, 100); i++) {
			const charCode = key.charCodeAt(i);
			sum = (sum * PRIME_NUMBER + charCode) % this.keyMap.length;
		}
		return (sum + this.keyMap.length) % this.keyMap.length;
	}

	set(key, value) {
		const index = this._hashFunction(key);

		// If the index has not been initialized, create an empty array
		if (!this.keyMap[index]) {
			this.keyMap[index] = [];
		}

		// Check if key exists and update it; otherwise, add new key-value pair
		for (let i = 0; i < this.keyMap[index].length; i++) {
			if (this.keyMap[index][i][0] === key) {
				this.keyMap[index][i][1] = value;
				return this;
			}
		}

		// Key doesn't exist, so add a new key-value pair
		this.keyMap[index].push([key, value]);
		return this;
	}

	get(key) {
		const index = this._hashFunction(key);
		if (this.keyMap[index]) {
			for (let i = 0; i < this.keyMap[index].length; i++) {
				if (this.keyMap[index][i][0] === key) {
					return this.keyMap[index][i][1];
				}
			}
		}
		return undefined;
	}

	remove(key) {
		const index = this._hashFunction(key);

		if (this.keyMap[index] && this.keyMap[index].length) {
			for (let i = 0; i < this.keyMap.length; i++) {
				if (this.keyMap[index][i][0] === key) {
					this.keyMap[index].splice(i, 1);
					return true;
				}
			}
		} else {
			return false;
		}
	}

	display() {
		this.keyMap.forEach((values, index) => {
			const chainedValues = values.map(([key, value]) => `[${key}: ${value}]`);
			console.log(`${index}: ${chainedValues}`);
		});
	}

	getAllKeys() {
		const keys = [];
		for (let i = 0; i < this.keyMap.length; i++) {
			if (this.keyMap[i]) {
				for (let j = 0; j < this.keyMap[i].length; j++) {
					keys.push(this.keyMap[i][j][0]);
				}
			}
		}

		return keys;
	}

	getAllValues() {
		const values = [];
		for (let i = 0; i < this.keyMap.length; i++) {
			if (this.keyMap[i]) {
				for (let j = 0; j < this.keyMap[i].length; j++) {
					values.push(this.keyMap[i][j][1]);
				}
			}
		}

		return values;
	}
}

const phoneBook = new HashTable();
console.log(phoneBook.set("John", "555-5555-555"));
console.log(phoneBook.set("Jordan", "777-666-888"));
console.log(phoneBook.set("Michael", "888-333-1111"));
console.log("KEYS", phoneBook.getAllKeys());
console.log("Values", phoneBook.getAllValues());
phoneBook.display();
