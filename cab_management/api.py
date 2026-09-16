import frappe


@frappe.whitelist(allow_guest = True)
def get_alldoctype():
    return frappe.get_all("DocType", fields=["name"])