# CSS-Complete-Guide

## Section 18: Introducing Sass (Syntactically Awesome Style Sheets)

###  What is Sass & Scss?

* Now SASS and SCSS are essentially the same, their syntax varies slightly and I will explain what the difference is and how their syntax differs

* but first of all, let's find out what it is in general, what is this SASS/SCSS thing about?

* Instead SASS stands for Syntactically Awesome Style Sheets and SASS, as I already mentioned, does not run in the browser instead it extends CSS during development only.

* Now what does this mean? You can think of it like this; during development, you as a developer, you want to save time and you want to write clean reusable code that's easy to maintain and to adjust. 

* With CSS, you can quickly end up with huge CSS files, with dozens, hundreds or thousands of rules.

* Now managing this can be cumbersome and you also find yourself repeating certain things a lot, so it would be nice if you had a more condensed, easier syntax, maybe something that allows you to nest CSS selectors into each other for example and SASS simply offers such features

* and in this module, you'll of course learn about all the important SASS features and I will show you in a real example how it would work.

* The important thing is of course that you can only use it during development, so it needs to be compiled to normal CSS before you can ship it to production because the browser doesn't understand SASS.

* So the idea is that you as a developer can write SASS/SCSS code and then you let some tool compile it to normal CSS

### Installing Sass

* Refer : https://sass-lang.com/

* So for now, let's simply click on learn SASS here and there, you can find out more about how it works and you also see the command you need to run to compile an SCSS file in this case to a CSS file which again you need to do to ship it. Now in order to compile it, you need to install it

* Now there, you can find that there are a couple of tools you could install but we will use the command line and for the command line, we can install a certain tool we can execute there to compile our files.

* Now for Windows, you will need to install Ruby first and you can simply follow that link to the Ruby installer here on the SASS page to simply download and install Ruby.

* Now we won't write any Ruby code, SASS just is a Ruby gem, so a tool built with Ruby you could say and therefore it requires the Ruby runtime to work.

* So make sure to download and install that Ruby installer on Windows, on Mac, this is not required because you already start with Ruby installed, so once that is done, we can continue with these steps here, both on Windows and Mac.

* We first of all should open a terminal or a command prompt and then we can install SASS by using the gem command which should be available once you get Ruby installed.

```
sudo gem install sass
```
* So now let's wait for this to finish and once it's finished, we're already ready to write our SASS code and use that tool.

* Now on Mac, you also might get another error where it says that the installation failed, failed to build gem native extension, you then need to run

```
xcode-select --install
```
* You can confirm that it was installed successfully by running sass-v here and it should give you the latest SASS version you just installed.

```
sass -v
```

* Check the basic project (sass)... attached

### Things to be Improved with Sass

* So what can be improved about this page?

* There are a couple of things, for example here, I'm using vendor prefixes. Nothing wrong with that but I use them again a little bit further down, here. It would be nice if we could outsource something like this, if we could put this into some reusable code that we could just insert here and which then would be compiled to the code we wrote here.

* Additionally, we got some nesting going on, here for the documentation links, we got a couple of nestedselectors and of course there's nothing wrong with this either but writing it like this is not as easy.

### Nesting Selectors

* So time to write our first SASS code and for that, I'll create a new file and I'll name it main.sass

* Now let's start simple and let's not even use a SASS feature, let's just try to replicate our CSS code with SASS for that just copy past our css code to sass file.

* and now you see a bunch of errors, all the semi-colons are marked as red and all the curly braces. The reason for this is that SASS actually works without semi-colons and without braces, instead indentation is used to determine to which selector a certain property belongs.

* So if we were to convert this code to valid SASS code, we would remove all these semi-colons and we would remove all the curly braces here, like that.

* if we would remove the indentation, this would be invalid because the indentation here really now decides to which selector this property belongs, if it's indented one level, it belongs to the selector above this level so to say.

* So this is how we would convert our code. Now you might like this or you may not like this, this is really something which differs from person to person. Most people find SCSS a bit easier though, it uses the same features as SASS does but it actually keeps the CSS syntax with the semi-colons and the curly braces.

* and add all the semi-colons and curly braces back in and I'll rename that file here to .scss at the end, not SASS. 

* So this is the syntax I will use and this now looks like CSS and actually normal CSS also is valid SCSS, so we could leave it like this but now we can add more features to that file.

