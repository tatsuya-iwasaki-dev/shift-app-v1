const button = document.getElementById('button');

button.addEventListener('click', function() {
  const name = document.getElementById('name-select').value;
  const date = document.getElementById('date').value;
  const shiftRadio = document.querySelector('input[name="shift"]:checked');
  const shift = shiftRadio ? shiftRadio.value : null;

  if (name === '') {
    alert('名前を選択してください');
    return;
  }
  if (date === '') {
    alert('日付を選択してください');
    return;
  }
  if (shift === null) {
    alert('勤務時間を選択してください');
    return;
  }

  document.getElementById('result').textContent = name + 'さん/' + date + '/' + shift;
});