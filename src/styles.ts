import { css } from "lit";


export  const mainStyles = css`

    body {
      display: flex;
      align-items: center;
      justify-content: center;

    }

    container {
      display: flex;
      align-items: center;
      justify-content: center;
      align-self:center;
      justify-self: center;
    }

    h1 {
      text-align: center;
    }

    button {
      padding: 1rem 2rem;
      align-self: center;
      font-size: 1.2rem;
    }
    .counter-btn {
        display:flex;
        align-items: center;
        justify-content: center;
        padding: 1rem 2rem;
        margin-top: 1rem;
    }
    .counter-button__container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

    }
    .back-btn {
      background-color: '#121212" !important;
      color: white !important;
    } 
`;

