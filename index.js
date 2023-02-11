








let count = 0;



document.getElementById('btn-add').addEventListener ('click', function (event) {

    count += 1;





    const values = document.getElementById('input').value;
    const values2 = document.getElementById('input2').value;
    const values3 = document.getElementById('input3').value;


    const body = document.createElement('tbody');


    body.innerHTML = `


    <tr>


    <td scope="row">${count}</td>



    <td>${values}</td>
    <td>${values2}</td>
    <td>${values3}</td>
    <td>

          <button id = "btn-deletes" class = " btn btn-danger">  Delete </button>
          
          
          
          
          </td>
    
    
    
    </tr>
    
    
    
    
    `

    const tables = document.getElementById('table')

    tables.appendChild(body)


    body.querySelector('#btn-deletes').addEventListener ('click', function (event) {

        event.target.parentNode.parentNode.style.display = 'none';





    })


    



    






})

document.getElementById ('btn-clear').addEventListener ('click', function (event) {





    event.target.parentNode.style.display = 'none';
})


