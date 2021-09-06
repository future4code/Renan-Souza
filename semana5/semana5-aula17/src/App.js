body {
  width: 100%;
  padding: 0;
  margin: 0;
}


.tela-inteira {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

header {
  background-color: orange;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  height: 10%;
}

main {
  min-height: 80%;
  display: flex;
}

.menu-vertical {
  flex-basis: 200px;
  border-right-style: solid;
  border-right-width: thin;
}

.botoes-meunu-vertical {
  list-style-type: none;
}

.painel-de-videos {
  padding-left: 20px;
  padding-top: 20px;
  flex-grow: 1;
  display: grid;
  grid-template-columns: repeat(4, 24.8% 0.2%);
  grid-template-rows: repeat(4, 270px 20px);
}

.media1 {
  grid-column-start: 1;
  grid-row-start: 1;
}

.media2 {
  grid-column-start: 3;
  grid-row-start: 1;
}

.media3 {
  grid-column-start: 5;
  grid-row-start: 1;
}

.media4 {
  grid-column-start: 7;
  grid-row-start: 1;
}

.media5 {
  grid-column-start: 1;
  grid-row-start: 3;
}

.media6 {
  grid-column-start: 3;
  grid-row-start: 3;
}

.media7 {
  grid-column-start: 5;
  grid-row-start: 3;
}

.media8 {
  grid-column-start: 7;
  grid-row-start: 3;
}


.box-pagina-principal {
  display: grid;
  grid-template-rows: 3fr 1fr;
  grid-template-columns: 1fr;
  border-style: solid;
  border-width: thin; 
  align-items: start;
  justify-items: stretch;
}


footer {
  height: 10%;
  background-color: grey;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
}

.box-pagina-principal > img {
  width: 100%;
  height: 200px;
}

h4 {
  margin-left: 20px;
}

