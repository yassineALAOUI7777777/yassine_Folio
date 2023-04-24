import 'bootstrap/dist/css/bootstrap.min.css';
function Experience() {
  <div class="p-card-body"><div class="p-card-title">Ecole Nationale des sciences appliquées d'El Jadida</div><div class="p-card-subtitle">Professeur d'enseignement supérieur assistant</div><div class="p-card-content"><div><h5>Courses:</h5><ul><li>Programmation réseau et JEE</li><li>Programmation mobile</li><li>Programmation web</li><li>Programmation multiplateforme</li></ul></div></div><div class="p-card-footer">juin 2019 - aujourd'hui</div></div>

  return (
    <section style={{ padding: '10vh 20vh 10vh 20vh', textAlign: 'left' }}>
      <div class="shadow p-3 mb-3 bg-white rounded card" >
        <div class="p-card-body">
          <div class="p-card-title" style={{fontSize: '1.5rem',fontWeight: '700',marginBottom: '0.5rem'}}>
            Formation a l'école 1337  a Khouribga
          </div>
          <div class="p-card-subtitle">
            Eleve
          </div>
          <div class="p-card-content">
            <div>
              <h5>
                <br/>
                Technologies  ( langages):
              </h5>
              <ul>
                <li>
                  Unix</li>
                <li>C,C++</li>
                
              </ul>
            </div>
          </div>
          <div class="p-card-footer">
            l'été  (mois 8 ) de l'année 2019</div>
        </div>
      </div>

      <div class="shadow p-3 mb-3 bg-white rounded card" >
        <div class="p-card-body">
          <div class="p-card-title" style={{fontSize: '1.5rem',fontWeight: '700',marginBottom: '0.5rem'}}>
           Groupe OCP Casablanca
          </div>
          <div class="p-card-subtitle">
            Stagiaire ( stage a distance)
          </div>
          <div class="p-card-content">
            <div>
              <h5>
                <br/>
                Technologies :
              </h5>
              <ul>
                
                <li>Mobile (android studio)</li>
                <li> Mysql</li>
                
              </ul>
            </div>
          </div>
          <div class="p-card-footer">
            le 05 aout 2022 -le 05  Septembre 2022</div>
        </div>
      </div>
    </section>
  )
}
export default Experience;