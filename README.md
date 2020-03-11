# CSS-Complete-Guide

## Section 13 : Adding Flexbox to our Project

###  Flexbox Intro

*  it's the modern way to change the way our elements are displayed, so it's basically another value for the display property but a really special value which allows us to add a lot more flexibility to our elements. Refer: https://css-tricks.com/snippets/css/a-guide-to-flexbox/

```css
.main-header > div {
  display: inline-block;
  vertical-align: middle;
}
```

* have a look at this display inline block part, this is something we could change with flexbox because inline block is a nice way to change the position of elements but flexbox can make things like that easier.

```css
.main-nav {
    display: inline-block;
    text-align: right;
    width: calc(100% - 44px);
    vertical-align: middle;
  }
```
* we have our calculation right here with the pixels in it, well I'm not sure if that's the best way to create your website because wouldn't it be great to make sure our navigation items, so these items right here, are aligned the way they are right now but without having this strange calculation right there which is not nice to change and which definitely is not the best way to write our code right here.

* For example, if we scroll down here to testimonial info, we have the display inline block repeated right here and right there and that's also part of the code that I would like to get rid of. 

* So our goal basically is to make the code right here leaner or better in the shared.css file, for example this one and also get rid of all our display inline block declarations or properties,

* So these are all the small things I would like to change, I would like to get rid of the display inline block declaration, I would like to make sure that small issues like these are changed and therefore, I would like to show you what flexbox is, how it works and how we can use it to make our code leaner and more efficient in the end and better to read and interpret.

### Understanding Flexbox

* So what is flexbox actually? Well as I said, flexbox allows us to change the way our elements are displayed and using flexbox is actually quite simple

* because to use flexbox, we simply have to add a specific property to our element, to which element? We'll dive into that in a few seconds.

* This property we need is the display property, we talked about that property already, it's that display block, inline or inline block thing where we can change the behavior of our elements and if we now use the display property in connection with this value right here, the flex value, (Refer :flex-intro)

* then we create the following:

* we create a flex container and that's the first important thing we have to understand. If we apply display flex to an element, this element will be turned into a so-called flex container.

* Now as the name indicates, a container has to contain things and that's exactly what happens right here because inside our flex container, we should have other nested elements and these elements are the so-called children and these children are also named flex items.

* So that's the first thing we have to keep in mind, we have an element, normally a parent element with the display flex declaration, this parent will become the so-called flex container after we applied this declaration and all elements inside this container are children of the parent of course and at the same time, flex items. Now that's the first step,

* the second step is that once we turned our elements into such a flexbox construct as I would call it, we can apply different properties to both, our parent, ie our flex container and our children, ie our flex items.

* For the parent, we can apply the flex-flow property, the justify-content property, the align-content property and the align-items property, we'll of course dive into all these properties throughout this module.

* The same thing is true for our flex items, for these, we can also apply properties. The properties right here we have are order, flex and align-self,

* The problem now is that this is a very abstract construct now for you and at the moment, it's probably not clear how we can use the combination of this flex container and these flex items and these properties to change the way our elements are displayed.

* Therefore, we will forget about the flex items for the first part of this module and really focus onto the actual flex container and the corresponding properties because with that, you will quickly understand the core concept of flexbox and then we will be able to dive deeper into the flex items.

### Creating a Flex Container

* Refer flexbox theory folder

```html
<div class="flex-container">
    <div class="item-1">div</div>
    <div class="item-2">w=250px</div>
    <div class="item-3">h=250px</div>
    <div class="item-4">w/h=300px</div>
    <div class="item-5">w=350px</div>
    <div class="item-6">w=350px</div>
</div>
```
* we have our div right here, the div with the class flex container,this is basically this wrapping element and inside this container,

* we have six different divs. Each div has an own class, so from item 1 to item 6, so we basically have six so-called flex items in the end and each item has different content. (Refer: flex1). we have div with different height and width.

* You will see throughout this module why this information is important, therefore I added it right here. 

* So what does it take now to create such a flex container?

* we simply have to add our display property as flex

```css
.flex-container {
    background: white;
    padding: 10px;
    border: 5px solid black;
    display: flex;
}
```
* After added flex if we reload (Refer : flex2)

* The first thing and the most obvious one is that our elements are now displayed in one row, so not according to the typical block level element behavior that we saw so far

* and we also see that the elements, "except" for the third one, use the entire height available in the parent element. The height is then actually defined by this fourth element right here, as you can see with the 300 pixels height and all the other elements follow this value because we didn't define a height for the rest except for this fourth item.

* Another thing we see is that if we decrease the width right here, we can see that the width of the elements decreases, as you can see, up to here, up to the point where the content, this one right here or that one needs the space inside the element.(Refer : flex3)

* If we increase the width, we can see that the parent element increases and basically behaves like a normal block level element.(refer : flex4)

* So that's the first thing we did and very important, with applying display flex, we also turned our flex container class right here into such. So this is now a flex container and all the items inside this container, so the six items are now flex items.This automatically happened just because we added display flex to the parent.

* Lets change flex to inline-flex and see how this works. !!!! not inline block but inline flex.

```css
.flex-container {
    background: white;
    padding: 10px;
    border: 5px solid black;
    display: inline-flex;
}
```

* If we apply that and reload the page, you can immediately see what happens right now because in contrast to the display flex declaration, we now basically cannot change the size of our elements (its not rezising if we increase or decrease) because the size is now simply predefined by the actual width that was defined and also the parent element doesn't change its size anymore, it just uses the space that is required to display all the content, so basically, it behaves like an inline element. (Refer : flex5).

* What is still interesting though is that the height.

* is still used according to the definition of the fourth item right here. We'll dive deeper into the reasons for that later throughout this module but the important thing to keep in mind for now is that we basically can apply display : flex or display : inline-flex to our parent element, this will then become the flex container and the elements inside this flex container will become the flex items.

* However, let's change back the value to flex for now because we will probably use that throughout this module.So if we reload now, we can see that the block level behavior is back again 

```css
.flex-container {
    background: white;
    padding: 10px;
    border: 5px solid black;
    display: flex;
}
```

###  Using "flex-direction" & "flex-wrap"

* So which properties did we apply automatically? Well we applied two properties:

* the first one is flex direction, that's the first property we had and the default value for this property is "row".

