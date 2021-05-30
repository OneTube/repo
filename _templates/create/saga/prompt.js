const changeCase = require('change-case');

const INPUTS = {
    STORE_NAME: {
        type: 'input',
        name: 'storeName',
        message: 'Type store name. Example: remote',
        validate(value) {
            if (!value.length) {
                return 'Store should have a name!!!';
            }
            if (value.length < 3) {
                return 'Store name should contain at least 3 symbols!!!';
            }
            if (!(/^[a-zA-Z]+$/.test(value))) {
                return 'Use only letters';
            }
            return true;
        }
    }
};

module.exports = {
    prompt: async ({ inquirer }) => {
        // STEP 1
        const { storeName } = await inquirer.prompt([INPUTS.STORE_NAME]);

        const kebabName = changeCase.kebab(storeName);
        const pascalName = changeCase.pascal(storeName);
        const upperName = changeCase.upper(storeName);
        const lowerName = changeCase.lower(storeName);
        const path = `src/store/${kebabName}/`;

        return {
            path,
            storeName,
            kebabName,
            pascalName,
            upperName,
            lowerName
        };
    }
};
