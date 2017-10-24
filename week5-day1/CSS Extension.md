## CSS EXTENSION

#### CSS has begins-with and ends-with substring selectors for targeting elements. Example:

a[href^=“http://”] {
	/*css rules  here*/
}

In the above code, we’re targeting all ‘a’ tags with an href value that begins with “http://”
Just like the above, you also have an ends-with selector. Just swap out the ‘^’ for a ‘$’
^ = begins with
$ = ends with
* = match any
blank = match exact

more reading = https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors

#### with pseudo-class selectors (like :disabled, :focus, and :checked) , you can target all elements by not specifying an element to target. Example below.

:disabled {
	background-color: #ddd;
} /* will target ALL DISABLED elements on page*/

#### remember, you can use the ‘sibling’ operator to target multiple elements in a rule. Example below : 

input [type=“checkbox”]:checked + label {
font-weight:900;
} /* targets all <input> tags with type of ‘checkbox’ when checked AND their immediate sibling <label> elements */

quick pseudo selector recap : 
:first-child
:last-child
:only-child
:empty
tagName[*,$,^, ,=]


#### nth-child takes a function-like syntax to apply styles. The param will take ‘odd’, ‘even’, a specific child number, or an expression. Example below:

/* This will target every third element (a value), starting at the 5th element (b value)*/
:nth0child(3n+5){
  /*derp*/
}

If the ‘a’ value is 1, it can be safely omitted. If the ‘b’ value is 0, you can omit that as well. You can also apply negative values to your expressions.

#### :nth-of-type will allow you to target specific child elements by type.

div:nth-of-type(4){
	/* this will always target the 4th div, regardless of however many non-div child elements exist before it. */
}

:nth-last-of-type is the same, but starts at the end rather than the beginning.

Bear in mind, div:first-of-type and div:last-of-type are also valid options.

#### :root will target the root element (usually the <html> tag). This is useful if you don’t have access to the original document.

#### :target will target the active target of a link element. (the # portion in the URL when href’ing to ID’s) 

#### This :not() will accept other pseudo classes as params!

div:not(#checkbox){
	/* will target all div elements that are NOT matching the ID of checkbox */
}

.col:not(:first-child){
	/* will target all .col classes EXCEPT the first one */
}

---

## PSEUDO ELEMENTS

#### Pseudo-element targeting is also a nice css feature. first-line and first-letter will allow you to target the first line or letter. This is nice because it first-line will scale, and adapt to whatever the line length happens to be at that viewport size. First letter is often used for drop caps.

pseudo elements may be written with either two colons or one. Two is commonly used to distinguish between a pseudo class and a pseudo element.

#### ::before and ::after are pseudo elements. They’re considered ‘generated content’, and allow an additional, style-able element before and/or after a targeted element. THIS REQUIRES THE USE OF THE CONTENT KEY/ATTRIBUTE. Example below : 

.jpg::before{
	content: url(jpg-icon.jpg);
	width:40px;
}

These pseudo elements can be used for things like bullet-points on a list as well.
The content property will also allow you to pull any attribute value for that html element. Example : 

#thumbnail::before{
	content: attr(alt)
} /* This will take the alt attribute and display it as text before the thumbnail */

One thing to keep in mind, the before and after pseudo classes are appended as child elements. They are still confined within the outer bounds of the box itself.

---

## NEW CSS FEATURES

#### filter(/*FilterName (% of original filter to apply), opacity(%), blur(px), hue-rotate(deg), drop-shadow(x-offset,y-offset,blur,color) Drop-shadow works like box-shadow*/) example below : 

img{
	-webkit-filter: sepia(50%); /* webkti prefix may or may not be necessary depending on your browser */
} 

#### calc() allows for the use of mathematical expressions to mix-match sizing units. Example below : 

.wrapper {
	width: -webkit-calc(50% -  50px); /*will always be 50px left of the middle*/
}

#### multi column layout! Similar to flexbox in that is provides a lot of layout flexibility, the difference is that it is designed for text layout and text columns. It simply flows the text content into multiple columns within the same element box. Example below : 

#bigBlockOText{
	-webkit—column-count: 4;
	—webkit-column-gap: 3em;
	-webkit-column-rule: 1px dotted black;
	-webkit-column-width: 200px; /* acts as a max-width. Column count will reduce instead of exceeding size */
};

