import colorNames from './color-names.js';
class ColorMangle {
    /**
     * @param {string} [color='#4848db'] - Argument string can be either color name string or any type of HTML color codes (hex, rgb, hsl).
     */
    constructor(color = '#4848db', fineTuned = true) {
        this.fineTuned = fineTuned;

        let format = this._colorType(color);
        this.type = format.type;
        this.color = format.color;
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
                return { type: this.type, color: this.color };

            if (colorNames[color])
                return { type: 'hex', color: colorNames[color] };

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

                return { type, color };

            }

        } catch (err) {
            if (throwErr)
                throw err + ':' + color;
        }

        return {};
    }

    _extractDigit(color_arg = this.color) {
        let { type = this.type, color = this.color } = this._colorType(color_arg);

        if (type === 'hex')
            color = this.rgba(1, color).string;

        const value = [];

        for (const i of color.match(/\d+(\.\d+)?/g))
            value.push(parseFloat(i));

        if (value.length < 4) value.push(1);

        return value;
    }

    /**
     * @return {number} - Retrieves color alpha value (range 0 ~ 1)
     */
    getAlpha(color_arg = this.color) {
        let extract = this._extractDigit(color_arg);
        return extract ? extract[3] || 1 : 1;
    }

    /**
     * Generates color scheme object.
     * @typedef {Object} colorScheme
     * @property {string} --alert
     * @property {string} --alert-text
     * @property {string} --analogous
     * @property {string} --analogous-text
     * @property {string} --background
     * @property {string} --background-focus
     * @property {string} --background-focus-text
     * @property {string} --background-text
     * @property {string} --background-text_focus
     * @property {string} --button
     * @property {string} --button-text
     * @property {string} --complementary
     * @property {string} --complementary-text
     * @property {string} --content
     * @property {string} --content-focus
     * @property {string} --content-focus-text
     * @property {string} --content-text
     * @property {string} --content-text_focus
     * @property {string} --focus
     * @property {string} --focus-text
     * @property {string} --placeholder
     * @property {string} --saturate
     * @property {string} --saturate-text
     * @property {string} --success
     * @property {string} --success-text
     * @property {string} --text-button
     * @param {string} [color=this.color] - Focus color for color scheme
     * @param {boolean} [darkMode=false] - Dark mode when true
     * @return {colorScheme} - { [&lt;CSS Variable names&gt;] : &lt;string | HTML color string&gt; }
     */
    colorScheme(color = this.color, darkMode = false) {

        let opacity = {
            text: { black: 0.88, white: 1 },
            // soft: { black: 0.66, white: 0.88 },
            placeholder: { black: 0.44, white: 0.55 },
            // transparent: { black: 0.22, white: 0.33 },
            // shade: { black: 0.066, white: 0.11 },
            // shadow: { black: 0.033, white: 0.066 }
        };

        let template = {
            '--background': darkMode ? '#121212' : '#f7f7f7',
            '--content': darkMode ? '#2b2b2b' : '#ffffff',
            // '--toolbar': darkMode ? '#2b2b2b' : '#ffffff'
        };

        let focusOriginal;
        let focusSat;
        let content_isHighLuminance = this.isHighLuminance(template['--content']);
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
            focusSat = this.matchLuminance(color, template['--content'], content_isHighLuminance ? 1.5 : 4.5);
            return darkMode ? focusSat : color;
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
        })();

        let complementary = this.matchLuminance(this.complementary(focus, 60 * compDir), template['--background'], 3.1);
        let fixedValue = {
            // '--shadow': 'rgba(0, 0, 0, 0.033)',
            // '--shade': 'rgba(0, 0, 0, 0.066)',
            // '--transparent': 'rgba(0, 0, 0, 0.22)',
            '--placeholder': darkMode ? 'rgba(255, 255, 255, 0.55)' : 'rgba(0, 0, 0, 0.44)' 
        };

        let darkModeAnalogous = darkMode ? this.matchLuminance(analogous, template['--background'], 4.5) : analogous;
        let analogousNude = this.matchLuminance(analogous, template['--background'], 4.5);

        for (let k in template) {
            template[k + '-text'] = this.textColor(opacity.text, template[k]);
            template[k + '-focus'] = k.includes('--background') ? darkModeAnalogous : focus;
            template[k + '-text_focus'] = k.includes('--background') ? analogousNude : this.matchLuminance(darkMode ? focus : focusSat, template[k], 1.66);
            template[k + '-focus-text'] = this.textColor(1, k.includes('--background') ? darkModeAnalogous : focus);
        }

        template['--focus'] = focusOriginal;
        template['--focus-text'] = this.textColor(1, focusOriginal);
        template['--saturate'] = focusSat;
        template['--saturate-text'] = this.textColor(1, focusSat);

        Object.assign(template, {
            '--complementary': complementary,
            '--complementary-text': this.textColor(1, complementary),
            '--analogous': analogous,
            '--analogous-text': this.textColor(1, analogous),
            '--alert': 'tomato',
            // '--alert-text': 'white',
            '--success': 'limegreen',
            // '--success-text': 'black',
            '--button': focus,
            '--text-button': darkMode ? this.matchLuminance(focusSat, template["--content"], 7) : this.contrastRatio(template["--content"], focusSat) < 4.5 ? "inherit" : focusSat,
            '--button-text': this.textColor(1, focus)
        });

        // for (let k in template) {
        //     if (!template[k] || template[k] === "")
        //         continue;

        //     let highLum = this.isHighLuminance(template[k]);
        //     for (let op of ['soft', 'placeholder', 'transparent', 'shadow', 'shade']) {

        //         template[k + '_' + op] = this.rgba(opacity[op][highLum ? 'white' : 'black'], template[k]).string;
        //     }
        // }

        // template['--button-border'] = (() => {
        //     let focus_isHighLuminance = this.isHighLuminance(focus);
        //     let border = this.matchLuminance(this.adjustLuminance(-1, template['--button']), template['--button'], 1.15, -1, focus_isHighLuminance ? 'luminance' : 'brightness');
        //     return focus_isHighLuminance ? this.rgba(0.5, border).string : border;
        // })();

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

    /**
     * Match luminance of target_color with base color
     * @param {string} target_color - Target color
     * @param {string} [color_arg=this.color] - Base color
     * @param {number} [target_ratio] - Set contrast ratio difference
     * @param {number} [direction] - Adjust direction. Adjust to darker luminance when -1. Brighter when 1, otherwise auto.
     * @param {string} [method] - Luminance adjustment mode: 'brightness | luminance | saturation'
     * @return {string} - HTML color string
     */
    matchLuminance(target_color, color_arg = this.color, target_ratio, direction, method) {
        let { color } = this._colorType(color_arg);
        let target = this._colorType(target_color).color;

        if (target_ratio) {
            let adj = target;
            let m = this.contrastRatio(adj, color);
            if (m < target_ratio) {
                let dir = direction || this.isHighLuminance(color) ? -1 : 1;
                let count = 100;
                while (m < target_ratio && count--) {
                    let adj_set;

                    switch (method) {
                        case 'brightness':
                            adj_set = this.adjustBrightness(1 * dir, adj);
                            break;
                        case 'luminance':
                            adj_set = this.adjustLuminance(1 * dir, adj);
                            break;
                        default:
                            adj_set = this.adjustBrightness(1 * dir, { legacy: true, color: adj });
                    }

                    if (adj === adj_set)
                        break;
                    adj = adj_set;

                    m = this.contrastRatio(adj, color);
                }
            }
            return this.hex(adj);
        } else {
            let main_lum = this._luminance(color);
            let lum = this._luminance(target);

            if (Math.abs(lum - main_lum) < 0.01)
                return target;

            let adj = this.hex(target);

            let dir = (lum, main_lum) => {
                return lum < main_lum ? 1 : -1;
            };

            let currDir = dir(lum, main_lum);
            while (Math.abs(lum - main_lum) > 0.01 && currDir === dir(lum, main_lum)) {
                let adj_set;
                switch (method) {
                    case 'saturation':
                        adj_set = this.adjustBrightness(currDir, { color: adj, legacy: true });
                        break;
                    case 'luminance':
                        adj_set = this.adjustLuminance(currDir, adj);
                        break;
                    default:
                        adj_set = this.adjustBrightness(currDir, adj);
                }
                let lum_pre = this._luminance(adj_set);
                if (lum_pre === lum || currDir !== dir(lum_pre, main_lum))
                    break;
                lum = lum_pre;
                adj = adj_set;
            }
            return this.hex(adj);
        }
    }

    /**
     * Generate analogous color
     * @param {string} [color_arg=this.color] - Target color
     * @param {number} [deg=30] - Amount of hue separation
     * @return {Array} - 2 analogous color is returned. [&lt;hsla color&gt;, ... ]
     */
    analogous(color_arg = this.color, deg = 30) {
        let { color } = this._colorType(color_arg);

        let spin = (h, v) => {
            let val = h + v;
            return val < 0 ? 360 + val : val > 360 ? val - 360 : val;
        };

        let hsl = this.hsla(this.getAlpha(color), color);
        let plus = 'hsla(' + spin(hsl.h, deg) + ', ' + hsl.s + '%, ' + hsl.l + '%, ' + hsl.a + ')';
        let minus = 'hsla(' + spin(hsl.h, -deg) + ', ' + hsl.s + '%, ' + hsl.l + '%, ' + hsl.a + ')';

        return [this.matchLuminance(plus, color), this.matchLuminance(minus, color)];
    }

    /**
     * Generate complementary color
     * @param {string} [color_arg=this.color] - Target color
     * @param {number} [add=0] - Add or subtract hue from complementary color
     * @return {string} - HEX color string
     */
    complementary(color_arg = this.color, add = 0) {
        let { color } = this._colorType(color_arg);

        let hsl = this.hsla(this.getAlpha(color), color);

        if (hsl.h < 180)
            hsl.h += 180;
        else
            hsl.h -= 180;

        hsl.h += add;
        hsl.h = hsl.h > 360 ? hsl.h - 360 : hsl.h < 0 ? 360 - hsl.h : hsl.h;

        return this.hex(this._toString(hsl));
    }

    /**
     * @param {string} [color_arg=this.color] - Target color
     * @param {boolean} [fineTuned=false] - Custom Color space is applied when true
     * @return {boolean} - True if color has high luminance
     */
    isHighLuminance(color_arg = this.color, fineTuned = this.fineTuned) {
        const { r, g, b } = this.rgba(1, this._colorType(color_arg).color);

        let yiq =
            fineTuned ?
                ((r * (299 - 64)) + (g * (587 * 1.25)) + (b * 114)) / 1000 : // Fine tuned
                ((r * 299) + (g * 587) + (b * 114)) / 1000; // Standard color space formula

        // Web standard of color space threshold is 128
        return (yiq >= (fineTuned ? 188 : 128));
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

    _toString(col) {
        let numberOrNot = (n, def = 100) => {
            return typeof n === 'number' ? n : def;
        };
        if (typeof col === 'string')
            return col;

        if (col.hasOwnProperty('h'))
            return 'hsla(' + (col.h || 0) + ', ' + numberOrNot(col.s) + '%, ' + numberOrNot(col.l) + '%, ' + numberOrNot(col.a, 1) + ')';

        if (col.hasOwnProperty('r'))
            return 'rgba(' + numberOrNot(col.r) + ', ' + numberOrNot(col.g) + ', ' + numberOrNot(col.b) + ', ' + numberOrNot(col.a, 1) + ')';
        throw col;
    }

    /**
     * Returns contrast ratio between the given color.
     * Useful to determine if the given color is suitable for text with the constructed color as a background.
     * @param {string} color_arg1 - Color string you want to compare luminance ratio.
     * @param {string} [color_arg2=this.color] - Color string you want to compare with color_arg1
     * @return {number} - Contrast ratio
     */
    contrastRatio(color_arg1, color_arg2 = this.color) {
        let lum1 = this._luminance(color_arg2) + 0.05;
        let lum2 = this._luminance(color_arg1) + 0.05;

        return lum1 > lum2 ? lum1 / lum2 : lum2 / lum1;
    }

    /**
     * Returns suitable text color (Black / White).
     * @param {(number | Object)} opacity - Can set returning color values opacity.
     * @param {number} opacity.black - Set returning color values opacity when the result color is black.
     * @param {number} opacity.white - Set returning color values opacity when the result color is white.
     * @param {(string|Object)} [option=this.color] - Background color of text
     * @param {(string|Object)} [option.color=this.color] - Background color of text
     * @param {(string|Object)} [option.fineTuned=true] - Follows standard color space calculation when false
     * @return {string | null} - HTML color string
     */
    textColor(opacity = 1, option = this.color) {

        if (typeof option === 'string')
            option = { color: option };

        let { color = this.color, fineTuned = true } = option;

        color = this._colorType(color).color;

        // returns null if color opacity is below 0.5
        if (this.getAlpha(color) < 0.5)
            return "";

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
     * @param {number} [opacity] - Set opacity for returning color value.
     * @param {string} [color_arg=this.color] - Color to convert to hsla string
     * @return {Object} - { h: &lt;number&gt;, s: &lt;number&gt;, l: &lt;number&gt;, r: &lt;number&gt;, g: &lt;number&gt;, b: &lt;number&gt;, a: &lt;number&gt;, string: &lt;string | rgba color string&gt; }
     */
    hsla(opacity, color_arg = this.color) {
        const { type = this.type, color = this.color } = this._colorType(color_arg);

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
            return { h, s, l };
        };

        if (type === 'hex') {
            opacity = typeof opacity === 'number' ? opacity : 1;
            const rgba = this.rgba(opacity, color);
            const { r, g, b, a } = rgba;
            const { h, s, l } = hsl(r, g, b);

            return {
                r, g, b, a,
                h: h,
                s: s,
                l: l,
                string: this._toString({ h, s, l, a: opacity })
            };

        } else {

            const digit = this._extractDigit(color);
            opacity = typeof opacity === 'number' ? opacity : digit[3] || 1;

            if (type.includes('hsl')) {
                const { r, g, b, a } = this.rgba(opacity, color);

                return {
                    r, g, b, a,
                    h: digit[0],
                    s: digit[1],
                    l: digit[2],
                    string: this._toString({
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
                const { h, s, l } = hsl(value.r, value.g, value.b);

                return Object.assign(value, {
                    r: value.r,
                    g: value.g,
                    b: value.b,
                    h: h,
                    s: s,
                    l: l,
                    a: value.a,
                    string: this._toString({ h, s, l, a: value.a })
                });

            }
        }
    }

    /**
     * Returns hex color string
     * @param {string} [color_arg=this.color] - Color to convert to hex string
     * @return {string} - HEX color string
     */
    hex(color_arg = this.color) {
        const { type = this.type, color = this.color } = this._colorType(color_arg);

        if (type.includes('rgb') || type.includes('hsl')) {
            const rgba = this.rgba(1, color);
            return '#' + ((1 << 24) + (rgba.r << 16) + (rgba.g << 8) + rgba.b).toString(16).slice(1);
        }

        return color;
    }

    /**
     * Returns rgba color
     * @param {number} [opacity] - Set opacity of returning color
     * @param {string} [color_arg=this.color] - Color to convert to rgba string
     * @return {Object} - { r: &lt;number&gt;, g: &lt;number&gt;, b: &lt;number&gt;, a: &lt;number&gt;, string: &lt;string | HTML color string&gt; }
     */
    rgba(opacity, color_arg = this.color) {
        const { type = this.type, color = this.color } = this._colorType(color_arg);

        if (type === 'hex') {
            const hex = color;
            let rgbObject = { r: null, g: null, b: null };
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
            let { r, g, b } = rgbObject;

            return {
                ...rgbObject,
                a: opacity_value,
                string: this._toString({
                    r: +r, g: +g, b: +b, a: opacity_value
                })
            };

        } else {
            const digit = this._extractDigit(color);
            const a = typeof opacity === 'number' ? opacity : digit[3] || 1;

            if (type.includes('rgb')) {

                let value = {
                    r: digit[0],
                    g: digit[1],
                    b: digit[2],
                    a
                };

                return Object.assign({
                    string: this._toString(value)
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
                    string: this._toString({ r, g, b, a })
                };

            }
        }
    }

    /**
     * @param {number} value - Adjust value by percent. range: -100 ~ 100
     * @param {(string|Object)} [option=this.color] - Color to adjust || additional option.
     * @param {(string|Object)} [option.color_arg=this.color] - Color to adjust.
     * @param {(string|Object)} [option.legacy=false] - Legacy adjust mode. Adjust brightness by saturation and luminance.
     * @return {string} - Brightness adjusted HTML color string
     */
    adjustBrightness(value = 0, option = this.color) {
        let color_arg, legacy = false;
        if (typeof option === 'string')
            color_arg = option || this.color;
        else {
            color_arg = option.color || this.color;
            legacy = option.legacy || false;
        }

        if (legacy) {
            let { color } = this._colorType(color_arg);
            let col = this.hsla(this.getAlpha(color), color);

            let limit = (v, limit = 100) => {
                return v > limit ? limit : v < 0 ? 0 : v;
            };

            col.s += ((value > 0 ? (100 - col.s) : col.s) / 100) * value;
            col.s = limit(col.s);
            col.l += ((value > 0 ? (100 - col.l) : col.l) / 100) * value;
            col.l = limit(col.l);

            return this._toString(col);
        }

        let { type = this.type, color = this.color } = this._colorType(color_arg);

        if (value === 0)
            return color;

        const opacity = type === 'hex' ? 1 : this._extractDigit(color)[3] || 1;
        const rgb = this.rgba(opacity, color);

        let rgbRange = {
            r: 0 - rgb['r'],
            g: 0 - rgb['g'],
            b: 0 - rgb['b']
        };

        if (value > 0) {
            Object.keys(rgbRange).map(function (key) {
                rgbRange[key] = 255 - rgb[key];
            });
        }

        ['r', 'g', 'b'].map(function (key) {
            rgb[key] += parseInt(rgbRange[key] / 100 * Math.abs(value));
        });

        const result = 'rgb(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ')';

        if (type === 'hex')
            return this.hex(result);

        else if (type.includes('rgb'))
            return this.rgba(rgb.a, result).string;

        else if (type.includes('hsl'))
            return this.hsla(rgb.a, result).string;
    }

    /**
     * @param {number} value - Adjust value by percent. range: -100 ~ 100
     * @param {string} [color_arg=this.color] - Color to adjust.
     * @return {string} - Luminance adjusted hsla color string
     */
    adjustLuminance(value = 0, color_arg = this.color) {
        let { color } = this._colorType(color_arg);
        let col = this.hsla(this.getAlpha(color), color);

        let limit = (v, limit = 100) => {
            return v > limit ? limit : v < 0 ? 0 : v;
        };

        col.l += ((value > 0 ? (100 - col.l) : col.l) / 100) * value;
        col.l = limit(col.l);

        return this._toString(col);
    }

    /**
     * @param {number} value - Adjust value by percent. range: -100 ~ 100
     * @param {string} [color_arg=this.color] - Color to adjust.
     * @return {string} - Saturation adjusted hsla color string
     */
    adjustSaturation(value = 0, color_arg = this.color) {
        let { color } = this._colorType(color_arg);
        let col = this.hsla(this.getAlpha(color), color);

        let limit = (v, limit = 100) => {
            return v > limit ? limit : v < 0 ? 0 : v;
        };

        col.s += ((value > 0 ? (100 - col.s) : col.s) / 100) * value;
        col.s = limit(col.s);

        return this._toString(col);
    }
}

export { ColorMangle };