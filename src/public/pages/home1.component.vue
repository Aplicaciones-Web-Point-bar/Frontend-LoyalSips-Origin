<script setup>

</script>


<template>
  <div class="espacio">
  </div>
  <div class="home">
    <div class="nombre">
      Bienvenido, <br>
      Jocais Ampudia
    </div>
    <div class="contenedor2">
      <div class="separacion">

        <div class="anuncio" >
          <div class="titulo"> Bares Populares</div>
          <div class="fila" ><img src="https://cdn.discordapp.com/attachments/1146639921830973516/1156768166651887736/image.png?ex=65162bce&is=6514da4e&hm=1e5ce5bd60fc9863b212b3e3eab8fa8dfaed8cfd7758c5a6ca2b51bf9a9d08ba&">Bar Lanchita</div>
          <div class="fila" id="fl1"><img src="https://cdn.discordapp.com/attachments/1146639921830973516/1156768250667999312/image.png?ex=65162be2&is=6514da62&hm=320389f970f6ee8839a5704bfe29b4ac04f03b6d7c22b58430e25db75fa51863&">Rimberio's & Cafe</div>
          <div class="fila" id="fl2"><img src="https://cdn.discordapp.com/attachments/1146639921830973516/1156768278216196186/image.png?ex=65162be9&is=6514da69&hm=c5d913fb2298626bfa3b01a26de588ec2d098b9565beb16a409afa0cdb403842&">Berma Cocteles</div>
          <div class="fila" id="fl3"><img src="https://cdn.discordapp.com/attachments/1146639921830973516/1156768278216196186/image.png?ex=65162be9&is=6514da69&hm=c5d913fb2298626bfa3b01a26de588ec2d098b9565beb16a409afa0cdb403842&">Cocktail Bar</div>
        </div>
        <div class="anuncio" id="anun1">
          <div class="titulo">¡Ofertas especiales!</div>
          <div class="fila2" >
            <div class="imagen"><img src="https://media.discordapp.net/attachments/1146639921830973516/1156768350228205578/image.png?ex=65162bfa&is=6514da7a&hm=19450e108e3aaa296a702b7fa7e26d0f617303da7cb47ed74a98638a7d6c1d2b">
            Ron KanKun <br> 1Lt.
            </div>
            <div class="filanombre">  <img src="https://cdn.discordapp.com/attachments/1146639921830973516/1156768166651887736/image.png?ex=65162bce&is=6514da4e&hm=1e5ce5bd60fc9863b212b3e3eab8fa8dfaed8cfd7758c5a6ca2b51bf9a9d08ba&">
              Bar Lanchita </div>
            <div class="precio"> S/.15 </div>
          </div>
          <div class="fila2" >
            <div class="imagen"><img src="https://cdn.discordapp.com/attachments/1146639921830973516/1156768375125585972/image.png?ex=65162c00&is=6514da80&hm=9c916148d52bcc0115c7f74555652ab7fa05c4e0d7890ac7296878d2643908b7&">
              Russkaya <br> 0.750 Lt.
            </div>
            <div class="filanombre">  <img src="https://cdn.discordapp.com/attachments/1146639921830973516/1156768166651887736/image.png?ex=65162bce&is=6514da4e&hm=1e5ce5bd60fc9863b212b3e3eab8fa8dfaed8cfd7758c5a6ca2b51bf9a9d08ba&">
              Bar Lanchita </div>
            <div class="precio"> S/.18 </div>
          </div>

          <div class="fila2" >
            <div class="imagen"><img src="https://cdn.discordapp.com/attachments/1146639921830973516/1156768375125585972/image.png?ex=65162c00&is=6514da80&hm=9c916148d52bcc0115c7f74555652ab7fa05c4e0d7890ac7296878d2643908b7&">
              Russkaya <br> 0.750 Lt.
            </div>
            <div class="filanombre" id="flnomb1">  <img src="https://cdn.discordapp.com/attachments/1146639921830973516/1156768250667999312/image.png?ex=65162be2&is=6514da62&hm=320389f970f6ee8839a5704bfe29b4ac04f03b6d7c22b58430e25db75fa51863&">
              Rimberio’s Bar & Cafe </div>
            <div class="precio"> S/.19 </div>
          </div>
        </div>
        <div class="anuncio">
          <div class="titulo"> Puntos</div>
          <div class="baractual">
            <img src="https://cdn.discordapp.com/attachments/1146639921830973516/1156768166651887736/image.png?ex=65162bce&is=6514da4e&hm=1e5ce5bd60fc9863b212b3e3eab8fa8dfaed8cfd7758c5a6ca2b51bf9a9d08ba&">
            Estás en Bar Lachita
          </div>
          <div class="barraPuntos">
            <input type="range" class="drag__bar" id="myRange" />
          </div>

          <div class="info">
            <div class="secciones">
              <img src="https://cdn.discordapp.com/attachments/1146639921830973516/1156768420596023366/image.png?ex=65162c0b&is=6514da8b&hm=f8872af399a4cdf16eb3c3d149d17042ddd44ea60a45027f4719df4a11754e03&">
              Ahorraste
              <br>S/ 0.70
            </div>
            <div class="secciones">
              <img src="https://cdn.discordapp.com/attachments/1146639921830973516/1156768448349753344/image.png?ex=65162c11&is=6514da91&hm=7376cb26c86da7fe55257e458201b3c67645d506e0976a732bf1b8d9553f65cf&">
              Tienes
              <br>
              S/. 0.15
            </div>
          </div>

          <div class="canjear">
