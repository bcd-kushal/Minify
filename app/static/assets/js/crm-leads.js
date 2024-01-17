/* Image upload */
let loadFile = function (event) {
  var reader = new FileReader();
  reader.onload = function () {
    var output = document.getElementById("profile-img");
    if (event.target.files[0].type.match("image.*")) {
      output.src = reader.result;
    } else {
      event.target.value = "";
      alert("please select a valid image");
    }
  };
  reader.readAsDataURL(event.target.files[0]);
};

// for profile photo update
let ProfileChange = document.querySelector("#profile-change");
ProfileChange.addEventListener("change", loadFile);

/* multi select with remove button */
const multipleCancelButton = new Choices("#choices-multiple-remove-button1", {
  allowHTML: true,
  removeItemButton: true,
});
const multipleCancelButton1 = new Choices("#choices-multiple-remove-button2", {
  allowHTML: true,
  removeItemButton: true,
});
const multipleCancelButton2 = new Choices("#choices-multiple-remove-button3", {
  allowHTML: true,
  removeItemButton: true,
});

/* For Delete Contact */
let invoicebtn = document.querySelectorAll(".contact-delete");
invoicebtn.forEach((eleBtn) => {
  eleBtn.onclick = () => {
    let invoice = eleBtn.closest(".crm-contact");
    invoice.remove();
  };
});
