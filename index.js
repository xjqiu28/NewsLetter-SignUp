document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('button');
  const input = document.querySelector("input");
  const inputValue = input.value;
  
  button.addEventListener('click', (e) => {
    e.preventDefault();
    if (inputValue.includes("@")){
        
    }
    console.log('HELLO THERE, THIS IS TESTING TO SEE IF I GOT IT CORRECT');
  });

});