* The second property we applied is flex wrap, this one right here with an initial value of no wrap, that's basically what happened automatically just by applying display flex right here.

* If we change default behaviour of no-wrap to wrap

```css
.flex-container {
    background: white;
    padding: 10px;
    border: 5px solid black;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap /* here we are changing to wrap from default behaviour*/
}
```

*  If we now decrease the window size..

* Actually you can see two interesting things by the way because the first thing is, as soon as the element would have to reduce its width below the defined value, so in this case 350 pixels for example, the element is wrapped and jumps into the second row.(Refer : flex6)

* The second interesting thing is that the height of the element also changed now because in the first row, it simply adapted to the height we had defined right here (fourth div). So this was the maximum height, therefore all the other elements after fourth div adapted to that.

* Now that the element is in the second row or the new row, it doesn't behave like that anymore and simply uses the height it needs to simply display the content.

* If we reduce that more further, you can see that all elements are wrapped one after another, like that and in the end, we have displayed it all like this in one column.(Refer : flex7)

* If you would further decrease it, you could see that the behavior again follows the one we saw in the beginning, that the width would be reduced up to the point where the space is needed by the actual content.

* we have another value "wrap-reverse"

```css
.flex-container {
    background: white;
    padding: 10px;
    border: 5px solid black;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap-reverse;
}
```

* So if we would do this now and reload the page, like that, then you can see that the order simply was mixed up.(Refer : flex8), Now the div, so the first item right here is at the bottom end the item 6 is at the top

* and if I now increase the width again, you can see that the behavior will turn back to the behavior we had in the beginning (1-6) 

* but that's important, the height as you can see it right here is now not displayed from the top to the bottom but now it starts right here and simply uses the height as it is defined right here for 250 pixels up to this point. (Refer : flex9)

* So that's what we can change with this flex wrap property, it basically defines if our items should wrap and how they should wrap 

* However, what about flex direction?

```css
.flex-container {
    background: white;
    padding: 10px;
    border: 5px solid black;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap-reverse;
}
```
 * That's also a really interesting value because if we change just from row to column right here, like

 * now reload the page, then you can see a lot of changes because actually, our elements now behave the way we would our block level elements expect to behave.(Refer : flex10)

 * We have the div right here for example which has no width specified, so it simply uses the entire space available right here, the same thing is true for the third div right here but our other divs of course which have a specified width only are displayed up to the point that is defined by this width,

 * If I now decrease the width, can you see it? The elements are not displayed below that value, however the other elements,for example this one right here which don't have any width defined now reduced the size even below the point that is actually required by the content

 *  we also have column reverse for example,

 ```css
.flex-container {
    background: white;
    padding: 10px;
    border: 5px solid black;
    display: flex;
    flex-direction: column-reverse;
    flex-wrap: wrap-reverse;
}
```

* partially kind of the way we saw it for the flex wrap. If I now reload, you can see that the items are now displayed from the bottom, right here, to the top but in the reverse order

* Now as you can imagine, if we have column reverse, we also have row reverse right here like that

```css
.flex-container {
    background: white;
    padding: 10px;
    border: 5px solid black;
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap-reverse;
}
```
* and if I now go back and reload this one, then as you can probably imagine, we can see that the div starts right here, so the first item and the last item is displayed to the left.(Refer : flex11)

* If I decrease the width right here, then you can see it also follows this wrapping behavior, so that in the end, this is the last item in the row which will be displayed on top then because it wraps from left to right basically.(Refer : flex12)

### Understanding the Importance of Main Axis & Cross Axis

* So what happened here, what did we do by applying flex direction to our parent element, to our flex container and what does this have to do with the main axis and the cross axis?

* Well this is our starting point, right, we had our flex container and we applied the flex direction property with a value of row.

* Now what happened then is, basically this is the default value as I said, is that our starting point for the main axis is the left top corner of our element basically or of our website !!!.

* Now if the main axis goes from the top left to the top right, well then the cross axis which, that's important, always has the same starting point as the main axis goes from the top left to the bottom left corner of course.(Refer : flex13)

* So that's basically the default behavior, how our flex items are displayed then. They are displayed in a row, so along the main axis and from left to right.(Refer : flex13)

* Now in addition to row, we also applied another value, we applied flex direction row-reverse.(Refer : flex13)

* and if we think about the way row behaves, so from the top left to the top right for the main axis, then row reverse simply behaves the other way round.It starts in the right top corner and goes to the left top corner and the cross axis starts also in the right top corner, as I said, they always have the same starting point and goes to the right bottom corner.(Refer : flex13)

* That's actually the first thing we have to understand about these two axis, we have a main axis and a cross axis and depending on the value we apply to the flex direction property, the starting point and the finishing point of these two axis changes.(Refer : flex13)

* Now let's go back to the code and play around with that a bit to really get a better feeling for it

* With full screen the elements will move from top left to right(main axis), if you recude screen to smaller size, element will move from top to bottom(cross axis)

* For row-reverse the starting point for both the axis is top right, but if I now reduce the width, as you can see it right here, the first flex item stays on top because keep in mind, the starting point is still the top right corner but all the other elements are then aligned along the cross axis, so from top to bottom right there.(Refer: flex14)

* So that's what we have to understand now basically, with this flex direction, we can have an impact onto this main and cross axis and this is only flex direction row and row reverse.(Refer: flex14)

* but we also had flex direction column and column reverse.(Refer: flex14)

* if we again take our flex container and now apply flex direction column? Well then and that's also another important thing, the starting point is exactly the same that we had before for flex direction row, it's still the top left corner but now the main axis as you can see goes from top to bottom and the cross axis goes from left to right and that's really crucial to understand because we will need that concept throughout this module.(Refer: flex14)

* The flex direction basically defines if our main axis is the row, so from left to right or right to left with row reverse or if the main axis is from top to bottom or, that's the second thing we can see right now, if we add flex direction column reverse or from bottom to top, starting from the left lower corner.(Refer: flex14)

* So that's the tricky thing right here maybe but it's actually quite easy to remember. (Refer: flex14)

    * If the flex direction is row, then the starting point is the top left corner and the row defines the main axis.
    * With row reverse, the starting point is the right top corner and the main axis is of course the row. 
    * If the flex direction is column, then the starting point is again the top left corner but the main axis now goes as the direction indicates, along the column.
    * and if we have column reverse, then the starting point is the bottom left corner and the main axis is again the column.

