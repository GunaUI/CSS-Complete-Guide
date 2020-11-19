# CSS-Complete-Guide

## Section 15 : Transforming Elements with CSS Transforms

### Rotating Elements and setting transform-origin

* So back in our code, let's go into the packages folder and there in the packages.css file and there, we have this package badge class or this class selector. Now right now, the badge is positioned with position absolute and top right zero, it has a margin of 1.2rem.

* Now this is no transformation, transformations are applied with a special property, the transform property.

* Now we got a couple of key transformations and that are moving the element, which we of course also can do with the help of top right and for non-absolute elements, we also can move an element with the margin for example but this actually is hardware accelerated and it keeps the element in the document flow.Well, not for this element because position absolute but for a normal element it would.

* So moving the element with transformations is always a good idea if you really just want to move it visually.

* I want to start with a different transformation though, not with moving the element but with rotating and for that, let's use rotateZ

```css
.package__badge {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    font-size: 0.8rem;
    color: white;
    background: #ff5454;
    padding: 0.5rem;
    transform: rotateZ(45deg); /* transform */ 
    /* transform: 1rem 1rem */
    /* transform: 50% 50% */
    /* transform: center (default)*/
}
```
* and we save that file, let's reload that page. Now we can see that our badge indeed is rotated by 45 degrees.(Refer: transform1) Important, it rotates around the center of the element.

* You can change that though, you can change it with the help of the transform origin property,that's the second important property when it comes to normal 2D transformations.By default, this is set to center but you can also set it to a value like left or left top and if you would set it to left top for example.

```css
.package__badge {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    font-size: 0.8rem;
    color: white;
    background: #ff5454;
    padding: 0.5rem;
    transform: rotateZ(45deg);
    transform-origin: left top; /* transform-origin */
}
```
* if I reload, now it actually seems like it just moved down but what actually happened is this top left corner,it stayed in its place. (Refer: transform2)

* so clockwise around this corner with positive degrees. If we enter negative degrees, it goes in the other direction.

* You can also enter a value with pixels or rem to simply move the origin into the element; 0, 0 would be the same as top left by the way

* but you can also enter something like 1rem, 1rem to move 1rem to the right and 1rem down from the top left corner or a percentage value; 50%, 50% would be equal the center which is the default and therefore doesn't need to be set but of course you can also specify something like 25%, 50% to move it in 25% and down 50%, then the origin would be somewhere where the c is probably.

### Using Rotate and Translate

* Now we also want to move the element and of course we can do this with top and right, it's an absolute element.If we set top to let's say 1rem here, we move it down by 1rem, therefore it went down a little bit.

* Now nothing wrong with using top and right, however if the element wasn't positioned absolute but instead statically like a normal element, we couldn't use that, we could then use the margin to kind of move it in a hacky way or set the position to relative to use top and right again

* but there actually is a better way if you really just want to move it for some visual effects and that is the translate property or the translate function to be precise on the transform property.

* There, you also get a couple of different values and we'll focus on x and y for now, translateZ will become important for 3D transformations and translateX allows you to move the element on the x-axis. Here you can enter rem, pixel, em or percentages, so any normal units and it will move the element to the right by the value you enter here.

```css
.package__badge {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    font-size: 0.8rem;
    color: white;
    background: #ff5454;
    padding: 0.5rem;
    transform: rotateZ(45deg) translateX(10rem);
    transform-origin: left top;
}
```
* So if I enter 1rem here, if I now reload, the element moves to the right a little bit, this becomes even clearer if I enter a higher value like 10rem here. If we entered 10rem into translateX, now it's moved quite a bit to the right. (Refer : transform3) It also moved down a bit and that's happening because we rotated the element, so it's moving diagonally.

* You have to think of translateX as working on the x-axis which goes through the center of this box. So right now, the x-axis isn't a normal horizontal line, it's a diagonal from the top left to bottom right so to say. (Refer : transform4)

* If we remove the rotation, we would have a horizontal x-axis again.So this is important to keep in mind for understanding how translateX works if you also apply a rotation.