```scss
@import "typography.css";
html {
  font-size: 94.75%;
}

body {
  font-family: Arial, sans-serif;
  margin: 0;
}

.container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  padding: 3rem 0;
  box-sizing: border-box;
}

.sass-introduction {
  border: 0.05rem solid #521751;
  background: #fae5ff;
  padding: 2rem;
  text-align: center;
  box-shadow: 0.2rem 0.2rem 0.1rem #ccc;
  width: 90%;
  box-sizing: border-box;
}

.sass-introduction p {
  margin: 0;
}

.sass-details {
  border: 0.05rem solid #521751;
  background: #fae5ff;
  padding: 1rem;
  text-align: center;
  margin: 2rem 0;
  width: 90%;
  box-sizing: border-box;
}

.section-header {
  border-bottom: 0.05rem solid #521751;
}

.section-header h1 {
  margin: 0 0 1rem 0;
}

.documentation-links {
  list-style: none;
  margin: 1rem 0 0 0;
  padding: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
}

.documentation-links li {
  margin: 0.2rem 0;
  background: white;
}

.documentation-links .documentation-link {
  text-decoration: none;
  color: #521751;
  display: block;
  padding: 0.2rem;
  border: 0.05rem solid #521751;
}

.documentation-links .documentation-link:hover,
.documentation-links .documentation-link:active {
  color: white;
  background: #fa923f;
  border-color: #fa923f;
}

@media (min-width: 40rem) {
  html {
    font-size: 125%;
  }

  .container {
    padding: 3rem 0;
  }

  .sass-introduction,
  .sass-details {
    width: 30rem;
  }
}
```

* Let me show you nesting...

* So if we scrolled down a bit, we see that for example for documentation links, we nest a list item, we nest documentation link and we nest documentation link hover and active.

```scss
.documentation-links {
  list-style: none;
  margin: 1rem 0 0 0;
  padding: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;

  li {
        margin: 0.2rem 0;
        background: white;
    }
    .documentation-link {
        text-decoration: none;
        color: #521751;
        display: block;
        padding: 0.2rem;
        border: 0.05rem solid #521751;
    }
    .documentation-link:hover,
    .documentation-link:active {
        color: white;
        background: #fa923f;
        border-color: #fa923f;
    }
}
```

* so all the code we just nested and you can already see how this makes the code a bit more readable because here, we're now containing all the styles related to my documentation links in one big selector so to say.

* Now how do we turn this into normal CSS though because this would not run and now you can run SASS main.scss, so you target the file which holds your SASS code and then you define a file name for the file you want to generate and here I will use main.css,

```
sass main.scss main.css
```

* hence I will overwrite the original main.css file.

* If I hit enter, this will now generate the main.css file, it also gives us a map file which is a source map file which makes it easier for the browser to map our code to the original source code but we don't have to worry about that right now.

* In the new main.css file though, you can see that instead, it automatically created these nestings we had in there before. So we get the same code as before but now generated automatically by the SASS command

* and if you don't want to rerun this command whenever you make a change in your .scss file, then you can also enter sass--watch main.scss, so the file you want to watch for changes and then colon and then immediately without a whitespace, main.css.

```
sass --watch main.scss:main.css
```
* Now this will enter watch mode and as you see, this is now an ongoing process which you can quit with control c and now whenever we change something in that file and save that file, it will automatically recompile.

* Now I will switch this back but this is now really useful to ensure that we don't have to manually compile all the time.

### Adding Nested Properties

* Now what are nested properties?

```css
.container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  padding: 3rem 0;
  box-sizing: border-box;
}
```
* we got two properties from the flex namespace; flex direction and flex wrap.Obviously we're not dying if we have to write this manually but what we actually can do now is we can type

```scss
.container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  /* flex-direction: column;
  flex-wrap: nowrap; */
  flex: {
      direction: column;
      wrap: nowrap;
  }
  align-items: center;
  padding: 3rem 0;
  box-sizing: border-box;
}
```
* and behind the scenes if we save this and we have a look at the created file and we scroll up to the container, you'll see it still generated the code we had there before.

* These are nested properties. If they're from the same namespace, so if they start with the same part here, flex-, font- and so on, you can just use that namespace without the dash and then nest all the nested properties in there.

* So this is a quick and nice way of also keeping your properties together.

### Understanding Variables

* now what are variables?

