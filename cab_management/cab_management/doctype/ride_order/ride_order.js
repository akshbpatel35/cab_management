// Copyright (c) 2026, Akshay Patel and contributors
// For license information, please see license.txt

frappe.ui.form.on("Ride Order", {
	refresh(frm) {
        frm.add_custom_button("Accept Ride", () =>{
            frm.set_value("status", "Approved");
            frm.save()
        })

	},
});
