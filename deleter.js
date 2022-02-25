const fs = require("fs");

//	inputs:
//		dir - directory of .json file to be opened as a string
//		idx - index of the entry to be deleted
//	outputs:
//		deletes the specified entry in the JSON with the inputted
//		idx
//		NOTE: this refers to the index attribute of each entry, not
//		the index of the entry itself.
function deleteFromFile(dir, idx) {

	// read from specified JSON file
	let file_data = JSON.parse(
			fs.readFileSync(dir, { encoding:"utf8", flag:"r"})
	);

	// find then splice the entry with the specified idx
	let end_idx = file_data.length;
	for (i = 0; i < end_idx; i++) {
		if (file_data[i].index == idx) {
			file_data.splice(i, 1);
			end_idx--;
			i--;
		}
	}

	// write back to file
	fs.writeFileSync(dir, JSON.stringify(file_data, null, 4));

	return;
}

//	usage:
//		const helper = require([directory to deleter.js]);
//		helper.deleteFromFile(dir, idx);
exports.deleteFromFile = deleteFromFile;