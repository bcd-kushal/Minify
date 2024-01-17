(function () {
  "use strict";

  dragula([
    document.querySelector("#leads-discovered"),
    document.querySelector("#leads-qualified"),
    document.querySelector("#contact-initiated"),
    document.querySelector("#needs-identified"),
    document.querySelector("#negotiation"),
    document.querySelector("#deal-finalized"),
  ]);

  /* TargetDate Picker */
  flatpickr("#targetDate", {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
  });

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
  
})();