* Now I don't want to move it by 10rem anyways, I want to move it by 1 and I also want to move it on the y-axis maybe, so let's add translateY here, also 1rem and let's see where we end up then.

```css
.package__badge {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    font-size: 0.8rem;
    color: white;
    background: #ff5454;
    padding: 0.5rem;
    transform: rotateZ(45deg) translateX(1rem) translateY(1rem); 
    transform-origin: left top;
}
```
* let's see where we end up then. If we enter this, it looks like that. (Refer : transform5)

* Now one thing I want to change before I continue moving it around, I want to increase the width of that element, I want to increase the width so that we can center the text and get some excess space to the left and to the right which we can actually cut off once it's positioned correctly and once that extra space goes beyond the boundaries of that package box. The reason for this is that once we cut it off, it'll look like a really nice badge on this box.

* So for this, not related to transformations but useful here, I'll set a width of 12rem and add text align center to that badge. With that in place, if I save and reload this, now this is our badge and now we can try to position it in the way we want to position it. (Refer : transform6)

* So for that, I'll go back to translateX and translateY and let's actually try a negative value for translateY and 3.5rem for translateX.This should do the trick I believe (Refer : transform7)

```css
.package__badge {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    font-size: 0.8rem;
    color: white;
    background: #ff5454;
    padding: 0.5rem;
    transform: rotateZ(45deg) translateX(3.5rem) translateY(-1rem);
    transform-origin: left top;
    width:12rem;
    text-align: center;
}
```

* and now with that, we want to cut it off which we can do, non-transformation related, by simply going to our package element, so to the package selector and by adding overflow hidden there,

```css
.package {
    width: 80%;
    margin: 1rem 0;
    border: 4px solid #0e4f1f;
    border-left: none;
    position: relative;
    overflow: hidden;
}
```
* this will make sure that any elements that go beyond the boundaries of the package box will be cropped. (Refer: transform8) so with rotating the element and with moving it 

* why are we moving it with translate instead of top and right?

* You could use top and right, translateX and Y also get hardware acceleration though and therefore, are a good tool if you just want to visually reposition the element, so it's in general a good tool for that final finetuning to fit the element into the position you want to fit it to, especially when you're also working with other transformations like rotate.

* Important to keep in mind, translateX and Y, the axis changes when we rotate the element, the axis always goes through the center of that badge, at least if transform origin is set to center. 

### Working with "skew" and "scale"

* We had a look at rotate and translate thus far to rotate or move the element, we also get two other ways of transforming an element,

* I want to transform the image container, which should transform the image together with itself. So here, to the testimonial image container  I'll also add the transform property. Now we saw that we can use the rotate and translate functions but now I actually want to skew it,

```css
.testimonial__image-container {
    width: 100%;
    max-width: 40rem;
    box-shadow: 3px 3px 5px 3px rgba(0,0,0,0.3);
    transform: skewX(20deg);
  }
```
* let's just start with skewX and save that and reload and now you see that our image is skewed to the left, so it's like someone pulled our corners and pulled them to the left. (transform9) This is the case for the image container and the image itself.

* If we now also specify skewY, let's say also 20 degrees here and please note you enter degrees here as a value, not pixel or something like that, it's degrees and now you reload, now it's also skewed too on the y-axis. (Refer : transform10)

```css
.testimonial__image-container {
    width: 100%;
    max-width: 40rem;
    box-shadow: 3px 3px 5px 3px rgba(0,0,0,0.3);
    transform: skewX(20deg) skewY(20deg);
  }
```

* This becomes even clearer if I temporarily remove skewX here, (Refer : transform11)

```css
.testimonial__image-container {
    width: 100%;
    max-width: 40rem;
    box-shadow: 3px 3px 5px 3px rgba(0,0,0,0.3);
    transform:  skewY(20deg); /*skewX = skew(20deg); skewX and Y = skew(20deg, 20deg);*/
  }
```
* So for skewX, someone pulled it to the left so to say, for skewY, someone pulls it up and if you enter negative values, it would be pulled would to the right or pulled down

