# colormangle.js
JS library that converts color strings to various format.

Add script in your `<head></head>`
```
<script type="text/javascript" src="https://broadwayinc.dev/jslib/colormangle/0.1.0/colormangle.js"></script>
```

**Example**
```
let cm = new ColorMangle("blue");

cm.hex();
// returns '#0000ff'

cm.rgba();
// returns { r:0, g:0, b:255, a:1, string: 'rgba(0, 0, 255, 1)' }

cm.hsla();
// returns { h:240, s:100, l:50, r:0, g:0, b:255, a:1, string: 'hsla(240, 100, 50, 1)' }
```

# API

### new ColorMangle(<string: color string>)
Argument color string can be any type of color string format. Including css color names.

`
new ColorMangle('rgb(0, 0, 255)');
`

### .hex()
`return <string: returns hex color string>`

Converts color to hex color string.

`new ColorMangle('blue').hex() // returns '#0000ff'`

### .rgba(<number = 1: opacity>)
```
return <object: {
    r: <number: number value of red>,
    g: <number: number value of green>,
    b: <number: number value of blue>,
    a: <number: number value of opacity>,
    string: <string: string value of rgba format>
}>
```
Converts color to rgba format.
The argument 'opacity' is to set the opacity of the rgba output. (default = 1)

```
new ColorMangle('#0000ff').rgba(0.5).string // returns "rgba(0, 0, 255, 0.5)"
```

### .hsla(<number = 1: opacity>)
```
return <object: {
    r: <number: number value of red>,
    g: <number: number value of green>,
    b: <number: number value of blue>,
    h: <number: number value of hue>,
    s: <number: number value of saturation>,
    l: <number: number value of luminance>,
    a: <number: number value of opacity>,
    string: <string: string value of hsla format>
}>
```
Converts color to hsla format.
The argument 'opacity' is to set the opacity of the hsla output. (default = 1)

```
new ColorMangle('#0000ff').hsla(0.5).string // returns "hsla(0, 0, 255, 0.5)"
```

### .textColor(<(number | object):opacity>)
```
return <string: color string>
```
Outputs contrast color (Black | White) to use as text color.

```
new ColorMangle('blue').textColor();
// returns '#ffffff' #ffffff(White) can be used as text color on blue background
```

Opacity of the output color can be set by argument. (default = 1)

Example1:

`new ColorMangle('blue').textColor(0.5) // returns 'rgba(255, 255, 255, 0.5)'`

When the given argument is an object, you can set the opacity on each color cases.

Example2:

```
new ColorMangle('blue').textColor({white: 0.5});
// returns 'rgba(255, 255, 255, 0.5)'
```

Example3:

```
new ColorMangle('blue').textColor({black: 0.5});
// returns '#ffffff'
```

Example4:

```
new ColorMangle('antiquewhite').textColor({white: 0.5, black: 0.88});
// returns 'rgba(0, 0, 0, 0.88)'
```