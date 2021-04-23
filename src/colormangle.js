// To test on local browser, remove export default
export default class ColorMangle {
    /**
     * An user-friendly text and background color selector for UI design. ColorMangle converts color strings to various format.
     * @param {string} [color='teal'] - Argument string can be either color name string or any type of HTML color codes (hex, rgb, hsl).
     */
    constructor(color = '#4848db') {
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
                throw err + ':' + color;
        }

        return {};
    }

    /**
     * @typedef {Object} colorScheme
     * @property {string} --alert
     * @property {string} --alert-text
     * @property {string} --alert-text_placeholder
     * @property {string} --alert-text_shade
     * @property {string} --alert-text_shadow
     * @property {string} --alert-text_soft
     * @property {string} --alert-text_transparent
     * @property {string} --alert_placeholder
     * @property {string} --alert_shade
     * @property {string} --alert_shadow
     * @property {string} --alert_soft
     * @property {string} --alert_transparent
     * @property {string} --analogous
     * @property {string} --analogous-text
     * @property {string} --analogous-text_placeholder
     * @property {string} --analogous-text_shade
     * @property {string} --analogous-text_shadow
     * @property {string} --analogous-text_soft
     * @property {string} --analogous-text_transparent
     * @property {string} --analogous_placeholder
     * @property {string} --analogous_shade
     * @property {string} --analogous_shadow
     * @property {string} --analogous_soft
     * @property {string} --analogous_transparent
     * @property {string} --background
     * @property {string} --background-focus
     * @property {string} --background-focus-nude
     * @property {string} --background-focus-nude_placeholder
     * @property {string} --background-focus-nude_shade
     * @property {string} --background-focus-nude_shadow
     * @property {string} --background-focus-nude_soft
     * @property {string} --background-focus-nude_transparent
     * @property {string} --background-focus-text
     * @property {string} --background-focus-text_placeholder
     * @property {string} --background-focus-text_shade
     * @property {string} --background-focus-text_shadow
     * @property {string} --background-focus-text_soft
     * @property {string} --background-focus-text_transparent
     * @property {string} --background-focus_placeholder
     * @property {string} --background-focus_shade
     * @property {string} --background-focus_shadow
     * @property {string} --background-focus_soft
     * @property {string} --background-focus_transparent
     * @property {string} --background-text
     * @property {string} --background-text_placeholder
     * @property {string} --background-text_shade
     * @property {string} --background-text_shadow
     * @property {string} --background-text_soft
     * @property {string} --background-text_transparent
     * @property {string} --background_placeholder
     * @property {string} --background_shade
     * @property {string} --background_shadow
     * @property {string} --background_soft
     * @property {string} --background_transparent
     * @property {string} --button
     * @property {string} --button-border
     * @property {string} --button-nude
     * @property {string} --button-nude_placeholder
     * @property {string} --button-nude_shade
     * @property {string} --button-nude_shadow
     * @property {string} --button-nude_soft
     * @property {string} --button-nude_transparent
     * @property {string} --button-text
     * @property {string} --button-text_placeholder
     * @property {string} --button-text_shade
     * @property {string} --button-text_shadow
     * @property {string} --button-text_soft
     * @property {string} --button-text_transparent
     * @property {string} --button_placeholder
     * @property {string} --button_shade
     * @property {string} --button_shadow
     * @property {string} --button_soft
     * @property {string} --button_transparent
     * @property {string} --complementary
     * @property {string} --complementary-text
     * @property {string} --complementary-text_placeholder
     * @property {string} --complementary-text_shade
     * @property {string} --complementary-text_shadow
     * @property {string} --complementary-text_soft
     * @property {string} --complementary-text_transparent
     * @property {string} --complementary_placeholder
     * @property {string} --complementary_shade
     * @property {string} --complementary_shadow
     * @property {string} --complementary_soft
     * @property {string} --complementary_transparent
     * @property {string} --content
     * @property {string} --content-focus
     * @property {string} --content-focus-nude
     * @property {string} --content-focus-nude_placeholder
     * @property {string} --content-focus-nude_shade
     * @property {string} --content-focus-nude_shadow
     * @property {string} --content-focus-nude_soft
     * @property {string} --content-focus-nude_transparent
     * @property {string} --content-focus-text
     * @property {string} --content-focus-text_placeholder
     * @property {string} --content-focus-text_shade
     * @property {string} --content-focus-text_shadow
     * @property {string} --content-focus-text_soft
     * @property {string} --content-focus-text_transparent
     * @property {string} --content-focus_placeholder
     * @property {string} --content-focus_shade
     * @property {string} --content-focus_shadow
     * @property {string} --content-focus_soft
     * @property {string} --content-focus_transparent
     * @property {string} --content-text
     * @property {string} --content-text_placeholder
     * @property {string} --content-text_shade
     * @property {string} --content-text_shadow
     * @property {string} --content-text_soft
     * @property {string} --content-text_transparent
     * @property {string} --content_placeholder
     * @property {string} --content_shade
     * @property {string} --content_shadow
     * @property {string} --content_soft
     * @property {string} --content_transparent
     * @property {string} --focus
     * @property {string} --focus-text
     * @property {string} --focus-text_placeholder
     * @property {string} --focus-text_shade
     * @property {string} --focus-text_shadow
     * @property {string} --focus-text_soft
     * @property {string} --focus-text_transparent
     * @property {string} --focus_placeholder
     * @property {string} --focus_shade
     * @property {string} --focus_shadow
     * @property {string} --focus_soft
     * @property {string} --focus_transparent
     * @property {string} --light
     * @property {string} --overlay
     * @property {string} --shade
     * @property {string} --shadow
     * @property {string} --toolbar
     * @property {string} --toolbar-focus
     * @property {string} --toolbar-focus-nude
     * @property {string} --toolbar-focus-nude_placeholder
     * @property {string} --toolbar-focus-nude_shade
     * @property {string} --toolbar-focus-nude_shadow
     * @property {string} --toolbar-focus-nude_soft
     * @property {string} --toolbar-focus-nude_transparent
     * @property {string} --toolbar-focus-text
     * @property {string} --toolbar-focus-text_placeholder
     * @property {string} --toolbar-focus-text_shade
     * @property {string} --toolbar-focus-text_shadow
     * @property {string} --toolbar-focus-text_soft
     * @property {string} --toolbar-focus-text_transparent
     * @property {string} --toolbar-focus_placeholder
     * @property {string} --toolbar-focus_shade
     * @property {string} --toolbar-focus_shadow
     * @property {string} --toolbar-focus_soft
     * @property {string} --toolbar-focus_transparent
     * @property {string} --toolbar-text
     * @property {string} --toolbar-text_placeholder
     * @property {string} --toolbar-text_shade
     * @property {string} --toolbar-text_shadow
     * @property {string} --toolbar-text_soft
     * @property {string} --toolbar-text_transparent
     * @property {string} --toolbar_placeholder
     * @property {string} --toolbar_shade
     * @property {string} --toolbar_shadow
     * @property {string} --toolbar_soft
     * @property {string} --toolbar_transparent
     */
    /**
     * Generates color scheme object.
     * @return {colorScheme}
     */
    colorScheme(color = this.color, darkMode = false) {

        let opacity = {
            text: {black: 0.88, white: 1},
            soft: {black: 0.66, white: 0.88},
            placeholder: {black: 0.33, white: 0.66},
            transparent: {black: 0.11, white: 0.33},
            shade: {black: 0.066, white: 0.11},
            shadow: {black: 0.033, white: 0.066}
        };

        let template = {
            '--background': darkMode ? '#121212' : '#fafafa',
            '--content': darkMode ? '#2b2b2b' : '#ffffff',
            '--toolbar': darkMode ? '#2b2b2b' : '#ffffff',
        };

        let focusOriginal;

        let focus = (() => {
            if (color && typeof color === 'object') {
                if (color['--button']) {
                    focusOriginal = color['--button'];
                    return focusOriginal;
                }
                for (let key of color)
                    if (key.includes('focus')) {
                        focusOriginal = color[key];
                        return focusOriginal;
                    }
            }

            focusOriginal = color;
            return darkMode ? this.matchLuminance(color, template['--content'], 4.5) : color;
        })();
        let compDir = 1;
        let analogous = (() => {
            let deg = 30;
            let analogous = this.analogous(focusOriginal, deg);
            let focusHSL = this.hsla(1, focusOriginal).h;
            let an1HSL = this.hsla(1, analogous[0]).h;
            let an2HSL = this.hsla(1, analogous[1]).h;

            if (focusHSL + deg > 360)
                an1HSL = an1HSL + 360;
            if (focusHSL - deg < 0)
                an2HSL = 360 - an2HSL;

            if (Math.abs(focusHSL - an1HSL) > Math.abs(focusHSL - an2HSL)) {
                compDir = -1;
                return analogous[1];
            }

            return analogous[0];
            // return analogous;
        })();

        // let complementary = this.hsla(1, this.complementary(focus, 60 * compDir));
        let complementary = this.complementary(focus, 60 * compDir);
        // complementary.s += complementary.s < 50 ? (100 - complementary.s) / 3 : 0;
        // complementary.l -= complementary.l > 50 ? (100 - complementary.l) / 3 : 0;
        // complementary = this.toString(complementary);
        complementary = this.matchLuminance(complementary, template['--background'], 3.1);

        let fixedValue = {
            '--shadow': 'rgba(0, 0, 0, 0.011)',
            '--shade': 'rgba(0, 0, 0, 0.044)',
            '--transparent': 'rgba(0, 0, 0, 0.11)',
            '--light': 'rgba(255, 255, 255, 0.33)',
            '--overlay': 'rgba(0, 0, 0, 0.25)',
        };

        let darkModeAnalogous = darkMode ? this.matchLuminance(analogous, template['--background'], 4.5) : analogous;
        let analogousNude = this.matchLuminance(analogous, template['--background'], 4.5);

        for (let k in template) {
            template[k + '-text'] = this.textColor(opacity.text, template[k]);
            template[k + '-focus'] = k.includes('--background') ? darkModeAnalogous : focus;
            template[k + '-focus-nude'] = k.includes('--background') ? analogousNude : this.matchLuminance(focus, template[k], 4.5);
            template[k + '-focus-text'] = this.textColor(1, k.includes('--background') ? darkModeAnalogous : focus);
        }

        template['--focus'] = focusOriginal;
        template['--focus-text'] = this.textColor(1, focusOriginal);

        Object.assign(template, {
            '--complementary': complementary,
            '--complementary-text': this.textColor(1, complementary),
            '--analogous': analogous,
            '--analogous-text': this.textColor(1, analogous),
            '--alert': 'tomato',
            '--alert-text': 'white',
            '--button': focus,
            '--button-nude': this.matchLuminance(focus, template["--content"], 7),
            '--button-text': this.textColor(1, focus),
        });

        for (let k in template)
            for (let op of ['soft', 'placeholder', 'transparent', 'shadow', 'shade']) {
                let txtOfBg = this.textColor(1, template[k]);
                template[k + '_' + op] = this.rgba(opacity[op][op.includes('text') ? txtOfBg : txtOfBg === 'black' ? 'white' : 'black'], template[k]).string;
            }

        template['--button-border'] = this.textColor(1, template['--button'], false) === 'white' ? fixedValue['--shade'] : fixedValue['--shadow'];

        if (color && typeof color === 'object') {
            for (let key of color)
                if (key[0] !== '-')
                    throw 'invalid color scheme';
            Object.assign(template, color);
        }

        let unordered = Object.assign(template, fixedValue);
        return Object.keys(unordered).sort().reduce(
            (obj, key) => {
                obj[key] = unordered[key];
                return obj;
            },
            {}
        );
    }

    _getAlpha(color_arg = this.color) {
        let extract = this._extractRGBAHSLADigit(color_arg);
        return extract ? extract[3] || 1 : 1;
    }

    matchLuminance(col, color_arg = this.color, meet) {
        // return col;
        let {color} = this._colorType(color_arg);

        if (meet) {
            let adj = this.hex(col);
            let m = this.contrastRatio(adj, color);
            if (m < meet) {
                let dir = this.textColor(1, color) === 'white' ? 1 : -1;
                let count = 100;
                while (m < meet && count--) {
                    // let adj_set = this.adjustBrightness(1 * dir, adj);
                    let adj_set = this.adjustSaturation(1 * dir, adj);
                    // let adj_set = this.adjustLuminance(1 * dir, adj);
                    if (adj === adj_set)
                        break;
                    adj = adj_set;

                    m = this.contrastRatio(adj, color);
                }
            }
            return this.hex(adj);
        } else {
            let main_lum = this._luminance(color);
            let lum = this._luminance(col);

            if (Math.abs(lum - main_lum) < 0.01)
                return col;

            let adj = this.hex(col);

            let dir = (lum, main_lum) => {
                return lum < main_lum ? 1 : -1;
            };

            let currDir = dir(lum, main_lum);
            while (Math.abs(lum - main_lum) > 0.01 && currDir === dir(lum, main_lum)) {
                let adj_set = this.adjustBrightness(currDir, adj);
                // let adj_set = this.adjustSaturation(currDir, adj);
                // let adj_set = this.adjustLuminance(currDir, adj);
                let lum_pre = this._luminance(adj_set);
                if (lum_pre === lum || currDir !== dir(lum_pre, main_lum))
                    break;
                lum = lum_pre;
                adj = adj_set;
            }
            return this.hex(adj);
        }
    }

    analogous(color_arg = this.color, deg = 30) {
        let {color} = this._colorType(color_arg);

        let spin = (h, v) => {
            let val = h + v;
            return val < 0 ? 360 + val : val > 360 ? val - 360 : val;
        };

        let hsl = this.hsla(this._getAlpha(color), color);
        let plus = 'hsla(' + spin(hsl.h, deg) + ', ' + hsl.s + '%, ' + hsl.l + '%, ' + hsl.a + ')';
        let minus = 'hsla(' + spin(hsl.h, -deg) + ', ' + hsl.s + '%, ' + hsl.l + '%, ' + hsl.a + ')';

        return [this.matchLuminance(plus, color), this.matchLuminance(minus, color)];
    }

    complementary(color_arg = this.color, add = 0) {
        let {color} = this._colorType(color_arg);

        let hsl = this.hsla(this._getAlpha(color), color);

        if (hsl.h < 180)
            hsl.h += 180;
        else
            hsl.h -= 180;

        hsl.h += add;
        hsl.h = hsl.h > 360 ? hsl.h - 360 : hsl.h < 0 ? 360 - hsl.h : hsl.h;

        return this.hex(this.toString(hsl));
    }

    /**
     * Check if the color has high luminance.
     * @return {boolean}
     */
    isHighLuminance(color_arg = this.color, fineTuned = true) {
        const {r, g, b} = this.rgba(1, this._colorType(color_arg).color);

        let yiq =
            fineTuned ?
                ((r * (299 - 64)) + (g * (587 * 1.25)) + (b * 114)) / 1000 : // Fine tuned
                ((r * 299) + (g * 587) + (b * 114)) / 1000; // Standard color space formula

        // Web standard of color space threshold is 128
        return (yiq >= (fineTuned ? 188 : 128));
        // return (yiq >= 128);
    }

    _luminance(color_arg = this.color) {
        let rgb = this.rgba(1, color_arg);
        let a = [rgb.r, rgb.g, rgb.b].map(function (v) {
            v /= 255;
            return v <= 0.03928
                ? v / 12.92
                : Math.pow((v + 0.055) / 1.055, 2.4);
        });

        return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
    }

    adjustSaturation(value, color_arg = this.color) {
        let {type, color} = this._colorType(color_arg);
        let col = this.hsla(this._getAlpha(color), color);

        let limit = (v, limit = 100) => {
            return v > limit ? limit : v < 0 ? 0 : v;
        };

        col.s += ((value > 0 ? (100 - col.s) : col.s) / 100) * value;
        col.s = limit(col.s);
        col.l += ((value > 0 ? (100 - col.l) : col.l) / 100) * value;
        col.l = limit(col.l);

        return this.toString(col);
    }

    adjustLuminance(value, color_arg = this.color) {
        let {type, color} = this._colorType(color_arg);
        let col = this.hsla(this._getAlpha(color), color);

        let limit = (v, limit = 100) => {
            return v > limit ? limit : v < 0 ? 0 : v;
        };

        col.l += ((value > 0 ? (100 - col.l) : col.l) / 100) * value;
        col.l = limit(col.l);

        return this.toString(col);
    }

    toString(col) {
        if (typeof col === 'string')
            return col;

        if (col.hasOwnProperty('h'))
            return 'hsla(' + (col.h || 0) + ', ' + (col.s || 100) + '%, ' + (col.l || 100) + '%, ' + (col.a || 1) + ')';

        if (col.hasOwnProperty('r'))
            return 'rgba(' + (col.r || 100) + ', ' + (col.g || 100) + ', ' + (col.b || 100) + ', ' + (col.a || 1) + ')';
        throw col;
    }

    /**
     * Returns contrast ratio between the given color.
     * Useful to determine if the given color is suitable for text with the constructed color as a background.
     * @param {string} color_arg - Color string you want to compare luminance ratio.
     * @return {number}
     */
    contrastRatio(color_arg, color_arg2) {
        let lum1 = this._luminance(color_arg2 || this.color) + 0.05;
        let lum2 = this._luminance(color_arg) + 0.05;

        return lum1 > lum2 ? lum1 / lum2 : lum2 / lum1;
    }

    /**
     * Returns suitable text color (Black / White).
     * @param {number | {}} opacity - Can set returning color values opacity.
     * @param {number} opacity.black - Set returning color values opacity when the result color is black.
     * @param {number} opacity.white - Set returning color values opacity when the result color is white.
     * @return {string | null}
     */
    textColor(opacity = 1, color_arg = this.color, fineTuned = true) {
        const {type = this.type, color = this.color} = this._colorType(color_arg);

        // returns null if color opacity is below 0.5
        if (this._getAlpha(color_arg) < 0.5)
            return null;

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

        if (this.isHighLuminance(color, fineTuned))
            return blackOpacity ? `rgba(0, 0, 0, ${opa(blackOpacity)})` : 'black';

        return whiteOpacity ? `rgba(255, 255, 255, ${opa(whiteOpacity)})` : 'white';
    }

    /**
     * Returns hsla color
     * @param {number} opacity - Set opacity for returning color value.
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
                string: this.toString({h, s, l, a: opacity})
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
                    string: this.toString({
                        h: digit[0],
                        s: digit[1],
                        l: digit[2],
                        a
                    })
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
                    string: this.toString({h, s, l, a: value.a})
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
     * @param {number} opacity - Set opacity of returning color
     * @return {object}
     */
    rgba(opacity = 1, color_arg = this.color) {
        const {type = this.type, color = this.color} = this._colorType(color_arg);

        if (type === 'hex') {
            const hex = color;
            let rgbObject = {r: null, g: null, b: null};
            let hexValues = hex.match(/[a-fA-F0-9]{2}/g);

            if (hex.length === 4) {
                hexValues = hex.match(/[a-fA-F0-9]{1}/g);
                hexValues = hexValues.map(hex => "" + hex + hex);
            }
            let count = 0;
            for (const key in rgbObject) {
                rgbObject[key] = parseInt(hexValues[count], 16);
                count++;
            }

            const opacity_value = typeof opacity === 'number' ? opacity : 1;
            let {r, g, b} = rgbObject;

            return {
                ...rgbObject,
                a: opacity_value,
                string: this.toString({
                    r: +r, g: +g, b: +b, a: opacity_value
                })
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
                    string: this.toString(value)
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
                    string: this.toString({r, g, b, a})
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