* so the element transforms itself into a diamond form, into a rumbus. Now I don't want to use skewY here, I want to use skewX and We can also use just skew here, if we only enter one value, that'll be the X value, you could enter a Y value here too but I just want to have this horizontal skewness.

* however the image looks really strange if it's skewed like this. It would be great if the container gets skewed but the image actually stays the way it is

* Now to do that, we can go to the testimonial image selector, which targets the image itself and there, we can also enter transform and enter skew -20 degree, so with that, we're basically offsetting the skewness of the container. 

```css
  .testimonial__image-container {
    width: 100%;
    max-width: 40rem;
    box-shadow: 3px 3px 5px 3px rgba(0,0,0,0.3);
    transform: skew(20deg)
  }

  .testimonial__image {
    width: 100%;
    vertical-align: top;
    transform: skew(-20deg)
  }
```

*  If we do that and we reload, now we can see the image does not get skewed or basically it does get skewed but we skew it in the opposite direction and hence we reset the skewness applied by the container (Refer : transform12)

* To get that final look, we need to do at least two more things; first of all, not related to transformation but often used along with it, let's use overflow hidden again on the testimonial image container.

```css
  .testimonial__image-container {
    width: 100%;
    max-width: 40rem;
    box-shadow: 3px 3px 5px 3px rgba(0,0,0,0.3);
    transform: skew(20deg);
    overflow: hidden;
  }
```

* This is applied to ensure that the parts where the image goes outside of the container now are cropped. So if I reload, it looks better (Refer : transform13)

* but we have this whitespace in a bottom right corner and top left corner 

* So what we can do here is we can increase the size of the image. So let's go back to our image transformation function where we have skewness of -20 degree and let's dive into the last transformation function we have. We saw rotate, translate and skew, now let's have a look at scale.

* Scale again allows you to scale the image on three axis, X allows you to basically increase the width of the image and Y allows you to increase the height.

```css
  .testimonial__image-container {
    width: 100%;
    max-width: 40rem;
    box-shadow: 3px 3px 5px 3px rgba(0,0,0,0.3);
    transform: skew(20deg) scaleX(2); /* this means it is twice the normal size. */
    overflow: hidden;
  }
```
* Refer : transform14 - this means it is twice the normal size. So if we save that and we reload, now it's strongly distorted because we stretch it on the x-axis, this is what scale effectively does, it doesn't keep the aspect ratio.

*  So therefore, we should also set scaleY and we can set both if we just enter scale. 

```css
  .testimonial__image-container {
    width: 100%;
    max-width: 40rem;
    box-shadow: 3px 3px 5px 3px rgba(0,0,0,0.3);
    transform: skew(20deg) scale(2); /* this means it is twice the normal size. */
    overflow: hidden;
  }
```
* Scale with just one value scales it on both axis, so on the x and on the y-axis. So if we enter scale too, like this, now this looks better, it's a bit too big though, (refer : transform15) and now, this looks good in my opinion. Now we can see that our images look good and they are now in their newly shaped diamond form.

###  Applying Transformation Shorthands

* Time for a short summary of what we learned thus far. We learned about that transform property and that we can control the origin of the transformation with the transform origin property, we can define around which part of the box it should rotate itself, where the axis should go through and so on

* we learned about the four key transform functions you have; rotate, translate, scale and skew. Now you saw that there are often skewX, skewY and just skew functions and the same for scale, translate and rotate, now you can use the shorthands of course.

*  For rotate if we remove the Z, let's go back to the packages page, we actually see we get the same result as before.

```css
.package__badge {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    font-size: 0.8rem;
    color: white;
    background: #ff5454;
    padding: 0.5rem;
    /* transform: rotateZ(45deg) translateX(3.5rem) translateY(-1rem); */
    transform: rotate(45deg) translateX(3.5rem) translateY(-1rem);
    transform-origin: left top;
    width:12rem;
    text-align: center;
}
```
* . For rotate if we remove the Z, let's go back to the packages page, we actually see we get the same result as before. So rotate, just like that, by default rotates around the z-axis.

