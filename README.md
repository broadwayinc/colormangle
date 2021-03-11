<img alt="APM" src="https://img.shields.io/apm/l/vim-mode"> [![Github All Releases](https://img.shields.io/github/downloads/broadwayinc/colormangle/total.svg)]()

# ColorMangle
**ColorMangle** converts color strings to various format,
calculates appropriate text color based on contrast ratio. 
<br />
## Getting started
Add script tag in your header
```
<script src="https://broadwayinc.dev/jslib/colormangle/0.1.0/colormangle.js"></script>
```
And in your javascript:
```
let colormangle = new ColorMangle('rgb(0, 0, 255)');
let hex = colormangle.hex();
console.log(hex); // '#0000ff'
```
<br />
On node.js or webpack based projects

```
npm i colormangle
```
And in your javascript:
```
import {ColorMangle} from 'colormangle';
```

## Basic usage

### new ColorMangle()

**ColorMangle** input argument string can be either colorname string or any type of HTML color codes (hex, rgb, hsl).

Colorname strings can be referred in this [link](https://www.w3schools.com/colors/colors_names.asp). Belows are all equivalent argument strings expressing 'blue'. 
- ​	**Colorname:** 'blue'
- ​	**Hex format:** '#0000ff' 
- ​	**RGB format:** 'rgb(0, 0, 255)' 
- ​	**HSL format:** 'hsl(240, 100%, 50%)'

**ColorMangle** have four main functions, which are **.hex()**, **.rgba()**, **.hsla()** and **.textcolor()**. The usages are shown below.

<br />

### .hex()

**.hex()** converts any color format string to **hex** type string. It doesn't require any input argument.

**_Example_**

```
let hex = new ColorMangle('blue').hex()
console.log(hex) // '#0000ff' 
```

<br />

### .rgba()

**.rgba()** converts any css color format string to **rgba** format. The input argument 'opacity' is to set the opacity value of the rgba output. Without any argument, the default value is 1 (0 as fully transparent and 1 as fully opaque).
<br />**.rgba()** returns object properties (r, g, b, a, string and their values) as in the following structure.

```
{
    r: number value of red,
    g: number value of green,
    b: number value of blue,
    a: number value of opacity,
    string: 'text value in rgba format'
}
```

**_Example_**

```
new ColorMangle('blue').rgba(); 
// returns { r:0, g:0, b:255, a:1, string: 'rgba(0, 0, 255, 1)' }

new ColorMangle('blue').rgba(0.5).string 
// returns 'rgba(0, 0, 255, 0.5)'
```

<br />

### .hsla()

**.hsla()** converts any css color format string to hsla format. The input argument 'opacity' is to set the opacity value of the rgba output. Without any argument, the default value is 1 (0 as fully transparent and 1 as fully opaque). **.hsla()** returns object properties (r, g, b, h, s, l, a, string and their values) as in the following structure.

```
{
    r: number value of red,
    g: number value of green,
    b: number value of blue,
    h: number value of hue,
    s: number value of saturation,
    l: number value of luminance,
    a: number value of opacity,
    string: 'text value in hsla format'
}
```
**_Example_**

```
new ColorMangle('blue').hsla()
/*
returns { r:0, 
	  g:0, 
	  b:255, 
	  h:240,
	  s:100,
	  l:50,
	  a:1, 
	  string: 'hsla(240, 100%, 50%, 1)' }
*/

new ColorMangle('blue').hsla(0.3).string
// returns 'hsla(240, 100%, 50%, 0.3)'
```
<br />

### .contrastRatio()
**.contrastRatio()** calculates the contrast ratio between the given colors.

**_Example_**
```
new ColorMangle('red').contrastRatio('white')
// returns 3.9984767707539985 
```
<br />

### .textColor()

**.textColor()** automatically returns the text color string (either 'white' or 'black') that shows the greatest contrast with the background color. **Opacity** of the output text color (either 'black' or 'white') can be set by **input argument**. Without any argument, the default value is 1 (0 as fully transparent and 1 as fully opaque).

**_Example 1_**

```
new ColorMangle('blue').textColor()
// returns hex format text color '#ffffff' 
// white (#ffffff)' is the recommended output text color to be used on blue background.

new ColorMangle('blue').textColor(0.7) 
// returns rgba format text color when the input argument is given between 0~1, 'rgba(255, 255, 255, 0.7)'
```

Also, opacity on each color cases can be pre-defined by using object input argument as follows.

**_Example 2_**

```
new ColorMangle('blue').textColor({white: 0.5})
// returns 'rgba(255, 255, 255, 0.5)'

new ColorMangle('blue').textColor({black: 0.5})
// returns '#ffffff'(input argument not applied since the output text color is white on blue background)

new ColorMangle('antiquewhite').textColor({white: 0.5, black: 0.88})
// returns 'rgba(0, 0, 0, 0.88)' (The opacity is applied on each color cases)
```

## License

This project is licensed under the terms of the [MIT license](https://github.com/broadwayinc/colormangle/blob/main/LICENSE).
