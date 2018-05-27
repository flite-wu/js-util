# js-util
some useful util for javascript, some base on jquery.

format-html.js
  When you change DOM with jquery or other js framework, then HTML you get from DOM may be unformatted, like:
      &lt;ul class=&quot;list-group mc-box ui-sortable&quot; component=&quot;listgroup&quot;&gt;&lt;li class=&quot;list-group-item&quot;&gt;Cras justo odio3&lt;/li&gt;&lt;/ul&gt;
  After formatted:
      &lt;ul class=&quot;list-group mc-box ui-sortable&quot; component=&quot;listgroup&quot;&gt;
        &lt;li class=&quot;list-group-item&quot;&gt;
		      Cras justo odio3
	      &lt;/li&gt;
      &lt;/ul&gt;
  It's easy to read or edit in editor, like ace.
