const isBrelan = rolls => {
    const counts = {};
    for (const roll of rolls) {
        counts[roll] = (counts[roll] || 0) + 1;
        if (counts[roll] === 3) return {points: 28, value: roll};
    }
    return null;
};

const isCarre = rolls => {
    const counts = {};
    for (const roll of rolls) {
        counts[roll] = (counts[roll] || 0) + 1;
        if (counts[roll] === 4) return {points: 35, value: roll};
    }
    return null;
};

const isFull = rolls => {
    const counts = {};
    for (const roll of rolls) counts[roll] = (counts[roll] || 0) + 1;
    let brelanValue = null;
    let paireValue = null;
    for (const [value, count] of Object.entries(counts)) {
        if (count === 3) brelanValue = parseInt(value);
        if (count === 2) paireValue = parseInt(value);
    }
    return (brelanValue !== null && paireValue !== null) ? {points: 30, brelan: brelanValue, paire: paireValue} : null;
};

const isGrandeSuite = rolls => {
    const sortedRolls = rolls.slice().sort((a, b) => a - b);
    return sortedRolls.join('') === '12345' || sortedRolls.join('') === '23456';
};


const isYams = rolls => rolls.every(roll => roll === rolls[0]);


const analyzeRolls = rolls => {
    if (isYams(rolls)) return 50;
    const carre = isCarre(rolls);
    if (carre) return carre.points;
    const full = isFull(rolls);
    if (full) return full.points;
    if (isGrandeSuite(rolls)) return 40;
    const brelan = isBrelan(rolls);
    if (brelan) return brelan.points;
    return rolls.reduce((acc, roll) => acc + roll, 0);
};

module.exports = {analyzeRolls, isYams, isCarre, isFull, isGrandeSuite, isBrelan};








