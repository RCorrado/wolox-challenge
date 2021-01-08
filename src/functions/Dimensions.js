export const getWidth = callback => {
    callback(window.innerWidth);
    window.addEventListener('resize', () => callback(window.innerWidth));
};