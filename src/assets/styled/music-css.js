import styled from 'styled-components'

const CSS = () => {
    const C = styled.div`
        display: flex;
        height: 65%;
        width: 50%;
        background: #000;
        border: 1px solid #fff;
    `

    const C1 = styled.div`
        display: flex;
        height: 100%;
        width: 30%;
        border-right: 1px solid #fff;
    `

    const C2 = styled.div`
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 70%;
    `

    const C2a = styled.div`
        height: 10%;
        width: 100%;
        border-bottom: 1px solid #fff;
    `

    const C2b = styled.div`
        height: 70%;
        width: 100%;
        border-bottom: 1px solid #fff;
    `

    const C2c = styled.div`
        height: 20%;
        width: 100%;
    `

    return { C, C1, C2, C2a, C2b, C2c }
}

export default CSS()
