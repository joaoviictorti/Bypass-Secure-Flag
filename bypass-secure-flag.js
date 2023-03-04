Java.perform(function () {
	var surface_view = Java.use("android.view.Surface_view");
	var set_secure = surface_view.setSecure.overload("boolean");
	set_secure.implementation = function (flag) {
		console.log("setSecure() flag called with args: " + flag);
		set_secure.call(false);
	};

	var window = Java.use("android.view.Window");
	var set_flags = window.setFlags.overload("int","int");
	var window_manager = Java.use("android.view.WindowManager");
	var layout_params = Java.use("android.view.WindowManager$LayoutParams");

	set_flags.implementation = function (flags, mask) {
		flags = (flags.value & ~layout_params.FLAG_SECURE.value);
		set_flags.call(this,flags,mask);
	};
});