import bag from '../../assets/bag.svg'
import styled from 'styled-components'
import profile from '../../assets/profile.svg'

const icons = [profile, bag]

const Icon = styled.li `
    width: 25px;
    margin-right: 40px;
}`

const Icons = styled.ul`
    display: flex;
    align-items: center;
`

function IconsHeader() {
    return (
        <Icons>
            {icons.map((icon) => (
                <Icon><img src={icon}></img></Icon>
            ))
            }
        </Icons>
    )
}

export default IconsHeader