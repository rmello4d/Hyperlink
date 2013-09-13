;(function() {
    var widget = Widget.Hyperlink.inherit(WAF.require('waf-behavior/studio'));

    /*Widget's display name*/
    widget.setDescription('Hyperlink');

    /*Properties*/
    widget.addAttributes([{
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
    },{
        name: 'data-label-position',
        description: 'Label position',
        defaultValue: 'left'
    }]);

    /*Default positioning*/
    widget.setWidth('200');
    widget.setHeight('20');

    /*Events*/
    widget.addEvents([{
        'name': 'click',
        'description': 'On Click',
        'category': 'Mouse Events'
    },{
        'name': 'mouseover',
        'description': 'On Mouse Over',
        'category': 'Mouse Events'
    }]);

    /*Styles*/
    widget.setPanelStyle({
        'fClass': true,
        'text': true,
        'background': true,
        'border': true,
        'sizePosition': true,
        'label': true,
        'disabled': ['border-radius']
    });
        
    widget.on('Display', function(event) {
    	if(event['data-binding']) {
     	   $('#' + event['id']).html('['+event['data-binding']+']');
    	}
    });

})();
