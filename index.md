---
layout: default
title: Contents
mermaid: true
---
{% assign pages = (site.pages | sort: "order") %}
{% for page in pages %}
{% if page.order %}
- [{{ page.title }}]({{ page.url }})
{% endif %}
{% endfor %}



```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```
