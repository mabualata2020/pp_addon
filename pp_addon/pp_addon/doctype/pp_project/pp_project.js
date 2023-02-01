// Copyright (c) 2023, magdyabouelatta and contributors
// For license information, please see license.txt

frappe.ui.form.on('PP_Project', {
	// refresh: function(frm) {

	// }
});
frappe.ui.form.on('PP_Project', {
	

	start_date: function(frm) {
	  let d2=frm.doc.end_date
	  let d1=frm.doc.start_date
	  frm.doc.period =Math.floor(frappe.datetime.get_diff(d2,d1)/30);
	   frm.refresh_fields('period')	 
	},
	end_date: function(frm) {
	   let d2=frm.doc.end_date
	  let d1=frm.doc.start_date
	   
	   frm.doc.period =Math.floor(frappe.datetime.get_diff(d2,d1)/30);
	   frm.refresh_fields('period')

	},
	
	
});
