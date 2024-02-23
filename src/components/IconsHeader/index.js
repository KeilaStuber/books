import './style.css'
import bag from '../../assets/bag.svg'
import profile from '../../assets/profile.svg'

const icons = [profile, bag]

function IconsHeader() {
    return (
        <ul className='icons'>
            {icons.map((icon) => (
                <li className='icon'><img src={icon}></img></li>
            ))
            }
        </ul>
    )
}

export default IconsHeader