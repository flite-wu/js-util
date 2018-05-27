# js-util
some useful util for javascript, some base on jquery.

format-html.js
  When you change DOM with jquery or other js framework, then HTML you get from DOM may be unformatted, like:
      <ul class="list-group mc-box ui-sortable" component="listgroup"><li class="list-group-item">Cras justo odio3</li></ul>
  After formatted:
      <ul class="list-group mc-box ui-sortable" component="listgroup">
        <li class="list-group-item">
		      Cras justo odio3
	      </li>
      </ul>
  It's easy to read or edit in editor, like ace.
