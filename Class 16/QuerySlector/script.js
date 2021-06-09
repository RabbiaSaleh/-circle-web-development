function login()
{
/* 
   
    1. Access html input element
    2. Get value of html input element
    3. Access h1 element
    4.change content of h1 element
*/
    // 1.Access html input element
    
    let InputElement = document.querySelector('input');
    console.log(InputElement);

   
    // 2. get input element value
    let InputValue =InputElement . value ;
    console.log(InputValue);

    // 3. Access H1 element
    let headingElement = document.querySelector('h1 > span');
    console.log(headingElement);

    // 4.change content of h1 element
    headingElement.innerHTML= InputValue


}