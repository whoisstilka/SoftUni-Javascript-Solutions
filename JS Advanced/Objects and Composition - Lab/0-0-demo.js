const phonebook = {
    'John': '+1-555-7416',
    'Mary': '+1-555-2278',
    'Bob': '+1-555-1474'
};

const entries = Object.entries(phonebook);

entries.sort((a, b) => {
    return a[0].localeCompare(b[0]);
});

console.log(entries);

const sorted = Object.fromEntries(entries);

console.log(sorted);