* if we change the flex-direction as column

```css
.flex-container {
    background: white;
    padding: 10px;
    border: 5px solid black;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap-reverse;
}
```
* and reload our page right here, you can see exactly what we just saw on the slide. The main axis now starts in the top left corner and the items are aligned along the main axis.Now that's important, the main axis now goes from top to bottom.

* If I would go back now and change it to column reverse like that and reload the page again, then the starting point is the bottom left corner right here
and as we can see, the items are again aligned along our main axis which is now this one right here.

* So with that, we saw the core concept behind flex direction,it allows you to define the way our elements are displayed and really important, to also specify the main and the cross axis and the main and cross axis is a really important concept that we need to understand now because it has an impact onto other properties we can use. 

* If we for example go back right here and change our flex direction to row again, like that and now go back and reload the page, we could already see that if I increase the width, that the elements, so the height of the elements, simply adjust to the largest elements, so the one with the largest height you could say and well so far, we simply accepted this behavior

* but the thing is that we can change this behavior, so also the height and default behavior our elements have right here.For that, we need additional properties and we need to understand the concept of main versus cross axis.

### Working with "align-items" & "justify-content"

* Before we dive into this property I just talked about, I just wanted to add some information to flex direction and flex wrap.

* because you could also write these two properties in a shorthand and this shorthand is called flex flow.

```css
.flex-container {
    background: white;
    padding: 10px;
    border: 5px solid black;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    /* flex-flow: row wrap; */
}
```

* this would basically be the shorthand for flex direction, the row and flex wrap, the wrap.

* I will just stick to the separate properties because I think it's easier to read and better to learn.

* However which property am I referring to now to ensure that this behavior, so that the height will always follow the maximum height defined right here?

* Well, this property is align items, like that and the default value for align items 

```css
.flex-container {
    background: white;
    padding: 10px;
    border: 5px solid black;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    /* flex-flow: row wrap; */
    align-items:stretch;
}
```
* If we apply that and reload the page, you can see nothing changes, we simply have the same behavior that we had before.(refer : flex15)

* If I change this value now to center, like that and reload the page again, then you can see that the height suddenly changed (refer : flex16)

```css
.flex-container {
    background: white;
    padding: 10px;
    border: 5px solid black;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    /* flex-flow: row wrap; */
    align-items: center;
}
```

* because with this align items property right here, we can have an impact onto the height of our elements and this is totally wrong.

* I'm just saying that because this is what you could think right here once you see that but if we now apply our knowledge and this knowledge was that if we change the flex direction from row to column, that this means the main axis also changes, so let's add column right here, like that and reload the page,, then you can see that it didn't really impact the height, it simply centered our flex items along the cross axis.(Refer : flex17)

* That's really important because our cross axis, right now we have flex direction column, so this means our cross axis goes from left right here to the right and as you can see right here in the center, we now centered our items.

* If I change it back to row now right here, like that and reload the page, we centered our items along the cross axis, which is now from the top left corner to the bottom left corner.(Refer : flex18)

* Now let me change it back to column though because I want to show you something else because if we apply another value for our align items property right here

```css
.flex-container {
    background: white;
    padding: 10px;
    border: 5px solid black;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    /* flex-flow: row wrap; */
    align-items: flex-start;
}
```
* if I reload that, the items are now centered at the beginning,(refer : flex19) 

* well flex start, of our cross axis. Again, the cross axis now is from top left to the top right.We could also use flex end 

```css
.flex-container {
    background: white;
    padding: 10px;
    border: 5px solid black;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    /* flex-flow: row wrap; */
    align-items: flex-end;
}
```
* if reload the page now, you can see the items are now centered along the cross axis but at the end of it.(Refer : flex20)

* If I would change the flex direction back to row, like this right here and reload the page, then it is centered as you can see, at the end of the cross axis which now again goes from the top left corner to the bottom left corner.(Refer : flex21)


```css
.flex-container {
    background: white;
    padding: 10px;
    border: 5px solid black;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    /* flex-flow: row wrap; */
    align-items: flex-end;
}
```

* And what you can see right now of course is that now it has again an impact onto the height but keep in mind that this is only due to the fact that our cross axis now goes from the top to the bottom and that the items are aligned to the bottom now, so flex end, that's really important to keep in mind right here.(Refer : flex21)

* So with that, we saw that align items always refers to the cross axis!!!.

* and now the question we might ask ourselves is, OK but what about the main axis?

* Now we can of course also define the position of our items along the main axis or along the main and cross axis in combination. For that, let me first maybe increase the height of our container a bit and change align item to center 

```css
.flex-container {
    background: white;
    padding: 10px;
    border: 5px solid black;
    height: 800px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
}
```
* if we reload,  we have the cross axis from top to bottom, so the items are centered right here (Refer : flex22), and as you can see, they are kind of starting to the left, to the beginning or at the beginning of the main axis,

* If I now add another property which is called justify content,

```css
.flex-container {
    background: white;
    padding: 10px;
    border: 5px solid black;
    height: 800px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify:content;
}
```
* if I now would also apply a value of center to it, like that and reload the page, then you can see that the items are now both centered along the cross axis because of align items and at the same time, centered along the main axis because of justify content.(Refer : flex23)

* If we would now change the flex direction to column again

```css
.flex-container {
    background: white;
    padding: 10px;
    border: 5px solid black;
    height: 800px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify:content;
}
```
*  and therefore, kind of switch the main axis and cross axis, like that, then you can see this behavior right here (Refer : flex24) because basically the space we have is not enough for our flex container.

* So if I increased height a bit more maybe, let's say to 1300, something like that, let's see, yes now it's sufficient,(Refer : flex25)

```css
.flex-container {
    background: white;
    padding: 10px;
    border: 5px solid black;
    height: 1300px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify:content;
}
```

* So you can see now basically that we now have the cross axis from left to right, right here which is specified by align items and we have the main axis now from top to bottom, which is specified by justify content.

* So if I say justify content flex end right here once again.

```css
.flex-container {
    background: white;
    padding: 10px;
    border: 5px solid black;
    height: 1300px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify: flex-end;
}
```

* reload the page, you can see that the items now start at the end of the main axis,(Refer : flex26)

* and if I would now change align items to flex start 

```css
.flex-container {
    background: white;
    padding: 10px;
    border: 5px solid black;
    height: 1300px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    justify: flex-end;
}
```

