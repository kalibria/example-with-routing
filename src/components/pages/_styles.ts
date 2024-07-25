import styled from "styled-components";

const NavWrapper = styled.div`
    margin-left: 10px;
    font-size: 20px;
    
    & > a {
        text-decoration: none;
        color: #1e3786
    }
    
    & > a.active {
        text-decoration: none;
        color: #03eaff
    }
    
    & > a:hover {
        color: steelblue;
    }
`

const ImgWrapper = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    gap: 20px
`

const ModelWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px
`

export const S = {
    NavWrapper,
    ImgWrapper,
    ModelWrapper
}