const fs = require('fs');

// Step 1: Read JSON file
const data = fs.readFileSync('input.json', 'utf8');
const obj = JSON.parse(data);

// Step 2: Extract n and k
const n = obj.keys.n;
const k = obj.keys.k;
const m = k - 1; // degree of polynomial
console.log(`Degree of polynomial (m): ${m}`);

// Step 3: Collect roots in base 10
let roots = [];

for (const key in obj) {
    if (key !== "keys") {
        const base = parseInt(obj[key].base);
        const value = obj[key].value;

        // Convert to base 10
        const root = parseInt(value, base);
        roots.push(root);
    }
}

console.log("Roots in base 10:", roots);

// Step 4: Compute constant term (c)
let product = 1;
for (let i = 0; i < k; i++) {  // only need first k roots
    product *= roots[i];
}
let c = Math.pow(-1, m) * product;

// Step 5: Print only constant
console.log("Constant term (c):", c);