* If you reload you can see that the items are not displayed at the beginning of the cross axis which is from left to right now, as we have flex direction column, that's important to keep in mind and our main axis goes from top to bottom, here we have flex end for justify content right here.(Refer : flex26)

* Lets center 

```css
.flex-container {
    background: white;
    padding: 10px;
    border: 5px solid black;
    height: 1300px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify: center;
}
```

* So align items, justify content, main axis, cross axis, oh my God, that's a bit too much.It's actually not because let's just summarize that in easy words now

* because what we basically did is we applied a flex direction of row,
    * We basically had a main axis going from the top left corner to the top right corner,
    * the cross axis went from the top left to the bottom left,
    * Now then we added justify content as a property
    * and we added align items as a property
    * In case of flex direction row, justify content simply defines the positioning of our flex elements along the main axis. 
    * Align items simply defines the positioning along the cross axis of our elements,

* so in combination of justify content, align items and flex direction, we kind of have a lot of control about our items (Refer: flex28), 

* then we applied flex direction column. With that, We change basically the main axis of our flex container 
    * because now, the cross axis takes over the place of the initial main axis
    * and with that, the main axis goes from the top left corner to the bottom left corner. 
    * From a justify content and the align items perspective,
    * we could also say that these two switched their positions 
    * because align items now simply defines the positioning of the elements along the cross axis which is now basically along the row you could say 
    * and justify content defines the element position along the main axis, which is now the column, just remember that.

* So in the end, you can actually easily memorize that by saying that justify content refers to the main axis and the main axis depends on the flex direction and the align items refers to the cross axis,that's it actually.(Refer : flex29)

* But still we have lot of other values for align-items and justify-content. Please refer MDN flexbox for deep dive

* Now I will not dive into all of these values because to be honest, I think it's important to understand the basic concept but then you can play around with the values right here

* but one interesting value I would like to show you though is this one right here, align items baseline and we change the flex direction back to row, then
reload the page, then you can see something interesting.

```css
.flex-container {
    background: white;
    padding: 10px;
    border: 5px solid black;
    height: 1300px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: baseline;
    justify: center;
}
```

* The items are now no longer aligned right here to the top for example of the boxes but they are aligned to the baseline of the actual content, can you see it?(Refer : flex30). This right here is the bottom of the x and that's the same position that the h=250px right here has.So that's the align items baseline declaration. we can also use for example.

### And What About "align-content"?

* So time to have a look at the last property in connection with the flex container and this property is called align content,so basically, a combination of align items and justify content.

```css
.flex-container {
    background: white;
    padding: 10px;
    border: 5px solid black;
    height: 1300px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: baseline;
    justify: center;
    align-content: center;
}
```
* If we do that and reload our page, nothing changed, but if we now decrease the size, can you see the difference? (Refer : flex31), Can you see the difference? Align content allows us to align our items along the cross axis.

* As for the other properties, we have different values available for align content, 

* So this is center, with that we centered our items but we can also add something like flex start once again, like this, 

```css
.flex-container {
    background: white;
    padding: 10px;
    border: 5px solid black;
    height: 1300px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: baseline;
    justify: center;
    align-content: flex-start;
}
```

* and if now reload the page, you can see that the items are positioned at the beginning of the cross axis.(Refer : flex32)

* If I increase the size, it jumps back to this behavior because keep in mind, we have align items and justify content center, so this is basically what we see right here but as soon as we have our second line available right here, the align content property will come into play.

* We also have other values for it, for example we have space between.

```css
.flex-container {
    background: white;
    padding: 10px;
    border: 5px solid black;
    height: 1300px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: baseline;
    justify: center;
    align-content: space-between;
}
```
* The space between our elements is now simply used in a way that the elements in the first row are positioned at the beginning of our cross axis and that the second row is positioned at the end of our cross axis,(Refer : flex33) it's also a nice way to display values like that differently.

### Improving the Navigation Bar with Flexbox

* Always keep in mind, the structure that we want to follow is always the one that a parent element should become a flex container.

* and with this flex container, we want to be able to define the behavior of the items inside this flex container.

* So let's start with the header now, this right here, our main header class. Now inside this main header class, we basically have two elements.

* We have the div right here, this one which mainly contains our hamburger button which is not visible right now but only the mobile view and we have our anchor tag which includes our image right here. So that's the first item,

* the second item is our main nav class, so the navigation bar with these buttons right here.

* Now, wouldn't it be a good starting point to turn this main header class into a flex container and with that, get the control of these two elements in here? so lets apply our flex to our main header to make that as flex container

```css
.main-header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #2ddf5c;
  padding: 0.5rem 1rem;
  z-index: 1;
  display: flex;
}
```

* If we do that and reload our page, we can see we have some change already up here, not the perfect change yet but we'll do it step-by-step, so let's see what exactly we have to improve. What we can see right here as a first improvement definitely is that we have to align our items inside of the flex container along the cross axis. (Refer : flex34)

* You remember, we applied display flex now, this means our flex direction is row, so from left to right, our main axis is also left to right, the cross axis
therefore is top to bottom and if we align our items along the cross axis, then these should be centered.

```css
.main-header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #2ddf5c;
  padding: 0.5rem 1rem;
  z-index: 1;
  display: flex;
  align-items: center;
}
```
* If you reload yes now menu aligned properly (Refer : flex35)

* Another thing that we could already apply is the following: if we consider the way our logo right here and these buttons are displayed, then we see that there is some space between in here and if you look at the structure, you have one element and another one, so two flex items

* and if we think back about our space between the value we used for align content 

* then why don't we just use, not align content, but justify content now because remember, we want to position the elements along the main axis, which in our case is this one, so we need to use justify content and justify content right here would simply be space between, like that.

```css
.main-header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #2ddf5c;
  padding: 0.5rem 1rem;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content:space-between;
}
```

* If we reload that though, we cannot see a lot of change for the moment because the code is not cleaned up yet but let's keep that for now and see if it works the way it should work because normally, we should have this element, then the space between and then the other elements which should actually follow the look of our navigation bar right here(Refer : flex36)

*  let's have a look at the CSS code and see what else we have. We have this main header div selector right here with display inline block and vertical align middle, so this basically targets the div right here which contains the button and our logo.

