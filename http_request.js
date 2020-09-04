  "use strict";
  function httpRequest() {
    console.log("ok");
    
    const Http = new XMLHttpRequest();
    const url='https://jsonplaceholder.typicode.com/posts';
    Http.open("GET", url);
    Http.send();
    

    Http.onreadystatechange = (e) => {
      console.log("hi");
      console.log(Http.responseText);
      console.log("Hello");
    }
  }