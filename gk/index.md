---
title : General Knowledge
layout: other
pdf_folder: "gk-pdf"
image: gk.svg
pagination: 
  enabled: true
  category: "General-Knowledge"
---
<div class="container">
  <ul class="nav nav-tabs nav-pills">
    <li>
      <a class="nav-link active" data-toggle="tab" href="#feed">Feeds</a>
    </li>
    <li>
      <a class="nav-link" data-toggle="tab" href="#quiz">Quizes</a>
    </li>
  </ul>

  <div class="tab-content">
    <div id="feed" class="tab-pane active">

      <!-- Feed cards and paginator include -->

      {% include feed-cards-paginator.html%}

    </div>
    <div id="quiz" class="tab-pane fade">

      <!-- Quiz cards include -->
      {% include quiz-cards.html %}

    </div>
  </div>
</div>