```css
/* Now actually, we don't need that anymore because this is now a flex item,*/
.main-header > div {
  display: inline-block;
  vertical-align: middle;
}
```
* Without the above code it will work fine now, because this is now a flex item, so if we delete that, let's have a look, and reload the page, this looks fine,let's go to the mobile view, this also looks fine. So for the moment, we don't have a problem, this seems to work correctly.

* So we already got rid of that code right here, of that main header div selector and we added flexbox right here. So that's a nice first step as I would say.

* Now let's go through the code and see if we have additional display inline block declarations in here and yes we have, we have it right here for the main header brand selector.

* Let's see, this is the anchor tag which contains the actual image in the end. Now this anchor tag or these elements are basically part of this div flex item now, so we should actually also be able to get rid of that code right here.

```css
.main-header__brand {
  color: #0e4f1f;
  text-decoration: none;
  font-weight: bold;
  /* display: inline-block;
  vertical-align: middle; */
}
```

* Let's see and reload the page and now we have an issue because now the image uses 100% of the height of the parent element (Refer : flex37)

* basically and this was the anchor tag but as we remove this display inline block declaration from it, we cannot refer to this element anymore and therefore, the 100% height is not correct anymore. But we can easily solve this by not adding the height to the anchor tag, right here

* but simply changing it right here for our actual image because if the image has now a height of 2.5rem

```css
.main-header__brand img {
  /* height: 100%; */
  height: 2.5rem; /* previously this 2.5rem is specified in .main-header__brand*/
}
```

* and if we load the page, we can see that it works fine now.Because now we simply say that the image height should not refer to that anchor tag because that's not possible but simply to the image itself and therefore, this looks alright actually.

* let's also see if this works in the mobile view, there we have a problem (Refer : flex38)

* but let's see, we have the toggle button, so this is this class right here which has vertical align middle applied.So if we apply it now also to our image right here, middle like that 

```css
.main-header__brand img {
  height: 2.5rem;
  vertical-align: middle;
}
```
* reload our page, then we can see that this is now also aligned and yes, I think this looks good actually.(Refer : flex39) 

* Let me quickly summarize what we did so far, we basically turned our main header into a flex container and now we have these two items as flex items and with that, we were also able to get rid of the display inline block declarations we had inside of these items because the positioning now is controlled by the flex container

* and with that, we could make our code really a lot leaner already. So let's go down and let's see where else we have display inline block, right here, main nav item.

```css
.main-nav__item {
  display: inline-block;
  margin: 0 1rem;
}
```
* these are the single items we have which are part of this unordered list right here(Menu items)

* and if I look at this structure right now, I think we can easily improve that by also adding flexbox right here(Ul - main-nav__items)

*  because we know that main header is a flex container which contains the div and this main nav class but inside this main nav class, we could create another flex container, main nav items, the plural right here which contains the single flex items right here, so the packages, customers and start hosting buttons.

```css
<header class="main-header">
    <div>
        <button class="toggle-button">
            <span class="toggle-button__bar"></span>
            <span class="toggle-button__bar"></span>
            <span class="toggle-button__bar"></span>
        </button>
        <a href="index.html" class="main-header__brand">
            <img src="images/uhost-icon.png" alt="uHost - Your favorite hosting company">
        </a>
    </div>
    <nav class="main-nav">
        <ul class="main-nav__items">
            <li class="main-nav__item">
                <a href="packages/index.html">Packages</a>
            </li>
            <li class="main-nav__item">
                <a href="customers/index.html">Customers</a>
            </li>
            <li class="main-nav__item main-nav__item--cta">
                <a href="start-hosting/index.html">Start Hosting</a>
            </li>
        </ul>
    </nav>
</header>
```

* So how does this work? Keep in mind, main nav items should be flex container, the item, singular, should be the single items.so from the single list items and now simply add display flex right here to our main nav item selector.

```css
.main-nav__items {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}

.main-nav__item {
  /* display: inline-block; */
  margin: 0 1rem;
}
```
* If we do that and we load the page, we can see that this didn't crash it entirely but our menu mis aligned.(refer : flex40), this is due to main-nav media query, let us comment

```css

@media (min-width: 40rem) {
  .toggle-button {
    display: none;
  }

  .main-nav {
    /* display: inline-block;
    text-align: right;
    width: calc(100% - 44px);
    vertical-align: middle; */
  }
}

```

* we already display none this menu for mobile view, 

```css
.main-nav {
  display: none;
}
```
* So we have to enable this as flex in media query 

```css

@media (min-width: 40rem) {
  .toggle-button {
    display: none;
  }

  .main-nav {
      display: flex;
    /* display: inline-block;
    text-align: right;
    width: calc(100% - 44px);
    vertical-align: middle; */
  }
}

```

* However if I reload the page now, you can see a really cool thing because now we basically got our structure back and even better,

*  if I now look at the mobile view, because actually we work mobile first, right and click onto this hamburger, then I don't like this look right here, because wouldn't it be better if these three buttons would be centered right here? (Refer: flex41)

*  if we look at the classes for that, we have this class right here

```css
<nav class="mobile-nav">
        <ul class="mobile-nav__items">
            <li class="mobile-nav__item">
                <a href="packages/index.html">Packages</a>
            </li>
            <li class="mobile-nav__item">
                <a href="customers/index.html">Customers</a>
            </li>
            <li class="mobile-nav__item mobile-nav__item--cta">
                <a href="start-hosting/index.html">Start Hosting</a>
            </li>
        </ul>
    </nav>
```
* this brings us to your challenge now.

* Turn the mobile nav items class into a flex container and add the properties in a way that the flex items right here are displayed below each other, like that but in the center of the page

```css
.mobile-nav__items {
  width: 90%;
  height: 100%;
  list-style: none;
  margin: 10% auto;
  padding: 0;
  /* text-align: center; */
  display: flex;
}
```
* So with display flex being added, let's see and reload the page, (Refer: flex42) mobile menu crashed/misaligned

* But if we now first say that our flex direction should not be the default value but column because that's what we want to have right here, the buttons should be displayed below each other,

```css
.mobile-nav__items {
  width: 90%;
  height: 100%;
  list-style: none;
  margin: 10% auto;
  padding: 0;
  /* text-align: center; */
  display: flex;
  flex-direction:column;
}
```
* Now keep in mind, we change the flex direction to column, this means the main axis goes from top to bottom, so we need to add justify content center,

