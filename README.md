# CSS-Complete-Guide

## Section 14 : Using the CSS Grid

###  Introduction

* we'll dive into the CSS grid, a technology which allows us to create highly customizable, more complex page layouts.

* We walked you through CSS flexbox which also is related to laying things out and positioning things and therefore in this module, we will not only learn CSS grid but of course, I'll also dive into how it relates to flexbox and when to use which

### What is the CSS Grid?

* So what is the CSS grid? Let's consider a normal web page like this one, where we have a couple of different elements or areas. We may have a header, sidebar, the main content with some elements and a footer let's say.

* Now if we look close, we could divide this up into a grid of rows and columns, so like this(Refer : grid1)

* the CSS grid is another tool which aims to help you with that. It allows you to define such a grid of rows and columns and to then specify which element should be positioned where and it's really flexible about all of that as you will learn,

### Turning a Container into a Grid

```html
<div class="container">
    <div class="el1">Element 1</div>
    <div class="el2">Element 2</div>
    <div class="el3">Element 3</div>
    <div class="el4">Element 4</div>
</div>
```
* So let's start turning this into a grid. If we go back to the HTML file real quick, we see we got this wrapping container and this container holds all the other divs.

* Now we can turn this container into a grid by setting the display property to grid.

```css
.container {
    margin: 20px;
    display:grid;
}
```
* Now you learned that we can set it to inline, block, none, inline block, flex, grid is just another option and with that, the container element becomes a CSS grid and the elements inside of it, so these four divs are then positioned within the grid 

* If I now reload the page, nothing changes, the elements look exactly the way it did it before.(Refer : grid2)

* this feature which is really useful to extend lines infinitely. If you check it, then the lines don't end after the grid container but they continue thereafter which makes it easier to see them especially when you have elements with a solid background as in our case here. (Refer : grid3)

* Now that is really useful because this already shows us that a grid was created and right now it has one column, only one column but four rows, one row for each element and that's just because the default behavior for an element with display grid is no settings are set, then it will create only one column and as many rows as we have child elements.

* And if one of these divs had a nested child element, then only the wrapping div, so el2 let's say gets its own row, the nested elements inside of el2 or any other div would not be part of the grid,

* so only direct children are part of the grid so to say or are considered by the row generation mechanism.

### Defining Columns & Rows

* So with the dummy grid created, let's change these defaults to see what we can do with the grid.

* Now to customize this grid, let's go back to our CSS code and on the container where we have display grid, we can now add a special grid related property, the grid template columns property.

```css
.container {
    margin: 20px;
    display:grid;
    grid-template-columns: 200px 150px 20%;
}
```

* This allows us to overwrite of only having one column and to add multiple columns to the grid.

* Now how do we add columns?

* You don't enter three for three columns, instead you can set the width of the columns.

* So what we could do is, we could set 200 pixels for the first column and then add a second column by simply specifying a second value, like 150 pixels and maybe a third column which could also be 20% of the surrounding container, so of the grid container.

* So if we save this and we reload, now something changed.(Refer : grid4) -  we get three columns here. These are the three columns we created, you can see they have different sizes, the last column has 20% of their container size, the middle column is 150 pixels and the first column is 200 pixel sizes

* Now another unit we can use in a grid, a special unit is fraction, we can also add a fourth column with one fraction, fr

```css
.container {
    margin: 20px;
    display:grid;
    grid-template-columns: 200px 150px 20% 1fr;
}
```
* and this will split up the remaining space and if we had more than one column with the fraction unit, it would split the remaining space between all columns with fraction and the number indicates the relation.

* So if I replace 150 pixels with two fraction, then the remaining space,

```css
.container {
    margin: 20px;
    display:grid;
    grid-template-columns: 200px 2fr 20% 1fr;
}
```
* so 100% = 20% - 200 pixels, the remaining space would be split up between column 2 and column 4 and column 2 would receive twice as much space as column 4 does. If I save this and reload,(Refer : grid5)

* now you see column 2 and column 4 are the fraction columns and column 2 indeed is twice as big as column 4 is.

* Now one important note here, you can now also see that we got a solid line on the right of the grid, previously here, this purple line was dotted. Solid lines mark the end or beginning of the grid rows and columns

* and since we explicitly state columns here, there is no inferred width or inferred amount of columns or rows 

* and therefore, the grid clearly ends after the solid line. To the bottom, we still have a dotted line for the row because it will still keep the flexibility of adding more rows if needed because we haven't defined the rows explicitly.

* Let us add rows

```css
.container {
    margin: 20px;
    display:grid;
    grid-template-columns: 200px 2fr 20% 1fr;
    grid-template-rows: 5rem 2.5rem;
}
```

* and there we could say the first row should have let's say 5rem and the second row should have 2.5rem. Now we add two rows and if I save and reload,(Refer: grid6) what we can see is that the first row increased in height because we set it to 5rem and we get a second row which holds no content because we only got four elements and we now got eight cells, four columns and two rows but the second row is actually there and we can see it in the preview,

* we now got a solid line at the bottom which marks that the grid indeed is enclosed by these four solid lines.

* Now as a side note, if you would add more than eight elements, it would still create the ninth and so on element in a newly added row, so it keeps that flexibility of growing if needed

* but that simply means that we got clearly defined sizes for two rows and any other row would then again fallback to the defaults

* we have eight cells and that we seem to automatically position the elements there.

* Now time to work on that positioning because wouldn't it be helpful if we could for example let element3(div3 - el3) take more than one cell because maybe it should overlap two cells?

### Positioning Child Elements in a Grid

* So we created our grid with eight cells and right now, every child element of the container takes one cell.

* Now it would be nice if we could overwrite that default positioning and let's say element three should actually take the last two cells in the first row, so it should take the cell where element four is in too.

* We can overwrite this by going to the child selector now, so el3 selects the element three here and there, we can define where it should be positioned.

```css
.el3 {
    background: rgba(0, 128, 0, 0.5);
    grid-column-start: 3;
    grid-column-end: 5; 
    grid-row-start: 1;
    grid-row-end: 3;
}
```

* With that if we save that and we reload the page, now element three takes this full block of four cells (Refer : grid7)

* and this is how you can explicitly position elements in the grid. Now as you can see at element one, two and four, the grid automatically positions all child elements and it starts filling the grid at the top left and then goes to the right and to the bottom, though it will respect the browser reading settings,

* It automatically fills that but you can overwrite that behavior by explicitly stating a position with the help of these properties just as you need it. This is something super important to understand, how you interact between your grid elements with the positioning and the grid container where you define the layout.

* This is happening in two different places, you defined the layout in the container, 

```css
.container {
    margin: 20px;
    display:grid;
    grid-template-columns: 200px 2fr 20% 1fr;
    grid-template-rows: 5rem 2.5rem;
}
```
* you defined the position on the child element.

```css
.el3 {
    background: rgba(0, 128, 0, 0.5);
    grid-column-start: 3;
    grid-column-end: 5; 
    grid-row-start: 1;
    grid-row-end: 3;
}
```

### Using "element-sizing", "repeat" & "minmax"

* Now that we positioned our first element, let's go back to the layouting.There are two important other features I want to show you right now. The first one is one additional unit or value you can use.

* Here we got clearly defined values for all four columns of "grid-template-columns". 

* Now you also got cases where you have a couple of absolute or relative non-fraction units and you simply want to ensure that the last column or row takes the available remaining space.

* Now obviously, you could take one fraction as a value for that but there also is auto.

```css
.container {
    margin: 20px;
    display:grid;
    grid-template-columns: 200px 2fr 20% 1fr;
    grid-template-rows: 5rem auto;
}
```

*  and I reload, then it actually is only as high as it needs to be to fit the content in (Refer: grid8) and this is generally the same behavior for the columns, though if you set it to auto there, it will simply occupy any remaining space.

```css
.container {
    margin: 20px;
    display:grid;
    grid-template-columns: 200px 5rem 20% auto;
    grid-template-rows: 5rem auto;
}
```
* then you actually see it takes the full available width and the last column which has a value of auto is just as big as it needs to be to fill the remaining space.(Refer: grid9)

* The same behavior would be true for rows if, if what? Well if the height of the container, so of the grid container here was set.

* We got no height property there and therefore, auto on the vertical axis will just take as much space as the content requires because there is no space to fill up because the overall grid container is just as high as it needs to be to fit its content as defined here in the layout into itself.

* If we were to give that container a height of let's say 500 pixels 

```css
.container {
    margin: 20px;
    display:grid;
    height: 500px;
    grid-template-columns: 200px 2fr 20% auto;
    grid-template-rows: 5rem auto;
}
```
* and I reload, then you see that auto actually fills that up. Now we got auto fill up the entire bottom row.(Refer: grid10)

