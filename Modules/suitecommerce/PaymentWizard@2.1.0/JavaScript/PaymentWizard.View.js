/*
	© 2016 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

//@module PaymentWizard
define('PaymentWizard.View'
,	[	'Wizard.View'
	,	'Wizard.StepNavigation.View'

	,	'payment_wizard_layout.tpl'

	,	'underscore'
	,	'Utils'
	]
,	function (
		WizardView
	,	WizardStepNavigationView

	,	payment_wizard_layout_tpl

	,	_
	)
{
	'use strict';

	//@class PaymentWizard.View @extend Wizard.View
	return WizardView.extend({
		//@property {Function} template
		template: payment_wizard_layout_tpl
		//@property {String} bodyClass
	,	bodyClass: 'force-hide-side-nav'
		//@method initialize
    ,   initialize: function ()
        {
            WizardView.prototype.initialize.apply(this, arguments);
            this.title = _('Make a Payment').translate();
        }

    ,	childViews: {

	    	'Wizard.StepNavigation': function()
	    	{
	    		return new WizardStepNavigationView({wizard: this.wizard});
	    	}	
	    }
	});
});