* Now variables allow us to define a certain value and reuse it throughout our code, for example that color here.

* This color, this exact color is getting used a lot as you can see, here we use it quite a lot in our code.

* Now if we define it like this and we ever decide we want to use a different color, we have to go to all these places in our code and manually adjust it, which is not super comfortable.

* So what we can do typically at the top of the file, we can define a so-called variable, a feature which is also available in next gen CSS, you learned about CSS variables already but which is also available here in SCSS and when using variables in SCSS, you of course have the great benefit that it will be compiled to code which does not use CSS variables,so which will run in all browsers and not just in more recent ones.

* So this is a great way of using variables without having to support cutting edge browsers only.

* You define a variable by adding a dollar sign, that always has to be the first character and then the name of your variable, maybe main color and then you simply add a colon and the value you want to store, in my case the hex code, #521751, that is the color we're using everywhere.

* Now by the way, you can in general store as a value here for the variable what you can use as a value in CSS, so you could also store center or something like 1rem, whatever you plan to do with that variable. Now in my case here, I want to use a color, so I will store a color. Now we can grab that variable name, including the dollar sign and replace all the hex code usages here in our SCSS file with that variable name and when this gets compiled, this will simply get replaced with the value of our variable.

* So with that, if we save this and we reload our page, we see the same as before. It doesn't use variables in the CSS file,it uses the real value, it just replaces our variables with that value we stored in there.

```scss
$main-color:#521751; /* main-color variable */
@import "typography.css";
html {
  font-size: 94.75%;
}

body {
  font-family: Arial, sans-serif;
  margin: 0;
}

.container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex: {
      direction: column;
      wrap: nowrap;
  }
  align-items: center;
  padding: 3rem 0;
  box-sizing: border-box;
}

.sass-introduction {
  border: 0.05rem solid $main-color; /* main-color variable */
  background: #fae5ff;
  padding: 2rem;
  text-align: center;
  box-shadow: 0.2rem 0.2rem 0.1rem #ccc;
  width: 90%;
  box-sizing: border-box;
}

.sass-introduction p {
  margin: 0;
}

.sass-details {
  border: 0.05rem solid $main-color; /* main-color variable */
  background: #fae5ff;
  padding: 1rem;
  text-align: center;
  margin: 2rem 0;
  width: 90%;
  box-sizing: border-box;
}

.section-header {
  border-bottom: 0.05rem solid $main-color; /* main-color variable */
}

.section-header h1 {
  margin: 0 0 1rem 0;
}

.documentation-links {
  list-style: none;
  margin: 1rem 0 0 0;
  padding: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;

  li {
        margin: 0.2rem 0;
        background: white;
    }
  .documentation-link {
      text-decoration: none;
      color: $main-color;
      display: block;
      padding: 0.2rem;
      border: 0.05rem solid $main-color; /* main-color variable */
  }
  .documentation-link:hover,
  .documentation-link:active {
      color: white;
      background: #fa923f;
      border-color: #fa923f;
  }
}

@media (min-width: 40rem) {
  html {
    font-size: 125%;
  }

  .container {
    padding: 3rem 0;
  }

  .sass-introduction,
  .sass-details {
    width: 30rem;
  }
}
```
### Storing Lists & Maps in Variables

* A list simply is a variable that holds more than one value, a typical example would be something like the box shadow here,
"box-shadow: 0.2rem 0.2rem 0.1rem #ccc;"

* of course we could store each value individually in a variable and then construct this from multiple variables but it's easier if we just store this.

* So here we're not actually reusing the box shadow, maybe we find another example where we are reusing it. An example would be the border, this border definition with 0.05rem solid and the main color, we use that twice.

* So let's grab that value here and create a new variable which I'll name border default and now I just put the value in there.

```scss
$border-default: 0.05rem solid $main-color;
```
* Now as I mentioned, you can basically put anything you find on the right side of a colon into a variable but this officially is named a list because it's more than one value.

* We can now grab that border default variable and use it wherever we use that set up,

```scss
 border: $border-default;
```
* There is one more border at the bottom for documentation link. So now we're using that border default variable everywhere and as you can see, you can also use variables in variables, we're using the main color variable in the border default variable

* so a list is not just something where you have whitespaces separators, if you use a comma also, this also would be a list you could store it in the variable.

* Now on the link here, you actually see lists and maps though. So what is a map then? Well a map is simply a list where each item has a name by which you can access it. Now what does this mean?

