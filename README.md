# CSS-Complete-Guide

## Section 12 : Working with Text and Fonts

###  Comparing Generic Families & Font Families

* So we have generic families and we have font families, what's the difference?

* Well a generic family is something like this, serif or sans-serif, we also have cursive.We also have Monospace and we have Fantasy,I made Fantasy a bit gray because it's not the most usual generic family you could use, we'll still have a look at it though (Refer Font1)

* but the thing is that these generic families are a kind of a headline which therefore define a specific attribute of the fonts that are inside this generic family.

* For example, the cursive generic family includes fonts which are cursive and by saying include, this brings us to the font families because that's actually more specific and these are actually the different fonts we have inside our generic family.(Refer Font1)

* For serif for example, this could be Times New Roman or Georgia, so both are part of this generic family, the serif family and as you can see in the different font families, Times New Roman and Georgia both have these serifs in them but they look different though.(Refer Font1)

* We also have other font families which are part of the sans-serif generic family, this could be Helvetica or Verdana, these are of course all just examples, we have a lot more font families for all our generic families. The thing is that for these fonts, both don't have any serifs. Again as the generic family indicates and that's this general attribute or characteristic these font families which are part of a specific generic family are sharing.(Refer Font1)

* For cursive, as we can imagine, we have this cursive style, well probably not the most beautiful one but still, this is for example Brush Script and Mistral(Refer Font1)

* we have Monospace, so we have Courier New and Lucida Bright(Refer Font1)

* and for Fantasy, I didn't get any font families, as I said, it's a pretty uncommon generic family as I would say. Nevertheless, we'll also cover that throughout this module.

* We have generic families which kind of define a specific core attribute and inside these generic families, we have multiple font families which share this common attribute of course but nevertheless, look different.

###  Understanding the Browser Settings

* I would like to show you that you can find or where you can find the generic families and the font families in your browser.

* if we simply go to our preferences right here and then go down to this customize fonts menu

* then we can see some interesting things actually because we can see that we have a standard font which is the font that will be applied as a standard by the browser and inside this font, we can select different font families.

* These are not generic families, these are already font families. OK, so that's what we can see, that's the standard behavior,

* we will see how we can change that, how we can impact that, we'll have a look at that throughout the module.

* Alternative to standard font, we can also see that we have a serif font right here.This is a generic family now, for this generic family,we can now also select a font family.(Refer : font2) Important, his list right here also includes font families which are not part of the sans-serif generic family, for example Verdana, we saw that this is actually a sans-serif font. However, you can select the font you want to have for your serif font family right here.

* We've got the same thing for sans-serif right here and we got the fixed width font generic family which is basically the Monospace family we saw on the slide. However, this is what we can see in the browser, so we have these different fonts available right here.

* but the actual question is now what will actually be displayed, which font will be used by the browser?

* Because we can see that we can select generic families right here, we can also select font families, we have the standard font, so what's the font that will be displayed in the end.

* Let's have a look at that because we have multiple options to have an impact on that because the starting point is of course this one, we are basically browsing onto our website and want to display it.

* Now the default behavior, the one right here is basically defined by the browser, that's what we saw, this is this standard font and what I mean by default behavior?

* Well the default behavior simply means that we didn't specify any kind of font family in our CSS code because with that, the browser will simply choose the standard font that we applied and use the font family that is selected in the browser, that's the default behavior that we have.

* Now one alternative we have is this one, we can define a generic family in our CSS code right here. With that, we could use one of the other options we saw because we had this standard font, this was option one but then we could also see that we could choose different font families for the different generic families in the browser settings and with that, we could tell the browser to please choose a specific generic family, sans-serif for example and then select the font family that was chosen in the browser settings,that's the second option we have. (Refer : font3)

* The third option will be that we specify a font family, in contrast to that, this will not be influenced directly by the browser settings because in the browser settings, we have different font families available but we could also select a font family in our CSS code which is not available by default in the browsers of our users.(Refer : font3)

* Because of that, we have three different options again, where to retrieve these font families from. (Refer : font3)