```css
.mobile-nav__items {
  width: 90%;
  height: 100%;
  list-style: none;
  margin: 10% auto;
  padding: 0;
  /* text-align: center; */
  display: flex;
  flex-direction:column;
  justify-content: center;
}
```
* if we reload content wil be aligned center(Refer : flex44)

* And if we now add align items to align the items along the cross axis which is from left to right in our case because we have flex direction column,

```css
.mobile-nav__items {
  width: 90%;
  height: 100%;
  list-style: none;
  margin: 10% auto;
  padding: 0;
  /* text-align: center; */
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items : center;
}
```
* if we reload items will  be aligned center perfectly (Refer : flex45)

### Improving the Footer

* Now this is the footer, inside the footer we have the nav, then we have a class and then we have an unordered list with two list items.

```html
<footer class="main-footer">
    <nav>
        <ul class="main-footer__links">
            <li class="main-footer__link">
                <a href="#">Support</a>
            </li>
            <li class="main-footer__link">
                <a href="#">Terms of Use</a>
            </li>
        </ul>
    </nav>
</footer>
```
* we will turn our main footer links class, so this one right here into a flex container


```css
.main-footer__links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
```

* And with that, we actually turned this footer into a flexbox or flex container, flex item construct.(Refer : flex46)

*  The only thing we have to change of course is the desktop view now

* well what do we have to change actually? Well, we simply have to go down right here to our main footer link right here, so that's basically the same links again and delete display inline block because that's not required anymore as we have flex items. With that, let's see, no change,

```css
@media (min-width: 40rem) {
  .main-footer__link {
    /* display: inline-block; */
    margin: 0 1rem;
  }

  .main-footer__links {
    flex-direction: row;
    justify-content: center;
  }
}
```
* we use justify content to position the elements in the center of the flex container, like that

* and with align items which we have right here, center, we make sure that our elements are positioned in the center along the cross axis.

* With this our footer works fine with flexbox (Refer : flex47)

### Flexbox and the Z-Index

#### Flexbox and the Z-Index
* In the position module we learned that adding the z-index  to an element only has an effect, if the position  property with a value different from static  was applied to this element.

* One exception from this behaviour is flexbox: Applying the z-index  to flex-items (so the elements inside of the flex-container) will change the order of these items even if no position  property was applied.

* You will need the z-index  for flex-items in the following assignment, so keep that special behaviour in mind.

### Adding Flexbox to the Customers Page

* So let's turn the customers page into a flexbox construct and to be honest, we actually don't have a problem right here in the mobile view, this looks totally right, we only need flexbox right here to make sure that the desktop view is displayed like that. For that, we simply have to focus onto the media query regarding the testimonial class and turn it into a flex container once we are in the desktop view and then add the properties we need to make sure that the content is displayed correctly. 

```css
@media (min-width: 40rem) {
    .testimonial {
        margin: 3rem auto;
        max-width: 1500px;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .testimonial__image-container {
        /* display: inline-block;
        vertical-align: middle; */
        width: 66%;
    }
    .testimonial__info {
        /* display: inline-block;
        vertical-align: middle; */
        width: 30%;
    }
}
```
* However with that, as I just said, the flex container part is finished. Now in the next lecture, we'll have a look at the flex items because we worked with the flex items as part of the flex container but we can also specifically target the flex items and change the way they are displayed.

### Using the "order" Property for a Flex Item

* it's now time to dive deeper into the flex items and the corresponding properties,(Refer : flex48)

* Lets dive into our flex theory project

* I will first change justify content to flex start, like that because I want to make sure that these elements are aligned to the left so we have a bit more space to the right,

```css
.flex-container {
    background: white;
    padding: 10px;
    border: 5px solid black;
    height: 1300px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    /*flex-flow: row wrap;*/
    align-items: center;
    justify-content: flex-start;
    align-content: center;
}
```

* If we reload the items are aligned left (Refer : flex49)

* then I will also delete align content because we talked about it already and I don't think we need it anymore.

```css
.flex-container {
    background: white;
    padding: 10px;
    border: 5px solid black;
    height: 1300px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    /*flex-flow: row wrap;*/
    align-items: center;
    justify-content: flex-start;
    /* align-content: center; */
}
```

* As you can see, this doesn't make a difference right here. So as you saw, we have different properties which we can apply to our flex items and that's the first important thing we have to understand.

* So far, we only worked in the flex container here but this time or in this part of the module, we will work on the single element, so on the specific selectors right here that we want to change.

* Now what can we change? 

* Well let's for example say we want to change the order of these elements and we could say that the fourth element, so this one right here should be positioned at the beginning,

* so in front of our div right here. For that, we simply have to go to item four, the fourth element right here and now write the order property,

```css
.item-4 {
    background: #f5c096;
    color: white;
    padding: 10px;
    border: 5px solid black;
    margin: 10px;
    width: 300px;
    height: 300px;
    order: 0;
}
```
* The order property can have different values, the default value for order is simply 0.So if I apply this to our item four, nothing changes because order zero is applied to all elements and will not change a thing.

* Now if we change order zero to order one though, like that, if I now reload the page, well you can see that the element we applied the order property to is now positioned at the end.(Refer : flex50)

* what does 'at the end' mean?

* Well keep in mind we have a flex direction of row, so the main axis goes from left to right, so at the end of this main axis right here(right)

* but this also means if our other elements have an order of zero and one positions the element at the end of the other elements, well then if we will change it to -1 right here for example, like that and reload the page, we can position it in front of the other elements and that's actually the core logic that we have for this order property.(Refer : flex51)

* It allows us to change the order of the elements that the elements initially have based on the code in HTML and by adding numbers, we simply say that the bigger number we apply to the order, the later the element will be positioned.

* An important thing to keep in mind though is, if I now change our flex direction right here from row to row reverse for example like that, then this will of course also change the order accordingly. Now this element is displayed first on the screen because it's the last element, remember our main axis starts right here from right to left, so at the end of the main axis and the element with the lowest order value, so this one right here is positioned at the beginning of the main axis right here but at the end of the page now if you read our page from left to right. This is also true if we change the flex direction to column right here, that's of course also possible

* if we do that like this and reload our page, then you can see that the element with the lowest order value is positioned first and the element with the highest order last

