// //listening element//
document.addEventListener('DOMContentLoaded' , ()=>{
    function validateForm(event:Event) {
        event.preventDefault();
        const form = document.getElementById("resumeForm") as HTMLFormElement;
        if (!form.checkValidity()) {
            alert("Please fill all required fields correctly.");
            return false;
        }
     

    document.getElementById("generate-resume")?.addEventListener("click",function(){
        const name = (document.getElementById("name") as HTMLInputElement).value;
        const phone = (document.getElementById("phone") as HTMLInputElement).value;
                const email = (document.getElementById("email") as HTMLInputElement).value;
                const address = (document.getElementById("address") as HTMLTextAreaElement).value;
                const skills = (document.getElementById("skills") as HTMLInputElement).value;
                const education = (document.getElementById("education") as HTMLTextAreaElement).value;
                const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
                const picture = (document.getElementById("picture") as HTMLInputElement).files?.[0];
                if (picture) {
                    const reader = new FileReader();
                    reader.onload = function (e) {
                        (document.getElementById("displayPicture") as HTMLImageElement).src = e.target?.result as string;
                    };
                    reader.readAsDataURL(picture);
                }
                (document.getElementById("displayName") as HTMLElement).innerText = name;
                (document.getElementById("displayPhone") as HTMLElement).innerText = phone;
                (document.getElementById("displayEmail") as HTMLElement).innerText = email;
                (document.getElementById("displayAddress") as HTMLElement).innerText = address;
                (document.getElementById("displaySkills") as HTMLElement).innerText = skills;
                (document.getElementById("displayEducation") as HTMLElement).innerText = education;
                (document.getElementById("displayExperience") as HTMLElement).innerText = experience;
                
            })

            const dispalyName = document.getElementById("displayName") as HTMLElement;
            dispalyName.contentEditable="true"
            
            return true;

        }
        document.getElementById("generate-resume")?.addEventListener("click",validateForm)
    })