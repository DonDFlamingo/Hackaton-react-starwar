import './ProfilDescriptif.css'
import Abdou from '../../assets/abdou.png'


function ProfilDescriptif() {
    return <>
        <div className='DescriptifDuProfil'>
            <div className='avatarAndName'>
                <img src={Abdou} alt="PhotoProfilMercenaire" className='photoProfilPourMercenaire' />
                <p className='profilName'>Abdou Ba Fett</p>
            </div>
            <div className='Competences'>

                
                    <h1 >Information </h1>
                        <hr></hr>
                <div className='divTexteProfil'>
                    <p className='titreCompetences'>Height</p>
                    <p className='paraCompetences'>1.83m</p>
                </div>           

                <div className='divTexteProfil'>
                    <p className='titreCompetences'>Gender</p>
                    <p className='paraCompetences'> Male.</p>
                </div>

                <div className='divTexteProfil'>
                    <p className='titreCompetences'>Homeworld  </p>
                    <p className='paraCompetences'> Kamino.</p>
                </div>

                <div className='divTexteProfil'>
                    <p className='titreCompetences'>SkinColor  </p>
                    <p className='paraCompetences'> Tan.</p>
                </div>

                <div className='divTexteProfil'>
                    <p className='titreCompetences'>Species </p>
                    <p className='paraCompetences'>Human</p>
                </div>
            </div>
        </div>
    </> 
}

export default ProfilDescriptif;