* Let's add a new variable which I'll name colors because let's say we've got a couple of different colors in our app, as we actually do.

* I want to create a map of colors, obviously we could use main color, we could use secondary color and we could store all these colors and variables and there would be nothing wrong with that but sometimes you want to have more structure and you want to group your variables and map allows you to do that.

* A map is constructed by adding parentheses first of all, that is how you simply start a new map.In the parentheses,nyou now create key-value pairs by first of all defining a key, so a name of your choice, like main, you could name it main color but we're already in the colors map so it's clear that this is a color.

* In the parentheses, you now create key-value pairs by first of all defining a key, so a name of your choice, like main, you could name it main color but we're already in the colors map so it's clear that this is a color.

* and now we can use our color map to set our values. The question just is, how do we get this value or these values out of the map?

*  It's simple, SASS also is a couple of built-in functions, one of them being map-get which allows you to get a value from a SASS map.

```scss
$colors :(main: #521751, secondary: #fa923f); /* set map*/

$border-default: 0.05rem solid map-get($colors, main ); /* map-get($colors, main ) */

.documentation-link {
      text-decoration: none;
      color: map-get($colors, main ); /* map-get($colors, main ) */
      display: block;
      padding: 0.2rem;
      border: 0.05rem solid map-get($colors, main ); /* map-get($colors, main ) */
  }

.documentation-link:active {
      color: white;
      background: map-get($colors, secondary );
      border-color: map-get($colors, secondary );;
  }
```
* Let's also do it for the orange color here, there we have to reference secondary though

* but now we're organizing our code a bit more efficient by using a map for our colors, hence we're grouping these values according to their function which makes a lot of sense I guess and by using normal variables or actually a list variable here too.

* and as you can see, this allows you to save a lot of code because you simply can define it here and then you use these variables and if you ever want to change something, you change it here once

### Built-In Functions

* let's have a look at some built-in functions. Actually we saw one in the last video, map-get is a function provided by SASS to extract the value from a map but there are more

* These are a couple of functions you already know from CSS, like RGB but then also new ones like red, to just get the red component of a color you pass as a value. Now to be honest, all these color functions as well as opacity functions are really interesting, so let me show you where you could benefit from using them

* Back in our project, there is one line in our code, here where I get a very light purple in the sass-introduction. Now of course, I can select this manually but the downside again is that if I ever change my main color here, this brighter version of it might not fit it anymore. Of course I could define it up here too and always change it when I change this but sometimes you just want to have this color depend on your main color and just create a brighter, a lighter version of your main color.

* So what we can do is we can use a function for this, we can go here where we use the background and use the lighten function, like this. That is also a function provided by SASS.

```css
 background: lighten(map-get($colors, main),75%);
```
* For example if we were to decide that our main color should be black, well then the background would also adjust to a gray, so that is where this really shines and where this really helps us.

* Refer: https://sass-lang.com/documentation/modules

### Adding Simple Arithmetics

* there's one thing which might have come to your head, to your mind. We got our size default and size tiny which we use quite a bit but we also got cases where we have 3rem, 2rem, so multiples of our sizes you would say.

```scss
$size-default: 1rem;
$size-tiny: 0.2rem;
```
* if we were to reuse these values a lot, that would make sense but if we just have some usages, what we could do and what is supported by SASS is simple arithmetic.

* We could use size default here which is 1rem and simply multiply it by 3.

```scss
  // padding: 3rem 0;
  padding: $size-default * 3 0;
```
* because SASS is able to do simple math like this; multiplication, division, subtraction and addition. 

* you can also do it with other values, details about this can be found in the official SASS documentation.

* The cool thing is now this padding also depends on our default size, even though it's not the same value but it's a multiple of it,

```scss
box-shadow: $size-tiny $size-tiny $size-tiny/2 #ccc;
```
* Like this we could apply changes wherever it needs. 

### Adding Better Import and Partials

* let's now dive into better imports and partials What does this mean?

* We already got an import in place pointing to a CSS file and if you import from a CSS, not a .scss or a SASS file, then SASS will leave this import as it is, if you check out the compiled file, you'll see it wrapped it in this URL function provided by default CSS but it still works like default CSS and let's have a look at how this import works

* If we open the developer tools on our page and we go to the network tab there and reload the page, you'll see, we get three requests: the index.html file and then main.css and the typography file. This is how it works,

