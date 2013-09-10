##Hyperlink widget for Wakanda##

The __Hyperlink__ widget allows you to create a <a> tag  whose source and text can both be datasources. You can use it to create live hyperlinks on your Page that are either email addresses or URLs.
<br /><br />
###Installation###
Place the custom widget in your computer's folder:

__On Macintosh__: /Users/*userName*/Documents/Wakanda/Widgets/<br />
__On Windows__: *diskName*:\Users\\*userName*\Documents\Wakanda\Widgets\
<br /><br />
###Utilisation###
Once installed, you can copy the Hyperlink widget to your Page.

You can either drag a datasource of type Attribute on top of the widget to define the two datasources or select the attribute in the two properties:

* __Hyperlink source__: Either an email address or a URL
* __Hyperlink text__: The text that appears in the <a>...</a> tag, which is visible on the browser.

The other properties you can define are:

* __Target__: You can select either "_blank" to force the browser to open a new page/tab or "_self" to allow the browser to replace the existing page.
* __Default text__: If you do not want to bind a datasource of type Attribute to Hyperlink text, the value in this property will be displayed each time  in the <a>...</a> tag.
* __Label__: A label that you can add to the widget.

For more information about Custom Widgets, refer to [Custom Widgets](http://doc.wakanda.org/Wakanda0.v5/help/Title/en/page3863.html "Custom Widgets") in the [Architecture of Wakanda Applications](http://doc.wakanda.org/Wakanda0.v5/help/Title/en/page3844.html "Architecture of Wakanda Applications") manual.