* The first option would be this one, the font family we specify in the CSS code is saved locally on the user's computer.(Refer : font3)

* Now as you can already imagine, this can lead to a lot of problems because the user's computer is a local computer and therefore, we cannot control which font families are installed, which ones are not, so the chances are quite high that our website, at least the fonts in our website will look different for a lot of users.We'll have a look at that though and see how we can implement some fallbacks to ensure that we can at least specify a generic family to make sure that the page looks at least kind of what it was intended to. So that's the first option, not the best one probably, (Refer : font3)

* then we have the second option, we can use web fontss and this is what we actually do in our project here because as we saw, we import our fonts that we used on the website from Google fonts with a so-called web font,so basically, we retrieve the font from a third party. We did that already, nevertheless we'll also have a closer look at it in this module.(Refer : font3)

* And then we have a third option, the third option simply means that we retrieve the fonts that we want to apply, the font family from a server and this could be for example our own server, so the server where our website is hosted.Therefore, we again have the control of the font families and make sure that the user can display these families, nevertheless if these are available in the browser or if these are saved to the computer and with that, we can ensure that the website looks as intended for most of our users.(Refer : font3)

### Using the Default Font Families

* So we understood that we have different ways to add different font families or generic families to our website.

* In our course we imported the font family from google fonts, So basically, we use a so-called web font right now.We will also keep this web font for the entire website.

* but I would like to change this default font family right here for our package info class.

* In our project index.html we can see 

```html
<link href="https://fonts.googleapis.com/css?family=Anton" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet">
```

* I will not delete them because Google still uses web fonts but the important thing is that this is the import we have to make sure that the fonts are available to all our users.

* In shared.css we can see that 

```css
body {
  font-family: "Montserrat", sans-serif;
  margin: 0;
}
```

* So we already imported "Montserrat" in index.html we used the same in our body css.Now with that, we made sure that our entire website basically uses this font family 

* As we already discussed the first way to display fonts is the default way, so basically let the browser decide what font family it should display.

* Now what will happen if i comment this font family ??

```css
body {
  /* font-family: "Montserrat", sans-serif; */
  margin: 0;
}
```

* if we now reload the page, we can see some interesting things. The first thing we see is that our nav bar kind of crashed.(Refer : font4)

* What's the reason for that? Well the font family that now is supplied by default, we will in a few seconds find out which one this is, simply needs more space, more width than the family we had before, our web font.

* If we change our dirty fix for nav this will work

```css
.main-nav {
  display: inline-block;
  text-align: right;
  /* width: calc(100% - 44px); */
  width: calc(100% - 70px);
  vertical-align: middle;
}
```
* this is our dirty fix for the moment, so we will keep it to 44 for now because the nav bar is not our actual focus.I just wanted to show you that we could fix that easily but it's not the purpose of this module now.

* now we can go back to our actual problem. And the actual problem is not a real problem because we actually simply commented out the font family, 
so at the moment we don't have any font family applied in our code and still we saw that the font changed.(Refer font4). This is new font this is not our actual website font.

* Let see what is this font, you can't find this in our style tab of font family,  but if we go to our computed tab and then scroll down a bit, right here to our font family, this one, you can see that Verdana is now applied.

* And if you remember when we had a look at the browser settings, Verdana was somewhere there.

* Let's have a look and go back to the settings, right here and indeed, our standard font is now Verdana. This means if I change this to Times New Roman for example and go back to our website, you can see that the font family now changed to Times New Roman but I think this is really ugly, so let's switch it back to Verdana maybe, like that.

* So as you can see, if we don't add the font family property to our code on the website, then the default browser setting is the one that defines the font family

* The disadvantage of this approach is of course that as I said in the beginning on the slide, the font family then totally depends on the user settings and with that, you have no control at all of the font family that will be displayed on your website.

### Understanding the "font-family" Syntax

* our font-family declaration right here, the values follow a certain pattern obviously

```css
body {
  font-family: "Montserrat", sans-serif;
  margin: 0;
```

* because the first value right here, this one, is the font family that we want to address.

