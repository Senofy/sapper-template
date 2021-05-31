import images from './images';

const charToElement = (char) => {
    switch (char) {
        case '':
            return `<img alt='fire' src="${images.weather.fire}" />`;
        case '':
            return `<img alt='ice' src="${images.weather.ice}" />`;
        case '':
            return `<img alt='wind' src="${images.weather.wind}" />`;
        case '':
            return `<img alt='earth' src="${images.weather.earth}" />`;
        case '':
            return `<img alt='thunder' src="${images.weather.thunder}" />`;
        case '':
            return `<img alt='water' src="${images.weather.water}" />`;
        case '':
            return `<img alt='light' src="${images.weather.light}" />`;
        case '':
            return `<img alt='dark' src="${images.weather.dark}" />`;
        default:
    }

    return '';
};

export const descriptionWithElements = (description) => {
    const elements = /|||||||/;
    const render = [];
    let lastStop = 0;

    for (let i = 0; i < description.length; i++) {
        const isElement = elements.test(description[i]);
        if (i === description.length - 1) {
            render.push(`<span>${description.slice(lastStop, i + 1)}</span>`);
        } else if (isElement) {
            if (i !== lastStop) {
                render.push(`<span>${description.slice(lastStop, i)}</span>`);
            }
            render.push(charToElement(description[i]));
            lastStop = i + 1;
        }
    }
    return render;
};
