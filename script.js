// //listening element//
document.addEventListener('DOMContentLoaded', function () {
    var _a;
    function validateForm(event) {
        var _a;
        event.preventDefault();
        var form = document.getElementById("resumeForm");
        if (!form.checkValidity()) {
            alert("Please fill all required fields correctly.");
            return false;
        }
        (_a = document.getElementById("generate-resume")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
            var _a;
            var name = document.getElementById("name").value;
            var phone = document.getElementById("phone").value;
            var email = document.getElementById("email").value;
            var address = document.getElementById("address").value;
            var skills = document.getElementById("skills").value;
            var education = document.getElementById("education").value;
            var experience = document.getElementById("experience").value;
            var picture = (_a = document.getElementById("picture").files) === null || _a === void 0 ? void 0 : _a[0];
            if (picture) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    var _a;
                    document.getElementById("displayPicture").src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
                };
                reader.readAsDataURL(picture);
            }
            document.getElementById("displayName").innerText = name;
            document.getElementById("displayPhone").innerText = phone;
            document.getElementById("displayEmail").innerText = email;
            document.getElementById("displayAddress").innerText = address;
            document.getElementById("displaySkills").innerText = skills;
            document.getElementById("displayEducation").innerText = education;
            document.getElementById("displayExperience").innerText = experience;
        });
        var dispalyName = document.getElementById("displayName");
        dispalyName.contentEditable = "true";
        return true;
    }
    (_a = document.getElementById("generate-resume")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", validateForm);
});