* Please note the capital letter right here and the quotation marks, the quotation marks are actually not necessary all the time right here, you have to add them though if your font family consists of multiple separate names and so therefore, you have whitespaces, then it's required, 

* we could also delete those, like tha and if we now reload the page, we can see that it would still work.

```css
body {
  font-family: Montserrat, sans-serif;
  margin: 0;
```
* Nevertheless, you can add them all the time, it's not a problem actually.

* and after this font family, we have this sans-serif right here and as we learned, sans-serif is a generic family and this already shows you the general pattern how you should write this declaration.

* You first start with the most specific thing you have and the most specific thing you have is basically your font family. This could by the way not only be one family, this could also be two or more families,

* for example we could use Verdana right here, let's also add the quotation marks, like that and then add sans-serif at the end

```css
body {
  font-family: "Montserrat", "Verdana", sans-serif;
  margin: 0;
```

* What will simply happen then is your browser will look for Monserrat, in case you can't find it, you will apply the Monserrat font family. If they can't find it, he will jump to the next font family, Verdana. If it cannot find this one, he will jump through the next one and so on and so on and in the end, he will simply fallback to this fallback, the generic family and then simply apply a font family out of the generic family you defined.

* Now what I simply mean by that is if we would fallback to sans-serif, the browser would select Helvetica in our case because we specified in the browser settings that if the generic family that should be displayed based on their code is sans-serif, then use the Helvetica font family please.

* that's actually the core idea of the syntax of this font family property. You would define the property of course, then you define the first font family you would like to have, then the second one, as many as you would prefer actually

* but in the end, you'll specify a generic family because with that, you always make sure that the text on the website can be displayed and the text that should be displayed should at least be part of a generic family of your choice. 

* What we didn't have a look so far at until this point is the difference between having the font family saved on the user's computer as a web font or retrieved from a server.

###  Working with Locally Saved Fonts

* So let's have a look at this first method now, at this first source for our font families, the font family which is saved locally on our user's computer.

* Because you might say that so far throughout this module, we didn't have a problem with the font families at all because basically, our browsers supported all of the font families we used. 

* But the problem or it's not a problem but the thing we have at the moment is that in Chrome right here, we have a lot of default font families which are supported and that's awesome.

* but what's not so awesome is that we cannot control the browser our website visitors are using. Therefore, in case your website visitor doesn't use Chrome, with the approaches we use so far except for the web font of course but with the general approach of simply adding a font family to our code, chances are that not all our users will be able to receive the font and therefore, the fallback will be applied.

