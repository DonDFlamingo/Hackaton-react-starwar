import './ProfilDescriptif.css'
import Abdou from '../../assets/abdou.png'


function ProfilDescriptif() {
    return <>
    <h1>Hello from Profil</h1>
    <   div className='DescriptifDuProfil'>
            <img src={Abdou} alt="PhotoProfilMercenaire" className='PhotoProfilPourMercenaire' />
            <div className='Compétance'>

                <div className='div1'>
                    <h2 >DOSSIER </h2>
                </div>

                <div className='div2'>
                    <p className='titreCompétance'>Nom de code </p> 
                    <p className='paraCompétance'> Abdou Ba Fett </p>
                </div>
                
                <div className='div3'>
                    <p className='titreCompétance'>Taille </p>
                    <p className='paraCompétance'>1.83m</p>
                </div>           

                <div className='div4'>
                    <p className='titreCompétance'>Genre  </p>
                    <p className='paraCompétance'> Homme.</p>
                </div>

                <div className='div5'>
                    <p className='titreCompétance'>Homeworld  </p>
                    <p className='paraCompétance'> Kamino.</p>
                </div>

                <div className='div6'>
                    <p className='titreCompétance'>SkinColor  </p>
                    <p className='paraCompétance'> Tan.</p>
                </div>

                <div className='div7'>
                    <p className='titreCompétance'>Species </p>
                    <p className='paraCompétance'>Human</p>
                </div>
            </div>
        </div>
    </> 
}

export default ProfilDescriptif;