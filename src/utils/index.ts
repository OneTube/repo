function sortByKey(data: Array<any>, key: string) {
    return data.sort((a, b) => {
        const nameA = String(a[key]).toUpperCase();
        const nameB = String(b[key]).toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }

        return 0;
    });
}

function transposeByLetter(data: Array<any>, key: string) {
    return data.reduce((acc, item) => {
        const letter = String(item[key]).charAt(0).toUpperCase();

        if (!acc[letter]) {
            acc[letter] = [ item ];
        } else {
            acc[letter].push(item);
        }

        return acc;
    }, {});
}

function generateUnique(): string {
    return `_${Math.random().toString(36).substr(2, 9)}`;
}

export {
    sortByKey,
    generateUnique,
    transposeByLetter
}
