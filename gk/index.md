---
layout: other
pagination: 
  enabled: true
---


{% for post in paginator.posts %}
  <h1>{{ post.title }}</h1>
  <h1>{{ post.url}}</h1>
{% endfor %}