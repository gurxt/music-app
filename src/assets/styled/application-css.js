import styled from 'styled-components'

const ApplicationCSS = () => {
   const C = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        background: #222;
        color: #fff;
   `

   return { C } 
}

export default ApplicationCSS()
