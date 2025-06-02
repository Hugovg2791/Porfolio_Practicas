const btnIdioma = document.getElementById('idioma');
const divsEs = document.getElementsByClassName('es');
const divsEn = document.getElementsByClassName('enb');
const FooterEs = document.getElementsByClassName('esFooter');
const FooterEn = document.getElementsByClassName('enFooter');
let esEspañol = true;

    for (let div of divsEn) {

        div.style.display = 'none';
    }
    for (let footer of FooterEn) {

        footer.style.display = 'none';
    }
            esEspañol = true;

btnIdioma.addEventListener('click', () => {


if (esEspañol === true){

    for (let div of divsEs) {

        div.style.display = 'none';
    }
    

    for (let div of divsEn) {

        div.style.display = 'block';
    }

    
    for (let footer of FooterEs) {

        footer.style.display = 'none';
    }

    for (let footer of FooterEn) {

        footer.style.display = 'block';
        esEspañol = true;
    }
        esEspañol = false;
}else{
        for (let div of divsEs) {

        div.style.display = 'block';
    }
    

    for (let div of divsEn) {

        div.style.display = 'none';
    }

    
    for (let footer of FooterEs) {

        footer.style.display = 'block';
    }

    for (let footer of FooterEn) {

        footer.style.display = 'none';
        esEspañol = true;
    }
        esEspañol = true;
}








});
