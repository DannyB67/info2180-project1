/* Add your JavaScript to this file */
window.onload = function(){
    console.log("JavaScript is loaded and running!");
    const btns = document.getElementsByTagName("button");
    btns[0].addEventListener("click",thisFunc);



    function thisFunc(){
         event.preventDefault();
         var email = document.getElementById("email").value;
         if (email === ""){
                document.getElementsByClassName("message")[0].textContent="Please enter a valid email address.";
                return;
         }
        document.getElementsByClassName("message")[0].textContent=`Thank you! Your email address ${email} has been added to our mailing list!`;
    }
}