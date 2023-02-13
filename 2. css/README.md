# Complete CSS

## 1. Versions

- CSS 1.0 - 1996
- CSS 2.0 - 1998
- CSS 3.0 - 1999

## 2. Types

- ~~Inline styles~~     -> not recommended
- Internal styles       -> no comment
- **External styles**   -> recommended

## 3. Selectors

- Element (tag) 
    p{
        color:red;
    }
- Class
.className{
        color:red;
    }
- ID
#id{
    color:red;
}
- Attribute
[disabled]{
    color:red;
}
- Universal
*{
    color: red;
}

## 4. Specificity

- Cascading - one style is applied for one HTML element among multiple possible styles
    - Order: Inline styles > ID > Class > Attribute > Tag

## 5. Inheritance

- If element doesn't have styles, it inherits from parent elements
- Some styles are not inherited: [reference](https://stackoverflow.com/questions/5612302/which-css-properties-are-inherited)