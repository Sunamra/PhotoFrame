<script>
	document.onkeydown = function (e) {
		if (e.keyCode == 123) { // F12 key
			return false;
		}
	};

	document.addEventListener('contextmenu', function (event) {
		event.preventDefault();
	});


</script>