* these are simply requested because we're importing typography in the main.css file.

* Now sometimes you want to generate one big CSS file but still split it up during development, so that you have an easier time managing it but still that you can spit out one big file.

* And for our case here, this would make sense because in typography, we're again using our color, so it would be nice if we could also use our variables in there. So for that, I will create a so-called partial.

* Now a partial starts with an underscore in the file name and then you can name it whatever you want, here I'll name it variables.scss.

* So what we can do now is, we can go back to the main.scss file and take all our variables we have in there and put them into our variables partial file.

```scss
// $main-color: #521751;
$colors: (main: #521751, secondary: #fa923f);
$border-default: 0.05rem solid map-get($colors, main);
$size-default: 1rem;
$size-tiny: 0.2rem;
```

* The idea behind a partial is that you can include it in many other files and behind the scenes, SASS will ensure that it only gets included once or that its values are only used once.

* Now we just need to import from that file to make sure that our code works again. So back in the main.css file,

```scss
@import "_variables.scss";

@import "typography.scss";

html {
  font-size: 94.75%;
}

body {
  font-family: Arial, sans-serif;
  margin: 0;
}

.container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex: {
    direction: column;
    wrap: nowrap;
  }
  align-items: center;
  padding: $size-default * 3 0;
  box-sizing: border-box;
}

.sass-introduction {
  border: $border-default;
  background: lighten(map-get($colors, main), 72%);
  padding: $size-default * 2;
  text-align: center;
  box-shadow: $size-tiny $size-tiny $size-tiny / 2 #ccc;
  width: 90%;
  box-sizing: border-box;
}

.sass-introduction p {
  margin: 0;
}

.sass-details {
  border: $border-default;
  background: lighten(map-get($colors, main), 72%);
  padding: $size-default;
  text-align: center;
  margin: $size-default * 2 0;
  width: 90%;
  box-sizing: border-box;
}

.section-header {
  border-bottom: $size-tiny / 4 solid map-get($colors, main);
}

.section-header h1 {
  margin: 0 0 $size-default 0;
}

.documentation-links {
  list-style: none;
  margin: $size-default 0 0 0;
  padding: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;

  li {
    margin: $size-tiny 0;
    background: white;
  }

  .documentation-link {
    text-decoration: none;
    color: map-get($colors, main);
    display: block;
    padding: $size-tiny;
    border: $border-default;
  }

  .documentation-link:hover,
  .documentation-link:active {
    color: white;
    background: map-get($colors, secondary);
    border-color: map-get($colors, secondary);
  }
}

@media (min-width: 40rem) {
  html {
    font-size: 125%;
  }

  .sass-introduction,
  .sass-details {
    width: 30rem;
  }
}
```

* If you save this, it successfully compiles the main.css file again, it also successfully uses our colors and the other variables, so this seems to work but you don't see the import statement pointing to the variables.scss file because it only included this during the compilation step, looked up the values and took it into account while compiling our code but it didn't add it.

* How would I have added this anyways? These variables are not supported by normal CSS. So we're using a partial and we can also use the typography file of course.

* Let's copy the import statement from the main.scss file, let's add it to our typography file here, like this and let's also now use our map then, so map-get and now it's the colors map and the main color. Now this is not supported by the editor because this still is a CSS file, we should turn it into an SCSS file too. So now we turn this into SCSS file, which is now also using our variables.

```scss
@import "_variables.scss";

.char-highlight {
  font-weight: bold;
  font-size: 1.4rem;
  color: map-get($colors, main);
}

```
* If we save this in main.css our classes are copied.

* So now, we only have one big file and as a developer, we still work with multiple files which is typically what we want because it makes our life easier.

* If we go back to the running page and we reload it, we no longer see the typography request here hence because this is now included in the main.css file.

* So this is a cool way of creating one file which leads to less HTTP requests to be made, whilst still ensuring that we have a comfortable of way working with these files because we still work with our files, we now even have a separate file for the variables but we get one file as a result.

* And this is with the help of partials for the variables file and the better import statement which will actually include the content, as it does here for this import instead of really making a separate request.

### Improving Media Queries

* We obviously have media queries in normal CSS too and we got one at the bottom of our file here, it just changes some sizes here. Now, media queries can still be used like this, nothing wrong with that.

