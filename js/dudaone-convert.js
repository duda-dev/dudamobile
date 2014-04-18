function showError(input, msg) {
	input.parent().find('label.error').text(msg).fadeIn();
}

// initialize autocomplete
	 	function _handleFBSearchRes(res) {
	 		
			jQuery(".urlInput").val(res);
			jQuery(".urlInput").change();
		}
		
		try {
			jQuery.getScript(domain + "/editor/nee/utils/nee.controls-simple.js", function() {
				jQuery(".urlInput").each(function(){
					jQuery(this).dmGeneralAutoComplete({facbookPages: true, webUrl: true, prefixToIgnore: "https://facebook.com/", 
						cssClass: "bfsAutoComplete", width: "278px", height: "198px", callback: _handleFBSearchRes});
				});
			});			
		} catch (e) {
			console.error("Could not initialize dmGeneralAutoComplete: " + e.message);
		}