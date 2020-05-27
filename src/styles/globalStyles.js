import styled from 'styled-components'


export const Cursor = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 15px;
    height: 15px;
    border-radius: 100%;
    background: ${props => props.theme.text};
    transform: translate(-50%, -50%);
    transition: all 0.1s ease-in-out;
    transition-property: width, height, border;
    will-change: width, height, transform, border;
    pointer-events: none;
    z-index: 999;
`