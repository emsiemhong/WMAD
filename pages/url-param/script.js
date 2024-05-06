const theName = document.getElementById("name");
const age = document.getElementById("age");
const myClass = document.getElementById("class");


// theName.innerText = "aaa"; //  using URL parameter to get value and replace "aaa"
// age.innerText = 2222; //  using URL parameter to get value and replace 2222
// myClass.innerText = "cc"; //  using URL parameter to get value and replace "cc"


function redirectToAnotherPage() {
    // Information to pass
    const name = "John";
    const age = 30;
    const myClass = "Science";

    // Constructing the URL with parameters
    const url = `anotherPage.html?name=${encodeURIComponent(name)}&age=${encodeURIComponent(age)}&class=${encodeURIComponent(myClass)}`;

    // Redirecting to the target page
    window.location.href = url;
  }