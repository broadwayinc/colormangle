// To test on local browser, remove export
export class ColorMangle {
    /**
     * With ColorMangle you can:
     * convert color string to various color formats.
     * ex) blue -> rgba(0, 0, 255, 1) -> #0000ff -> hsl(240, 100%, 50%).
     * Get ideal text color based on luminance ratio.
     * Get brightness adjusted color.
     * @param {string} color - Any type of color string you want to convert. Can be html color name, rgb, hex, hsl
     */
    constructor(color = 'teal') {
        this.colorName = {
            "aliceblue": "#f0f8ff",
            "antiquewhite": "#faebd7",
            "aqua": "#00ffff",
            "aquamarine": "#7fffd4",
            "azure": "#f0ffff",
            "beige": "#f5f5dc",
            "bisque": "#ffe4c4",
            "black": "#000000",
            "blanchedalmond": "#ffebcd",
            "blue": "#0000ff",
            "blueviolet": "#8a2be2",
            "brown": "#a52a2a",
            "burlywood": "#deb887",
            "cadetblue": "#5f9ea0",
            "chartreuse": "#7fff00",
            "chocolate": "#d2691e",
            "coral": "#ff7f50",
            "cornflowerblue": "#6495ed",
            "cornsilk": "#fff8dc",
            "crimson": "#dc143c",
            "cyan": "#00ffff",
            "darkblue": "#00008b",
            "darkcyan": "#008b8b",
            "darkgoldenrod": "#b8860b",
            "darkgray": "#a9a9a9",
            "darkgreen": "#006400",
            "darkgrey": "#a9a9a9",
            "darkkhaki": "#bdb76b",
            "darkmagenta": "#8b008b",
            "darkolivegreen": "#556b2f",
            "darkorange": "#ff8c00",
            "darkorchid": "#9932cc",
            "darkred": "#8b0000",
            "darksalmon": "#e9967a",
            "darkseagreen": "#8fbc8f",
            "darkslateblue": "#483d8b",
            "darkslategray": "#2f4f4f",
            "darkslategrey": "#2f4f4f",
            "darkturquoise": "#00ced1",
            "darkviolet": "#9400d3",
            "deeppink": "#ff1493",
            "deepskyblue": "#00bfff",
            "dimgray": "#696969",
            "dimgrey": "#696969",
            "dodgerblue": "#1e90ff",
            "firebrick": "#b22222",
            "floralwhite": "#fffaf0",
            "forestgreen": "#228b22",
            "fuchsia": "#ff00ff",
            "gainsboro": "#dcdcdc",
            "ghostwhite": "#f8f8ff",
            "goldenrod": "#daa520",
            "gold": "#ffd700",
            "gray": "#808080",
            "green": "#008000",
            "greenyellow": "#adff2f",
            "grey": "#808080",
            "honeydew": "#f0fff0",
            "hotpink": "#ff69b4",
            "indianred": "#cd5c5c",
            "indigo": "#4b0082",
            "ivory": "#fffff0",
            "khaki": "#f0e68c",
            "lavenderblush": "#fff0f5",
            "lavender": "#e6e6fa",
            "lawngreen": "#7cfc00",
            "lemonchiffon": "#fffacd",
            "lightblue": "#add8e6",
            "lightcoral": "#f08080",
            "lightcyan": "#e0ffff",
            "lightgoldenrodyellow": "#fafad2",
            "lightgray": "#d3d3d3",
            "lightgreen": "#90ee90",
            "lightgrey": "#d3d3d3",
            "lightpink": "#ffb6c1",
            "lightsalmon": "#ffa07a",
            "lightseagreen": "#20b2aa",
            "lightskyblue": "#87cefa",
            "lightslategray": "#778899",
            "lightslategrey": "#778899",
            "lightsteelblue": "#b0c4de",
            "lightyellow": "#ffffe0",
            "lime": "#00ff00",
            "limegreen": "#32cd32",
            "linen": "#faf0e6",
            "magenta": "#ff00ff",
            "maroon": "#800000",
            "mediumaquamarine": "#66cdaa",
            "mediumblue": "#0000cd",
            "mediumorchid": "#ba55d3",
            "mediumpurple": "#9370db",
            "mediumseagreen": "#3cb371",
            "mediumslateblue": "#7b68ee",
            "mediumspringgreen": "#00fa9a",
            "mediumturquoise": "#48d1cc",
            "mediumvioletred": "#c71585",
            "midnightblue": "#191970",
            "mintcream": "#f5fffa",
            "mistyrose": "#ffe4e1",
            "moccasin": "#ffe4b5",
            "navajowhite": "#ffdead",
            "navy": "#000080",
            "oldlace": "#fdf5e6",
            "olive": "#808000",
            "olivedrab": "#6b8e23",
            "orange": "#ffa500",
            "orangered": "#ff4500",
            "orchid": "#da70d6",
            "palegoldenrod": "#eee8aa",
            "palegreen": "#98fb98",
            "paleturquoise": "#afeeee",
            "palevioletred": "#db7093",
            "papayawhip": "#ffefd5",
            "peachpuff": "#ffdab9",
            "peru": "#cd853f",
            "pink": "#ffc0cb",
            "plum": "#dda0dd",
            "powderblue": "#b0e0e6",
            "purple": "#800080",
            "rebeccapurple": "#663399",
            "red": "#ff0000",
            "rosybrown": "#bc8f8f",
            "royalblue": "#4169e1",
            "saddlebrown": "#8b4513",
            "salmon": "#fa8072",
            "sandybrown": "#f4a460",
            "seagreen": "#2e8b57",
            "seashell": "#fff5ee",
            "sienna": "#a0522d",
            "silver": "#c0c0c0",
            "skyblue": "#87ceeb",
            "slateblue": "#6a5acd",
            "slategray": "#708090",
            "slategrey": "#708090",
            "snow": "#fffafa",
            "springgreen": "#00ff7f",
            "steelblue": "#4682b4",
            "tan": "#d2b48c",
            "teal": "#008080",
            "thistle": "#d8bfd8",
            "tomato": "#ff6347",
            "turquoise": "#40e0d0",
            "violet": "#ee82ee",
            "wheat": "#f5deb3",
            "white": "#ffffff",
            "whitesmoke": "#f5f5f5",
            "yellow": "#ffff00",
            "yellowgreen": "#9acd32"
        };
        let format = this._colorType(color);
        this.type = format.type;
        this.color = format.color;
    }

