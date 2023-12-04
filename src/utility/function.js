
export   function randomNumber (min, max) { 
    return Math.floor(Math.random() * (max - min + 1)) + min;
   
}

// Function to generate a random RGB color
export  function randomColor () {
    return(
    `rgb(${randomNumber(0, 255)}, ${randomNumber(0, 255)}, ${randomNumber(0, 255)})`
    )
};

// Function to generate a random relative path to a headshot image
export  function  randomHeadshotPath  () {
    console.log(randomNumber(0,8))
    const imageUrls = `/images/headshot${randomNumber(0,8)}.jpeg`
     const randomIndex = randomNumber(0, imageUrls.length - 1);

     return imageUrls;
};