* If I remove auto and set this to 2rem instead,

```css
.container {
    margin: 20px;
    display:grid;
    height: 500px;
    grid-template-columns: 200px 5rem 20% auto;
    grid-template-rows: 5rem 2rem;
}
```
* then you would see that the grid container still has its width but the rows don't actually fill it up.(Refer: grid11)

* So this is something up to you, something you can configure just as you need it and knowing about auto and that you can conveniently use it to create or to fill the empty space is super important.

* Now one other important feature is that sometimes you don't have four columns with such different widths. Maybe you want to have four columns but they should all be equally sized,let's say we got four columns and each column is 25%

```css
.container {
    margin: 20px;
    display:grid;
    height: 500px;
    /* grid-template-columns: 200px 5rem 20% auto; */
    grid-template-columns: 25% 25% 25% 25%;
    grid-template-rows: 5rem 2rem;
}
```
* So now we got four equally sized columns as you can see on the preview at the bottom right (Refer : grid12) but writing it like this of course is a bit annoying.

* There is a helper method you can use which is called repeat, it's a CSS function and it takes two arguments. The second argument is the pattern it should repeat and the first argument is how often it should repeat it.

```css
.container {
    margin: 20px;
    display:grid;
    height: 500px;
    /* grid-template-columns: 200px 5rem 20% auto; */
    grid-template-columns: repeat(4,25% 25% 25% 25%); 
    grid-template-rows: 5rem 2rem;
}
```
* So four with this pattern would actually create 16 columns because it repeats four columns with that width four times, if I do that, we end up with 16 columns here (Refer : grid13)

* now we create four columns with 25% for each of them. So now we're back to what we had before but with way less code to write.

```css
.container {
    margin: 20px;
    display:grid;
    height: 500px;
    /* grid-template-columns: 200px 5rem 20% auto; */
    grid-template-columns: repeat(4,25%); 
    grid-template-rows: 5rem 2rem;
}
```
* As I said, this can be any pattern, doesn't have to be just one value and doesn't have to be percentages, could be pixels, rem, fractions, fractions and pixels mixed, whatever your requirement is.

* So the repeat function is a very useful function for creating grids with the layout we want quickly.

* There also is one other helpful function which I want to show you, let's say here for my template rows here, I actually want to have a certain minimum and maximum height.

* So what we can do for that is we can use a special function which also ships with CSS, the minmax function. so the first value is the minimum height in this case for the row, for the column it would be the width. So the minimum height an element should have and the second argument is the maximum height.

* If we save that and reload, then we see that for the second row, it is 200 pixels high,(Refer : grid14) but second row take these 200 pixels. Why? Because it can do that, because we've got enough height available in our grid here, so it tries to fill up as much as possible.

* If I were to restrict the grid height to let's say 200 pixels overall, then this would shrink, 
```css
..container {
    margin: 20px;
    display:grid;
    height: 200px;
    /* grid-template-columns: 200px 5rem 20% auto; */
    grid-template-columns: repeat(4,25%); 
    grid-template-rows: 5rem minmax(10px,200px);
}
```
* now it's somewhere in between the minimum and the maximum (Refer : grid15)

* and if I shrink this even more, maybe because I add one more row which also requires some space, then it would go to its minimum or closer to its minimum value of 10 pixels.

* So minmax is another helpful function if you want to ensure that a certain cell should have a minimum width or height but shouldn't become bigger than a certain maximum.(Refer : grid16)

* And of course you can also mix and match values here too, you can mix percentages with pixels, with fractions, with auto even

### Advanced Element Positioning

* let's work on the positioning again. 

* till now For example here, grid column start and end, right now we're saying start at the line with the number three and end right before the line number five, nothing wrong with that

```css
.el3 {
    background: rgba(0, 128, 0, 0.5);
    grid-column-start: 3;
    grid-column-end: 5; 
    grid-row-start: 1;
    grid-row-end: 3;
}
```

* but another way of expressing this for this element would be start at line number three and then span two cells, so occupy two cells and that can be done by changing the five in grid column end to span two.

```css
.el3 {
    background: rgba(0, 128, 0, 0.5);
    grid-column-start: 3;
    grid-column-end: span 2; 
    grid-row-start: 1;
    grid-row-end: 3;
}
```
* Span is a keyword here, not something I did come up with, it's defined in the CSS specification and it tells it to simply end after it occupies two cells.

* So if I reload, we have the same result as before but as you can see if we inspect element three, we do have this rule in effect and it just leads to the same result as before because we occupy the same amount of cells.

* If we say span three here and we reload, we see nothing changes though because we can't go further to the right, we only get two columns here,

* we would need to define more to span more than that or simply start earlier. If we start at line number two here, instead of three and I now reload,

```css
.el3 {
    background: rgba(0, 128, 0, 0.5);
    grid-column-start: 2;
    grid-column-end: span 3; 
    grid-row-start: 1;
    grid-row-end: 3;
}
```
* now everything changed, now we take three columns width because of span three and the other elements also needed to be repositioned because we now occupy
for example the place where element two could be seen earlier.(Refer : grid17) So span is very interesting.

* Now sometimes you also have another behavior where you want to ensure that a certain value takes a full row.

* Now clearly, you can say start at line number one and then define the last number as the end number or span four in our grid but there also is another nice trick

*  I'll add a grid column start here of one because I want to start in first column and grid column end as -1. You can define negative line numbers too and what this will lead to is simply that it starts counting from the end of the grid,

```css
.el2 {
    background: rgba(255, 0, 0, 0.5);
    grid-column-start: 1;
    grid-column-end: -1;

}
```
* The advantage is of course if we add one extra column to this grid, we don't need to change this line because one column from the right will still be one column from the right. If we defined a column end of five here and we add another column to the grid, then we would have to bump this up to six,

* And of course you're not limited to -1, you could say -2 too to move two columns in from the right but -1 is now just to the end.

* Please note that I'm saying that element two should take the entire row but element three is there already, at least partly, so what would you expect to happen? Well let's try it out. 

* What we see is that element two jumps into a new line and this cell where it previously was stays empty (Refer : grid18)

* because there is no element we could put in there. Element four could be put in there but it comes after element two in a DOM order and it doesn't jump ahead.

* So element two gets into a new line because it couldn't take that line as it was already partly taken by element three.

* Interesting, but what if we now also set the row in element two, so on that red element? If I set grid row start to let's say line number two and then I set grid row end to span one, which I don't have to do by the way, this is the default,

```css
.el2 {
    background: rgba(255, 0, 0, 0.5);
    grid-column-start: 1;
    grid-column-end: -1;
    grid-row-start: 2;
    grid-row-end: span 1;
}
```
* Let's reload and see what happens. Now indeed, they overlap as you can see.(Refer : grid19) We get this area here where we have both element two and element three and that is something very important to remember, elements can overlap, they can occupy the same cell, if and that's important, if you explicitly set this. 

* The grid will always try to avoid this but of course there are situations where you want to have overlapping cells and then you can force it by clearly setting the column and row position.

* Now the question is, which one is on top? And the answer is the DOM order is important, element three comes after element two and therefore, element three is on top.

* We can change this with the set index though, even though we don't have position absolute but the grid supports it, we can set the set index on element two, which would not be on top normally, to 10 let's say. The default value of auto is equal to zero, so 10 is definitely higher.

```css
.el2 {
    background: rgba(255, 0, 0, 0.5);
    grid-column-start: 1;
    grid-column-end: -1;
    grid-row-start: 2;
    grid-row-end: span 1;
    z-index:10;
}
```
* If we now reload, we see the red one is on top now. (Refer : grid20) So this is something extremely useful to take away, that you got different ways of targeting starts and ends of your columns and rows and that elements can overlap.

### Working with Named Lines

* Now we saw how we can use grid column start end and grid row start and end to target different line numbers and are accurate to define where the elements should go.

* Now working with the line numbers of course is an option but not the only one we got, it would also be nice to give our columns and rows names or to give our column and row lines names to be precise and we can do that.

* If we want to name line number one, so this first horizontal line, then we have to add the name in front of the value for the first row and we add the name in square brackets, that's important, this is required and then any name of your choice, you're totally free. You shouldn't take span though because it's a reserved word but other than that, you're totally free.

```css
.container {
    margin: 20px;
    display:grid;
    height: 500px;
    /* grid-template-columns: 200px 5rem 20% auto; */
    grid-template-columns: repeat(4,25%); 
    grid-template-rows: [row-1-start] 5rem minmax(10px,200px) 100px;
}
```
* After this first row, we name the line that comes thereafter, so line number two, the second horizontal line.

