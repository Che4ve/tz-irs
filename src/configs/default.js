
// eslint-disable-next-line no-extend-native
String.prototype.moneyFormat = function () {
    return this.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// eslint-disable-next-line no-extend-native
String.prototype.plain = function () {
    return this.replace(/ +?/g, '');
}

// eslint-disable-next-line no-extend-native
Number.prototype.moneyFormat = function () {
    return this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const number2monthMap = {
    1: "Январь",
    2: "Февраль",
    3: "Март",
    4: "Апрель",
    5: "Май",
    6: "Июнь",
    7: "Июль",
    8: "Август",
    9: "Сентябрь",
    10: "Октябрь",
    11: "Ноябрь",
    12: "Декабрь"
};

const month2numberMap = {
    "январь": 1,
    "февраль": 2,
    "март": 3,
    "апрель": 4,
    "май": 5,
    "июнь": 6,
    "июль": 7,
    "август": 8,
    "сентябрь": 9,
    "октябрь": 10,
    "ноябрь": 11,
    "декабрь": 12
};

export const getMonthName = (monthNumber) => {
    const currentMonthNumber = new Date().getMonth() + 1;
    return number2monthMap[monthNumber ?? currentMonthNumber];
};

export const getMonthNumber = (monthName) => {
    if (monthName) {
        const lowerCasedName = monthName.toLowerCase();
        return month2numberMap[lowerCasedName] || null;
    }

    return new Date().getMonth() + 1;
};

export const getFirstUrlSegment = (url) => {
    if (!url || typeof url !== "string") {
        throw new Error("Invalid URL");
    }

    const match = url.match(/\/([^/]+)(?=\/|$)/);

    return match ? match[1] : null;
};