* So this is convenient, since we most of the time want to rotate around this axis, most of the time we want to have that 2D transformation. 

* Translate, if we don't enter anything else, will allow us to enter one or two values. If we only enter one, like this, you see it doesn't look that bad but it's now only translating on the x-axis, the second value is what we need to enter to translate on the y-axis.

```css
.package__badge {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    font-size: 0.8rem;
    color: white;
    background: #ff5454;
    padding: 0.5rem;
    /* transform: rotateZ(45deg) translateX(3.5rem) translateY(-1rem); */
    /* transform: rotate(45deg) translateX(3.5rem) translateY(-1rem); */
    transform: rotate(45deg) translate(3.5rem, -1rem);
    transform-origin: left top;
    width:12rem;
    text-align: center;
}
```
* So here, if we also enter -1rem, then we have the same as before, we translate on the x-axis and on the y-axis.

* for skew, we're already using that function where we just skew on the x-axis, the second value would then be the y-axis as you learned 

* for scale, there if we enter one value, we actually scale on both X and Y at the same time. If you want to scale either of the two, we can use scaleX and scaleY. This is how you can work with these transform functions and that's really all that's to transformations.

* It's always useful to use these if you want to change elements just as you saw it here. Translate is useful, also together with animations but highly useful are things like rotate, skew and scale.

### Rotating Elements in 3 Dimensions

* Now that we had a detailed look at 2D transformations, which to be honest are the transformations you'll probably use the most often,let's have a look at 3D transformations now.

* for this, attached to this video, you'll find a very simple, prepared, demo theory project where we just got a red box in a container with a black border, this is the markup code for it.

```css
.container{
    margin: 150px auto;
    border: 1px solid black;
    width: 200px;
    height: 200px;
}

.box {
    background: red;
    width: 100%;
    height: 100%;
}
```
* Now I want you transform this box in a three dimensional way and for that, we still use the transform property

* but now, let's for example look into rotating this again but now not around the z-axis but actually around the different axis because the axis will become important here.

* If we have a look at the three axes we have, we got X, Y and Z, how can we then rotate elements around these? We can rotate an element around the x-axis with rotateX and now the important part here is the axis will be in the center of this element, at least if transform origin and is set to center and it spins itself around this x-axis. So here, this will actually rotate the element towards or away from you so to say.

* For Y, it also rotates around the y-axis, so it spins around that y-axis, this is how you can think about that.

* And for Z, it spins around the z-axis but the z-axis kind of pierces the element coming from the back and going through the middle of it, this is why this leads to a 2D transformation even though you might think that for Z, it should be highly three dimensional because that z-axis is that third dimension but if you keep in mind that that axis kind of pierces the element and the element spins around that axis, then it makes way more sense. (refer: transform16)

* So rotateY and X are actually the two functions that we can use to create 3D rotations. For other functions, it's different but for rotate, this is how it is, so let's use them.

```css
.box {
    background: red;
    width: 100%;
    height: 100%;
    transform: rotateX(30deg); /* transform: rotateX()*/
}
```
* If we save that, let's reload our page, now it looks like as if the box simply shrank (Refer : transform17) but what's actually happening here is it's becoming smaller because it's rotating towards you.

* Lets add text with center alignment...

* Now if we reload, we got animate here as a text, now this becomes even clearer if we actually increase the rotation to let's say 80 degree. Now this is almost invisible and if we increase this to 90 degree, it's totally invisible simply because it's now right at the point where it's about to flip on that x-axis.

```css
.box {
    background: red;
    width: 100%;
    height: 100%;
    transform: rotateX(100deg); 
    color: white;
    font-family: sans-serif;
    text-align: center;
}
```
* So if we enter 100 degrees here, then it just flipped which is the reason why animate is now at the bottom, it flipped around the axis now.This should prove that we're talking about a 3D transformation here.So now with that, we get a basic 3D transformation,

