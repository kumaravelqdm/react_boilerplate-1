export const ValidateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return Boolean(re.test(email));
};

export const IsNumberKey = (e, isNumber) => {
  if (isNumber) {
    if (e.target.value.length <= 10) {
      if (!(e.which >= 48 && e.which <= 57)) e.preventDefault();
    }
  }
};

export const IsNumberKeyDown = (e, isNumber) => {
  if (isNumber) {
    if (e.target.value.length <= 10) {
      if (e.which === 38 || e.which === 40) e.preventDefault();
    }
  }
};

export const IsTextKeyDown = (event, isOnlyText) => {
  var inputValue = event.which;
  
  if(isOnlyText){
    if (!((inputValue >= 65 && inputValue <= 90)||(inputValue >= 97 && inputValue <= 122)) && inputValue !== 32 && inputValue !== 0) {
      event.preventDefault();
    }
  }

};