* Now of course you can also use SASS features, like variables or nested selectors in here if you wanted to do that, this is all normal SASS code in the end but you can also write your media queries a bit differently if you want.

* You can take that media query code here, let's say for the HTML element and go up to the HTML element and actually nest the media query now.

* Now what you can do is you can get rid of that selector, since you already nested the media query in that selector and of the first curly brace and just keep the closing curly brace of the media query and now if you save that, what this will do is, it will still generate a separate media query, so valid CSS code which nests this HTML rule

```scss
html {
  font-size: 94.75%; }
  @media (min-width: 40rem) {
    html {
      font-size: 125%; } }
```
* but you as a developer have this convenient way of keeping your media queries close to the elements which they affect. 

* you can still use the other approach of collecting all your elements that should go into a single media query but this is a way you might like because it's keeping your code closer to where you use it.

```scss
@import "_variables.scss";

@import "typography.scss";

html {
  font-size: 94.75%;
  
  @media (min-width: 40rem) {
      font-size: 125%;
  }
}

body {
  font-family: Arial, sans-serif;
  margin: 0;
}

.container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex: {
    direction: column;
    wrap: nowrap;
  }
  align-items: center;
  padding: $size-default * 3 0;
  box-sizing: border-box;
}

.sass-introduction {
  border: $border-default;
  background: lighten(map-get($colors, main), 72%);
  padding: $size-default * 2;
  text-align: center;
  box-shadow: $size-tiny $size-tiny $size-tiny / 2 #ccc;
  width: 90%;
  box-sizing: border-box;

  @media (min-width: 40rem) {
      width: 30rem;
  }
}

.sass-introduction p {
  margin: 0;
}

.sass-details {
  border: $border-default;
  background: lighten(map-get($colors, main), 72%);
  padding: $size-default;
  text-align: center;
  margin: $size-default * 2 0;
  width: 90%;
  box-sizing: border-box;

  @media (min-width: 40rem) {
    width: 30rem;
  } 
}

.section-header {
  border-bottom: $size-tiny / 4 solid map-get($colors, main);
}

.section-header h1 {
  margin: 0 0 $size-default 0;
}

.documentation-links {
  list-style: none;
  margin: $size-default 0 0 0;
  padding: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;

  li {
    margin: $size-tiny 0;
    background: white;
  }

  .documentation-link {
    text-decoration: none;
    color: map-get($colors, main);
    display: block;
    padding: $size-tiny;
    border: $border-default;
  }

  .documentation-link:hover,
  .documentation-link:active {
    color: white;
    background: map-get($colors, secondary);
    border-color: map-get($colors, secondary);
  }
}
```

###  Understanding Inheritance

* let's have a look at the inheritance and what this actually means. Inheritance means that if you got a certain ruleset for a given selector which you also want to use on a different selector, then you can simply inherit from this selector.

* Let me show you how this works. If you have a look at sass-introduction and sass-details, they're very similar. Both have a border, border default, both have this background color, both have this padding, both have text align center, both have the width and the box sizing, only the box shadow on the sass-introduction is the difference and on sass-details, we got that margin.

* So what we could do is, we could create a new class of course which we simply name sass-section where we group all the shared features,

```scss
.sass-section {
  border: $border-default;
  background: lighten(map-get($colors, main), 72%);
  padding: $size-default * 2;
  text-align: center;
  width: 90%;
  box-sizing: border-box;
  @media (min-width: 40rem) {
    width: 30rem;
  }
}

.sass-introduction { 
  @extend .sass-section;
  box-shadow: $size-tiny $size-tiny $size-tiny / 2 #ccc;
}

.sass-details {
  @extend .sass-section;
  margin: $size-default * 2 0;
}
```

* For this to work correctly, we now just need to ensure that we also add sass-section to the places where we use sass-introduction and sass-details.

* so an easier way we can use when using SASS is we can inherit from this sass-section class. This is done by using the @extend directive as it's called, this is not a normal CSS feature but a SASS-only feature and here, we simply define a class from which we want to inherit,

*  We do the same in sass-details and if you save this and reload, you again get the same result as before, even though keep in mind, we removed the sass-section here. The reason is that inheritance is the default for us. It created this new ruleset where sass-section, sass-introduction and sass-details share the same set of common rules and then we got our more specialized sets of rules for sass-introduction and sass-details.

