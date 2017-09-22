/* Customer specific js */

function apply_license_to_all(form, counter) {
	var usage = form.elements["photo_" + counter + "_usage"].value;
	var size_web = form.elements["photo_" + counter + "_size_web"].value;
	var placement_web = form.elements["photo_" + counter + "_placement_web"].value;
	var placement = form.elements["photo_" + counter + "_placement"].value;
	var runs = form.elements["photo_" + counter + "_runs"].value;
	var duration = form.elements["photo_" + counter + "_duration"].value;
	var exclusive = form.elements["photo_" + counter + "_exclusive"].value;
	var exclusive_tv = form.elements["photo_" + counter + "_exclusive_tv"].value;
	var type_tv = form.elements["photo_" + counter + "_type_tv"].value;
	var region_tv = form.elements["photo_" + counter + "_region_tv"].value;

	var day = form.elements["photo_" + counter + "_day"].value;
	var month = form.elements["photo_" + counter + "_month"].value;
	var year = form.elements["photo_" + counter + "_year"].value;
	var description = form.elements["photo_" + counter + "_description"].value;
	var publication = form.elements["photo_" + counter + "_publication"].value;

	var re = /^photo_(\d+)_(.+)$/;
	for (var i = 0; i < form.elements.length; i++) {
		if (re.test(form.elements[i].name)) {
			var result = re.exec(form.elements[i].name);

			var dst_counter = result[1];
			var name = result[2];

			form.elements[i].value = eval(name);
			if (name == "usage") {
				changeUsage(form, eval(name), dst_counter);
			}
		}
	}
}

function changeUsage(form, usage, counter) {
	var lores = new getObj('photo_' + counter + '_lores');
	var tv = new getObj('photo_' + counter + '_tv');
	var hires = new getObj('photo_' + counter + '_hires');

	if (usage == 'web') {
		lores.style.display = 'block';
		tv.style.display = 'none';
		hires.style.display = 'none';
	} else if (usage == 'tv') {
		lores.style.display = 'none';
		tv.style.display = 'block';
		hires.style.display = 'none';
	} else {
		lores.style.display = 'none';
		tv.style.display = 'none';
		hires.style.display = 'block';
	}
}
