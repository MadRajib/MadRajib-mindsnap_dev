---
layout: other
pagination: 
  enabled: true
  category: "Current-Affairs"
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


<div class="container mt-4">
{% if paginator.total_pages > 1 %}
  <nav aria-label="Page navigation ">
    <ul class="pagination justify-content-center">
       {% assign hasPrev = nil %}
       {% if paginator.previous_page %}
          
       {% else %}
          {%assign hasPrev = 'disabled' %}
       {% endif %}
       <li class="page-item {{hasPrev}}">
          <a class=" page-link btn btn-info" href="{{ paginator.previous_page_path | relative_url }}" tabindex="-1">prev</a>
      </li>

      {% assign hasNext = nil %}
      {% if paginator.next_page %}
          
      {% else %}
          {%assign hasNext = 'disabled' %}
      {% endif %}
      <li class="page-item {{hasNext}}">
        <a class="page-link btn btn-info" href="{{ paginator.next_page_path | relative_url }}" tabindex="-1">next</a>
      </li>
    </ul>
  </nav>

{% endif %}
</div>
