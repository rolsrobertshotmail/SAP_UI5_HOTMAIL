/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"namespace/project1_ui5_hotmail/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