Canjea por producto
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<style>
.espacio{
  height: 6.5%;
}
.home{
  width: 100%;
  height: auto;
}
.nombre{
  font-size:80px;
  padding:   50px;
  color:white;
  font-family: "Arial Black";
  background-color: #343434;
  background-image: url(https://cdn.discordapp.com/attachments/1146639921830973516/1155985278352248852/PZIF43YAXRBZXEBDLIXJHDW7TY.png) ;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
.contenedor2{
  width: 100%;
  background-color: #323233;
  display: flex;
  align-items: center;
  justify-content: center;
}
.separacion{
  width: 80%;
  height: 200px;
  margin: 60px 0;
  display: flex;
  justify-content: space-between;
}

.anuncio{
  width: 25%;
  background-color: #24242d;
  margin:10px;
  border-radius: 40px;
  box-shadow: 5px 5px 15px;
  padding: 10px;
  display: flex;
  flex-direction:column;
  justify-content:space-between;
}
#anun1{
  width: 40%;
  background-color: #331e1f;
}

.anuncio .titulo{
  color: white;
  font-size: 29px;
  font-family: "Arial Black";
  display: flex;
  justify-content: center;
}

.fila{
  color: white;
  background-color: #393944;
  height: 15%;
  border-radius: 15px;
  display: flex;
  align-items: center;
  margin: 10px 20px;
  font-family: "Arial Black";
}

#fl1{
  background-color: #000000;
  color: #ddb2f6;
}

#fl2{
  background-color: #000000;
  color: #31c5ff;
}
#fl3{
  background-color: #120f65;
}

.fila img{
  width: 20%;
  margin: 0px 20px;
}

.fila2{
  height: 25%;
  border-radius: 15px;
  display: flex;
  align-items: center;
  margin: 10px 20px;
  font-family: "Arial Black";
}

.imagen{
  font-family: "Arial";
  background-color: #5d5d5d;
  border-radius: 15px;
  display: flex;
  flex-direction:column;
  align-items: center;
  font-size: 10px;
  color: white;
  padding: 2px 0;
}

.imagen img{
  width: auto;
  height: 70px;
  padding: 5px 10px;

}

.filanombre{
  color:white;
  font-size: 14px;
  background-color: #2c2c2c;
  border-radius: 8px;
  padding: 5px;
 display: flex;
  align-items: center;
  margin: 0 20px;
}

#flnomb1{
  background-color: #000000;
  color: #dbb1cc;

}

.filanombre img{
  width: 18%;
  margin: 0px 10px;
}

.precio{
  font-size: 20px;
  color: black;
  background-color: #eaeaea;
  border-radius: 8px;
  padding: 5px;
}

.fila2 >img{
  width: 20%;
  margin: 0px 20px;
}

.baractual{
  border-radius: 15px;
  color:white;
  background-color: #58588d;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 0;
  margin: 0 20px;
}
.baractual img{
  height: 60px;
  margin: 0 7px;
}

.barraPuntos{

  display: flex;
  align-items: center;
  justify-content: center;
}

.info{
  height: auto;
  display: flex;
  justify-content: center;
}
.secciones{
  width: 50%;
  color:white;
  padding: 15px;
  display: flex;
  border-radius: 15px;
  margin: 0 10px;
  background-color: #5d5d5d;
  flex-direction:column;
  align-items: center;
}
.secciones img{
  width: 40px;
  margin-bottom:  7px ;
}

.canjear{
  font-size: 14px;
  font-family: "Arial Black";
  border-radius: 15px;
  color:white;
  background-color: #01abe1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 0;
  margin:  20px;
}

input[type=range] {
  -webkit-appearance: none;
}
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 11px;
  cursor: pointer;
  animate: 0.2s;
  background: #ff7254;
  border-radius: 7px;
}
input[type=range]::-webkit-slider-thumb {

  height: 26px;
  width:26px;
  border-radius: 15px;
  background: #42b7dc;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -8px;
}


</style>
