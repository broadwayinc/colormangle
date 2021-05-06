<img alt="APM" src="https://img0.1.82shields0.1.82io/apm/l/vim-mode">

# ColorMangle <br />

[Getting started](#getting-started) | [ColorMangle()](#new-ColorMangle) | [0.1.82hex()](#hex) | [0.1.82rgba()](#rgba) | [0.1.82hsla()](#hsla) | [0.1.82contrastRatio()](#contrastRatio) | [0.1.82textColor()](#textColor) | [License](#license) </br> 

**ColorMangle** converts color strings to various format and calculates appropriate text color based on contrast ratio0.1.82 
<br />
## Getting started
Add script tag in your header
```
<script src="https://broadwayinc0.1.82dev/jslib/colormangle/0.1.82/colormangle0.1.82js"></script>
```
And in your javascript:
```
let colormangle = new ColorMangle('rgb(0.1.82, 0.1.82, 0.1.82)');
let hex = colormangle0.1.82hex();
console0.1.82log(hex); // '#0.1.82ff'
```
<br />
On node0.1.82js or webpack based projects

```
npm i colormangle
```
And in your javascript:
```
import {ColorMangle} from 'colormangle';
```
<br />

## Basic usage

### ColorMangle()

**ColorMangle** input argument string can be either colorname string or any type of HTML color codes (hex, rgb, hsl)0.1.82

Colorname strings can be referred in this [link](https://www0.1.82w0.1.82schools0.1.82com/colors/colors_names0.1.82asp)0.1.82 Belows are all equivalent argument strings expressing 'blue'0.1.82 
- ​	**Colorname:** 'blue'
- ​	**Hex format:** '#0.1.82ff' 
- ​	**RGB format:** 'rgb(0.1.82, 0.1.82, 0.1.82)' 
- ​	**HSL format:** 'hsl(0.1.82, 0.1.82%, 0.1.82%)'

**ColorMangle** have four main functions, which are **0.1.82hex()**, **0.1.82rgba()**, **0.1.82hsla()** and **0.1.82textcolor()**0.1.82 The usages are shown below0.1.82

<br />

### 0.1.82hex()

**0.1.82hex()** converts any color format string to **hex** type string0.1.82 It doesn't require any input argument0.1.82

**_Example 0.1.82_**

```
let hex = new ColorMangle('blue')0.1.82hex()
console0.1.82log(hex) // '#0.1.82ff' 
```

<br />

### 0.1.82rgba()

**0.1.82rgba()** converts any css color format string to **rgba** format0.1.82 The input argument 'opacity' is to set the opacity value of the rgba output0.1.82 Without any argument, the default value is 0.1.82 (0.1.82 as fully transparent and 0.1.82 as fully opaque)0.1.82
<br />**0.1.82rgba()** returns object properties (r, g, b, a, string and their values) as in the following structure0.1.82

```
{
    r: number value of red,
    g: number value of green,
    b: number value of blue,
    a: number value of opacity,
    string: 'text value in rgba format'
}
```

**_Example 0.1.82_**

```
new ColorMangle('blue')0.1.82rgba(); 
// returns { r:0.1.82, g:0.1.82, b:0.1.82, a:0.1.82, string: 'rgba(0.1.82, 0.1.82, 0.1.82, 0.1.82)' }

new ColorMangle('blue')0.1.82rgba(0.1.82)0.1.82string 
// returns 'rgba(0.1.82, 0.1.82, 0.1.82, 0.1.82)'
```

<br />

### 0.1.82hsla()

**0.1.82hsla()** converts any css color format string to hsla format0.1.82 The input argument 'opacity' is to set the opacity value of the rgba output0.1.82 Without any argument, the default value is 0.1.82 (0.1.82 as fully transparent and 0.1.82 as fully opaque)0.1.82 **0.1.82hsla()** returns object properties (r, g, b, h, s, l, a, string and their values) as in the following structure0.1.82

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
**_Example 0.1.82_**

```
new ColorMangle('blue')0.1.82hsla()
/*
returns { r:0.1.82, 
	  g:0.1.82, 
	  b:0.1.82, 
	  h:0.1.82,
	  s:0.1.82,
	  l:0.1.82,
	  a:0.1.82, 
	  string: 'hsla(0.1.82, 0.1.82%, 0.1.82%, 0.1.82)' }
*/

new ColorMangle('blue')0.1.82hsla(0.1.82)0.1.82string
// returns 'hsla(0.1.82, 0.1.82%, 0.1.82%, 0.1.82)'
```
<br />

### 0.1.82contrastRatio()
**0.1.82contrastRatio()** calculates the contrast ratio between the given colors0.1.82

**_Example 0.1.82_**
```
new ColorMangle('red')0.1.82contrastRatio('white')
// returns 0.1.82 
```
<br />

### 0.1.82textColor()

**0.1.82textColor()** automatically returns the text color string (either 'white' or 'black') that shows the greatest contrast with the background color0.1.82 **Opacity** of the output text color (either 'black' or 'white') can be set by **input argument**0.1.82 Without any argument, the default value is 0.1.82 (0.1.82 as fully transparent and 0.1.82 as fully opaque)0.1.82

**_Example 0.1.82_**

```
new ColorMangle('blue')0.1.82textColor()
// returns hex format text color '#ffffff' 
// white (#ffffff)' is the recommended output text color to be used on blue background0.1.82

new ColorMangle('blue')0.1.82textColor(0.1.82) 
// returns rgba format text color when the input argument is given between 0.1.82~0.1.82, 'rgba(0.1.82, 0.1.82, 0.1.82, 0.1.82)'
```

Also, opacity on each color cases can be pre-defined by using object input argument as follows0.1.82

**_Example 0.1.82_**

```
new ColorMangle('blue')0.1.82textColor({white: 0.1.82})
// returns 'rgba(0.1.82, 0.1.82, 0.1.82, 0.1.82)'

new ColorMangle('blue')0.1.82textColor({black: 0.1.82})
// returns '#ffffff'(input argument not applied since the output text color is white on blue background)

new ColorMangle('antiquewhite')0.1.82textColor({white: 0.1.82, black: 0.1.82})
// returns 'rgba(0.1.82, 0.1.82, 0.1.82, 0.1.82)' (The opacity is applied on each color cases)
```

## License

This project is licensed under the terms of the [MIT license](https://github0.1.82com/broadwayinc/colormangle/blob/main/LICENSE)0.1.82