* if we now apply column reverse, then as you can hopefully imagine now, it will be displayed like that because this will now be positioned at the end of the main axis which now goes from the bottom left corner to the upper left corner.

* Now with that, we understood the first property

### Working with "align-self"

* So what's the next property we can use in connection with the flex items? Well this property is close to a property we already used so far on the flex container,

* now let me show you the property. For that, I will now add it right here to our third item, so this is basically this orange box right here

```css
.item-3 {
    background: #ff9640;
    color: white;
    padding: 10px;
    border: 5px solid black;
    margin: 10px;
    height: 250px;
    align-self: flex-start;
}
```
* If we do that, go back and relod the page, you can see that the element is, that's important, positioned in relation to the cross axis. (Refer : flex52)

* So the cross axis, right here we have flex direction row so our cross axis starts in the upper left corner and goes to the lower left corner, therefore flex start will pin the item right here.(Refer : flex52)

* If we will change align self to flex end, not like that, maybe written correctly like this .

```css
.item-3 {
    background: #ff9640;
    color: white;
    padding: 10px;
    border: 5px solid black;
    margin: 10px;
    height: 250px;
    align-self: flex-end;
}
```
* and reload the page again, it will be at the end (Refer : flex53)

* The important thing though and the difference in contrast to align items is that align items of course referred to all elements, that's the difference but align self allows us to define the position of a single element which is part of a flex container of course.

* As always, I will not dive into all values we have for this align self property just because again, I think that understanding the core concept is more important than trying out all the values.

### Understanding "flex-grow"

* So what is flex grow, how can we use it?

* If we looka at the image we prepared two equal elements here, the last one's width, the width of 350 pixels and as you might imagine, I had a good reason to do that because I will now show you flex grow with the example of these two items.(Refer : flex54)

```css
.item-5 {
    background: #d3c0b1;
    color: white;
    padding: 10px;
    border: 5px solid black;
    margin: 10px;
    width: 350px;
    flex-grow:1;
}

.item-6 {
    background: #d3c0b1;
    color: white;
    padding: 10px;
    border: 5px solid black;
    margin: 10px;
    width: 350px;
    flex-grow:0;
}
```

*  Keep in mind, the default value for flex grow is 0 for item 6 and of course also for all the other items.so our item right here with flex grow zero doesn't increase the width as soon as it hits its maximum of 350 pixels but if I now inspect the other element, we can see that it has a width of 383 pixels now and this is interesting, right?

* Because just by adding this flex grow value of one, the element used the remaining space available because otherwise if we would increase the width of the page, we would have space available if this would be limited to 350 pixels and simply occupies this space because we added flex grow one right here.

```css
.item-5 {
    background: #d3c0b1;
    color: white;
    padding: 10px;
    border: 5px solid black;
    margin: 10px;
    width: 350px;
    flex-grow:1;
}

.item-6 {
    background: #d3c0b1;
    color: white;
    padding: 10px;
    border: 5px solid black;
    margin: 10px;
    width: 350px;
    flex-grow:4;
}
```
* if we reload now item 6 grow (Refer : flex55)

* because the last item now became the one with the biggest width, Now we can see that this item-5 has a width of 400, this one (item-6) has a width of 556.

* Now how is this calculated?

* Well basically, what happens from a mathematical perspective is the remaining space is calculated first, so if we increase the width, we would have an empty space right here which is not occupied by elements and this space has a certain width, then this space will be divided by five because we have one for this element and four for this element. So we basically have five parts, how this remaining total space should be divided. Well and one part of this remaining space, so one-fifth of it will be applied to our first element right here, so round about 50 pixels and then we have the remaining four-fifths, so round about 200 pixels which will be added to that last item.

* So what we basically see right here is by increasing the width of our page, we had a remaining space of 250 pixels that must be distributed between these two flex grow items right here. As we have flex grow one for this item, one-fifth is applied to this item and four-fifths are applied to this last item, so that's how it works.

```css
.item-5 {
    background: #d3c0b1;
    color: white;
    padding: 10px;
    border: 5px solid black;
    margin: 10px;
    width: 350px;
    flex-grow:1;
}

.item-6 {
    background: #d3c0b1;
    color: white;
    padding: 10px;
    border: 5px solid black;
    margin: 10px;
    width: 350px;
    flex-grow:1;
}
```

* If I now would add flex grow one to this element right here also, like that and if I reload the page again,then you can see that both elements now have a width of round about 425 pixels because this simply means again we have a free space of 250 pixels which will then be split into two parts, one right here and one right there and then equally distributed.

* If i change the flex container's flex-wrap from no-wrap to wrap

```css
.flex-container {
    background: white;
    padding: 10px;
    border: 5px solid black;
    height: 1300px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    /*flex-flow: row wrap;*/
    align-items: center;
    justify-content: flex-start;
    align-content: center;
  }
```

* and reload our page, then nothing happens right here but if I decrease the size, we can see that as soon as we hit the defined width of 350 pixels, the element will be wrapped into the second line and interestingly, this element then occupies the entire space of this second line.(Refer : flex56)

* Now why is this happening?

* as soon as you apply a flex grow which is larger than zero, a single element which will be wrapped into the second line will occupy the entire space as we can see it right here. So this is the last thing about flex grow and let me change flex wrap back to no wrap right here

### Applying "flex-shrink"

* So what is flex shrink?

* with no-wrap flex container if we apply flex-shink

```css
.item-5 {
    background: #d3c0b1;
    color: white;
    padding: 10px;
    border: 5px solid black;
    margin: 10px;
    width: 350px;
    flex-shrink:1;
}
.item-6 {
    background: #d3c0b1;
    color: white;
    padding: 10px;
    border: 5px solid black;
    margin: 10px;
    width: 350px;
    flex-shrink:0;
}
```
* the default value for flex shrink is 1. Now if I change flex shrink right here to zero for example for our last item (item-6), then you can see that now, the element cannot shrink anymore.(Refer : flex57) So as you can see, it only shrinks up to the 350 pixels width we defined but as soon as it hits this value, it cannot decrease its width

* If we add flex shrink to our item right here, this item will not become smaller than the defined width it has. So this is flex shrink 0,

```css
.item-5 {
    background: #d3c0b1;
    color: white;
    padding: 10px;
    border: 5px solid black;
    margin: 10px;
    width: 350px;
    flex-shrink:1;
}
.item-6 {
    background: #d3c0b1;
    color: white;
    padding: 10px;
    border: 5px solid black;
    margin: 10px;
    width: 350px;
    flex-shrink:4;
}
```

