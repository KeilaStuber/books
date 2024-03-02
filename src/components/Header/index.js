import Logo from '../Logo'
import styled from 'styled-components';
import IconsHeader from '../IconsHeader';
import OptionsHeader from '../OptionsHeader';


const HeaderContainer = styled.header`
    display: flex;
    justify-content: center;
    background-color: #FFF;
`
function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <OptionsHeader />
            <IconsHeader />
        </HeaderContainer>
    )
}

export default Header