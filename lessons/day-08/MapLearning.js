const emergencyList = new Map([
    ['113', 'Police Dept'],
    ['114', 'Fire Dept'],
    ['115', 'Hospital'],
    ['116', 'Others'],
])

// Read values
console.log(emergencyList.get('116'));

// Check if key is existing
const is117Existing = emergencyList.has('113');
console.log(`is 117 Existing: ${is117Existing}`);

// Loop ever all keys then get the values out
for (const key of emergencyList.keys()) {
    console.log(`${key}: ${emergencyList.get(key)}`);
}

// Loop ever values without using keys
for (const value of emergencyList.values()) {
    console.log(`Value: ${value}`);
}

// Update/ADD
emergencyList.set('117', 'Some thing else');
console.log(emergencyList);

// DELETE
console.log(`Size before: ${emergencyList.size}`);
emergencyList.delete('116');
console.log(emergencyList);
console.log(`Size after: ${emergencyList.size}`);

