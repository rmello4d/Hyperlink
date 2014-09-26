<<<<<<< HEAD
﻿(function(Hyperlink) {
=======
(function(Hyperlink) {
>>>>>>> fc98da3fb95f1cec428f47e64f7d48769f386b6c

    /*Default width and height of your widget when added to the Page*/
    Hyperlink.setWidth('200');
    Hyperlink.setHeight('20');

    /*Customize existing properties*/
    Hyperlink.customizeProperty('url', {
<<<<<<< HEAD
        title: 'URL/Email',
        description: 'A datasource attribute containing a URL or email.',
=======
        sourceTitle: 'URL Source',
        description: 'Bind a datasource containing a URL or email.',
>>>>>>> fc98da3fb95f1cec428f47e64f7d48769f386b6c
        display: false,
        sourceDisplay: true
    });
    Hyperlink.customizeProperty('urlText', {
<<<<<<< HEAD
        title: 'Link text',
        description: 'A datasource attribute containing the text to display for the hyperlink.',
=======
        sourceTitle: 'URL text Source',
        description: 'Bind a datasource containing the text to display for the hyperlink.',
>>>>>>> fc98da3fb95f1cec428f47e64f7d48769f386b6c
        display: false,
        sourceDisplay: true
    });
    Hyperlink.customizeProperty('defaultText', {
        title: 'Default text',
<<<<<<< HEAD
        multiline: 'true',
        description: 'The default text to display if the URL Text is blank.',
=======
        type: 'textarea',
        description: 'Default text to display if the URL Text Source is blank.',
>>>>>>> fc98da3fb95f1cec428f47e64f7d48769f386b6c
        display: true,
        sourceDisplay: false
    });
    Hyperlink.customizeProperty('target', {
        title: 'Target',
<<<<<<< HEAD
        description: 'Target for the URL.'
    });

    /*Include a label property*/
=======
        description: 'Default text to display if the URL Text Source is blank.',
        type: 'dropdown',
        options: ['_blank', '_self'],
        display: true,
        sourceDisplay: false
    });

    /*Create label property*/
>>>>>>> fc98da3fb95f1cec428f47e64f7d48769f386b6c
    Hyperlink.addLabel({
        defaultValue: 'Hyperlink',
        position: 'left'
    });

    /*Set the Design and Styles panels*/
    Hyperlink.setPanelStyle({
        'fClass': true,
        'text': true,
        'background': true,
        'border': true,
        'sizePosition': true,
        'label': true,
        'disabled': ['border-radius']
    });
    
});