* let's now also add rotateY and let's set this to 30 degrees for example. Now we're also rotating around the y-axis, which is the reason why if you reload, it looks like that, now it's rotating towards you and around the y-axis. (refer: transform18)

```css
.box {
    background: red;
    width: 100%;
    height: 100%;
    transform: rotateX(100deg) rotateY(30deg); 
    color: white;
    font-family: sans-serif;
    text-align: center;
}
```

* Now this effect becomes clearer if we reset rotateX to 0 degrees for now, so that we get no X rotation.

```css
.box {
    background: red;
    width: 100%;
    height: 100%;
    transform: rotateX(0deg) rotateY(30deg); 
    color: white;
    font-family: sans-serif;
    text-align: center;
}
```

* Now you can see, it's again looking a bit squeezed here,(Refer: transform19)

* if we increase rotateY to 80 degrees, so right before it flips, now you see it's almost impossible to read because now it's almost rotated around the y-axis. (Refer: transform20 )

```css
.box {
    background: red;
    width: 100%;
    height: 100%;
    transform: rotateX(0deg) rotateY(80deg); 
    color: white;
    font-family: sans-serif;
    text-align: center;
}
```
### Understanding the "perspective" Property

* We get our basic transformations set up, let's now change the perspective from which we're looking at this.To change the perspective, we've got a special function we can use on transform, perspective.

```css
.box {
    background: red;
    width: 100%;
    height: 100%;
    transform: rotateX(0deg) rotateY(80deg); 
    color: white;
    font-family: sans-serif;
    text-align: center;
}
```
* To change the perspective, we've got a special function we can use on transform, perspective.

```css
.box {
    background: red;
    width: 100%;
    height: 100%;
    transform: perspective(100px) rotateX(0deg) rotateY(80deg); 
    color: white;
    font-family: sans-serif;
    text-align: center;
}
```

* If I enter 100 pixels and reload, now you see this looks as if we're sitting next to the element (Refer: transform21) and the reason for this is, the smaller perspective is, so for example one pixel, the closer you are to the element.

```css
.box {
    background: red;
    width: 100%;
    height: 100%;
    transform: perspective(1px) rotateX(0deg) rotateY(80deg); 
    color: white;
    font-family: sans-serif;
    text-align: center;
}
```
* so for example one pixel, the closer you are to the element. So for one pixel, we're right inside of the elements so to say. (Refer: transform22)

* So for one pixel, we're right inside of the elements so to say. If we increase this to 1000 pixels, then we're
really far away but still closer too than we were before. (Refer : transform23)

* So now we can actually see this 3D effect a bit better because it now goes outside of its surrounding box and therefore it creates a 3D look.

* Instead of using the perspective function, you can also use the perspective property by the way. 

```css
.box {
    background: red;
    width: 100%;
    height: 100%;
    transform: rotateX(0deg) rotateY(80deg); 
    perspective: 1000px;
    color: white;
    font-family: sans-serif;
    text-align: center;
}
```
*  with the perspective property and if you now reload, you don't see an effect, do you? The reason for this is that the perspective property actually has to be applied to the parent element,the advantage then is that you get the same perspective on all child elements.

* If you use perspective function, then each element where you apply it has its own perspective, even if they sit next to each other, this can leads to strange effects. So on the container if we now reload, we're back to where we were.

```css
.container{
    margin: 150px auto;
    border: 1px solid black;
    width: 200px;
    height: 200px;
    perspective: 1000px;
}
.box {
    background: red;
    width: 100%;
    height: 100%;
    transform: rotateX(0deg) rotateY(80deg); 
    color: white;
    font-family: sans-serif;
    text-align: center;
}
```
* So on the container if we now reload, we're back to where we were.(Refer : transform23) 

* Now we're looking at all child elements of the container, of which we only have one but if it were more, it would affect all, we're looking at all elements from the same perspective.

