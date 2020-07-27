const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`);

    if (response.ok) {
        const data = await response.json();
        return data.puzzle
    } else {
        throw Error(response.statusText);
    }
}

export {
    getPuzzle as
    default
}