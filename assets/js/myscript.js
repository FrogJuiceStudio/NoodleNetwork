//BLOCK SUBMIT ENTER
    document.addEventListener('DOMContentLoaded', function() {
        // Disable form submission on Enter key press
        document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
        }
        });
    });

//--------------------------------------------------------------------------------
//---TEXTBOX----------------------------------------------------------------------
//--------------------------------------------------------------------------------

    //ON OFF
    document.addEventListener('DOMContentLoaded', function() 
    {
        var showTextboxButton = document.getElementById('opt-2');
        var textboxContainer = document.getElementById('textboxContainer');

        showTextboxButton.addEventListener('click', function() 
        {
            if (textboxContainer.classList.contains('hidden')) 
            {
                textboxContainer.classList.remove('hidden');
                textarea.focus();
            }
            else
            {
                textboxContainer.classList.add('hidden');
            }
        });
    });

    //ENTER
    document.addEventListener('DOMContentLoaded', function() {
        var textbox = document.getElementById('textbox');

        textbox.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            var caretPos = textbox.selectionStart;
            var currentValue = textbox.value;
            var newValue = currentValue.substring(0, caretPos) + '\n' + currentValue.substring(caretPos);
            textbox.value = newValue;
            textbox.setSelectionRange(caretPos + 1, caretPos + 1);
        }
        });
    });

    //PLACEHOLDER
    const textarea = document.getElementById('textbox');

    textarea.addEventListener('input', function() {
      if (textarea.value === textarea.getAttribute('placeholder')) {
        textarea.value = '';
      }
    });

//--------------------------------------------------------------------------------
//---RATING-----------------------------------------------------------------------
//--------------------------------------------------------------------------------

    //STARS
    const ratingContainer = document.querySelector('.rating');
    const ratingInputs = ratingContainer.querySelectorAll('input');

    ratingInputs.forEach((input) => {
    input.addEventListener('change', () => {
        const selectedRating = input.value;
        console.log('Selected rating:', selectedRating);
    });
    });

    //ON OFF
    document.addEventListener('DOMContentLoaded', function() 
    {
        var showRating = document.getElementById('opt-3');
        var ratingContainer = document.getElementById('ratingContainer');

        showRating.addEventListener('click', function() 
        {
            if (ratingContainer.classList.contains('hidden')) 
            {
                ratingContainer.classList.remove('hidden');
            }
            else
            {
                ratingContainer.classList.add('hidden');
            }
        });
    });