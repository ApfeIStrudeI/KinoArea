window.addEventListener('DOMContentLoaded', () => {
    const Input = document.querySelector('.search__input'),
          searchItems = document.querySelectorAll('.search .position__nameRus');

          Input.addEventListener('input', function () {
            let value = this.value.trim();
            if (value != '') {
                searchItems.forEach(function(element){
                    if (element.innerText.search(RegExp(value,"gi")) == -1) {
                        element.parentElement.parentElement.classList.add('hide');
                    } else {
                        element.parentElement.parentElement.classList.remove('hide');
                    }
                });
            } else {
                searchItems.forEach(function(element){
                    element.parentElement.parentElement.classList.remove('hide');
                });
            }
        });
});