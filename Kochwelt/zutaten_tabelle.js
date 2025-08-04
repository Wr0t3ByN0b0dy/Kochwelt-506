    let tabelle = document.getElementById("number-of-ingredient");
    let zeilen = tabelle.getElementsByTagName("tr");

    for (let index = 0; index < zeilen.length; index++) {
        if (index % 2 !== 1) {
            zeilen[index].classList.add("table-bg");
        }
         
    }
    
    function updateIngredients(event) {
      event.preventDefault();

      let portionen = document.getElementById('amountInput').value;
      let mengenFelder = document.querySelectorAll('.zutaten-menge');

      mengenFelder.forEach(feld => {
        let basis = feld.getAttribute('data-base');
        let zutat = feld.getAttribute('data-zutat');
        let neueMenge = basis * portionen;

        feld.textContent = `${neueMenge} ${zutat}`; 
      });
    }

    