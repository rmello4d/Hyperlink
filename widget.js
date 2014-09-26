<<<<<<< HEAD
﻿WAF.define('Hyperlink', function() {
=======
WAF.define('Hyperlink', function() {
>>>>>>> fc98da3fb95f1cec428f47e64f7d48769f386b6c
    var widget = WAF.require('waf-core/widget');
    var Hyperlink = widget.create('Hyperlink');

    /**
     * This function builds the hyperlink to be returned in the widget. 
     * @class Hyperlink
     * @method updateLink 
     */
    Hyperlink.prototype._updateLink = function() {
        var hyperlinkValue = this.url(),
            hyperlinkText = this.urlText(),
            targetText = this.target(),
            hyperlinkDefaultText = this.options.defaulttext; // binded properties
<<<<<<< HEAD
        if (hyperlinkValue && hyperlinkValue !== '') { //if there is a value in the hyperlink source property   
=======
        if (hyperlinkValue) { //if there is a value in the hyperlink source property   
>>>>>>> fc98da3fb95f1cec428f47e64f7d48769f386b6c
            var prefix = /[a-z0-9._+-]+@[a-z0-9._-]+\.[a-z]{2,5}/.test(hyperlinkValue) ? 'mailto:' : '',
                //test to see if the hyperlink is an email address, if so add "mailto:"
                targetToDisplay = '',
                linkTextToDisplay = '';

            if (prefix === '') { //add target to URLs and not emails	
                if (hyperlinkValue && hyperlinkValue.substring(0, 7) !== 'http://') { //if the http:// is not in the URL, add it
                    hyperlinkValue = 'http://' + hyperlinkValue;
                }
                targetToDisplay = ' target="' + targetText + '"';
            } else {
                targetToDisplay = '';
            }

            if (hyperlinkText && hyperlinkText !== '') {
                linkTextToDisplay = hyperlinkText; //get hyperlink text
            } else {
                if (hyperlinkDefaultText) {
                    linkTextToDisplay = hyperlinkDefaultText; //if no hyperlink text, get default text from data-text property
                } else {
                    linkTextToDisplay = "Click here"; //if all else fails, use this text
                }
            }
            this.node.innerHTML = '<a ' + targetToDisplay + 'href="' + prefix + hyperlinkValue + '">' + linkTextToDisplay + '</a>'; //insert <a> tag inside the <div> tag
        } else {
            this.node.innerHTML = ""; //no URL available
        }
    };


    Hyperlink.addProperty("url", { //data-binding-url property 
        onChange: function(myValue) {
            this._updateLink(); //update hyperlink when the URL Text property is changed
        }
    });

    Hyperlink.addProperty("urlText", { //data-binding-urlText property 
        onChange: function(myValue) {
            this._updateLink(); //update hyperlink when the URL Text Source property is changed 
        }
    });

<<<<<<< HEAD
    Hyperlink.addProperty("defaultText", { //data-defaulttext property
        type: 'string',
        defaultValue: 'Click here'
    });

	Hyperlink.addProperty('target', { //data-target property
	    type: 'enum',
	    "values": {
	        _blank: '_blank',
	        _self: '_self'
	    },
	    bindable: false
	});
	
=======
    Hyperlink.addProperty("target"); //data-target property
    Hyperlink.addProperty("defaultText", { //data-defaulttext property
        defaultValue: 'Click here'
    });

>>>>>>> fc98da3fb95f1cec428f47e64f7d48769f386b6c
    return Hyperlink;

});
