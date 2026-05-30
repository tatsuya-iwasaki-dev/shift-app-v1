const button = document.getElementById('button');

button.addEventListener('click', function() {
  const name = document.getElementById('name-select').value;
  const date = document.getElementById('date').value;
  const shiftRadio = document.querySelector('input[name="shift"]:checked');
  const shift = shiftRadio ? shiftRadio.value : "未選択";

  document.getElementById('result').textContent = name + 'さん/' + date + '/' + shift;
});