```css
.container {
    margin: 20px;
    display:grid;
    height: 500px;
    /* grid-template-columns: 200px 5rem 20% auto; */
    grid-template-columns: repeat(4,25%); 
    grid-template-rows: [row-1-start] 5rem [row-1-end] minmax(10px,200px) 100px;
}
```
* You could argue that it maybe also should be named row-2-start though because the second the line here actually is both the ending of the first row and the start of the second one.

* Good thing is if you want, you can assign multiple names, simply by staying in the square brackets, adding a whitespace and adding the second name which of course is totally up to you. This is not required, you can do that, you can of course also use one name. 

```css
.container {
    margin: 20px;
    display:grid;
    height: 500px;
    /* grid-template-columns: 200px 5rem 20% auto; */
    grid-template-columns: repeat(4,25%); 
    grid-template-rows: [row-1-start] 5rem [row-1-end row-2-start] minmax(10px,200px) [row-2-end row-3-start] 100px;
}
```
* This will refer to the same line, that's important, so you can use the two names interchangeably now.

* If you save that and you reload, you don't see the names here in the inspector, that's not displayed. We can just check if it works because we can now reference these names instead.

* So in places where we refer to the row numbers, like here grid row start, we refer to line number two, now a name for line number two is either row-1-end or row-2-start. Let's maybe pick 2-start because here we are defining something which should start there, so we set this to row-2-start, without square brackets.

```css
.el2 {
    background: rgba(255, 0, 0, 0.5);
    grid-column-start: 1;
    grid-column-end: -1;
    grid-row-start: row-2-start; /*2*/
    grid-row-end: span 1; /* Now grid row end doesn't take a line number here because here we use the span syntax otherwise for numbers we could add name like below */
    z-index:10;
}
```
* for row-end, column end also we can use name ...
```css
.el3 {
    background: rgba(0, 128, 0, 0.5);
    grid-column-start: row-2-start;
    grid-column-end: span 3; 
    grid-row-start: row-1-start;
    grid-row-end: row-2-end; /*3 we can also use row-3-start*/
}
```
* With all that added, if we save everything and we reload, we shouldn't see any changes which is a good sign because that means it works because we target the same lines as before but this time, with our named lines here.

### Understanding Column & Row Shorthands

* we learned about the basic positioning and layout and capabilities of the grid and its children, now let's dive into some shorthands and advanced positioning features,

* let's start with the shorthands. One convenient shorthand, which you probably will use quite a bit, is one which allows you to summarize the column, the grid column start and end or the grid row start and end statements into one.

* You can summarize grid column start and grid column end into just grid column and then the first value is the start value, one, and then the second value is separated and that's important, is separated by a slash, a forward slash and then you will simply add the end value.

```css
.el2 {
    background: rgba(255, 0, 0, 0.5);
    /* grid-column-start: 1;
    grid-column-end: -1; */
    grid-column: 1 / -1 ;    /*  grid-column: grid-column-start  / grid-column-end */
    grid-row-start: row-2-start; 
    grid-row-end: span 1; 
    z-index:10;
}
```
* So this shorthand here replaces the longer version I had before and it works exactly the same for the row.

```css
.el2 {
    background: rgba(255, 0, 0, 0.5);
    grid-column: 1 / -1 ;
    /* grid-row-start: row-2-start; 
    grid-row-end: span 1;  */
    grid-row: row-2-start / span 1 ; /* grid-row: grid-row-start  / grid-row-end */
    z-index:10;
}
```
* So you really enter just the same values as you did for grid row start and end but now in this shorthand notation.

* There also is a shorthand which allows you to summarize all values into just one property and that's the so-called grid area property.

```css
.el3 {
    background: rgba(0, 128, 0, 0.5);
    /* grid-column-start: col-2-start;
    grid-column-end: span 3; 
    grid-row-start: row-1-start;
    grid-row-end: row-2-end;  */
    grid-area: row-1-start / col-2-start / row-2-end / span 3;  /*  grid-area:  grid-row-start / grid-column-start / grid-row-end / grid-column-end */
}
```
*  If we insert this and comment out the longer version, we can save that and reload and we don't see any changes because we end up with the same grid here, just with this shorthand. 

### Working with Gaps

* Right now, all the columns rows sit directly next to each other, there is no space in between and even if you add a margin, let's say to element three, margin 10 pixels, even with such a margin, you don't really change anything.

* On the container of the grid, we can add another property which is grid row or column gap. Grid column gap allows you to define the gaps between the columns,

```css
.container {
    margin: 20px;
    display:grid;
    height: 500px;
    grid-template-columns: repeat(4,25%); 
    grid-template-rows: [row-1-start] 5rem [row-1-end row-2-start] minmax(10px,200px) [row-2-end row-3-start] 100px;
    grid-column-gap: 20px; /* grid-column-gap */
}
```
* now you see that indeed in the preview, we can see there is a gap. This still is treated as one line only which is why the line markers are right in the middle of the gap (Refer grid21) but we now have an official gutter between these cells and now we don't have to set a margin on any element to get some distance between the columns in this case.

* Of course, if one element overlaps multiple columns, it's not kind of disturbed by these gaps, it overlaps the gaps too which is what you would expect, I guess. 

* You can of course also set a grid row gap of let's say 10 pixels and now this will introduce some gaps between the rows unsurprisingly.(Refer grid22)
```css
.container {
    margin: 20px;
    display:grid;
    height: 500px;
    grid-template-columns: repeat(4,25%); 
    grid-template-rows: [row-1-start] 5rem [row-1-end row-2-start] minmax(10px,200px) [row-2-end row-3-start] 100px;
    grid-column-gap: 20px; /* grid-column-gap */
    grid-row-gap: 10px; /* grid-row-gap */
}
```

* And there also is a shorthand, if you want to summarize this, then you can do so, you can add just grid-gap
```css
.container {
    margin: 20px;
    display:grid;
    height: 500px;
    grid-template-columns: repeat(4,25%); 
    grid-template-rows: [row-1-start] 5rem [row-1-end row-2-start] minmax(10px,200px) [row-2-end row-3-start] 100px;
    /* grid-column-gap: 20px; 
    grid-row-gap: 10px;  */
    grid-gap: 10px  20px  /* grid-row-gap   grid-column-gap */
}
```
* More shoter for same grid and column you could specify the same value like below:

```css
.container {
    margin: 20px;
    display:grid;
    height: 500px;
    grid-template-columns: repeat(4,25%); 
    grid-template-rows: [row-1-start] 5rem [row-1-end row-2-start] minmax(10px,200px) [row-2-end row-3-start] 100px;
    /* grid-gap: 10px  20px ; */
    grid-gap: 10px; /* applicable for both row and column */
}
```
* So if you want to have the same distance between all elements, then this is the syntax you want to use.

### Adding Named Template Areas

* Thus far when we wanted to position elements, like element two and three where we overwrote the default positioning, we did this by going to the child and giving it a start and end row and column to tell it where it should sit. Now this is perfectly fine and this is an approach you will probably use a lot, however you can also kind of reverse the process.

* You can divide your grid into areas which you assign names to and now I'm talking about the cells, not the lines and then tell the elements which areas they should occupy.Sounds strange?

* Let me show you how it works and for that, let's pick a different layout now. Let's say element three should take the entire first row and we want to position it differently, so not with grid area here but instead with this named area I was referring to.

```css
.el3 {
    background: rgba(0, 128, 0, 0.5);
    grid-area: header;  /* header - any name as per your wish no need specifically header it be x y z...*/
}
```
* For this, we first of all remove our value for grid area and we give it a name, any name of your choice, maybe header.Now here important, no square brackets, just the name. Now of course if I reload, this leads to nothing, now the green element is somewhere here at the bottom, (refer grid23) so essentially our grid is just broken.

* How we would it know what the header area is? Obviously it can't. We defined these areas in our container now,

* so where we set the display grid. There we can add a special property, grid template areas. 

* So our grid has four times three cells, four columns and then three rows.

* We now simply create a pattern of these columns and rows here in the string and we give each element or each cell a name
```css
.container {
    margin: 20px;
    display:grid;
    height: 500px;
    grid-template-columns: repeat(4,25%); 
    grid-template-rows: [row-1-start] 5rem [row-1-end row-2-start] minmax(10px,200px) [row-2-end row-3-start] 100px;
    grid-gap: 10px; 
    grid-template-areas: "header header header header" 
                         "side side main main"
                         "footer footer footer footer" /* So important, you need to end up with as many rows and columns as you have */
```

* now with the area's property, we can give our cells in the grid a name which we can then use on our elements to position them in these marked cells.

* So like header and important, this is the name we then use below. So header and then we've got four columns, so we add header, header, header and now we have a new line and you simply create a new line by adding a new string, so outside of the first string, you add a second string and you can also put this into a new line here, just to really make it look more like a table

