const btn = document.getElementById("btnArmar");
const mensaje = document.getElementById("mensaje");
const velas = document.getElementById("velas");
const confetiContainer = document.getElementById("confeti");

const btnSoplar = document.getElementById("btnSoplar");
const pantallaCarta = document.getElementById("pantallaCarta");

let intervaloConfeti;

/* ===== ARMAR PASTEL ===== */
btn.addEventListener("click", ()=>{

  const capas = ["base","beige","rosa","blanca"];

  capas.forEach((id,i)=>{
    setTimeout(()=>{
      document.getElementById(id).style.animation =
        "caer 0.9s cubic-bezier(.34,1.56,.64,1) forwards";
    }, i*600);
  });

  // Mostrar velas y mensaje después de armar
  setTimeout(()=>{
    velas.style.opacity = 1;
    mensaje.style.opacity = 1;
    btnSoplar.style.display = "inline-block";
  }, 2600);

  lanzarConfetiPor10Segundos();

  btn.disabled = true;
});


/* ===== CONFETI 10 SEGUNDOS ===== */
function lanzarConfetiPor10Segundos(){

  intervaloConfeti = setInterval(()=>{

    for(let i = 0; i < 20; i++){

      const pieza = document.createElement("div");
      pieza.classList.add("confeti");

      pieza.style.left = Math.random() * 100 + "vw";
      pieza.style.background = `hsl(${Math.random()*360}, 100%, 50%)`;
      pieza.style.animationDuration = (2 + Math.random() * 2) + "s";

      confetiContainer.appendChild(pieza);

      setTimeout(()=>{
        pieza.remove();
      }, 4000);
    }

  }, 200);

  setTimeout(()=>{
    clearInterval(intervaloConfeti);
  }, 5000);
}


/* ===== SOPLAR CON BOTÓN ===== */
btnSoplar.addEventListener("click", ()=>{

  document.querySelectorAll(".flama").forEach(f=>f.remove());
  mensaje.innerText = "🎉 ¡Felices 21!";

  setTimeout(()=>{
    pantallaCarta.classList.add("activa");
  }, 1000);

});

