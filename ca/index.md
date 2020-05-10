---
layout: other
pagination: 
  enabled: true
---

{% for post in paginator.posts %}
<div class="card">
  <div class="card-body">
    <h5 class="card-title"><a href="{{ site.baseurl | append: post.url }}">{{ post.title }}</a></h5>
    <p class="card-text">
      {{ post.summary}}
    </p>
      <div class="td-post-date two">
        <i class="far fa-clock"></i>
              {{post.date}}
        <a href="#">
          <i class="far fa-comment-alt"></i>
            0
        </a>
      </div>
  </div>
</div>
{% endfor %}