* If I now save this and reload, nothing changes but now actually, we defined areas, the first row is the header area, the second row has two areas, the side and main and the last row has a footer area

* and now we can use these names with the grid area property.

```css
.el3 {
    background: rgba(0, 128, 0, 0.5);
    grid-area: header;  /* header - any name as per your wish no need specifically header it be x y z...*/
}
```
* So now I can use header here because we've got header up here too and with that, if you reload, element three actually takes to full header. (Refer grid24)  

* So this is really cool because now, you don't have to go to the element and tell it where to start and end, you define names and labels for your grid up there.

* And if there is some element which you don't want to give a label or what you want to leave empty, you add a dot instead,

```css
.container {
    margin: 20px;
    display:grid;
    height: 500px;
    grid-template-columns: repeat(4,25%); 
    grid-template-rows: [row-1-start] 5rem [row-1-end row-2-start] minmax(10px,200px) [row-2-end row-3-start] 100px;
    grid-gap: 10px; 
    grid-template-areas: "header header header header" 
                         ". . main main"
                         "footer footer footer footer" /* So important, you need to end up with as many rows and columns as you have */
```
* so I replaced the two side labels with two dots and now, they won't have names.

```css
.el2 {
    background: rgba(255, 0, 0, 0.5);
    grid-column: 1 / -1 ;
    grid-area: main; /* grid-area name */
    z-index:10;
}
```
* Refer : grid25 - now it goes into the main area and the other elements fill up the remaining space.

* Important here by the way, you see that element four also is positioned prior to element two because with the grid area setting here, the DOM order actually is not respected anymore. So this is some trivia, something important to recognize at this point.

```css
.el4 {
    background : #rgba(0, 4, 255, 0.5);
    grid-area: footer; 
}
```
* If we give element four its own place of course by setting this grid area to footer for example, then it will jump down there and this cell will remain empty.

* So working with grid areas is a really powerful tool which makes it very easy or much easier for us to define where in the grid what should be positioned and this syntax can look really strange at the beginning but especially when you write it like this, you can think of this as a table;

* you got three rows and each row has four columns. Just important, don't omit any values here, you have to end up with as many words or dots as you have cells in the final grid. ( Refe : grid26)

### Creating Automatically Generated Grid Areas

* So back in our theory grid, here we also added the grid areas the last time we worked on that and don't forget that earlier at the beginning of this module, I showed that under the layout tab of the Firefox developer tools, you get that display area names checkbox. (Refer : grid27) So this can be really useful since this gives you an overview over which parts of your grid do have which name, just as a side note.

* I also want to dive into something else related to areas and not related to the areas but to line names again.

* Remember that earlier, we set these names here on the rows. We didn't set names for columns because there, we're using repeat, now the obvious question is how do you assign a line name here because this gets repeated? You can't set column one start, it will get repeated and you don't need four column one start lines, do you?

* Well turns out you might need. So we can add a line name here in the repeat argument, in the second argument just as we add it in other places. 

```css
.container {
    margin: 20px;
    display:grid;
    height: 500px;
    grid-template-columns: repeat(4,[col-start] 25% [col-end] ); /* repeat(no.of.repeat,[col-start] repeat.percentage [col-end] );*/
    grid-template-rows: [row-1-start] 5rem [row-1-end row-2-start] minmax(10px,200px) [row-2-end row-3-start] 100px;
    grid-gap: 10px; 
    grid-template-areas: "header header header header" 
                         ". . main main"
                         "footer footer footer footer"; 
```

* So now I define column line names and these line names will actually be repeated. Now we're not using line names anymore we're using the area but let's switch back to line names and let's assign our remaining unassigned element,  ele1 to a place in the grid with the help of line names.

* and now how could I tell this that I want to position it let's say in this empty box here, in this empty cell? ( Refe : grid27)

* It would start at column line two and end at column line three but we assigned a name but the name is column start all the time.
```css
.el1 {
    background: rgba(255, 154, 72, 0.5);
    grid-column: col-start 2 / col-end 2  /* start-name occurance / end-name occurance */
```
* Well if you repeat column names and you have the same name more than once, you can use column-start here and then add the number of occurrence you want to start.

* So the first line here will actually be column start one, the second one is column start two, you don't add this as part of the name but you simply add two as an extra value after the name, then your forward slash and then the point where you want to end so column end and here also, the second occurrence because the first column end will be line number two here, this vertical line, the second column end is this one, With that if we save that and reload, this is now placed exactly where we want to place it.

* So you can use line names together with repeat, you just need to specify the number of occurrence so to say, so which one of the automatically generated lines do you want to target? So this is one very nice thing,

* one other thing you might have noticed is that I always used -start and -end at the name.Now it makes sense to use this because it clearly marks what the line is or where it is positioned but it also yields one other benefit, we get automatically generated template areas if we follow the naming patterns of naming our lines with -start or -end,let me show you what I mean.

* In our container, we got this first row which has a height of 5rem, let's maybe rename it from row one start to hd-start, hd for header, I'm not using header because I defined it here and I want to show you that we create a new area here automatically. 


```css
.container {
    margin: 20px;
    display:grid;
    height: 500px;
    grid-template-columns: repeat(4,[col-start] 25% [col-end]);
    /* instead of this grid-template-rows: [row-1-start] 5rem [row-1-end row-2-start] minmax(10px,200px) [row-2-end row-3-start] 100px; */
    grid-template-rows: [hd-start] 5rem [hd-end row-2-start] minmax(10px,200px) [row-2-end row-3-start] 100px; /* here we added hd-start and hd-end*/
    grid-gap: 10px; 
    grid-template-areas: "header header header header" 
                         ". . main main"
                         "footer footer footer footer"; 
    /* because of this change we don't  static template*/
```
* now let's also work our template columns. Now instead of the repeat function would be the wrong place because the pattern would then be repeated and I want to enclose all column with a start and end line name but I can simply add it in front and after repeat.

```css
.container {
    margin: 20px;
    display:grid;
    height: 500px;
    grid-template-columns: [hd-start] repeat(4,[col-start] 25% [col-end]) [hd-end];
    /* instead of this grid-template-rows: [row-1-start] 5rem [row-1-end row-2-start] minmax(10px,200px) [row-2-end row-3-start] 100px; */
    grid-template-rows: [hd-start] 5rem [hd-end row-2-start] minmax(10px,200px) [row-2-end row-3-start] 100px; /* here we added hd-start and hd-end*/
    grid-gap: 10px; 
    grid-template-areas: "header header header header" 
                         ". . main main"
                         "footer footer footer footer"; 
    /* because of this change we don't  static template*/
```
* it still also creates these line names in between but we also get these outside of the repeat function and we get the same line names for the first row, so for the first two row lines in the end, hd-start for the first row line, hd-end for the second and it's no problem that some lines have duplicate or multiple names I should say.

* So now, we got hd-start and hd-end and we clearly mark or enclose an area in the grid with that. We can now use this as an automatically generated area name, hd.

* So if we follow the pattern of having -start or -end after the name, then this name in front of -start and -end will become an automatically generated grid area enclosing whatever you put between these lines.

* So now we can use "hd" as a name for our element three.

```css
.el3 {
    background: rgba(0, 128, 0, 0.5);
    /* grid-area: header; */
    grid-area: hd;
}
```
* if I now change this to hd and save this and keep in mind, hd is not defined by us here,

* if we go back and reload, we have the same result as before because we still occupy the full first row simply due to our set up here, simply because we use this pattern.

* If I change one name, for example hd-start to hd-sart, this is still a valid line name, we can name it like this but if I reload, our layout breaks because now we're referencing an area, hd which does not exist because it's not automatically generated because we have to follow that naming pattern of -start and -end at the end.

* So this is also useful to know. I'd argue that this approach of manually laying out the grid is easier to understand for your fellow developers but it is good to know that you have the possibility of automatically inferring the grid area names or using these autogenerated grid areas.

```css
/* manually laying out the grid */
grid-template-areas: "header header header header" 
                         ". . main main"
                         "footer footer footer footer"; 
```
### Using the Grid on our Project

* let's apply some of the concepts you learned about to our project before we dive even deeper into the grid and into some other capabilities it offers to us. So how could we add it to our project?

* One thing I want to do right now already, on every page, is I want to control the header, main area and footer with the grid because if you have a look at our webpage here, we got one basic layout which is the same on every page.

* We got our header which is fixed of course, our main area and the footer and that is something we could definitely implement with the help of the CSS grid.

* So let's do that and let's do it in the shared.css file because it is the case on every page and there, I want to turn my body into a CSS grid, just as we did it previously in this module.

* I want to turn my body into a CSS grid and I now reload on that packages page, not a lot changed as you can see, the same is true on the main page here.