#### Alternatively, there is a property that allows a specific element to span multiple columns.

#h2InsideBlockOText{
	—webkit-column-span:all;
}

#### CSS is no longer versioned as a whole. It’s versioned by module to allow for faster production and specification change. The version number of a particular feature has no co-relation to whatever version of css it’s in.

calc() is a css function that performs mathematical calculations and returns a result. You can use *, +, -, and /

---

## CSS3

Colors in CSS3 can also be represented as a HSL value. HSL = hue, saturation, lightness.
First value is 0-360 /*like degress of color wheel*/, second and third are percentage based values. 
background-color: hsl(170, 70%, 60%);

https://medium.com/@erikdkennedy/7-rules-for-creating-gorgeous-ui-part-1-559d4e805cda

shadow effects can be applied to give 3d like appearance. Take advantage of this to add realism and make the UI seem like a real-life item.

Using black and white first helps with layout, as you’re not distracted by color matching.
As a bonus, having the main layout black and white will make any added color pop quite well.


https://www.youtube.com/watch?v=UMwunYQGvhs
CSS provides new features like shapes, new color formats, advanced selectors, variables, filters, and blending.

CSS variables still follow the cascade rule. To use css variables, declare your property and value with a —— prefix on a high-level element. Rules further down the cascade can access those values using the var keyword. Example below : 

:root {
	——myColor : #ABC;
}

.someOtherClass{
	background-color: var(——myColor);
}

You can use multiple var values for any css rule that accepts multiple values. (like gradients)

Css preprocessors have a few limitations compared to css native variables = 
1. static
2. doesn’t run in browser
3. not aware of DOM structure

CSS variables inherit, cascade, and can be scoped to selectors like any other vanilla css rule. And as a bonus, you can update your css rule using JS (setProperty and getPropertyValue).

CSS variables do NOT work in : 
1. selectors
2. property names
3. media query condition expressions

CSS has two blend modes. background-blend-mode and mix-blend-mode. A blend will combine two rules for you. Example below : 
header{
	background: linear—gradient(#0904e1,#eef492), url(‘img.jpg’) no-repeat;
	background-blend-mode: multiply;
}

The mix-blend is different in that it’ll also work with svg’s and other file types.
CSS now has backdrop-filter, and it supports photo-shop like syntax and functionality. Here’s a short list : 
blur
brightness
contrast
drop-shadow
grayscale
hue-rotate
invert
opacity
sepia
saturate

CSS also allows you to use CSS shapes as geometric values. The shapes feature only works on floated elements right now. Do this with the shape-outside key. You can add margin using the shape-margin key. You can use the polygon value to define your own shapes (specify your own x/y coordinates)!
https://developer.mozilla.org/en-US/docs/Web/CSS/shape-outside

You can use clip-path, which takes the same syntax as shape-outside, to specify a section of an image to modify or hide. Which allows you to specify your own flows. 

YOU CAN BASE CSS RULES FOR CLIP-PATH BASED ON SVG DOM ELEMENTS!!! Example below : 

HTML
<svg width=“0” height=“0”>
	<clipPath id=“clipper”>	
		<polygon points=“…”></polygon>
	</clipPath>
</svg>

CSS
h1{
	clip-path: url(“#clipper”);
}

Here’s a website where you can create your own clips! http://bennettfeely.com/clippy/

CSS now also allows you to use Octaldecimal (8 digit Hex) notation to represent RGBA values. #RRGGBBAA

#### upcoming css features

color-mod() is an upcoming css feature with no browser support yet. You can choose a base color and simply modify properties of it such as lightness, hue, etc.

:matches is another upcoming pseudo class that functions as syntactic sugar over some existing selectors. Example =

:matches(.box1, .box2, .box3) .btn {
	/* Do stuff */
}; 

Is the equivalent of = 
.box1 .btn, .box2 .btn, .box3 .btn, { }
:matches shares the same functionality previously known as :any()
:valid and :invalid are also available as pseudo classes now. 

@supports is another experimental feature. Similar to how media queries function, you can use @supports(display:grid){
	/* if browser supports display:grid, use the rules in this block. You can provide any css rule as an argument*/
}

@supports can accept multiple rules using the ‘and’ keyword to chain () blocks.

writing-mode is a new option for text direction! 

