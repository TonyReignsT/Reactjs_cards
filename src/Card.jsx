import profilepic from './assets/TONY.jpeg'

function card(){
    return(
        <div className="card">
            <img className='card-image' src={profilepic} alt="My Profile Picture" />
            <h2 className='card-title'>Antony Ochieng</h2>
            <p className='card-text'>I am a Software Developer and i also love travelling.</p>

        </div>
    );
}

export default card