// Copyright (c) 2026, Akshay Patel and contributors
// For license information, please see license.txt

frappe.ui.form.on("Ride Booking", {
    refresh(frm) {
    },

    rate(frm) {
        frm.trigger("udpate_total_amount")
    },

    udpate_total_amount(frm) {
        let total_d = 0;
        for (let item of frm.doc.items) {
            total_d += item.distance;
        }
        const amount = frm.doc.rate * total_d;
        frm.set_value("total_amount", amount)
    },

});

frappe.ui.form.on('Ride Booking Item', {
    refresh(frm) {
        // your code here
    },

    distance(frm, cdt, cdn) {
        frm.trigger("udpate_total_amount");
    },
    items_remove(frm) {
        console.log("function called");
        frm.trigger("udpate_total_amount");
    }
})