* Now you can also change the angle with perspective origin.

```css
.container{
    margin: 150px auto;
    border: 1px solid black;
    width: 200px;
    height: 200px;
    perspective: 1000px;
    perspective-origin:right; /* perspective-origin */
}
```
* for example, if you enter right here and you reload, now it looks as if it rotated a bit more but actually our perspective just moved to the right,(Refer : transform24) so we're looking at this from a right angle now and on the other hand if we enter left here and we reload, now we're further on the left.

* You can also enter other values, like 100 pixels here, this moves the perspective center to the right by 100 pixels.

```css
.container{
    margin: 150px auto;
    border: 1px solid black;
    width: 200px;
    height: 200px;
    perspective: 1000px;
    perspective-origin:100px; 
}
```
* So if you now reload, you're further to the right and if you enter an even bigger value, like 500 pixels here and you then reload, now you're even more on the right.(Refer : transform25) So this can be really useful to make sure that you look at the rotated element from the right perspective.

* And with that said, it now also becomes easier to see both rotateX and y in action at the same time.

* If we now rotate x by 30 degrees for example and we keep our perspective on the container element, now we can reload and now we actually see both transformations in effect again, it's rotating around the y-axis and around the x-axis at the same time. (Refer : transform26)

```css
.box {
    background: red;
    width: 100%;
    height: 100%;
    transform: rotateX(30deg) rotateY(80deg); 
    color: white;
    font-family: sans-serif;
    text-align: center;
}
```
* We can now also introduce rotateZ to complete it and enter 30 degrees here and now it's also rotating around that.

```css
.box {
    background: red;
    width: 100%;
    height: 100%;
    transform: rotateX(30deg) rotateY(80deg) rotateZ(30deg); 
    color: white;
    font-family: sans-serif;
    text-align: center;
}
```
* and now it's also rotating around that.Now it can be hard to see which rotation has which effect but in the end, you can always tweak and play around with the settings until you got your desired effect.

### Moving Elements along the Z-Axis with "translateZ"

* Now that we get these basics set, let me remove all rotations but the Y rotation so that we're back to an easier to understand 3D transformation,

```css
.box {
    background: red;
    width: 100%;
    height: 100%;
    transform: rotateY(30deg); 
    color: white;
    font-family: sans-serif;
    text-align: center;
}
```
* and let me add a second box. I'll simply duplicate that box and make sure it also is inside of the container and I'll give it a label of animate two, the first one receives animate one and here, I will name this box two and I'll change the selector, the class of the first one to box one.

```html
<div class="container">
    <div class="box1">
        Animate 1
    </div>
    <div class="box2">
        Animate 2
    </div>
</div>
```
* In the CSS file, I'll


```css
.box1 {
    background: red;
    width: 100%;
    height: 100%;
    transform: rotateY(30deg); 
    color: white;
    font-family: sans-serif;
    text-align: center;
}
.box1 {
    background: blue;
    width: 100%;
    height: 100%;
    color: white;
    font-family: sans-serif;
    text-align: center;
}
```
* Now if I save that and we reload the page, we actually see this result.(Refer : transform27)

* Now the blue box is not inside of the container box, simply because we restrict the size of the container box and there already is one element with width 100%, height 100% in there.

* Let's quickly fix that by giving this a position of relative, so the container has this position and both boxes will now receive a position of absolute,

```css
.container{
    position: relative;
    margin: 150px auto;
    border: 1px solid black;
    width: 200px;
    height: 200px;
    perspective: 1000px;
    perspective-origin:100px; 
}
.box1 {
    position: absolute;
    background: red;
    width: 100%;
    height: 100%;
    transform: rotateY(30deg); 
    color: white;
    font-family: sans-serif;
    text-align: center;
}
.box2 {
    position: absolute;
    background: blue;
    width: 100%;
    height: 100%;
    color: white;
    font-family: sans-serif;
    text-align: center;
}
```
* so the container has this position and both boxes will now receive a position of absolute, now if we reload, both are inside of that box. (Refer: transform28)

