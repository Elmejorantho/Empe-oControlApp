const form = document.querySelector('#form');
const table = document.querySelector('#table-body')
const tipoDeItem = document.querySelector('#Type-of-item');
const modelOfItem = document.querySelector('#Model');
const anhoDelItem = document.querySelector('#Year-of-item');
const costOfItem = document.querySelector('#Cost-of-item');
const dateIncome = document.querySelector('#Date-of-item-income');
const nameOwner = document.querySelector('#name-of-owner');
const ownerNumber = document.querySelector('#number-of-owner');

const formBtn = document.querySelector('#add-control-btn');


form.addEventListener('submit', e => {
e.preventDefault();
const tipo = tipoDeItem.value;
const modelo = modelOfItem.value;
const anho = anhoDelItem.value;
const costo = costOfItem.value;
const fecha = dateIncome.value;
const nombre = nameOwner.value;
const numero = ownerNumber.value;



const newItemT = document.createElement('tr');
newItemT.innerHTML = `
<td>${tipo}</td>
<td>${modelo}</td>
<td>${anho}</td>
<td>${costo}</td>
<td>${fecha}</td>
<td>${nombre}</td>
<td>${numero}</td>
<td><button class="status-Button">Ver</button></td>
<td><button class="delete-Button">Borrar</button></td>
<td><button class="recibo-Button">Recibo</button></td>

`


table.appendChild(newItemT);

tipoDeItem.value = ('');
modelOfItem.value = ('');
anhoDelItem.value = ('');
costOfItem.value = ('');
dateIncome.value = ('');
nameOwner.value = ('');
ownerNumber.value = ('');
alert(message = 'Has agregado un nuevo Item satisfactoriamente');

newItemT.children[7].addEventListener('click', e =>{
    if (e.target.classList.contains('status-Button')) 
    { let status = window.open("", "MsgWindow", "width=600,height=400");
    status.document.write(`
            <style>
::before,
::after{
    box-sizing: border-box;
    /* 1 */
    border-width: 0;
    /* 2 */
    border-style: solid;
    /* 2 */
    /* 2 */
}

body {
    position: relative;
    background-image:url(/img/diamond-1186139_960_720.jpg);
    background-position: center;
    background-size:cover; 
    }

h2 {
    font-size: 2.5rem;
    font-weight: bold;
}

.contenedor-vencimiento{
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

}

.contador{
    display: flex;
    justify-content: space-around;
    text-align: center;
}

.dias,.horas,.minutos,.segundos {
font-size: 2rem;
}
            </style>
            
            
            <section class="contador-vecimiento">
            <div>
              <h2> Tiempo restante para el pago del prestamo al el cliente *${nombre}* </h2>
              <div class="contador">
                <div class="contendor-Dia">
                  <h3 class="Dias">Tiempo</h3>
                  <h3>Dias</h3>
                  <div class="contendor-horas">
                    <h3 class="Horas">Tiempo</h3>
                    <h3>Horas</h3>
                  </div>
                  <div class="contendor-Minutos">
                    <h3 class="Minutos">Tiempo</h3>
                    <h3>Minutos</h3>
                  </div>
                  <div class="contendor-Segundos">
                    <h3 class="segundos">Tiempo</h3>
                    <h3>Segundos</h3>
                  </div>
                </div>
              </div>
            </div>
          </section>
        
            
            <script>

            function contador() {
              const fechaDeIngreso = new Date('May 17, 2023 00:00:00').getTime();
              const fechaDeLimite = new Date().getTime;
              const restador = fechaDeIngreso - fechaDeLimite;
              
              //Temporizadores
              const segundos = 1000;
              const minutos = segundos * 60;
              const horas = minutos * 60;
              const dias = horas * 24;
              
              //Conteo
          
               const diasTemporizados = Math.floor(restador / dias); 
               const horasTemporizadas = Math.floor((restador % dias ) / horas); 
               const minutosTemporizados = Math.floor((restador % horas ) / minutos);
               const segundosTemporizados = Math.floor((restador % minutos ) / segundos);

              document.querySelector(".Dias").innerText = diasTemporizados;
              document.querySelector(".Horas").innerText = horasTemporizadas;
              document.querySelector(".Minutos").innerText = minutosTemporizados;
              document.querySelector(".segundos").innerText = segundosTemporizados;
          };
          
          setInterval(contador(), 1000);

            </script>
    `
        
    );

}});

newItemT.children[8].addEventListener('click', e =>{
    if(e.target.classList.contains('delete-Button'))
    {e.target.parentElement.parentElement.remove();
    alert(message = 'Has borrado un item satisfactoriamente')
    }
});

newItemT.children[9].addEventListener('click', e =>{
if (e.target.classList.contains('recibo-Button')) 
{ let recibo = window.open("", "MsgWindow", "width=900,height=600");
      recibo.document.write
      (` <style>
        body {
            font-family: 'Domine', serif;
            min-height: 100vh;
            width: 100%;
            position: relative;
            background-image:url(/img/diamond-1186139_960_720.jpg);
            background-position: center;
            background-size:cover; 
            padding: 0 0rem;
            margin: 0; }
        p { display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: 4rem;
            color: #d5c571; }
           
            @media print {
                #printPageButton {
                  display: none;
                }
              }

         </style>
        

         <div class"div-container-recibo">
         <p>
        Tipo:${tipo}<br>
        Modelo:${modelo}<br>
        Anho:${anho}<br>
        Costo:${costo}<br>
        Fecha:${fecha}<br>
        Nombre:${nombre}<br>
        </p>
        </div>

        <button id="printPageButton" onclick="imprimirRecibo()">Imprimir Recibo</button><br>
        <script>
        function imprimirRecibo() {
        var myWindow = window.print()
        };
        </script>`)


}
});

});





