(function() {
    "use strict"
    
    // for personal information language
    const multipleCancelButton = new Choices(
        '#language',
        {
            allowHTML: true,
            removeItemButton: true,
        }
    );
    
    // for personal information language
    const multipleCancelButton2 = new Choices(
        '#skills',
        {
            allowHTML: true,
            removeItemButton: true,
        }
    );
    
    // for personal information language
    const multipleCancelButton3 = new Choices(
        '#qualification',
        {
            allowHTML: true,
            removeItemButton: true,
        }
    );
    /* For Date Range Picker */
    flatpickr("#job-deadline", {
        mode: "range",
        dateFormat: "Y-m-d",
    });
     
})();