* Now let's also transform the blue box here by re-adding a transforme property to it and let's give it a transform property of translateX 1rem for now. 

```css
.box2 {
    position: absolute;
    background: blue;
    width: 100%;
    height: 100%;
    color: white;
    font-family: sans-serif;
    text-align: center;
    transform: translateX(1rem);
}
```
* If we now save that and we then reload, it simply moved to the right a bit,(Refer : transform29)

* Now let's apply translateZ then to also see that in effect. We use translateY and X thus far, translateZ is now the 3D transformation for moving the element.

* Now it can be confusing, since for rotating, we used Y and X but if you keep the axis set up in mind, it makes sense that translating the element, so moving the element on the z-axis, which is the axis coming out of the screen so to say, that moving the element on that axis actually is the one that creates a 3D effect.

```css
.box2 {
    position: absolute;
    background: blue;
    width: 100%;
    height: 100%;
    color: white;
    font-family: sans-serif;
    text-align: center;
    transform: translateX(1rem) translateZ(10rem);
}
```
*  let's save that and let's reload and now you see it moved towards us,it became bigger because due to our perspective, moving an element towards us makes it bigger.(Refer : transform30)

* if we enter -100rem here and we then reload, now it's moving back into that box, further away.

```css
.box2 {
    position: absolute;
    background: blue;
    width: 100%;
    height: 100%;
    color: white;
    font-family: sans-serif;
    text-align: center;
    transform: translateX(1rem) translateZ(-100rem);
}
```

* it's really small and it looks like it's outside of the box (Refer : transform31)

* but actually even if I remove translateX, it stays inside of the box. You can just think of that box as extending as a 3D space into that 3D area behind it, so it's actually moved further into the box so to say and since we have a perspective coming from the right, we look at this from the right side.

* This should become clearer if I reset my perspective origin to center for now,

```css
.container{
    position: relative;
    margin: 150px auto;
    border: 1px solid black;
    width: 200px;
    height: 200px;
    perspective: 1000px;
    perspective-origin: centre; 
}
.box1 {
    position: absolute;
    background: red;
    width: 100%;
    height: 100%;
    transform: rotateY(30deg); 
    color: white;
    font-family: sans-serif;
    text-align: center;
}
.box2 {
    position: absolute;
    background: blue;
    width: 100%;
    height: 100%;
    color: white;
    font-family: sans-serif;
    text-align: center;
    transform: translateZ(-100rem);
}
```

* if I then reload the page, now you can see it's still in the box, just moved further into the back. (Refer : transform32)

* It doesn't actually go behind our red box simply because the Z-index still applies when it comes to how these elements stack, they don't actually intersect

* Now, let me change that perspective back to 500pixel again and let me now show you something interesting

```css
.container{
    position: relative;
    margin: 150px auto;
    border: 1px solid black;
    width: 200px;
    height: 200px;
    perspective: 1000px;
    perspective-origin: 500px; 
}
```

### Rotating the Container with "transform style"

* Thus far we transformed the elements in our container, let's now transform the container itself. Let's transform it by rotating it, by rotating it around the y-axis let's say. Let's rotate it by 45 degrees,

```css
.container{
    position: relative;
    margin: 150px auto;
    border: 1px solid black;
    width: 200px;
    height: 200px;
    perspective: 1000px;
    perspective-origin: 500px; 
    transform: rotateY(45deg);
}
```

* let's save that, so I'm on the container now. Now if I reload, you see the elements moved a bit because the parent container also rotates. (Refer : transform33)

* If I rotate the container by 90 degrees, so we shouldn't see the container and I reload the page, everything is hidden. Now of course, logically this doesn't make a lot of sense because even if the container is rotated by 90 degrees, since we also rotate the red box and move the blue box a little bit to the back, we should definitely see these two elements still because they actually have their own 3D space inside of the container.

* The default behavior however flattens this 3D space and you can change this behavior with another property which you add to the container, it's called transform style.