* Now you can do more with inheritance and you can read all about that by clicking on that inheritance but this is of course a very cool feature that ensures that you can easily set up shared styles and use or add them to any other classes you get without manually having to take care that you implement that shared class in your HTML code,

### Adding Mixins

* So we had a look at the inheritance in the last video, a very useful feature that also saves us time when writing more complex code. Let's now have a look at mixins, this is a really cool feature that also allows you to save code.

* Now what are mixins? Mixins are reuseable custom functions if you want to put it like this. You already got functions, like map-get or lighten which do utility things for you and mixins are really your own functions you can write.

* They are super useful whenever you want to for example put some code which you commonly use into such a function so that you just have to include your mixin function in that place and then enter that code you outsourced.

* Well, that sounds super complicated, doesn't it?

* So let's see that in action, for example here, we got our display property in the container and we get that again further down in the documentation links class. Since I use vendor prefixes here, we get the same code four times, so we got the four display properties here.

* Now we can put this into a mixin. A mixin is created by using the @mixin directive provided by SASS, this is not a CSS feature.

* Then you define any name you want, like maybe display-flex but again, it's up to you how you rename this.  

* Thereafter, you add parentheses and you could accept arguments here, I'll show an example for this in a second too, for now we'll use this without arguments and then you simply add the code which you want to print out whenever you use that mixin,

```scss
@mixin display-flex() {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
}
```
* Now we can use that mixin in all the places where we want to enter this code.

* So we go back to the container and there, you now don't just put it in like this but instead, you add @include, another directive provided by SASS.

```scss
.container {
  @include display-flex(); /*@include then takes the mixin you want to use and don't forget the parentheses ().*/
  flex: {
    direction: column;
    wrap: nowrap;
  }
  align-items: center;
  padding: $size-default * 3 0;
  box-sizing: border-box;
}
```
* Now I can copy that and add it in the other place where I want to use that same code,

* that of course is super useful because with that now, we can put code snippets which we use quite a lot into our own mixins.

* Now another thing we could put into a mixin is our media query here.So we could add another mixin with @mixin and name this media-min-width and now here I actually want to put that media query, like this.

```scss
@mixin media-min-width($width) {
  @media (min-width: $width) {
    /* code ... code ...*/
  }
}
```
* Now we got two problems with that mixin, we hardcoded the min-width and for this application, this would even be fine because we always use 40rem but it would be nicer if we could accept this as an argument, to have a truly reusable mixin here.

* So this can be fixed by simply accepting an argument, you name this with a dollar sign at the beginning and then any name of your choice, like width

* So now we're creating a mixin where we can actually pass in different widths and the only thing that is shared amongst all the mixins is the min-width condition here, which is exactly what I want to have here.

* So we somehow need to tweak this a little bit, to not just accept an argument which gives us the width, the minimum width we set but to also be able to pass in the actual content f the media query from outside.

* Now how would that work? Inside of your mixin, you can simply add another directive, @content like this.

```scss
@mixin media-min-width($width) {
  @media (min-width: $width) {
    @content;
  }
}
```
* This now allows you to use the mixin a bit differently and pass in dynamic content.

* You would now use it by going to the place where you want to use it,

```scss
@include media-min-width(40rem) {
    font-size: 125%;
  }
```

* So this would translate to this code being added but the font size here would be placed in this @content's place here and the width passed as an argument would be used here in the min-width condition.

### Using the Ampersand Operator

* Now looking over our code, there are still some things we can improve or things that look like they could still be improved.

* Let's have a look at this hover and active thing, doesn't this look a bit strange? We've got all these nice improvements in place and still here it looks like we still have to manually create this group of selectors, which is the same selector as here, just with a pseudo selector added. Well we can handle this with SASS too.

```scss
.documentation-link {
    text-decoration: none;
    color: map-get($colors, main);
    display: block;
    padding: $size-tiny;
    border: $border-default;

    &:hover,
    &:active {
      color: white;
      background: map-get($colors, secondary);
      border-color: map-get($colors, secondary);
    }
```

* we want to apply hover and active to the documentation link, not nested to it. Now how do we do that? For this, SASS has the &, the ampersand operator. 

* This tells SASS that these pseudo selectors here and this does not only work with pseudo selectors, you could also have a normal class of for example, that they should be connected to the element here rather than nested inside of it.

* Refer : Dive deeper into Sass: https://sass-lang.com/guide
