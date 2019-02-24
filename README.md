# hexo-tag-nomnoml
nomnoml-tag for hexo cms

so in your posts and pages you can use the following tag. To show an rendered SVG rather then just text.

```c++
{% nomnoml %}
#fill: #00aaff; 
[hallo] -> [world]
[tobias] love-> [Fanni]
[tobias] is on -> [earth]
[Fanni] is on -> [vanus]
{% endnomnoml %}
```

# installation
just go into the directory of your hexo webside and
```bash
npm install --save hexo-tag-nomnoml
```

# todo 
allow arguments so that you can specify some attributes of the img-html-tag. to have thumbnail and enlarge on click. 