* The default value is flat, which means the container rotates and the elements move with the container but they're actually in a flat 3D space in there, so the overall container is seen as one flat object.

```css
.container{
    position: relative;
    margin: 150px auto;
    border: 1px solid black;
    width: 200px;
    height: 200px;
    perspective: 1000px;
    perspective-origin: 500px; 
    transform: rotateY(90deg);
    transform-style: flat; /* flat default value*/
}
```
* However, you can change that value to preserve-3D. With this value,

```css
.container{
    position: relative;
    margin: 150px auto;
    border: 1px solid black;
    width: 200px;
    height: 200px;
    perspective: 1000px;
    perspective-origin: 500px; 
    transform: rotateY(90deg);
    transform-style: preserve-3D; /* flat default value*/
}
```

* the 3D position of the child elements is preserved. So now if you reload, you can actually still see the red box, now the blue box is something we can't see because since we only translate but don't rotate it, it has the same angle as the parent element, which right now is rotated by 90 degree and therefore is perfectly invisible.

* If we change this to 95 again and we reload, then we can see the border of our container again, we don't see the blue box.The reason for this is that keep in mind, the blue element is in front of the red element and since we're flipping everything here, in front now actually means in the back. (Refer : transform34)

```css
.container{
    position: relative;
    margin: 150px auto;
    border: 1px solid black;
    width: 200px;
    height: 200px;
    perspective: 1000px;
    perspective-origin: 500px; 
    transform: rotateY(95deg);
    transform-style: preserve-3D; /* flat default value*/
}
```

* If we increase this to 130 degree, we flip this element further, then we'll soon reach the point where we can see the blue box again.

```css
.container{
    position: relative;
    margin: 150px auto;
    border: 1px solid black;
    width: 200px;
    height: 200px;
    perspective: 1000px;
    perspective-origin: 500px; 
    transform: rotateY(130deg);
    transform-style: preserve-3D; 
}
```
* Of course one way to see it right now would be to give the red box a z-index of one so that it sits in front of the blue box and with that if we reload and we also decrease that translateZ value of the blue box let's say -10, then we can see it. (Refer transform35)

```css
.box1 {
    position: absolute;
    background: red;
    width: 100%;
    height: 100%;
    transform: rotateY(30deg); 
    color: white;
    font-family: sans-serif;
    text-align: center;
    z-index: 1;
}

.box2 {
    position: absolute;
    background: blue;
    width: 100%;
    height: 100%;
    color: white;
    font-family: sans-serif;
    text-align: center;
    transform: translateZ(-10rem);
}
```

* With a higher translateZ value, we couldn't see it because that actually also moved it out of the screen because again, we're flipping this, so a negative translateZ value now actually leads to this element moving towards us or towards us and out of the screen to the left to be precise and therefore a smaller distance moves it closer to the container, closer to the red box and the red box is behind the blue box even though it has a z-index because we're flipping everything as you can see by the reversed text (Refer : transform36)

* So 3D transformations can really mess with your head but also allow you to create really powerful visual effects on your page.

### Flipping Elements & "backface-visibility"

* There's one last thing with fliping effects like this one, where we're effectively flipping a box.

* Right now, we see the back of the box like this. We can change that behavior by going to the element, for example box one, the red box and adding backface visibility here, now we can hide the backface with hidden. 

```css
.box1 {
    position: absolute;
    background: red;
    width: 100%;
    height: 100%;
    transform: rotateY(30deg); 
    color: white;
    font-family: sans-serif;
    text-align: center;
    z-index: 1;
    backface-visibility: hidden;
}
```

*  If we do that and we now reload, you see it's gone, it's gone because we're telling it 'hey if you're flipping and you're seeing your back, please don't show anything'. (Refer : transform37) We can also set backface visibility to visible,that's the alternative. Now that's the default also, so we don't need to set this,

* it's just something I want to bring to your attention, if you want to hide in the back of an element whilst it's flipping, use backface visibility hidden.Now all these properties do have a different level of browser support,