import transparent from '../../images/transparent_headshot.png'
import cropped from '../../images/cropped_head.png'

export default function Me() {
    return (
        <div className='headshot_container'>
            <img className='headshot' src={cropped} alt='AJ Bates II headshot' />
        </div>
    )
}