import './ProfilDescriptif.css'
import Abdou from '../../assets/abdou.png'


function ProfilDescriptif() {
    return <>
    <   div className='DescriptifDuProfil'>
            <img src={Abdou} alt="PhotoProfilMercenaire" className='photoProfilPourMercenaire' />
            <div className='Competences'>

                <div className='div1'>
                    <h2 >DOSSIER </h2>
                </div>

                <div className='div2'>
                    <p className='titreCompetences'>Name</p> 
                    <p className='paraCompetences'> Abdou Ba Fett </p>
                </div>
                
                <div className='div3'>
                    <p className='titreCompetences'>Height</p>
                    <p className='paraCompetences'>1.83m</p>
                </div>           

                <div className='div4'>
                    <p className='titreCompetences'>Gender</p>
                    <p className='paraCompetences'> Male.</p>
                </div>

                <div className='div5'>
                    <p className='titreCompetences'>Homeworld  </p>
                    <p className='paraCompetences'> Kamino.</p>
                </div>

                <div className='div6'>
                    <p className='titreCompetences'>SkinColor  </p>
                    <p className='paraCompetences'> Tan.</p>
                </div>

                <div className='div7'>
                    <p className='titreCompetences'>Species </p>
                    <p className='paraCompetences'>Human</p>
                </div>
            </div>
        </div>
    </> 
}

export default ProfilDescriptif;