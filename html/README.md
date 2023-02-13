# Frontend Development with HTML
## 1. Web
- Client (browser) requests data/page from Server;
- Server responds with HTML/CSS/JS data (page) back to the client

## 2. Tables
- table
- thead     -> table head
- th        -> table head
- tbody     -> table body
- tr        -> table row
- td        -> table data

## 3. Blocks

- article
- aside
- dd
- div
- footer
- form
- h1-h6
- header
- hr    -> horizontal rule
- li    -> list item
- main
- nav
- ol    -> ordered list
- p     -> paragraph
- section
- table
- ul    -> unordered list
- video

## 4. Inline

- a         -> anchor
- b         -> <b>bold</b>
- br        -> new line
- button
- i         -> <i>italic</i>
- img       -> image
- input
- label
- select
- small
- span
- strong
- sub   -> H<sub>2</sub>O
- sup   -> x<sup>2</sup>
- textarea

## 5.Layout & Semantics

- Layout

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Layout & Semantics</title>
    <style>
        .box{
            background-color: blue;
            font-size: 20px;
            color: white;
            text-align: center;
            /* border: 1px solid white; */
            margin-top: 1px;
        }
        header{
            height: 100px;
            line-height: 100px;
        }
        nav{
            height: 100px;
            line-height: 100px;
        }
        section{
            height: 500px;
            line-height: 500px;
            width: 70%;
            float: left;
        }
        aside{
            height: 500px;
            line-height: 500px;
            width: 30%;
            float: right;
        }
        footer{
            height: 100px;
            width: 100%;
            line-height: 100px;
            float: left;
        }
    </style>
</head>
<body>
    <header class="box">Header</header>
    <nav class="box">Nav</nav>
    <section class="box">Section</section>
    <aside class="box">Aside</aside>
    <footer class="box">Footer</footer>
</body>
</html>


- Semantics - "semantic" = meaningful (names)

- header
- nav
- section
- aside
- footer


## 6. Head elements

- title
- style
- link      -> link to outside resources
- meta      -> used for providing extra information
- script    -> javascript code

## 7. Media files

- audio     -> audio files
- video     -> video files
- controls  -> to show controls
- iframe    -> youtube-like videos

## 8. Best Practices

- lowercase letter -> write all tags with lowercase letters, though browser works fine if tags are written in CAPITAL letters
- indentation -> abide by same indentation all the time
- inlines   -> do not use it!
- alt       -> use it always for images
- h1        -> use no more than one h1 in one page
- title and meta -> use them correctly
- validators -> use them to correct your codes: validator.w3.org

## 9. Portfolio
- [View](./portfolio/index.html)