const { print } = require("./common/printer");

const providedData = {
    test: 'tester',
    lore: 'bob',
    data: {
        lore: 'baum',
        ipsum: 'lore',
        'test': 'test'

    }
}
const text = JSON.stringify(providedData, null, 2);

print(text);
console.log('PDF generated!')