```css
body {
  font-family: "Montserrat", sans-serif;
  margin: 0;
  display: grid;
}
```
* Firefox developer tools, here we can see it's a grid and it is a grid with only two rows, with a big main row and that bottom row for the footer.

* Now you might wonder where our backdrop, modal and the header and the navigation are, these are all child elements of the body after all but it doesn't look like separate rows were created for them.

* Well, these are all elements that are positioned non-statically, so the backdrop has a position of fixed, the modal has a position of fixed, the header has a position of fixed and the navigation has a display of none here. Now if we have such elements, then this essentially leads to them not being part of the grid.

* If we shrink that and go to mobile view, then our navigation gets a position of fixed too, so this also is not a part of the grid on mobile view and that is something important to realize. Elements which are not part of the document flow, so fixed and absolute elements are not part of the grid and hence, are not considered for the rows and that is fine actually because here, we don't want that to be part of the grid, I want to control the rest with my grid.

* So our layout will actually not contain a header because the header is detached from the document flow, it will just contain our main area and the footer.

* Now one thing I want to do which we can see on for example the customers or packages page if we're not zoomed in is I want to control the placement of the footer with the help of the grid.

* Right now, we're doing this manually in our shared.css file, here in the main class,

```css
main {
  min-height: calc(100vh - 3.5rem - 8rem); /* We will comment this*/
  margin-top: 3.5rem;
}
```
* we got our min height set and this works but with the grid, we can actually follow a different approach.I can explicitly add two lines, so two rows I mean, with grid template rows.Now the first row will be our main area and there, I can set it to auto and the footer has a height of 8rem with all the things that are involved in it,

```css

body {
  font-family: "Montserrat", sans-serif;
  margin: 0;
  display: grid;
  grid-template-rows: auto 8rem ; /*instead of min-height: calc(100vh - 3.5rem - 8rem);*/
}
```

* Now what we can see is that the footer now is positioned differently (refer :grid29),the main area goes beneath our header, now the reason for that simply is that our header is fixed.

* Now here are two possible solutions, for one we could add a padding top to our body element of 3.5rem to push the content below the header basically.

```css
body {
  font-family: "Montserrat", sans-serif;
  margin: 0;
  display: grid;
  grid-template-rows: auto 8rem ;
  padding-top: 3.5rem;
}
```
* but still we see, this doesn't seem to work and the reason for this is the auto value for the first row. Auto simply takes as much space as required by the content.

* If we wanted to fill everything up, we would have to give our body a height of 100% and the same for HTML to really make this work.

```css
html {
  height: 100%;
}

body {
  font-family: "Montserrat", sans-serif;
  margin: 0;
  display: grid;
  grid-template-rows: auto 8rem ;
  padding-top: 3.5rem;
  height: 100%;
}
```

* now this works, the same on the customers page because now we're basically saying that our grid takes the entire height of the page, it got a padding so that the content really starts only after the header and then we get two rows and the first row is auto, so it takes all the remaining space and the remaining space is essentially 100% minus the row height for the footer and the cool thing is on the starting page where we got more content in the first row, auto will also ensure that it doesn't crop this content. So here, it's not just the remaining space of 100% minus the footer, instead it's as much space as the content requires and the footer is then added below that.

* So now we got a way more elegant solution for our problem of having a footer which should always be at the bottom whilst at the same time, ensuring that our main content has the place it needs.

* And again for the header, it's important to understand since it's a fixed header, it's not part of the document flow and therefore it doesn't need its separate row in the grid.

* We could theoretically though also add a row here and remove padding top, so let me remove that here and instead add a row with 3.5rem for the header.

```css
body {
  font-family: "Montserrat", sans-serif;
  margin: 0;
  display: grid;
  grid-template-rows: 3.5rem auto 8rem ;
  /* padding-top: 3.5rem; */
  height: 100%;
}
```
* Now this would basically destroy everything because that first row would actually be occupied by our main content and therefore, it looks ugly but we of course can specifically tell the main content into which row it should go.

* So we can go to the main selector here and add grid row here and basically we want to start after the second row line, the first one is at the very top, the second one comes after the first row. So in line two, we want to start and then we want to go down to the third line, so we want to end before the third row line.

```css
main {
  /* min-height: calc(100vh - 3.5rem - 8rem); */
  margin-top: 3.5rem;
  grid-row: 2 / 3;
}
```
* Now if we reload, we're back to where we were but now the footer jumps ahead, well we can also change that by simply giving the footer a clear place,

* so we can also take grid row down to our footer here and in the main footer class, we simply tell it to start after line three and go to line four.

```css
.main-footer {
  background: black;
  padding: 2rem;
  margin-top: 3rem;
  grid-row: 3 / 4;
}
```
* So this is now a different solution, now of course there's yet another way of solving this with template areas In the body or on the body tag, we can add grid template areas and of course there, we also can assign names to our columns and rows.

* Now we only got one column, so we only need one value per string but now we can replicate our three row setup here with three strings which are beneath each other

* then the first row would be the header, we can name it header or give it a dot to leave it empty but let's name it header, then we can name this main and we can name this footer

```css
body {
  font-family: "Montserrat", sans-serif;
  margin: 0;
  display: grid;
  grid-template-rows: 3.5rem auto 8rem ;
  grid-template-areas:"header "
                      "mainbody"
                      "footer";
    height: 100%;
}
```
* and now this allows us to go to the main selector and now not select a place in the grid like this but use grid area instead and target mainbody here

```css
main {
  margin-top: 3.5rem;
  /* grid-row: 2 / 3; */
  grid-area: mainbody;
}
```
* and for the footer at the very bottom of course, there we also don't use grid row like this but grid area and we target footer.

```css
.main-footer {
  background: black;
  padding: 2rem;
  margin-top: 3rem;
  /* grid-row: 3 / 4; */
  grid-area: footer;
}
```
* So that's yet another way of solving this and as you can see, this also does the trick and works just fine.

### Working with "fit-content"

* So now we use the grid on our page, that's very useful but one thing can be noticed on the main page. Now here above the image, we get this whitespace, so the image is now not positioned correctly anymore.(Refer : grid30)

* Now the reason for this is simple, if we inspect the main element and the rules of it, we see that we get a margin top there, we should remove that to ensure that the image looks good again. So let's go back to our shared.css file,

```css
main {
  /* margin-top: 3.5rem; */
  grid-area: main;
}
```
* We don't need it anymore because now we use the solution of reserving the place for the header with an extra row. 

* If we reload now its works fine (Refer : grid31) and now it's fixed on this page and all the other pages too.

* Now if you go into mobile mode, you also might notice that the footer doesn't really sit at the very bottom of this entire thing. In the layout tab, you can still see that .. we have a grid though and the grid row doesn't go to the very bottom, so that's issue we got here. We can also see that our footer here is basically cut off.(Refer : grid32)

* Now the problem is the footer increases in size on a mobile device because we use flexbox to position the elements in the footer below each other, like terms of use which are outside of the footer box here.

* So we basically need to change our setup here for the grid to something else than these fixed 8rems. This should be something else which allows the footer to also grow, something like auto maybe

* However if we add auto, it still isn't perfect here as you can tell and besides that if we set this to auto, we got a different layout on the other pages too because if we got auto twice as we now have, these two will basically distribute empty space between each other and this is not the layout we want to have, so auto isn't really the solution we're looking for here.

* Instead, there is a special function which I haven't shown you yet, it's fit-content. fit-content takes an argument which is a default size you can assign, like 8rem, which will be used in case the content is smaller or requires less place, less space than that. If the content requires more space than that, it will get this size though but only as much as needed by the content.

```css
body {
  font-family: "Montserrat", sans-serif;
  margin: 0;
  display: grid;
  grid-template-rows: 3.5rem auto fit-content(8rem) ; /* fit-content */
  /* padding-top: 3.5rem; */
  height: 100%;
  grid-template-areas:  "header "
                        "main"
                        "footer";
}
```
* So now everything should look quite nice and should work the way we expect it to work, the footer is at the bottom and takes as much space as required in case it's not smaller than the 8rem which would be the default size of the footer otherwise.

* fit-content is another very useful value when it comes to having some row which should have some minimum size but also not be bigger than its content.

### Positioning Grid Elements

* let's learn how we can actually position the elements in a grid in case we're not happy with the default positioning.

* So back in our project, right now we have a certain positioning of the elements in a grid that we never questioned.

* They're always taking the full size of their cell, both on the horizontal and the vertical axis, they always stretch the full cell

* and there of course maybe the behavior you want but sometimes, it's not what you want and you got a couple of properties that help you with positioning elements in the grid. You add them on the grid container, so on the container class selector in our case here. 

