;(function() {
    var Widget = WAF.require('waf-core/widget'),
    widget = Widget.create('Hyperlink');
    
    Widget.Hyperlink.addClass('waf-skin-textHyperlink');

	/**
	 * This method checks the data-binding datasource value. If it has changed, this function returns the new value.
	 * @class Widget.Hyperlink
	 * @method value 
	 * @param {String} myValue Value of the data-binding property (Hyperlink Source)
	 * @returns {String} Updated hyperlink
	 */
    Widget.Hyperlink.prototype.value = function(myValue) {
        if (arguments.length > 0) { // if there's a parameter, set the value
            this._value = myValue;
            this.fire(new Event.Change({
                value: myValue
            }));
            this.updateLink(); //update hyperlink
        }
        return this._value;  // otherwise, just get the value
    };

	/**
	 * This method checks the data-binding-label datasource value. If it has changed, this function returns the new value.
	 * @class Widget.Hyperlink
	 * @method label 
	 * @param {String} myValue Value of the data-binding-label property (Hyperlink Text source)
	 * @returns {String} Updated hyperlink
	 */
    Widget.Hyperlink.prototype.label = function(myValue) {
        if (arguments.length > 0) {
            this._label = myValue;
            this.fire(new Event.Change({
                value: myValue
            }));
            this.updateLink(); //update hyperlink
        }
        return this._label;
    };

	/**
	 * This function builds the hyperlink to be returned in the widget. 
	 * @class Widget.Hyperlink
	 * @method updateLink 
	 */
    Widget.Hyperlink.prototype.updateLink = function() {
    	var hyperlinkValue = this.value(), 
    		hyperlinkText = this.label();
  		if (hyperlinkValue) {   //if there is a value in the hyperlink source property   
		var prefix = /[a-z0-9._+-]+@[a-z0-9._-]+\.[a-z]{2,5}/.test(hyperlinkValue) ? 'mailto:' : '',  //test to see if the hyperlink is an email address, if so add "mailto:"
		targetToDisplay = '', 
		linkTextToDisplay = '';
  
	    if (prefix === '') {  //add target to URLs and not emails	
	  		if (hyperlinkValue && hyperlinkValue.substring(0,7)!=='http://') { //if the http:// is not in the URL, add it
	    		hyperlinkValue = 'http://'+hyperlinkValue;
	    	}
            targetToDisplay = ' target="' + this.options.target + '"';
        } else {
            targetToDisplay = '';
        }
        
        if (hyperlinkText && hyperlinkText !== '') {
        	linkTextToDisplay = hyperlinkText; //get hyperlink text
    	} else {
    		if (this.options.text) {
				linkTextToDisplay = this.options.text; //if no hyperlink text, get default text from data-text property
			} else {
				linkTextToDisplay = "Click here"; //if all else fails, use this text
			}
		}
        this.node.innerHTML = '<a ' + targetToDisplay + 'href="' + prefix + hyperlinkValue + '">' + linkTextToDisplay + '</a>'; //insert <a> tag inside the <div> tag
	  	} else {
	  		this.node.innerHTML = "";
	  	}
    };
    
    Widget.Hyperlink.makeBindableProperty(Widget.Hyperlink.prototype.value); //data-binding property 
    Widget.Hyperlink.makeBindableProperty("label", Widget.Hyperlink.prototype.label); //data-binding-label property 
})();