* because the problem is, if you google for CSS font stack right here and then click onto this link (https://www.cssfontstack.com), then you can see that the so-called website fonts only include a limited amount of font families because these are the generic families right here and the corresponding font families that are installed locally on your machine.

* So just by using a Windows machine, chances are quite high that Arial Black is installed on your computer by default,the same thing is true if you're using a Mac.and if you go down right here for example to serif, you can see that Bodoni, this one right here is not installed at all on the Mac.

* Vice-versa, we see for this Didot, I don't know how it's pronounced to be honest, that this font family is not installed at all on Windows machines but on many Macs and this is what you have to keep in mind.

* so just by adding this font family property without adding a web font like we did right here, so if we would delete that and just add the font family like that, the only two things we would rely on is that either our user has this font family installed on his machine, maybe by default or afterwards or that our browser knows this font family.

* The problem with these approaches is of course, again we cannot control neither of that two factors because we cannot force our users to install a font family and we cannot force our users to use a specific browser.

* So one option you always have of course if you want to make sure that you will reach a large audience with your font family is to go to cssfontstack.com and check for the font families available right here because with that, you can of course make sure that a lot of your users should have this font family installed on their machines and therefore, should be able to see your website the way you intend it to look like.

* But of course that's not the best approach because we don't want to be limited by the default font families installed on the machine.

* Therefore, we used this web font right here which we imported from Google fonts

```html
<link href="https://fonts.googleapis.com/css?family=Anton" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet">
```

### Working with Google Fonts

* So let's have a look at web fonts. As I said, we use these already right here on our website but I think it makes sense to have a look at it step-by-step now. How can we first find such a web font?

* Well, one good source is Google fonts. For that, you can simply for, well Google fonts right here and if you then click onto the link (https://fonts.google.com/), you can find a huge list of a lot of different font families available right here.

* Lets add roboto font style in package/index.html 

```html
<link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
```

```css
.package__info {
    padding: 1rem;
    border: 1px solid #0e4f1f;
    font-size: 1.2rem;
    color: #0e4f1f;
    background: white;
    font-family: 'Roboto', sans-serif;
}
```

* If we do that now and go back to our website and reload the page right here, you can see that the font family changed (Refer : font5)

* and the really cool thing now is that if we go to our settings right here again in Chrome and have a look at the font families available, you can see that Roboto right here is not available and this shows us that we were now able to import a totally new font family from Google fonts and with the way we did it right here, this would also work for other users.

* It doesn't depend on the browser you're using or on the fonts you have installed on your machine, it simply depends on the availability of these fonts at Google fonts.

* So this is one way, how we can import web fonts to our website, but the problem with that way is, and that's what we just saw, we have to add it to each HTML file that we have because otherwise, the font is not available on the page we want to have it and this can definitely cause errors,

* so there might be a better alternative, how to add such web fonts.

* The good thing is if we go back to Google fonts right here, we can see that the alternative we have is the @import method right here. This allows us to import the font in the CSS file right here by using this command right here,

```css
/* we could add this import in our shared css file*/
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
```
* because we know that each index.html file as we can see it right here refers to the shared.css file,

* Now with this import we no need html tag for this google font we could remove that.

* if we did everything correctly, then well we shouldn't see a change. So let's reload and as you can see, it's still working and that's why I personally prefer this import method because it helps us to avoid mistakes and easier to understand.

### Understanding Font Faces & "font-style"

* font weight- what does this mean?

* Let us go back to our website and then let us add font weight.

```css
.package__info {
    padding: 1rem;
    border: 1px solid #0e4f1f;
    font-size: 1.2rem;
    color: #0e4f1f;
    background: white;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
}
```

* you basically have numbers from 100 to 900, where a bigger number is equal to a bolder or fatter weight of the font, and then you have bolder for example which basically means that it is bolder than the inherited font. We already talked about inheritance throughout this course, therefore I will not dive deeper into that,

* what I will dive deeper into are these numbers because basically, the numbers as I said allow you to specify the weight of your font and a number of 400 is the equivalent you could say to a normal font weight, so you could also write normal, right here like that,

* this would be then a number of 400 and a number of 700 would be bold, so the one down here. Now what happens if we add something like 900 here for example? Well let's see, if we go back to our page right here and reload it

* you can see that nothing is happening and this is actually strange, right because if we go back to Google fonts right here, you can see that 900, this right here is actually defined.

* The problem is that we only imported so far the regular font face, so this regular 400 font face. So what we did is basically we have Roboto 400 right here, if you want to use 900 you should add 900 also in that google font then you could see 

```css
@import url('https://fonts.googleapis.com/css?family=Roboto:400,900&display=swap');
```
* Now this added both 400(default) and 900 as font weight.with that, we now told our code that we want to import the Roboto top font family with the 400 and
900 font face, that's important.

* Now we can use font-weight 900

* if we need font style of italic 

```css
@import url('https://fonts.googleapis.com/css?family=Roboto:100i,400,900&display=swap');
```
* Now we could use "font-style: 'italic'"

* in case if i remove i from "100i"

```css
@import url('https://fonts.googleapis.com/css?family=Roboto:100,400,900&display=swap');
```

* If I now would go back and reload the page, you can see the styling changes but it only barely changes and the reason for that is that the browser is able to kind of add an italic style to our website, even though we didn't specify this individual font face

### Importing our Custom Fonts

* So the last option we have is adding our own fonts to our website.

* We can download any font our custom font, Now to import this onto our website, we simply have to go to our CSS file.

* As I will only use it in our packages.css file, I will add it right here on top of the page.

```css
@font-face {
    font-family: "AnonymousPro";
    src: url("anonymousPro-Regular.ttf") format("truetype"); /* URL should match */
    /*ttf- true type font*/
}

/* for anonymousPro-Bold you need to import seperately */
@font-face {
    font-family: "AnonymousPro"; /* bold version of AnonymousPro */
    src: url("anonymousPro-Bold.ttf") format("truetype"); /* URL should match */
    font-weight: 700; /* if we didn't specify font-weight Bold font will be applied whatever your font-weight you apply, since this is (bold) loaded after Regular, so it will take bold as updated font not regular to diffrentiate this as seprate you need to specify font-weight*/
}
```
* if we didn't specify font-weight Bold font will be applied whatever your font-weight you apply, since this is (bold) loaded after Regular, so it will take bold as updated font not regular to diffrentiate this as seprate you need to specify font-weight.

* After this included we could use AnonymousPro as font family

```css
.package__info {
    padding: 1rem;
    border: 1px solid #0e4f1f;
    font-size: 1.2rem;
    color: #0e4f1f;
    background: white;
    font-family: 'AnonymousPro', sans-serif;
    font-weight: 700;
}
```
* reload the page, you can see that we now use our imported custom font that we used. And this is really cool actually.

### Understanding Font Formats

* Other than ttf, we have "woff - web open font format"

* if you read the description of "woff", this is a compressed true type or open type font and the first thing that's really good about that is, well if it's a compressed format, it's smaller and therefore it makes our website faster.However we can see that the woff format is compressed, which is great and that the browser support is also quite awesome.

* In addition to the "woff format", we also have "woff2" right here, As you can see, this provides an even better compression but we can see
that browsers support for the IE is not there at all and also Safari support is limited.

* Incase if you all these format of font files just add it like below

```css
@font-face {
    font-family: "AnonymousPro";
    src:  url("anonymousPro-Regular.woff2") format("woff2"),
          url("anonymousPro-Regular.woff") format("woff"),
          url("anonymousPro-Regular.ttf") format("truetype");
}
```

* and with these formats, you're actually quite safe when it comes to your custom fonts. There are also other formats to be honest like eot (embedded open type font) well you can see what I mean. We don't have any browser support at all,(https://caniuse.com/)

### Diving into Font Properties

* So let's dive into some font properties now that we have applied them and see which impact they have onto our fonts.

* For that, I will now go to the customers page maybe, right here, so that we can see the font on a different page

```css
.testimonial__text {
    margin: 0.2rem;
    /* font-size: 40px; */
    /* font-variant: small-caps; */
  /* font-strecth: ultra-condensed; */
}
```
* Another property that has a direct impact onto the way our text is displayed is this one, font variant, if we reload the page, you can see that basically the height of our font did not change but all our small characters that we had before were now changed to capital ones.So that's also just a property that basically impacts the style or the look of the font we have right

* Another property we have is font stretch, this one right here.There you can see that you can select different stretch levels, so which define the way our font is displayed, and if I would now apply ultra condensed for example right here and reload our page, you can see that the font looks exactly the same way it looked before.

* The problem with that font stretch property is that it is supported by browsers nowadays, so that's not the problem but each stretching level has to be part of a separate font face and as this is not true for a lot of fonts, we will not dive deep into it.But as I said, the browser support is good as we can see it also also down here but the problem is that the font availability is not the best.

### Adding "letter-spacing"

* For the letter spacing property, we have to use lengths as a value, so this can be either pixels or rem, I will use pixels now because I think it's easier to see like that, so let's say we use 5 pixels as letter spacing.

```css
.testimonial__text {
    margin: 0.2rem;
    letter-spacing: 5px;
}
```

* A more interesting property is the next one, this is whitespace,

* For whitespace, we have no lengths but we have properties like normal, like that.

* If we apply normal, well as you can imagine, this will show us the text in its initial status but with this whitespace,

```css
.testimonial__text {
    margin: 0.2rem;
    white-space: nowrap;
}
```
* Now if we change this from normal to no wrap, like that, then we can see as the name already indicates, that no wrapping takes place.

* This means the entire text in our element will be displayed in one line and the width of our window doesn't have any impact on that, as the name says, this is no wrap.

```css
.testimonial__text {
    margin: 0.2rem;
    white-space: pre;
}
```

* If we change this to pre, like that, then we cannot see a difference right here, but if we have text in paragraph(enter key) you can see we have this paragraph and we see this indention that we have right here. This is all automatically created by that value,

```css
.testimonial__text {
    margin: 0.2rem;
    white-space: pre-wrap;
}
```

* we also have another one which would be pre-wrap, this one right here. If we use this one and we load the page, then you can see that we have a line break right here but that's simply due to the reason that the space is not enough right here but as soon as we increase the size again, we can see that we have our project in one line and after our project where we added a paragraph, we start in a new line and then the next break of course is right here because these words right here don't fit into one line.

* The last value would have is pre-line,

```css
.testimonial__text {
    margin: 0.2rem;
    white-space: pre-line;
}
```
* let's have a look at what happens right then. If we use pre-line right here, like this and we load the page, now you can see that the lines are filled whenever possible because before, we saw that this line right here was empty

### Changing the Line Height

* So what is the line height property? 

```css
line-height:2 ;
```
 * if we change that to two, then height should be 38. because we take our actual font size which is the 19.2 pixels calculated based on the 1.2rem and 19.2 pixels times the two (19.2 * 2) we added right here is 38.4 and then the decimals are not considered, therefore we have 38 pixels of line height right here.

 * By default, the line height depends on the font family we are using. If we change that behavior and add the line property with a value of two for example, then this will always refer to the font size and as the font size, in our case at least, is the same for all font families, we have the same line height no matter which font family we are using.
 
 * Now of course we are not only limited to using this number, we can also use pixels like 32 pixels for example and if I now reload the page, as you can imagine,

 ```css
line-height:32px ;
```
* What's of course also possible is using percentages.

* However, I would always recommend not using percentages like here but simply using the numbers like we did it before because percentages sometimes lead to an unexpected behavior when it comes to inheritance

### Applying "text-decoration" & "text-shadow"

* So what can we do with text decoration and text shadow?

```css
.package__info {
    padding: 1rem;
    border: 1px solid #0e4f1f;
    font-size: 1.2rem;
    color: #0e4f1f;
    background: white;
    text-decoration: underline;
}
```
*  we can see that, well as expected probably, the text is underlined.If we have underline, we probably also have overline

```css
.package__info {
    padding: 1rem;
    border: 1px solid #0e4f1f;
    font-size: 1.2rem;
    color: #0e4f1f;
    background: white;
    text-decoration: overline;
}
```
* we can see that now we have an overline for our text right here.

* well we can probably also line through our text right here. Let's see if this also works,it will strike lines 

```css
.package__info {
    padding: 1rem;
    border: 1px solid #0e4f1f;
    font-size: 1.2rem;
    color: #0e4f1f;
    background: white;
    text-decoration: line-through;
}
```

* We can of course also more specify the line we want to have, we could add dotted right here for example to create a dotted line, like this. So you can see, now we have the dotted line,

```css
.package__info {
    padding: 1rem;
    border: 1px solid #0e4f1f;
    font-size: 1.2rem;
    color: #0e4f1f;
    background: white;
    text-decoration: line-through dotted;
}
```
* this can of course also be applied with all the other values we had, for example underline, overline, line-through..

* you could also choose a color of your choice, for example red right here

```css
.package__info {
    padding: 1rem;
    border: 1px solid #0e4f1f;
    font-size: 1.2rem;
    color: #0e4f1f;
    background: white;
    text-decoration: line-through dotted red;
}
```
* Another really nice line type is also this one here, so if we change dotted for wavy. 

```css
.package__info {
    padding: 1rem;
    border: 1px solid #0e4f1f;
    font-size: 1.2rem;
    color: #0e4f1f;
    background: white;
    text-decoration: underline wavy red;
}
```
* This will create wave kind of lines ~~~ instead of dotted

* we need to apply text-decoration for both apply and remove default text decoration.

```css
text-decoration: none;
```
* So don't forget to use text decoration for both, to add such a decoration of course but also to remove a default decoration, like we did it menu.

* Another property in connection with the text is the text shadow,

```css
.package__info {
    padding: 1rem;
    border: 1px solid #0e4f1f;
    font-size: 1.2rem;
    color: #0e4f1f;
    background: white;
    text-shadow: 5px 7px; /* offset to the x-axis(5px)   offset to the y-axis(7px)*/
}
```

* if I reload the page, yes this looks interesting but probably not as we intend it to look.(Refer : font6)

* I think we need two additional things; we need a blur radius or a blur at least to blur the actual text because it should be a shadow and not a copy of the text and then we need maybe a different color also.

```css
.package__info {
    padding: 1rem;
    border: 1px solid #0e4f1f;
    font-size: 1.2rem;
    color: #0e4f1f;
    background: white;
    text-shadow: 5px 7px 2px gray; /* offset to the x-axis(5px)   offset to the y-axis(7px) blur-of-2px gray color*/
}
```
* With that if we reload we can see our shadow looks better(Refer : font7)

* You could also set an offset of 0 if you want to, like this and like that, right, would also not be a problem,

```css
.package__info {
    padding: 1rem;
    border: 1px solid #0e4f1f;
    font-size: 1.2rem;
    color: #0e4f1f;
    background: white;
    text-shadow: 0px 0px 2px gray; /* offset to the x-axis(0px)   offset to the y-axis(0px) blur-of-2px gray color*/
}
```
### Understanding the "font" Shorthand

* So how does the font shorthand work?

* Now for the font shorthand, we can use different values, there are values which are optional and some values are a must.Additionally, the order of the values is important, so it needs to have the right order to work correctly.


```css
.package__info {
    padding: 1rem;
    border: 1px solid #0e4f1f;
    /* font-size: 1.2rem; */
    color: #0e4f1f;
    background: white;
    font: italic small-caps 700 1.2rem/2 "AnonymousPro", sans-serif ; /* font-style(optional) font-variant(optional) font-weight(optional) font-size(must)/line-height(optional) font-family(must) */
    /* font size and font family must otherwise this shorthand font won't work*/
}
```
* that's important has to be positioned ahead of the font size.

* The important thing is that the font variant right here, this one and the font weight are positioned ahead of the actual font size, that's really important to keep in mind.

* that's actually the first purpose of this font shorthand. You can combine all these different properties and corresponding values, like that.

* As I said, keep in mind to start with these three properties in case you have them, then continue with the font size in combination with the line height and then add the font family always as the last property or value right here in the shorthand.

* Another way to use this form shorthand is to refer to system fonts, now what does that mean?

* These system fonts or system font values simply refer to default font families which are applied to different parts of your operating system,

* this could be fonts which are used in menus for message boxes or for status bars for example.

* Now talking about menus, if I now add menu right here, like that and reload the page, you can see that the font change to a font that is used for menus on the Mac(Refer : font8)

```css
.package__info {
    padding: 1rem;
    border: 1px solid #0e4f1f;
    /* font-size: 1.2rem; */
    color: #0e4f1f;
    background: white;
    font: menu;
}
```
*  Another value would for example be a status bar 

```css
.package__info {
    padding: 1rem;
    border: 1px solid #0e4f1f;
    /* font-size: 1.2rem; */
    color: #0e4f1f;
    background: white;
    font: status-bar;
}
```
* So that's the second option we have when using this font shorthand, it's either a shorthand as I showed you previously or you can also refer to such default system fonts.


### Loading Performance & "font-display"

* So what is the font display property and how does it impact the loading performance of our fonts?

* And that's important, by our fonts, I'm referring to our custom fonts that we imported by using @font-face. Keep that in mind,font display only works in connection with that.

* However, font display is a property as you can imagine and for this property, we can apply different values which impact the loading behavior of our custom fonts.

* (Refer: font9)The values we can have are swap, block, fallback, optional or if we don't set anything, then it will be set to a value of auto by default, Auto simply means that the browser our visitor is using will automatically choose a value of his choice.

* So what do these values mean now? Well, let's have a look.

* We basically have two different situations while the loading process of the font takes place. This is the so-called block period,this one right here 

* and the swap period, that one. Now what do these mean and how are they different for the different values that we can apply? 

* For the swap value, we don't have any kind of block period.

* Now what does this mean, block period and why don't we have a block period right here for this swap value?

* Well to understand the block period, imagine the following situation: our user is visiting our website so the content has to load, now as the fonts are not displayed immediately, we could have such a block period. In this block period, the space where our text would be displayed would be reserved with an invisible fallback font face and that's important.

* The font face will not be visible at the moment but the space for it would be reserved, this would be a block period,

* so we basically would have the styling or the general structure of all our websites visible, so a box which would contain text already has almost the correct height and is visible but no text would be displayed because the font is an invisible fallback, that will be a block period.

* Now if we don't have such a block period which is the case for the swap, the fallback right here would be immediately visible, this means once our users browses our website, boom, the fallback will be there.

* After that, we have a swap period and the swap period as the name already indicates, simply is the period where the browser has the ability to change or to swap the fallback font style that was loaded with the actual fonts style that we have, for the swap value, this period is infinite.

* This simply means no matter how long it takes, if our browser manages to load our custom font that we want to display, it will swap it with the fallback, if it cannot change it, the fallback will just stay there.So that's the first value, that's swap,

* now what about block now?

* Well for block, we have a short block period, this means this invisible font is loaded, so there is no text displayed but we have a placeholder that is reserving the space and after that, the behavior actually follows the swap value. We load the fallback and once we can load it, the browser will change the fallback with the custom font that we created.

* The third value is the fallback, the fallback case a very short block period, so we have this invisible font family displayed but only for a really minimum amount of time, then we have the fallback and then now it gets interesting, we only have a short swap period. So there is only a short window of time where the browser has the chance to load our custom font right here and to change it with our fallback.

* If the browser is able to do that within this swap period, this short swap period, he can change it with the custom font otherwise, the fallback will be displayed as long as our site is displayed for the visitor.So that's the difference.

* For the fallback, there was only a short opportunity to change the fallback with the custom font, for swap and block, the loading of the custom font or attempt to load the custom font lasts forever basically, as long as the user is on our website.

*  Now optional is the last value that we have, for optional, we also have a very short block period and then this thing right here, then we don't have a swap period because the optional value simply allows the browser to choose what you should do and this basically depends on the internet connection speed.

* if the browser decides that our connection is good, he might decide to immediately load the custom font.

* If we have a worse connection which is not fast enough, the browser might decide to use the fallback and therefore, not load our custom font.

* This decision cannot be reversed, of course if we reload the page, it can but as soon we stay on the website as a user, we will only see the fallback for example if the internet connection is not good enough.

* Now the last value, auto, lets the browser make the entire decision. At the moment, most browsers choose block then, so if you don't set a font display, auto be applied and then it will use block, the one we saw right here as a second option.

* Now the problem with this font display and this performance topic is that the fonts we are using right here load really fast, so to be honest.

* How to use this ?

```css
@font-face {
    font-family: "AnonymousPro";
    src:  url("anonymousPro-Regular.woff2") format("woff2"),
          url("anonymousPro-Regular.woff") format("woff"),
          url("anonymousPro-Regular.ttf") format("truetype");
    font-display: fallback;
    /* font-display: block; */
     /* font-display: swap; */
    /* font-display: optional; */
}
```
* but the downside is this font-display not having better browser compatibility.

* Dive Deeper into Selected Topics

Web Safe Fonts: https://www.cssfontstack.com/
Google Fonts: https://fonts.google.com/
The "line-height" property: https://developer.mozilla.org/en-US/docs/Web/CSS/line-height
Refer : font.pdf