* Let's reload and now what we can see if we turn on that grid inspection again, is that in our grid cells or the grid tracks actually, so the areas where a certain element is positioned in, like the green element here actually has the first row, don't forget, now it's positioned in the center of that area, so the green element is in the center of its row, the red element is in the center of its two cells here where it's assigned to and the yellow element is just in the center of its cell, the blue element again is in the center of its entire track. So this is now what justify items does, it positions the elements in their grid tracks, so in their areas so to say. (Refer : grid33)

```css
.container {
    margin: 20px;
    display:grid;
    height: 500px;
    grid-template-columns: [hd-start] repeat(4,[col-start] 25% [col-end]) [hd-end];
    grid-template-rows: [hd-start] 5rem [hd-end row-2-start] minmax(10px,200px) [row-2-end row-3-start] 100px; 
    grid-gap: 10px; 
    grid-template-areas: "header header header header" 
                         ". . main main"
                         "footer footer footer footer"; 
    justify-items: center;
}
```
* We also can assign a value of start there, now this moves them to the start of their respective track, (Refer: grid34)

```css
.container {
    margin: 20px;
    display:grid;
    height: 500px;
    grid-template-columns: [hd-start] repeat(4,[col-start] 25% [col-end]) [hd-end];
    grid-template-rows: [hd-start] 5rem [hd-end row-2-start] minmax(10px,200px) [row-2-end row-3-start] 100px; 
    grid-gap: 10px; 
    grid-template-areas: "header header header header" 
                         ". . main main"
                         "footer footer footer footer"; 
    justify-items: start; /* start, end, center, stretch (default)*/
}
```
* and we also got end of course which moves them to the end. "justify-items: end;"

* And important, start and end does not mean left and right, it means start and end depending on the read direction of the browser the users use, so if someone is accessing the page with settings set to right-to-left reading, then start will actually be on the right instead of on the left, that's just a little side note.

* So this is justify items, now the default is stretch.So you don't need to set this, this is the default behavior you saw at the beginning.

* Now this was the positioning within their rows so to say, now if you want to position them within their columns, you got align items,

```css
.container {
    margin: 20px;
    display:grid;
    height: 500px;
    grid-template-columns: [hd-start] repeat(4,[col-start] 25% [col-end]) [hd-end];
    grid-template-rows: [hd-start] 5rem [hd-end row-2-start] minmax(10px,200px) [row-2-end row-3-start] 100px; 
    grid-gap: 10px; 
    grid-template-areas: "header header header header" 
                         ". . main main"
                         "footer footer footer footer"; 
    justify-items: start; /* start, end, center, stretch (default)*/
    align-items: center; /* start, end, center, stretch (default)*/
}
```
* now this can also be set to center for example. If you set align items to center and you reload, now the elements are vertically centered in their tracks,so in their columns basically. (Refer : grid35)

* And of course here, you also got start as an option, start moves them to the start of their row or of their area (Refer: grid36)

*  and you got end too, end will of course simply move them to the very end of their row.And now you might already have guessed it, the default here also is stretch, you don't need to set this, this is what you started with.

### Positioning the Entire Grid Content

* Now we had a look at the positioning of the grid elements, sometimes you also want to position the entire grid and with that, I don't mean to container, you can of course position that differently for example by using position absolute and moving it somewhere, by putting it into a flexbox, by putting it into another grid, this is also possible. But I mean that the grid might have a certain height which is not filled by all its rows and columns, so height and width actually which is not filled.

* Let me demonstrate this.I'll add a width of 500 pixels here and now let's remove all the auto assignments, let's also shrink the column sizes to 20%, so that it doesn't add up to 100, so there will be some empty space and on this row value here, we're not going to use auto but the maximum value for that row let's say is actually 20rem.

```css
.container {
    margin: 20px;
    display:grid;
    height: 800px; /*increase height*/
    width: 800px;
    grid-template-columns: [hd-start] repeat(4,[col-start] 20% [col-end]) [hd-end]; /*shrink the column sizes to 20%*/
    grid-template-rows: [hd-start] 5rem [hd-end row-2-start] minmax(10px,20rem) [row-2-end row-3-start] 100px; 
    grid-gap: 10px; 
    grid-template-areas: "header header header header" 
                         ". . main main"
                         "footer footer footer footer"; 
    justify-items: start; /* start, end, center, stretch (default)*/
    align-items: center; /* start, end, center, stretch (default)*/
}
```
* and lets save and reload and now we got a grid container as you can see which is bigger than its content.(Refer: grid37)

* Now the question is, where do you want to position the entire content? So I don't mean the elements in their tracks or in their areas, I mean the entire grid content. 
 
* Now for this, you get two additional properties and the first one is justify content this positions the entire grid on the x-axis, you can put this or set this to center for example

```css
.container {
    margin: 20px;
    display:grid;
    height: 800px; 
    width: 800px;
    grid-template-columns: [hd-start] repeat(4,[col-start] 20% [col-end]) [hd-end]; /*shrink the column sizes to 20%*/
    grid-template-rows: [hd-start] 5rem [hd-end row-2-start] minmax(10px,20rem) [row-2-end row-3-start] 100px; 
    grid-gap: 10px; 
    grid-template-areas: "header header header header" 
                         ". . main main"
                         "footer footer footer footer"; 
    justify-items: start; 
    align-items: center; 
    justify-content: center; /* X axis position*/
}
```
*  If you reload, you see the grid is now is centered in the container area. (Refer : grid38) You also have start which is the default as you saw and end which unsurprisingly moves it to the end of its container area.

* You also can assign stretch here, which actually leads to the same result as start though. So this does not stretch the values because it doesn't overwrite the row and column sizes you defined in your template settings here.

* Now we can also position it on the y-axis of course and for this, we got align content.

```css
.container {
    margin: 20px;
    display:grid;
    height: 800px; 
    width: 800px;
    grid-template-columns: [hd-start] repeat(4,[col-start] 20% [col-end]) [hd-end]; /*shrink the column sizes to 20%*/
    grid-template-rows: [hd-start] 5rem [hd-end row-2-start] minmax(10px,20rem) [row-2-end row-3-start] 100px; 
    grid-gap: 10px; 
    grid-template-areas: "header header header header" 
                         ". . main main"
                         "footer footer footer footer"; 
    justify-items: start; 
    align-items: center; 
    justify-content: center; /* X axis position  start end center*/
    align-content: center; /* Y axis position start end center*/
}
```
* So you probably see a pattern, justify at the beginning means x-axis or within a row, align at the beginning means y-axis or along the columns

### Positioning Elements Individually

* sometimes you want to position one element in a certain way that differs from the other elements.

* So for example here, all the elements, so now I'm talking about the items in the grid again, all the elements are set to stretch both on the x and the y-axis. Now what if you actually wanted to set element two, so the red one to be centered both horizontally and vertically in its box?

* Well you can overwrite the positioning for a single element by going to that element's selector, so I'm talking about the red one, element too, so it's the el2 selector and there, you can set justify self. Justify self positions it on the x-axis, so we could set this to center

```css
.el2 {
    background: rgba(255, 0, 0, 0.5);
    grid-column: 1 / -1 ;  
    grid-row-start: row-2-start; 
    grid-row-end: span 1; 
    z-index:10;
    justify-self: center;
}
```
* now if we go back and reload, you see now it's not stretching on the x-axis anymore (Refer : grid39)

* and of course therefore we also have align self to position it on the y-axis and we can set this to center too.

```css
.el2 {
    background: rgba(255, 0, 0, 0.5);
    grid-column: 1 / -1 ;  
    grid-row-start: row-2-start; 
    grid-row-end: span 1; 
    z-index:10;
    justify-self: center;
    align-self: center;
}
```
* And now all the other elements still have the stretch setting, which is set by the parent, by the container but this element two overwrites it for this element only because there, we assign justify and align self. (Refer : grid40)

* And this is also very useful to know and something which can be helpful with your next project where you might not want to position all elements in the grid equally.

### Understanding Responsive Grids

* Let's have a look at how we use the CSS grids together with media queries.

* For that, back in the code, I'll remove justify and align content because I want to have the grid in the top left corner essentially and I will also set element two back to take that stretch mode again. So now this is the grid again.

```css
.container {
    margin: 20px;
    display:grid;
    height: 800px; 
    width: 800px;
    grid-template-columns: [hd-start] repeat(4,[col-start] 20% [col-end]) [hd-end]; /*shrink the column sizes to 20%*/
    grid-template-rows: [hd-start] 5rem [hd-end row-2-start] minmax(10px,20rem) [row-2-end row-3-start] 100px; 
    grid-gap: 10px; 
    grid-template-areas: "header header header header" 
                         ". . main main"
                         "footer footer footer footer"; 
    /* 

    justify-items: start; 
    align-items: center; 
    justify-content: center;
    align-content: center;

    */
}
```
* Now of course, we could translate this kind of to having a header, a footer, a side bar and a main area, kind of what we had in assignments earlier. 

