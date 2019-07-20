# CSS-Complete-Guide

##  What is CSS ? 

* CSS stands for Cascading Style Sheets, But the core idea behind CSS is that it makes your web page look good.

* basically it allows you to turn your boring HTML page into an exciting and good looking website

```css
<style>
    body {
        font-family: "Montserrat", sans-serif;
    }

    .destination {
        box-sizing: border-box;
        width: 320px;
        height: 420px;
        margin: 20px auto;
        border: 1px solid #aaa;
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
        cursor: pointer;
        transition: background-color 400ms ease-out;
    }

    .destination:hover,
    .destination:active {
        background-color: #fa923f;
        color: white;
    }

    .thumbnail {
        width: 100%;
        height: 300px;
        overflow: hidden;
    }

    .thumbnail img {
        width: 100%;
    }

    .content {
        text-align: center;
    }

    .content h1 {
        margin: 10px 0;
    }
</style>
```
* Wait we will go through this CSS code before that lets connetct this css with our HTML and now our html looks very pleasent.

## History

* CSS was first introduced in 1996, we refer to this as CSS version 1,

* Now only two years later, we got CSS version 2.-1998

* CSS3 still in development. Isn't that strange? Will there ever be a version 4 at some point in time?No. We'll never get a CSS version 4 because with CSS version 3, the concept or the approach toward CSS, towards the development of CSS, changed. 

* Rather than focusing on different versions, they now split up CSS into a couple of modules which are organized by the feature they cover.

* So things like modules on coloring text, modules which focus on shadows, modules which focus on animations. We've got different versions of these modules and new modules and module versions are continuously added in the future, simply to keep up with modern developments and to keep CSS dynamic.

* The important takeaway for you is that CSS simply keeps evolving, it still is under active development and we will see new and improved features in the future too

* World Wide Web Consortium (W3C) CSS Working Groups: https://www.w3.org/TR/tr-groups-all#tr_Cascading_Style_Sheets__CSS__Working_Group

## Diving Into the Basics of CSS

