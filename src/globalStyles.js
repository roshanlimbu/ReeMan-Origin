const { createGlobalStyle } = require("styled-components");

export const GlobalStyles = createGlobalStyle`
:root{
 /* Colors */
 --background: #eff7f9;
  --black:#0a0b10;
  --purple:#803bec;
  --pink:#e5a1f8;
  --white:#fff;
  --carouselColor : #EEEDDE;
  --nav:#35353f;
  --nav2:#3f3d56;
  --fontxs: 0.75em;
  --fontsm: 0.875em;
  --fontmd: 1em; // 1em = 16px
  --fontlg: 1.25em;
  --fontxl: 2em;
  --fontxxl: 3em;
  --fontxxxl: 4em;
  --body: #fff;
  --text: #202020; //black shade
  --bodyRgba: 255, 255, 255;
  --textRgba: 32,32,32,;

}
*,*::before,*::after{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Poppins', sans-serif;
}
html{
  scroll-behavior:smooth;
  overflow-x : hidden ; 
}
    body,
    html,
    a {
        font-family: 'Poppins', sans-serif;
            }
    body {

        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: var(--background);

        overflow-x: hidden;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin:0;
        padding:0;
    }
    a {

        text-decoration: none;
        outline: none;
    }
    button{
        border:none;
        outline:none;
        &:focus{
            outline:none;
        }
    }

    *:focus {
        outline: none;
    }
    img{
        width : 100% ; 
        height : auto ;
    }


`;
