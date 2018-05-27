# js-util
some useful util for javascript, some base on jquery.

format-html.js
  When you change DOM with jquery or other js framework, then HTML you get from DOM may be unformatted, like:
      %3Cul%20class%3D%22list-group%20mc-box%20ui-sortable%22%20component%3D%22listgroup%22%3E%3Cli%20class%3D%22list-group-item%22%3ECras%20justo%20odio3%3C%2Fli%3E%3C%2Ful%3E
  After formatted:
      <ul class="list-group mc-box ui-sortable" component="listgroup">
        <li class="list-group-item">
		      Cras justo odio3
	      </li>
      </ul>
  It's easy to read or edit in editor, like ace.
