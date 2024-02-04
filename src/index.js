const form = document.getElementById('link-form');
const input = document.getElementById('link-input');
const errMsg = document.getElementById('err-msg');

form.addEventListener('submit', formSubmit);

function formSubmit(event) {
  event.preventDefault();
  errMsg.innerHTML = '';
  input.classList.remove('error');
  if (input.value.trim() === '') {
    errMsg.innerHTML = 'Please enter a URL';

    input.classList.add('error');
    return;
  }
  if (!validURL(input.value.trim())) {
    errMsg.innerHTML = 'Please enter a valid URL';

    input.classList.add('error');
    return;
  }

  alert(`success ${input.value}`);
}

function validURL(str) {
  var pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
      '((\\d{1,3}\\.){3}\\d{1,3}))' +
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
      '(\\?[;&a-z\\d%_.~+=-]*)?' +
      '(\\#[-a-z\\d_]*)?$',
    'i'
  );
  return !!pattern.test(str);
}
