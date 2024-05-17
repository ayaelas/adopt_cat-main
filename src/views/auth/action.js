// window.onload = function() {
//     alert('Welcome to Adoptifyy! Find your purrfect companion.');
//   };

  function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }
  function filterCats(type) {
    const catItems = document.querySelectorAll('.cat-item');
    const showSections = document.querySelectorAll('.show');
    catItems.forEach(item => item.style.display = 'none');
    if (type === 'all') {
        catItems.forEach(item => item.style.display = 'block');
    } else {
        catItems.forEach(item => {
            if (item.classList.contains(type)) {
                item.style.display = 'block';
            }
        });
    }

    // Optionally, hide all.show sections and then show the one corresponding to the selected type
    showSections.forEach(section => section.style.display = 'none');
    if (type!== 'all') {
        const showSection = document.querySelector(`.show[data-type="${type}"]`);
        if (showSection) {
            showSection.style.display = 'block';
        }
    }
}