* Now this is one possible layout but maybe in mobile mode, so once you decrease the size of the page, you want to set this to behave differently.

* Now first of all, what I need to do is I need to get rid of that hardcoded width, it should again be flexible regarding this but still, the issue I have here is it becomes very narrow and there is a certain breakpoint where you probably want to ensure that element two, let's say takes the entire second row and that there is a third row before the footer where the yellow element, element one can then go to. This would be a typical requirement for a grid based webpage, where you want to have different positioning and maybe a different amount of rows even for different layouts. (refer : grid41).

* On a desktop device, three rows is fine, on a mobile device, we probably need four. Now of course, we can implement this with the help of media queries.

```css
@media(max-width: 40rem) {
    .container{
        grid-template-rows: [hd-start] 5rem [hd-end row-2-start] minmax(10px,20rem) [row-2-end row-3-start] 150px [row-3-end row-4-start] 100px [row-4-end]; 
        grid-template-areas: "header header header header" 
                             "main main main main"
                             "side side side side"
                             "footer footer footer footer"; 
    }
}
```

* So let's add a media query right after the container because we'll need to add a third row. So here I'll this to max width actually, so this is not mobile first here, excuse me, but I find it was easier to focus on the grid on a bigger screen, so now we'll engineer a solution for that smaller screens with max width and let's say the max width we want to have a look at is 40rem, so for screens up to 40rem, I want to have a different grid and that different grid needs an additional row, a row for the yellow element. Now we can simply copy grid template areas and grid template rows, not into the media query like this though but into the container selector in there. Let's get rid of that comment and grid gap and now we need to add an additional row by overwriting grid template rows and by simply adding an additional row then. We got a third row with 100 pixels, now let's say we want to have 150 maybe there and I then want to add a fourth row, so I'll name this row four start here maybe and then add my 100 pixel row there, row four end thereafter. So this is now the updated row set up with an extra row. Now in the template area, so I also want to add it and I want to say main actually takes the entire third row on mobile devices and as I just said, we have a new row below that, above the footer which would be our, let's name it sidebar so to say, now pushed into its own row occupying the full row let's say. Of course, you could also add some dots if you don't want this to be the case.

* Now with this, we added a new row and we change the positioning with the help of template areas and the cool thing is since we are referencing these areas on our elements, at least for most of them, we don't even need to change them.

* Now we need to change element one because here I'm still using that line-based approach and easiest way to make this really flexible is to also use grid area there and assign a name of side.

```css
.el1 {
    background: rgba(255, 154, 72, 0.5);
    grid-column: side
```
* Let's also add this instead of the dots here.(desktop container)

```css
.container {
    margin: 20px;
    display:grid;
    height: 800px; 
    width: 800px;
    grid-template-columns: [hd-start] repeat(4,[col-start] 20% [col-end]) [hd-end]; /*shrink the column sizes to 20%*/
    grid-template-rows: [hd-start] 5rem [hd-end row-2-start] minmax(10px,20rem) [row-2-end row-3-start] 100px; 
    grid-gap: 10px; 
    grid-template-areas: "header header header header" 
                         ". side main main" /* side added here*/
                         "footer footer footer footer"; 
    /* 

    justify-items: start; 
    align-items: center; 
    justify-content: center;
    align-content: center;

    */
}
```
* we just restructure our amount and positioning of cells with grid template rows and grid template areas and if we were to need it, with grid template columns of course.. 

* And now we can save this and reload and we get the same layout as before but if I shrink the screen, it then goes into that mobile mode and that's the cool thing about media queries and the grid. (Refer : grid42)

* It's really easy to build highly flexible and responsive layouts with media queries just as you learned it but by taking advantage of features like this, named areas and the advantage that you never have to change your elements again, you just change the general layout you defined on the grid container.

### Applying Autoflow

* let's talk about the automatic capabilities of the grid.We already saw them partly in action, now I want to dive deeper. 

```css
/* main.css */
.container {
    margin: 20px;
    display: grid;
    grid-template-columns: 15rem 15rem;
    justify-content : center;
    grid-gap : 5px;
}

.quote {
    border : 1px solid #fa923f;
    background : #ffbd87;
    font-family: 'sans-serif';
    padding: 1rem;
    border-radius: 5px;
}

.quote--featured{
    border: #ff4213;
    background: #ff9f87;
    grid-column: span 2;
}
```

* If you open and run it, it looks like this, well like this without the grid preview,(Refer : grid43) So this is our collection of quotes and it's basically distributed there or handled by a grid.

* The grid still is on the container class here with display grid and the only thing I did when it comes to laying the grid out and styling it is I defined columns, two columns of equal size(15rem 15rem).

* Of course I could have used repeat to 15rem instead of manually setting this, so this is an alternative. This is not what it's about though,so this only creates two columns

* but as you can clearly see here on the page, we've got more than one row or no row because I didn't define any rows but actually, you see we got four rows,

* Now the reason for the existence of these rows is that by default as I already explained at the beginning of this module, if you add display grid to any element, it will put all its child elements, its direct child elements into new rows, it will create new rows dynamically.This of course is a good behavior because it ensures that we can create dynamic grids,

* so if we happen to have a page where we don't know how many rows we need, for example because the user can create them with the help of some Javascript function that adds elements to the DOM, anything like that, so whenever we don't know how many rows we need, we can rely on the grid automatically creating them.

* However, thus far we didn't really have a look at how we can control the size of these rows for example. As it looks, the default size is auto because each cell here essentially is just as big as its content requires it to be or its neighbor column here as in the case of this element here.

* The content wouldn't require it to have such a big cell but of course the neighbor element has the requirement of having such a big cell and since it's in the same row, the row height is adjusted and the other element also gets the same row height.

* But we can of course overwrite this default, we can add grid auto rows here as a property. This allows us to create the style of automatically generated rows. The default here is auto which means the size will be auto, we can overwrite the size for example to 30rem.

```css
/* main.css */
.container {
    margin: 20px;
    display: grid;
    grid-template-columns: 15rem 15rem;
    justify-content : center;
    grid-gap : 5px;
    grid-auto-rows: 30rem; /* grid-auto-rows */
}

```
* now you see we got very very huge cells because now every newly generated row does not orientate itself on the content it holds but it simply has a height of 30rem.

* Now obviously, auto might have not been a bad setting here but if you want to ensure that all rows are equally sized, then being able to set a clearly defined height here is certainly a nice tool

* and of course you can also use minmax here for example to define a minimum height of 8rem but auto otherwise, now it would not be equally sized but they also wouldn't be as small as they were before.

```css
/* main.css */
.container {
    margin: 20px;
    display: grid;
    grid-template-columns: 15rem 15rem;
    justify-content : center;
    grid-gap : 5px;
    grid-auto-rows: minmax(8rem, auto) /* grid-auto-rows: minmax */
}
```
* otherwise, now it would not be equally sized but they also wouldn't be as small as they were before.(Refer : grid44) So this might also be a look you're interested in,

* the main takeaway here is that grid auto rows allows you to define the size of the newly added rows, something we weren't able to do previously.

* Now that we had a look at grid auto rows, let's also have a look at how we can automatically add columns.

* Right now the default behavior is that new content automatically is put in a new row. This is not the worst default behavior because especially if we consider that we're most of the time designing for mobile phones first, adding content at the bottom is typically a better idea than adding it to the right but you can switch that behavior nonetheless.

* You can tell the grid cannot add new items as a new row but to instead append new columns,you do this by adding the grid auto flow property.

* You might have guessed that grid auto columns is the right one but this actually will be required to set the size of these automatically added columns, grid auto flow allows you to define where new elements should be added, as a row which is the default, which is why we didn't set it previously or as a column which is the value I'm now setting. 

```css
/* main.css */
.container {
    margin: 20px;
    display: grid;
    grid-template-columns: 15rem 15rem;
    justify-content : center;
    grid-gap : 5px;
    grid-auto-rows: minmax(8rem, auto); /* grid-auto-rows: minmax */
    grid-auto-flow: column;
}
```
* With this set to column if we reload, you see now all the content is added to the right which clearly doesn't lead to the best design we ever had but it is a possible approach you can take in case you want to ensure that you never add new rows but always new columns as you add more more elements. (Refer : grid45)

* Be aware, you can still manually create rows with grid template rows this is something that's never affected, you can always explicitly add columns and rows, we're just talking about the automatically added ones, so for cases where you didn't define them yourself. 

* and for completeness sake, of course you got rid auto columns then.If grid auto flow is set to column, then you obviously also want to give these newly added columns a style and that would be the width of these columns, so maybe 5rem.

