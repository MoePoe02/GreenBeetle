const TInum1 = document.getElementById('TInum1');
const TInum2 = document.getElementById('TInum2');

const cargarTexto = (entradas, observador) => {


    entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
            entrada.target.classList.add('visible');
        }
    });

}

const observador = new IntersectionObserver(cargarTexto,{
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 1.0
});

observador.observe(TInum1);
observador.observe(TInum2);