* It allows you first to specify if an element is allowed to shrink, as we saw with the default value of 1, all elements can indeed shrink, with a value of zero, you can ensure that this is not possible and if you add a flex shrink value which is different from zero, it first allows us to allow our elements to shrink but if we apply a bigger shrink value to different elements, then this will also define how much more one element is allowed to shrink when comparing it to another element and that's actually what we can do with flex shrink.

### Comparing "flex-basis" vs "width" & "height"

* let me then add this property and the name of this property is flex basis,

* Now what is the flex basis? The flex basis simply defines the size of an element, and now it's really important, depending on the main axis.

* So flex basis is not the width or the height, it can basically be both which is simply dependent on the flex direction and let me say that one more time that's the reason why understanding the concept of main and cross axis and how this is changed is really  crucial right here.

* However at the moment, we have a flex direction of row, so the main axis goes from left to right,

* we also have defined a width. Now with that, if I can now add a value of let's say 200 pixels to our fifth item right here,

```css
.item-5 {
    background: #d3c0b1;
    color: white;
    padding: 10px;
    border: 5px solid black;
    margin: 10px;
    width: 350px;
    flex-basis: 300px;
}
```
* then if the flex basis refers to the main axis and defines the size of our element dependent on the main axis,

* well then if we reload the page, we should see that our element has a width of 296.94 pixels,that's not equal to 300.

* But keep in mind what we learned in the last lecture, we learned that the default value for flex shrink is 1 and this basically allows our element to shrink in here.

* Therefore, as we now are in a view which is kind of smaller than the initial one, as you can see it right here, we don't have these 300 pixels If I now increase the size, you can see we have the 300 or if we go back right here and add back flex shrink of zero and maybe do the same thing for the last item again, because I think it makes things a bit clearer now, like that

```css
.item-5 {
    background: #d3c0b1;
    color: white;
    padding: 10px;
    border: 5px solid black;
    margin: 10px;
    width: 350px;
    flex-shrink:0;
    flex-basis: 300px;
}
.item-6 {
    background: #d3c0b1;
    color: white;
    padding: 10px;
    border: 5px solid black;
    margin: 10px;
    width: 350px;
    flex-shrink:0;
}
```
* if we reload the page, no matter what we do right here, we will have 350 pixels for our last item and 300 pixels as defined by the flex basis for the fifth item.

* So that's what happens right here: if we defined a flex basis and our flex direction is set to row, the flex basis will overwrite this default width property.

* If we use the default value for flex basis which would be auto, this one right here, it will simply apply the width right here, as we can see, like that it's 350 pixels because flex basis as I said will fallback to the width value right here.

* The problem is that while I'm saying it will fallback to the width value, this is only correct because the main axis is now from left to right and therefore equal to the width.

* Now let's have a look at what happens if we change the flex direction to column and with that, we change our main axis of course which is now from top to bottom.

```css
.flex-container {
    background: white;
    padding: 10px;
    border: 5px solid black;
    height: 1300px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    /*flex-flow: row wrap;*/
    align-items: center;
    justify-content: flex-start;
    align-content: center;
  }

  .item-5 {
    background: #d3c0b1;
    color: white;
    padding: 10px;
    border: 5px solid black;
    margin: 10px;
    width: 350px;
    flex-shrink:0;
    flex-basis: auto;
}
```
* So if we save that, keep in mind, we have a width defined but no height defined and the flex basis is auto,

* this one right here has of course the width applied of 350 pixels as defined and the width is just as high as we need it for the content to be displayed

```css
.item-5 {
    background: #d3c0b1;
    color: white;
    padding: 10px;
    border: 5px solid black;
    margin: 10px;
    width: 350px;
    height:200px;
    flex-shrink:0;
    flex-basis: auto;
}
```
* but this means that if I now add a height right here like that, let's say of 200 pixels, like that and reload the page, then you can see that our fifth item now exactly has this height (200px) because flex basis is set to auto.

* So the flex basis will fallback to the default value set for the main axis and that's important. If the main axis goes from left to right, this will be the width right here, if the main axis goes from top to bottom, then this will be the height.

* At the same time, this also means that if we define a value for the flex basis, let's say of 300 pixels now, like that, this value will be applied because the fallback only comes into play if we set flex basis to auto. If we define the flex basis, it will overwrite, as we can see right here, either the height if the main axis goes from top to bottom or the width if the main axis goes from left to right or right to left of course and that's actually the basic concept of flex basis.

* Some other important things about flex basis: we can also use values like percentages for example, let's say we use 10% right here.

```css
.flex-container {
    background: white;
    padding: 10px;
    border: 5px solid black;
    height: 1300px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    /*flex-flow: row wrap;*/
    align-items: center;
    justify-content: flex-start;
    align-content: center;
  }
.item-5 {
    background: #d3c0b1;
    color: white;
    padding: 10px;
    border: 5px solid black;
    margin: 10px;
    width: 350px;
    flex-shrink:0;
    flex-basis: 10%;
}
```

* So that's also what you can apply to the flex basis. So using percentage values for the flex basis is also possible.

* Now let me summarize what we learned about the flex basis now.

* The important thing is that the flex basis always refers to the main axis. If flex basis is set to auto, the fallback will either be the width if the main axis goes from left to right or right to left or the fallback will be the height in case the main axis goes from top to bottom or bottom to top.That's the first thing that we have to keep in mind.

* The second thing we have to keep in mind is that the flex basis property and all these properties we saw right here can only be applied to flex items. Therefore, we need a parent element which is a flex container and which has the display flex or inline flex value applied.

* And the last important information is that we also have a shorthand for the properties we just talked about because instead of writing flex grow, flex shrink and flex basis, we could simply say that we write flex,

```css
.item-5 {
    background: #d3c0b1;
    color: white;
    padding: 10px;
    border: 5px solid black;
    margin: 10px;
    width: 350px;
    flex: 0 1 auto; /*  grow(default0) shrink(default1) basis(default auto) */
}
```

### Dive Deeper into Selected Topics

Flexbox and browser compatibility: https://caniuse.com/#search=flexbox
The theory behind flexbox: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox
The flex container: https://developer.mozilla.org/en-US/docs/Glossary/Flex_Container