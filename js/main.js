document.addEventListener('DOMContentLoaded', function(e) {

    //gets the appropriate content for the given fragment identifier
    //asyncron function
    function getContent(fragmentId, callback) {

        //content for each navigation link
        let partials = {
            home: "home page",
            about: "about",
            portfolio: "portfolio",
            education: "education",
            skills: "skills",
            contactMe: "contact me"
        };

        //look up the partial for the given fragment id
        callback(partials[fragmentId]);
    };


    function navigate() {

        //get a reference to the "content" div
        let conntentDiv = document.getElementById("content");

        //Isolate the fragment identifier using substr
        // this gets rid of the "#" character
        fragmentId = location.hash.substr(1);

        //set the "content" div based on the fragment identifier
        getContent(fragmentId, function(content) {
            conntentDiv.innerHTML = content;

        })

        //toggle the "activ" class on the link currently navigated to
        // setActiveLink(fragmentId);
    };

    //if no fragment identifier is provided
    if (!location.hash) {
        location.hash = "#home";
    }

    //navigate once to the initial hash value
    navigate();

    //listen for fragment identifier value changes
    // window.addEventListener("hashchange", function(e) {
    //     navigate();
    // });

    //navigete whenever the fragment identifier value changes
    window.addEventListener("hashchange", navigate);

})