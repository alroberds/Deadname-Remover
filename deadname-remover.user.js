// ==UserScript==
// @name         Deadname-Remover
// @version      1.1.2
// @description  Replace dead names with preffered names.
// @author       William Hayward
// @license      MIT
// @match        *://*/*
// @grant        none
// @run-at       document-start
// @namespace    https://github.com/WillHayCode/Deadname-Remover
// @supportURL   https://github.com/WillHayCode/Deadname-Remover/issues
// @require      https://github.com/WillHayCode/Deadname-Remover/blob/master/deadname-remover.require.js
// @updateURL    https://github.com/WillHayCode/Deadname-Remover/blob/master/deadname-remover.meta.js
// @downloadURL  https://github.com/WillHayCode/Deadname-Remover/blob/master/deadname-remover.user.js
// ==/UserScript==

(function() {
    'use strict';
    const settings = {
		name: {
			first: "Al",
			middle: "",
			last: ""
		},
		deadname: [
			{
				first: "Allison",
				middle: "",
				last: ""
			}
		],
		enabled: true,
		stealthMode: false,
		highlight: false
	}
    DeadnameRemover.start(settings);
})();