    _extractRGBAHSLADigit(color_arg = this.color) {
        const {type = this.type, color = this.color} = this._colorType(color_arg);

        if (type === 'hex')
            return null;

        const value = [];

        for (const i of color.match(/\d+(\.\d+)?/g))
            value.push(parseFloat(i));

        if (value.length < 4) value.push(1);

        return value;
    }

    _colorType(color = this.color, throwErr = true) {
        let chkType, type;

        try {
            if (!color)
                throw 'invalid color';

            if (typeof color === 'object' && color.string)
                color = color.string;

            if (typeof color === 'string')
                color = color.toLowerCase();
            else
                throw 'invalid color';

            if (color === this.color)
                return {type: this.type, color: this.color};

            if (this.colorName[color])
                return {type: 'hex', color: this.colorName[color]};

            chkType = color.match(/^(rgba?|rgb?|hsla?|#)/g);

            if (Array.isArray(chkType)) {

                if (chkType[0] === '#') {

                    if (color.length === 4)
                        // convert shorthand hex
                        color = color[0] + color[1] + color[1] + color[2] + color[2] + color[3] + color[3];

                    if (/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color))
                        // is valid hex
                        type = 'hex';

                    else
                        throw 'invalid hex';

                } else if (color[color.length - 1] === ')')
                    // hex, rgb, rgba, hsl, hsla
                    type = chkType[0];

                return {type, color};

            }

        } catch (err) {
            if (throwErr)
                throw err;
        }

        return {};
    }

    /**
     * @typedef {Object} colorScheme
     * @property {string} --shadow - rgba(0, 0, 0, 0.05)
     * @property {string} --light - rgba(255, 255, 255, 0.05)
     * @property {string} --overlay - rgba(0, 0, 0, 0.25)
     * @property {string} --alert - #ff6347
     * @property {string} --background
     * @property {string} --background-focus
     * @property {string} --background-focus_faded
     * @property {string} --background-focus_transparent
     * @property {string} --background-focus-text
     * @property {string} --background-text
     * @property {string} --background-text_transparent
     * @property {string} --background-placeholder
     * @property {string} --content
     * @property {string} --content-focus
     * @property {string} --content-focus_faded
     * @property {string} --content-focus_transparent
     * @property {string} --content-focus-text
     * @property {string} --content-text
     * @property {string} --content-text_transparent
     * @property {string} --content-placeholder
     * @property {string} --toolbar
     * @property {string} --toolbar-focus
     * @property {string} --toolbar-focus_faded
     * @property {string} --toolbar-focus_transparent
     * @property {string} --toolbar-focus-text
     * @property {string} --toolbar-text
     * @property {string} --toolbar-text_transparent
     * @property {string} --toolbar-placeholder
     * @property {string} --button
     * @property {string} --button-focus
     * @property {string} --button-focus_faded
     * @property {string} --button-focus_transparent
     * @property {string} --button-focus-text
     * @property {string} --button-text
     * @property {string} --button-text_transparent
     * @property {string} --button-placeholder
     */
    /**
     * Generates color scheme object.
     * More info on next update.
     * @return {colorScheme}
     */
    colorScheme(color = this.color) {
        let opacity = {
            text: {black: 0.88, white: 1},
            faded: {black: 14, white: 14},
            soft: {black: 0.66, white: 0.88},
            placeholder: {black: 0.33, white: 0.66},
            transparent: {black: 0.11, white: 0.33},
            shadow: {black: 0.066, white: 0.11},
            screen: {black: 0.033, white: 0.066}
        };

        let background = [
            '--background',
            '--content',
            '--toolbar',
            '--button'
        ];

        let attribute = [
            '',
            '-focus',
            '-focus_faded',
            '-focus_soft',
            '-focus_shadow',
            '-focus_transparent',
            '-focus_screen',
            '-focus-text',
            '-text',
            '-text_soft',
            '-text_shadow',
            '-text_transparent',
            '-text_screen',
            '-placeholder'
        ];

        let fixedValue = {
            '--shadow': 'rgba(0, 0, 0, 0.05)',
            '--shade': 'rgba(0, 0, 0, 0.15)',
            '--light': 'rgba(255, 255, 255, 0.15)',
            '--alert': this.colorName.tomato,
            '--overlay': 'rgba(0, 0, 0, 0.25)'
        };

        for (let l of ['transparent', 'soft', 'shadow']) {
            fixedValue['--alert-' + l] = this.rgba(opacity[l].black, fixedValue['--alert']).string;
        }

        let focusDefault = this._colorType(color).color;

        let variableList = (() => {
            let list = [];
            for (let bk of background) {
                // --{background}-{background(_attribute)}-{target(_attribute)}
                for (let att of attribute)
                    list.push(bk + att);
            }
            return list;
        })();

        let scheme = {};
        let missingList = [];
        let focusColorKey = [];

        let fillMissing = (missing) => {
            for (let m of missing) {
                let splitKey = m.split('-');
                let target = splitKey[splitKey.length - 1];

                if (splitKey.length === 3) {
                    // '--background',
                    // '--content',
                    // '--toolbar',
                    // '--button'

                    if (target === 'button') {
                        if (focusColorKey.length)
                            scheme[m] = scheme[focusColorKey[focusColorKey.length - 1]];
                        else
                            scheme[m] = focusDefault;
                    } else {
                        if (scheme[m + '-text'])
                            scheme[m] = this.textColor(opacity.text, scheme[m + '-text']);
                        else {
                            let t = this.textColor();

                            if (target === 'background' && t === '#ffffff')
                                t = this.adjustBrightness(-4, t);
                            else if (target === 'content' && scheme['--background'] && !this.isHighLuminance(scheme['--background']))
                                t = this.adjustBrightness(14, scheme['--background']);

                            scheme[m] = t;
                        }
                    }
                } else {
                    if (target === 'focus') {
                        if (focusColorKey.length)
                            scheme[m] = scheme[focusColorKey[focusColorKey.length - 1]];
                        else if (scheme['--button'])
                            scheme[m] = scheme['--button'];
                        else
                            scheme[m] = focusDefault;
                    } else if (target === 'text' || target === 'placeholder') {
                        let bk_key = m.replace('-' + target, '');
                        if (scheme[bk_key])
                            scheme[m] = this.textColor(opacity[target], scheme[bk_key]);
                        else
                            scheme[m] = `#808080`;
                    } else if (target.includes('faded')) {
                        let t_key = m.replace('_faded', '');
                        if (scheme[t_key])
                            scheme[m] = this.adjustBrightness(this.isHighLuminance(scheme[t_key]) ? opacity.faded.black : opacity.faded.white, scheme[t_key]);
                        else
                            scheme[m] = `#808080`;
                    } else {
                        for (let l of ['transparent', 'soft', 'shadow', 'screen']) {
                            if (target.includes(l)) {
                                let t_key = m.replace('_' + l, '');
                                if (scheme[t_key])
                                    scheme[m] = this.rgba(this.isHighLuminance(scheme[t_key]) ? opacity[l].white : opacity[l].black, scheme[t_key]).string;
                                else
                                    scheme[m] = `#808080`;
                            }
                        }
                    }
                }
            }
        };

        if (typeof color === 'object' && Object.keys(color).length && !Array.isArray(color)) {

            for (let k of variableList) {
                if (color[k]) {
                    let splitKey = k.split('-');
                    let target = splitKey[splitKey.length - 1];
                    if (target === 'button' || target === 'focus')
                        focusColorKey.push(k);
                    scheme[k] = color[k];
                } else
                    missingList.push(k);
            }

            if (missingList.length)
                fillMissing(missingList);

        } else if (typeof color === 'string') {
            fillMissing(variableList);
        }

        return Object.assign(fixedValue, scheme);
    }

    /**
     * Returns luminance value of color
     * @return {number}
     */
    luminance(color = this.color) {
        let rgb = this.rgba(1, color);

        let a = [rgb.r, rgb.g, rgb.b].map(function (v) {
            v /= 255;
            return v <= 0.03928
                ? v / 12.92
                : Math.pow((v + 0.055) / 1.055, 2.4);
        });

        return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
    }

    /**
     * Returns luminance ratio between the given color. Useful to determine if the given color is suitable for text with the constructed color as a background.
     * @param {string} color - Color string you want to compare luminance ratio.
     * @return {number}
     */
    luminanceRatio(color) {
        let lum1 = this.luminance(this.color) + 0.05;
        let lum2 = this.luminance(color) + 0.05;

        return lum1 > lum2 ? lum1 / lum2 : lum2 / lum1;
    }

    /**
     * Returns suitable text color (Black / White).
     * @param {number | {}} opacity - Can set returning color values opacity.
     * @param {number} opacity.black - Set returning color values opacity when the result color is black.
     * @param {number} opacity.white - Set returning color values opacity when the result color is white.
     * @return {number}
     */
    textColor(opacity = 1, color = this.color) {
        let blackOpacity, whiteOpacity;

        if (typeof opacity === 'number' && opacity < 1) {
            blackOpacity = opacity;
            whiteOpacity = opacity;
        } else if (opacity && typeof opacity === 'object') {
            for (let k of ['black', 'white']) {
                let opa = opacity[k];
                if (typeof opa === 'number' && opa < 1) {
                    if (k === 'black')
                        blackOpacity = opa;
                    else if (k === 'white')
                        whiteOpacity = opa;
                }
            }
        }

        const opa = (v) => {
            if (typeof v === 'number') {
                if (v < 1 && v > 0) return v;
                else if (v > 1) return 1;
                else return 0;
            } else return 1;
        };

        if (this.isHighLuminance(this._colorType(color).color))
            return blackOpacity ? `rgba(0, 0, 0, ${opa(blackOpacity)})` : '#000000';

        return whiteOpacity ? `rgba(255, 255, 255, ${opa(whiteOpacity)})` : '#ffffff';
    }

    /**
     * Check if the color has high luminance.
     * @return {boolean}
     */
    isHighLuminance(color = this.color, fineTuned = true) {
        const {r, g, b} = this.rgba(1, this._colorType(color).color);

        let yiq =
            fineTuned ?
                ((r * (299 - 128)) + (g * (587 + 64)) + (b * (114 + 64))) / 1000 : // Fine tuned
                ((r * 299) + (g * 587) + (b * 114)) / 1000; // Standard color space formula

        // Web standard of color space threshold is 128
        return (yiq >= (fineTuned ? 142 : 128));
    }

    /**
     * Returns hsla color
     * @return {object}
     */
    hsla(opacity = 1, color_arg = this.color) {
        const {type = this.type, color = this.color} = this._colorType(color_arg);
        const hsl = (r, g, b) => {
            r /= 255;
            g /= 255;
            b /= 255;

            let c_min = Math.min(r, g, b),
                c_max = Math.max(r, g, b),
                delta = c_max - c_min,
                h = 0,
                s = 0,
                l = 0;

            if (delta === 0)
                h = 0;
            else if (c_max === r)
                h = ((g - b) / delta) % 6;
            else if (c_max === g)
                h = (b - r) / delta + 2;
            else
                h = (r - g) / delta + 4;

            h = Math.round(h * 60);

            if (h < 0) h += 360;

            l = (c_max + c_min) / 2;
            s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
            s = +(s * 100).toFixed(1);
            l = +(l * 100).toFixed(1);
            return {h, s, l};
        };

        if (type === 'hex') {
            opacity = typeof opacity === 'number' ? opacity : 1;
            const rgba = this.rgba(opacity, color);
            const {r, g, b, a} = rgba;
            const {h, s, l} = hsl(r, g, b);

            return {
                r, g, b, a,
                h: h,
                s: s,
                l: l,
                string: 'hsla(' + h + ', ' + s + '%, ' + l + '%, ' + opacity + ')'
            };

        } else {

            const digit = this._extractRGBAHSLADigit(color);
            opacity = typeof opacity === 'number' ? opacity : digit[3] || 1;

            if (type.includes('hsl')) {
                const {r, g, b, a} = this.rgba(opacity, color);

                return {
                    r, g, b, a,
                    h: digit[0],
                    s: digit[1],
                    l: digit[2],
                    string: 'hsla(' + digit[0] + ', ' + digit[1] + '%, ' + digit[2] + '%, ' + a + ')'
                };

            } else if (type.includes('rgb')) {
                const value = {
                    r: digit[0],
                    g: digit[1],
                    b: digit[2],
                    a: opacity
                };
                const {h, s, l} = hsl(value.r, value.g, value.b);

                return Object.assign(value, {
                    r: value.r,
                    g: value.g,
                    b: value.b,
                    h: h,
                    s: s,
                    l: l,
                    a: value.a,
                    string: 'hsla(' + h + ', ' + s + '%, ' + l + '%, ' + value.a + ')'
                });

            }
        }
    }

    /**
     * Returns hex color string
     * @return {string}
     */
    hex(color_arg = this.color) {
        const {type = this.type, color = this.color} = this._colorType(color_arg);

        if (type.includes('rgb') || type.includes('hsl')) {
            const opacity = this._extractRGBAHSLADigit(color)[3] || 1;
            const rgba = this.rgba(opacity, color);
            return '#' + ((1 << 24) + (rgba.r << 16) + (rgba.g << 8) + rgba.b).toString(16).slice(1);
        }

        return color;
    }

    /**
     * Returns rgba color
     * @return {object}
     */
    rgba(opacity = 1, color_arg = this.color) {
        const {type = this.type, color = this.color} = this._colorType(color_arg);

        if (type === 'hex') {
            const hex = color;
            let r, g, b;
            if (hex.length === 4) {
                r = '0x' + hex[1] + hex[1];
                g = '0x' + hex[2] + hex[2];
                b = '0x' + hex[3] + hex[3];

            } else if (hex.length === 7) {
                r = '0x' + hex[1] + hex[2];
                g = '0x' + hex[3] + hex[4];
                b = '0x' + hex[5] + hex[6];
            }

            const opacity_value = typeof opacity === 'number' ? opacity : 1;

            return {
                r: +r,
                g: +g,
                b: +b,
                a: opacity_value,
                string: `rgba(${+r}, ${+g}, ${+b}, ${opacity_value})`
            };

        } else {
            const digit = this._extractRGBAHSLADigit(color);
            const a = typeof opacity === 'number' ? opacity : digit[3] || 1;

            if (type.includes('rgb')) {

                let value = {
                    r: digit[0],
                    g: digit[1],
                    b: digit[2],
                    a
                };

                return Object.assign({
                    string: `rgba(${value.r}, ${value.g}, ${value.b}, ${value.a})`
                }, value);

            } else if (type.includes('hsl')) {

                let h = digit[0];
                let s = digit[1];
                let l = digit[2];

                s /= 100;
                l /= 100;

                let c = (1 - Math.abs(2 * l - 1)) * s,
                    x = c * (1 - Math.abs((h / 60) % 2 - 1)),
                    m = l - c / 2,
                    r = 0,
                    g = 0,
                    b = 0;
                if (0 <= h && h < 60) {
                    r = c;
                    g = x;
                    b = 0;
                } else if (60 <= h && h < 120) {
                    r = x;
                    g = c;
                    b = 0;
                } else if (120 <= h && h < 180) {
                    r = 0;
                    g = c;
                    b = x;
                } else if (180 <= h && h < 240) {
                    r = 0;
                    g = x;
                    b = c;
                } else if (240 <= h && h < 300) {
                    r = x;
                    g = 0;
                    b = c;
                } else if (300 <= h && h < 360) {
                    r = c;
                    g = 0;
                    b = x;
                }
                r = Math.round((r + m) * 255);
                g = Math.round((g + m) * 255);
                b = Math.round((b + m) * 255);

                return {
                    r, g, b, a,
                    string: 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')'
                };

            }
        }
    }

    /**
     * Returns brightness adjusted color string
     * @param {number} light - Adjust value. Darker when minus.
     * @return {string}
     */
    adjustBrightness(light = 0, color_arg = this.color) {
        const {type = this.type, color = this.color} = this._colorType(color_arg);

        if (light === 0)
            return color;

        const opacity = type === 'hex' ? 1 : this._extractRGBAHSLADigit(color)[3] || 1;
        const rgb = this.rgba(opacity, color);

        let rgbRange = {
            r: 0 - rgb['r'],
            g: 0 - rgb['g'],
            b: 0 - rgb['b']
        };
        if (light > 0) {
            Object.keys(rgbRange).map(function (key) {
                rgbRange[key] = 255 - rgb[key];
            });
        }

        ['r', 'g', 'b'].map(function (key) {
            rgb[key] += parseInt(rgbRange[key] / 100 * Math.abs(light));
        });

        const result = 'rgb(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ')';

        if (type === 'hex')
            return this.hex(result);

        else if (type.includes('rgb'))
            return this.rgba(rgb.a, result).string;

        else if (type.includes('hsl'))
            return this.hsla(rgb.a, result).string;
    }
}
