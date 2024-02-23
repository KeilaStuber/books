import './style.css'
const textOptions = ['CATEGORY', 'FAVORITES', 'MY BOOKSHELF']

function OptionsHeader() {
    return (
        <ul className='options'>
            {textOptions.map((text) => (
                <li className='option'><p>{text}</p></li>
            ))}
        </ul>
    )
}

export default OptionsHeader