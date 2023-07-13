1. Explain all the CSS positions(static, fixed, sticky, relative, absolute) with one code example each


static => it is the default position of any element which is written on HTML document. It means that the element follows the normal flow of the document.

<style> .static-position { background-color: red; } </style>
This is a static position example.
fixed => A fixed position is used to fix an element relative to the viewport. The element remains fixed even when the page is scrolled. It does not affect the position of other elements on the page.

<style> .fixed-position { position: fixed; top: 50px; right: 50px; background-color: blue; } </style>
This is a fixed position example.
sticky => A sticky element toggles between relative and fixed , depending on the scroll position. It is positioned relative until a given offset position is met in the viewport. it behaves like a fixed element.

<style> .sticky-position { position: sticky; top: 100px; background-color: green; } </style>
This is a sticky position example.
relative => Relative positioning allows an element to be positioned relative to its normal position. It retains its position within the document flow, but you can adjust its position using the top, bottom, left, or right properties.

<style> .relative-position { position: relative; top: 20px; left: 30px; background-color: orange; } </style>
This is a relative position example.
absolute => An absolutely positioned element is removed from the normal document flow and positioned relative to its nearest positioned ancestor. If no positioned ancestor exists, it is positioned relative to the initial containing block. It does not leave a space for itself in the normal flow, and other elements can overlap it.

<style> .absolute-position { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: yellow; } </style>
This is an absolute position example.