```css
/* main.css */
.container {
    margin: 20px;
    display: grid;
    grid-template-columns: 15rem 15rem;
    justify-content : center;
    grid-gap : 5px;
    grid-auto-rows: minmax(8rem, auto); 
    grid-auto-flow: column; /* grid-auto-flow: column; */
    grid-auto-column: 5rem; /* grid-auto-column: 5rem; */
}
```

* If you set it to this, now it's really ugly but this is something you can do and again, this will of course be overwritten for your explicitly set columns  (ie grid-template-columns: 15rem 15rem;) So the widths you assign here of course take precedence over the auto columns.

* Now with all these properties set here, grid auto rows flow and columns, you now got a lot of controls to customize the behavior of the grid when it comes to automatically added items.

### Comparing the Explicit & Implicit Grid

* Let us revert back grid flow to default row 

* Now we also have a grid where we do define parts of the grid manually, we do define two columns. Of course you can also define rows with grid template rows as you learned it, you could define for example

```css
/* main.css */
.container {
    margin: 20px;
    display: grid;
    grid-template-columns: repeat(2, 15rem);
    grid-template-rows: 20rem; /* first row of 20rem */
    justify-content : center;
    grid-gap : 5px;
    grid-auto-rows: minmax(8rem, auto); 
    grid-auto-flow: column;
    grid-auto-column: 5rem;
}
```
* Refer (grid47) If you do that and you reload, then obviously the first child element will be put into that first row because the grid is always populated according to the browser settings, so for left-to-right languages, it's populated from top to bottom and from left-to-right, for other right-to-left languages, the opposite is the case.

* So the grid automatically populates its cells with the child elements and obviously, the first child element goes into the first row.

* Now the interesting thing I here really want to emphasize, is that we define two columns and one row manually. Of course we have more than just one child however, we got a bunch of childs, a bunch of quotes.

* and all the other quotes which don't fit into the predefined row and the two columns are then put into these automatically added cells. 

* The cells on the other hand are added automatically because as you learned, the grid automatically adds new rows and each of the new rows still has the two manually defined columns, so I hope this makes sense.It's really important to understand that you can consider or that you can think of the grid as an implicit and explicit grid.

* The explicit grid is always the part you define with grid template columns and grid template rows and sometimes, you define the entire grid like in our project where you defined header, main and footer, that was everything we have on the page but sometimes you only define parts of the grid or nothing at all and the parts you didn't define explicitly are then managed with the implicit grid which you can in turn control with the grid auto settings here. So I hope this makes sense.

### Understanding "auto-fill" & "auto-fit"

* Enough about implicit and explicit grid, you learned how you can control the add new row or column behavior.

* Sometimes you want to have a layout where the child elements are put into cells in a row until they reach the edge of the current viewport at which point they should jump into a new row and do the same again.

* Now here we don't have that behavior, if we shrink it, we reach a point where nothing happens, we just crop the content we never have our content jump into a new line (Refer : grid48)

* and on the other hand if we increase the width, it also doesn't populate these newly freed-up space up here, it always stays the way it is.(Refer : grid49)

* Now we can change this by dynamically generating columns. You could think that grid auto flow column would be the solution but it actually isn't because this will always put new content into a column, it doesn't check if the column still fits into the current viewport or not.

* However, we can create columns on our own here,(grid-template-columns: repeat(2, 15rem);) the downside is that we need to know how many columns we need and we don't know.

* Now we could try figuring this out with a couple of media queries and then simply overwrite this property and change the amount of columns we create but there is a convenient helper value we can enter, auto-fill.

```css
/* main.css */
.container {
    margin: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 10rem); /* auto-fill */
    grid-template-rows: 20rem;
    justify-content : center;
    grid-gap : 5px;
    grid-auto-rows: minmax(8rem, auto); 
    grid-auto-flow: column;
    grid-auto-column: 5rem;
}
```
* Now let me reduce the size to maybe 10rem and what auto-fill will do is it will ensure that it fills the current row with as many items as possible and then it will wrap and enter a new row basically. 

* So if I save this and reload, you can see the effect here, we've got four items in the first row now, if I increase the viewport, this become five and if I shrink it, well then they jump into new lines. Refer: grid50

* Of course this is only possible to a certain extent but this gives us a lot of flexibility already.  So this can be really useful to create a truly dynamic grid for cases where you want to have multiple items sit next to each other.

* Now if you want to restrict the maximum amount of items that are in a row, you can simply assign a max width to your container which holds the grid in the end.

* There also is an alternative to auto-fill and you can only see it if you've got less items, Let us comments few items and keep less...

* Now you see, the items are obviously not enough to fill the entire line because or the entire row because we only have three items but now we can use an alternative value, so not auto-fill but auto-fit.

* Auto-fit will behave almost equal to auto-fill but if I reload with auto-fit, you see it also centers this automatically, it will still however put this into a new line if the space is not enough. So auto-fit is a nice alternative to auto-fill for cases where you might end up with a layout where you don't have enough items for an entire row.

* So auto-fit is a nice alternative to auto-fill for cases where you might end up with a layout where you don't have enough items for an entire row.

```css
/* main.css */
.container {
    margin: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, 10rem); /* auto-fit */
    grid-template-rows: 20rem;
    justify-content : center;
    grid-gap : 5px;
    grid-auto-rows: minmax(8rem, auto); 
    grid-auto-flow: column;
    grid-auto-column: 5rem;
}
```
### Creating a Dense Grid

* let's position one element slightly different. Let us increase the second div to span 2 ie to occupy two columns

```css
.quote:nth-of-type(2){ /* Second div to 2 span - ie 2 column */
    grid-column: span 2;
}
```

* and also in our container let us increase to 3 columns...

```css
/* main.css */
.container {
    margin: 20px;
    display: grid;
    grid-template-columns: repeat(3, 10rem); /* 3 columns */
    grid-template-rows: 20rem;
    justify-content : center;
    grid-gap : 5px;
    grid-auto-rows: minmax(8rem, auto); 
    grid-auto-flow: column;
    grid-auto-column: 5rem;
}
```
* if we now reload, we can see something interesting. The top right element here, the top right cell is not occupied, there is no value, no element in it.(Refer grid51)

* The reason for this is this normally would be the place of this second element here, (element with 2 column span)

* Now the other quotes after it don't jump into that empty space because the DOM order is respected here,

* unless we position an element explicitly with grid row and column, so if we were to position that element where we just changed the width basically, if we were to position this specifically in a certain position by assigning line names or numbers or an area, if we were to do that, then the element after it would actually take the empty space but if we don't do this, if we only increase this to span more than one cell, then the cell which it would have normally gotten will stay empty.

* You can overwrite this behavior by going back to grid auto flow, the property on the grid container and by adding dense

```css
/* main.css */
.container {
    margin: 20px;
    display: grid;
    grid-template-columns: repeat(3, 10rem); 
    grid-template-rows: 20rem;
    justify-content : center;
    grid-gap : 5px;
    grid-auto-rows: minmax(8rem, auto); 
    grid-auto-flow: column dense; /* dense */
    grid-auto-column: 5rem;
}
```
* What dense does is it will overwrite this default behavior of not taking the free space here and if you therefore reload, now you see there is a quote in that space (Refer: grid52)

* you can use it to densely organize your grid and to ensure that there are no empty spaces but please be aware that this may not be optimal.

* You can run into accessibility errors here because the screen readers will read your page from top to bottom, so the DOM order is what they respect and they will read items as they appear in the DOM. If you change the visuals to move them around, the thing people with screen readers will get out of their page is different to what other people can get out of your page.

* changing the order visually only is not always recommended, it is something you should do with great care. It is possible though if your requirement is to not leave any empty spaces and if you want to ensure that therefore your grid is as dense as possible.

### Styling the Project Form with Grid

*  Refer grid53

### Comparing Grid & Flexbox

* let me compare the grid to flexbox, when should you use which? Let's first of all understand the key difference between the CSS grid and CSS flexbox.

* The grid is all about two-dimensional positioning, you have rows and columns, that's what it's all about, that is what we used all the time.

* Flexbox is one-dimensional, in flexbox you dont have rows and columns. Sure you can use flex wrap to wrap items if your viewport is too small for example but in the end, you always just have flex direction row or column and you either position them horizontally or vertically.

* So flexbox is always a decent choice if you just have a row or a column of items, you can use flex wrap to still ensure that your row of items wraps itself, in case that your viewport is becoming too small but then you still might have the issue that the positioning of the items to each other is a bit harder in flexbox than with the grid

* the grid is especially a great choice if you have a real layout with multiple dimensions or for example with the form in our course project where you want to position items next to each other in like, a grid. (Refer grid54)

* So I hope this helps you, one-dimension normally, you should take flexbox, multiple dimensions, the grid is something you should think about.

* Grid - https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout
* Flex - https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox