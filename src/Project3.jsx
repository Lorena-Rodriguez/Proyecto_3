import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './project3.css'

function Project3() {
  const [count, setCount] = useState(0)

  return (
    <>
    
 <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"></link>

      <div className="container" id="mainContainer">
        <nav className="navBar">

          <a href="../landingPage/index.html">
            <img className="link" id="logo" src="public/logo.svg" alt="logo"></img>
          </a>

          <div className="iconHolder">

            <div className="homeIcon">
              <img className="icon" src="public/home-mobile-ui-svgrepo-com.svg" alt="icon-home"></img>
              <h3> <a className="link" href="../landingPage/index.html">Home</a> </h3>
            </div>
            <div className="helpIcon">
              <img className="icon" src="public/help-circle-svgrepo-com.svg" alt="icon-help"></img>
              <h3> <a className="link" href="#">Help</a> </h3>
            </div>
          </div>
        </nav>
      </div>

      <section className="mainGroup">
        <section className="formulary-background">
          <form className="formulary">


            <div>
              <label for="first-name">Nombre:</label>
              <input className="input" id="first-name"></input>
            </div>

            <div className="double-column">
              <div>
                <label for="first-lastname">Primer apellido:</label>
                <input className="input" id="first-lastname"></input>
              </div>
              <div>
                <label for="second-lastname">Segundo apellido:</label>
                <input className="input" id="second-lastname"></input>
              </div>
            </div>

            <div>
              <label for="email">Email:</label>
              <input type="email" className="input" id="email"></input>
            </div>

            <div>
              <label for="telephone">Teléfono:</label>
              <input className="input" id="telephone"></input>
            </div>
              <div id='send-button-container'>
                <button type='button' className='send-button'>Enviar</button> {/* Aquí faltaría el  onclick="addToTable()" */}

              </div>
          </form>
        </section>

        <section className='listAndButtonsGroup'>
          <section>

            <div className='list'>
              <h1 id='table-title'>
                Listado
              </h1>

              <table id='myTable'>

                <tr>
                  <th>
                    Nombre:
                  </th>

                  <th>
                    Primer Apellido:
                  </th>

                  <th>
                    Segundo Apellido:
                  </th>

                  <th>
                    Email:
                  </th>

                  <th>
                    Teléfono:
                  </th>

                </tr>

                <tbody id='tableBody'>

                  <tr id='row1'>
                    <td>
                      Lorena
                    </td>
                    <td>
                      Rodríguez
                    </td>
                    <td>
                      Cortés
                    </td>
                    <td>
                      lorenarodriguezc@gmail.com
                    </td>
                    <td>
                      666 333 222
                    </td>
                    
                    <td>
                      <img src='public/edit-icon.svg' className='edit-icon' alt='Editar'></img>  {/* Aquí faltaría el onclick="editRow('row1')"  */}
                      <img src='public/delete-icon.svg' className='delete-icon' alt='Eliminar'></img>  {/* Aquí faltaría el onclick="deleteRow('row1')" */}
                    </td>

                  </tr>
                </tbody>
              </table>

            </div>
          </section>


          <section className='listButton'>

            <section>
              <button type='button' id="saveListButton">
                Guardar
              </button>
            </section>



          </section>
        </section>
      </section>

    </>
  )
}
export default Project3;
