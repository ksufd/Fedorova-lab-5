openblock = id => {
    document.getElementById(id).style.display = 'block';
    document.getElementById('background').style.display = 'block';
  };
closeblock = (class_name) => {
    Array.from(document.querySelectorAll('.newblock')).forEach(item => item.style.display = 'none')
    document.getElementById('background').style.display = 'none';
}