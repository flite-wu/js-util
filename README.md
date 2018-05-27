# js-util
some useful util for javascript, some base on jquery.

format-html.js<br>
&nbsp;&nbsp;When you change DOM with jquery or other js framework, then HTML you get from DOM may be unformatted, like:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ul class=&quot;list-group mc-box ui-sortable&quot; component=&quot;listgroup&quot;&gt;&lt;li class=&quot;list-group-item&quot;&gt;Cras justo odio3&lt;/li&gt;&lt;/ul&gt;<br>
&nbsp;&nbsp;After formatted:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ul class=&quot;list-group mc-box ui-sortable&quot; component=&quot;listgroup&quot;&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li class=&quot;list-group-item&quot;&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cras justo odio3<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/li&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/ul&gt;<br>
&nbsp;&nbsp;It's easy to read or edit in editor, like ace.

drag-modal.js<br>
&nbsp;&nbsp;bootstrap modal can't drag, just import this js file, without any other code.
