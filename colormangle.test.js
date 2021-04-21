//const ColorMangle = require("./src/colormangle");
import ColorMangle from './src/colormangle';

describe('Convert color string to hex', () => {
    test('Converts "white" to "#ffffff"', () => {
        expect(new ColorMangle('white').hex()).toBe('#ffffff');
    });
    test('Converts "black" to "#000000"', () => {
        expect(new ColorMangle('black').hex()).toBe('#000000');
    });
    test('Converts "crimson" to "#dc143c"', () => {
        expect(new ColorMangle('crimson').hex()).toBe('#dc143c');
    });
    test('Converts "cornsilk" to "#fff8dc"', () => {
        expect(new ColorMangle('cornsilk').hex()).toBe('#fff8dc');
    });
    test('Converts "darksalmon" to "#e9967a"', () => {
        expect(new ColorMangle('darksalmon').hex()).toBe('#e9967a');
    });
});

describe('Convert color string to rgba', () => {
    test('Converts "white" to "rgba(255, 255, 255, 1)"', () => {
        expect(new ColorMangle('white').rgba().toString()).toBe('rgba(255, 255, 255, 1)');
    });
    test('Converts "black" with opacity 0.2 to "rgba(0, 0, 0, 0.2)"', () => {
        expect(new ColorMangle('black').rgba(0.2).toString()).toBe('rgba(0, 0, 0, 0.2)');
    });
    test('Converts "crimson" with opacity 0.5 to "rgba(220, 20, 60, 0.5)"', () => {
        expect(new ColorMangle('crimson').rgba(0.5).toString()).toBe('rgba(220, 20, 60, 0.5)');
    });
    test('Converts "cornsilk" to "rgba(255, 248, 220, 1)', () => {
        expect(new ColorMangle('cornsilk').rgba().toString()).toBe('rgba(255, 248, 220, 1)');
    });
    test('Converts "darksalmon" to "rgba(233, 150, 122, 1)"', () => {
        expect(new ColorMangle('darksalmon').rgba().toString()).toBe('rgba(233, 150, 122, 1)');
    });
});

// describe('Convert color string to hsla', () => {
//     test('Converts "white" to "hsla(0, 0%, 100%, 1)"', () => {
//         expect(new ColorMangle('white').hsla().string).toBe('hsla(0, 0%, 100%, 1)');
//     });
//     test('Converts "black" with opacity 0.2 to "hsla(0, 0%, 0%, 0.2)"', () => {
//         expect(new ColorMangle('black').hsla(0.2).string).toBe('hsla(0, 0%, 0%, 0.2)');
//     });
//     test('Converts "crimson" with opacity 0.5 to "hsla(348, 83%, 47%, 0.5)"', () => {
//         expect(new ColorMangle('crimson').hsla(0.5).string).toBe('hsla(348, 83%, 47%, 0.5)');
//     });
//     test('Converts "cornsilk" to "hsla(48, 100%, 93%, 1)', () => {
//         expect(new ColorMangle('cornsilk').hsla().string).toBe('hsla(48, 100%, 93%, 1)');
//     });
//     test('Converts "darksalmon" to "hsla(15, 72%, 70%, 1)"', () => {
//         expect(new ColorMangle('darksalmon').hsla().string).toBe('hsla(15, 72%, 70%, 1)');
//     });
// });