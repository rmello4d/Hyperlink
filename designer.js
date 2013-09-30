(function() {
    var Hyperlink = Widget.Hyperlink.inherit(WAF.require('waf-behavior/studio'));

    /*Widget's display name*/
    Hyperlink.setDescription('Hyperlink');

    /*Properties*/
    Hyperlink.addAttributes([{
        name: 'data-binding',
        description: 'Hyperlink Source'
    },{
        name: 'data-binding-label',
        description: 'Hyperlink Text',
        typeValue: 'datasource'
    },{
        name: 'data-target',
        description: 'Target',
        defaultValue: '_blank',
        type: 'dropdown',
        options: ['_blank', '_self']
    },{
        name: 'data-text',
        description: 'Default Text',
        type: 'textarea'
    },{
        name: 'data-label',
        description: 'Label',
        type: 'string'
    }]);

    /*Default label position*/
	Hyperlink.setLabelPosition("left");

    /*Default size*/
    Hyperlink.setWidth('200');
    Hyperlink.setHeight('20');

    /*Events*/
    Hyperlink.addEvents([{
        'name': 'click',
        'description': 'On Click',
        'category': 'Mouse Events'
    },{
        'name': 'mouseover',
        'description': 'On Mouse Over',
        'category': 'Mouse Events'
    }]);

    /*Styles*/
    Hyperlink.setPanelStyle({
        'fClass': true,
        'text': true,
        'background': true,
        'border': true,
        'sizePosition': true,
        'label': true,
        'disabled': ['border-radius']
    });
        
    Hyperlink.on('Display', function(event) {
    	if(event['data-binding']) { 
     	   $('#' + event['id']).html('['+event['data-binding']+']');
    	}
    });

})();
