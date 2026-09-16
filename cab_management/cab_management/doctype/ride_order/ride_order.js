// Copyright (c) 2026, Akshay Patel and contributors
// For license information, please see license.txt

frappe.ui.form.on("Ride Order", {
    onload() {
        console.log("Calling from on load");
    },
    setup(frm) {
        console.log("calling form the setup");
    },

    refresh(frm) {
        console.log("calling form refresh");
        if (frm.doc.status !== "Approved") {
            frm.add_custom_button("Accept Ride", () => {
                frm.set_value("status", "Approved");
                frm.save()
            })
        }
    },

    status(frm){
        console.log("status changed");
    }
});
