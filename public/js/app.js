"use strict";

class App{
  constructor(){
    this.photo = [
    {
      "id": 1,
      "name": "Bored in the Office",
      "description": "While waiting my sister in the office, let me take a selfie",
      "image": "img/b.jpg",
      
    },
    {
      "id": 2,
      "name": "1st year days. ",
      "description": "Happened in English time with my friend Paul",
      "image": "img/b2.jpg",

    },
    {
      "id": 3,
      "name": "Information System Defense",
      "description": "Final Defense in Information System 1st year / 2nd trisem  ",  
      "image": "img/b3.jpg",
    },

    {
      "id": 4,
      "name": "Adventures to Bukid at Calinan",
      "description": "Me and my Friends travel to Calinan. ",
      "image": "img/b4.jpg",
    },
    {
      "id": 5,
      "name": "Selfie at the house",
      "description": "Bored, Selfie :) ",
      "image": "img/b5.jpg",
    },
    {
      "id": 6,
      "name": "Gmall Rooftop",
      "description": "At gmall rooftop Courtesy, Girlfriend <3 ",
      "image": "img/b6.jpg",
    },
    {
      "id": 7,
      "name": "While waiting at My sister",
      "description": "January 19 , when i waited her to go home late night ",
      "image": "img/b7.jpg",
    },
    {
      "id": 8,
      "name": "Taxi Cab Selfie",
      "description": "At the cab while going to school this morning, Selfie! ",
      "image": "img/b8.jpg",
    },
    {
      "id": 9,
      "name": "Me and my little cousin",
      "description": "Meet my cute little cousin :) hehe ",
      "image": "img/b.jpg",
    },
    
    ];

    this.pics = [
    {
      "img":"img/c.jpg",
    },
    {
      "img":"img/cc.jpg",
    },
    {
      "img":"img/ccc.jpg",
    },
    {
      "img":"img/cccc.jpg",
    },
    {
      "img":"img/ccccc.jpg",
    },
    {
      "img":"img/cccccc.jpg",
    },
    {
      "img":"img/ccccccc.jpg",
    },
    {
      "img":"img/aa.jpg",
    },
    {
      "img":"img/aaa.jpg",
    },
    {
      "img":"img/aaaa.jpg",
    },
    {
      "img":"img/aaaaa.jpg",
    },

    ];



  }



  render(html, component){

    component.innerHTML += html;
  }

  reRender(html, component){

    component.innerHTML = html;
  }

  photoapp(){
     let id = document.getElementById('id_1');
    let name = document.getElementById('name_1');
    let description = document.getElementById('description_1');
    let image = document.getElementById('image_1');


    let photo = {   
     "id": id.value,   
      "name": name.value,
      "description": description.value,
      "image": image.value,


    };


    this.photo.push(photo);

    
    id. value = name.value = description.value = image.value = ''; 
  } 

  


}

class Component extends App{
  constructor(){

    super();
  }

  photoDesign(){
    let html = `

    

    </div>
    <div class="carousel carousel-slider">
    <a class="carousel-item" href="#one!"><img src="${this.pics[7].img}"></a>
    <a class="carousel-item" href="#two!"><img src="${this.pics[8].img}"></a>
    <a class="carousel-item" href="#three!"><img src="${this.pics[9].img}"></a>
    <a class="carousel-item" href="#four!"><img src="${this.pics[10].img}"></a>
    </div>
    

    <nav>
    <div class="nav-wrapper  green darken-4">

    <a href="#" onclick="component.photoList()" class="brand-logo right"> <i class="material-icons right">surround_sound</i>&nbspPhotoAlbums</a>
    <ul id="nav-mobile" class="left hide-on-med-and-down">
    <li>
    <li><a href="#" onclick="component.homepage()"><i class="material-icons left">subtitles</i>Homepage</a></li>
    <li><a href="#" onclick="component.photoList()"><i class="material-icons left">perm_media</i>My photo</a></li>  
    <li><a href="#" onclick="component.uploadPhotos()"><i class="material-icons left">perm_identity</i>Upload Photo</a></li>
    



    </ul>


    </div>
    </nav>




    <div id="homepage"></div>
    <div id="recentPhotos"></div>
    <div id="viewPhotos"></div>
    <div id="photoList"></div>
    <div id="uploadPhotos"></div>
        <div id="updatePhotoId"></div>

           <div class="row">
    <footer class="page-footer  lime darken-3">
    <div class="container">
    <div class="col l6 s12">
    <h5 class="white-text">Photoalbum App</h5>

 
    <p class="grey-text text-lighten-4">Jason P. Alfar</p>
    <p class="grey-text text-lighten-4">Bachelor of Science in Computer Science</p>
    </div>


   <img src="img/cac.jpg">
    </div>
    </div>
    <div class="footer-copyright">
    <div class="container">

    </div>
    </div>
    </footer>

    `;

    this.reRender(`
      ${html}

      `,document.getElementById("app"));
    this.recentPhotos();    
  }


  deletePhoto(key){
    let r = this.photo;
    for(let i=0;i<r.length;i++){
      if(r[i].id == key){
        this.photo.splice(i,1);
        break;
      }
    }   
    this.photoList();
  }

  updatePhoto(id){

  id = id+1;  
  let photodummy = {
    "id" :  id,
    "image" : $('#images').val(),
    "name" : $('#names').val(),
    "description" : $('#descriptions').val()
  }

  let r = this.photo;
  for(let i=0;i<r.length;i++){
    if(r[i].id == id){
      r[i] = photodummy;
      break;
    }
  }

  this.photoList();
}

  photoSearchId(id){
    let r = this.photo;
    for(let i=0;i<r.length;i++){
      if(id==r[i].id){
        return r[i];
      }
    }
  } 

  searcHPhoto(name){
    let objects = [];
    let r = this.photo;
    for(let i=0;i<r.length;i++){
      let expr = (r[i].name.toUpperCase().indexOf(name.toUpperCase()) > -1);
      if(expr){
        objects.push(r[i]);
      }
    }
    return objects;
  }

  recentPhotos(){

    let html = `








    `;

    html+=`

    <div class="carousel carousel-slider">
    <a class="carousel-item" href="#one!"><img src="${this.pics[0].img}"></a>
    <a class="carousel-item" href="#two!"><img src="${this.pics[1].img}"></a>
    <a class="carousel-item" href="#three!"><img src="${this.pics[2].img}"></a>
    <a class="carousel-item" href="#four!"><img src="${this.pics[3].img}"></a>
    <a class="carousel-item" href="#four!"><img src="${this.pics[4].img}"></a>
    <a class="carousel-item" href="#four!"><img src="${this.pics[5].img}"></a>
    <a class="carousel-item" href="#four!"><img src="${this.pics[6].img}"></a>
    </div>
    <div class="row">
    `;

    let r = this.photo;
    let count = 0;
    for(let i=(r.length-1);i>=0;i--){
      if(count++ === 6)break;
      html+= `
      <div class="col s6 m4">
      <div class="card ">
      <div class="card-image">
      <img src="${r[i].image}">
      <span class="card-title">${r[i].name}</span>
      </div>
      <div class="card-content">
      <p>${r[i].description}</p>

      </div>
      <div class="card-action">
      <a href="#" onclick="component.viewPhotos(${r[i].id})"><i class="material-icons">input_id</i>Description</a>
      </div>
      </div>
      </div>
      `;
    }

    html += `</div>`;

    this.render(`   
      ${html}
      `,document.getElementById("recentPhotos"));
  }

  viewPhotos(id){
    let r = this.photoSearchId(id);

    let html = `
    
    <div class="row">       
    <div class="col s12 m12">
    <div class="card horizontal large">
    <div class="card-image">
    <img src="${r.image}">
    </div>
    <div class="card-stacked">
    <div class="card-content">
    <h5 class="center-align">${r.name}</h5>
    <p>${r.description}</p>

    </div>
    <div class="card-action small">               
    <span onclick="component.deletePhoto(${r.id})" class="new badge small red" data-badge-caption=""><i class="material-icons">power_settings_new</i>Remove Photo</span>
    <span onclick="component.photoList()" class="new badge small" data-badge-caption=""><i class="material-icons">call_received</i>Back to Photo Album</span>
    <span onclick="component.updatePhotoId(${r.id})" class="new badge small" data-badge-caption=""><i class="material-icons">input_id</i>Upadte</span>
    </div>            
    </div>     
    </div>   

    </div>      
    </div>
    `;

    this.reRender(`   
      ${html}     
      `,document.getElementById("viewPhotos"));
    $('#viewPhotos').show();
    $('#recentPhotos').hide();
    $('#photoList').hide();
    $('#uploadPhotos').hide();
    $('#homepage').hide();
         $('#updatePhotoId').hide();     
  }

  photoList(){
    let html = `



    <br/>
    <nav>
    <div class="nav-wrapper  brown darken-4">
    <div class="input-field">       
    <input onkeyup="component.photoGallery(this.value)" id="search" type="search" placeholder="Search" required>
    <label for="search"><i class="material-icons">search</i></label>
    <i class="material-icons">close</i>
    </div>
    </div>
    </nav>
    <br/>

    `;

    html += `
    <div class="row" id="photoGallery">
    `;
    let r = this.photo;
    for(let i=0;i<r.length;i++){
      html+= `
      <div class="col s6 m4">
      <div class="card ">
      <div class="card-image">
      <img src="${r[i].image}">
      <span class="card-title">${r[i].name}</span>
      </div>
      <div class="card-content">
      <p>${r[i].description}</p>

      </div>
      <div class="card-action">
      <a href="#" onclick="component.viewPhotos(${r[i].id})"><i class="material-icons right">zoom_in</i>View Pictures</a>
      </div>
      </div>
      </div>
      `;
    }

    html += `</div>`;

    this.reRender(`
      ${html}
      `,document.getElementById("photoList"));
    $('#photoList').show();
    $('#viewPhotos').hide();
    $('#recentPhotos').hide();
    $('#uploadPhotos').hide();      
    $('#homepage').hide();
         $('#updatePhotoId').hide();     
  }

  photoGallery(name){
    let html = ``;
    let r = this.searcHPhoto(name);
    for(let i=0;i<r.length;i++){
      html+= `
      <div class="col s12 m4">
      <div class="card large hoverable">
      <div class="card-image">
      <img src="${r[i].image}">
      <span class="card-title">${r[i].name}</span>
      </div>
      <div class="card-content">
      <p>${r[i].description}</p>

      </div>
      <div class="card-action">
      <a href="#" onclick="component.viewPhotos(${r[i].id})">More</a>
      </div>
      </div>
      </div>
      `;
    }   
    this.reRender(`
      ${html}
      `,document.getElementById("photoGallery"));
    $('#photoList').show();
    $('#viewPhotos').hide();
    $('#recentPhotos').hide();  
    $('#uploadPhotos').hide(); 
    $('#homepage').hide();    
         $('#updatePhotoId').hide();     
  }

  uploadPhotos(){
    let html = `


    <br>

    <form>
    <div>

    <h1>UPLOAD PHOTO</h1>
    <label for="id_1"><span>Photos Uploaded <span class="required">*</span></span><input disabled value="${this.photo.length+1}" id="id_1" type="text" ></label>
    <label for="name_1">  <span>Activity :</span><input type="email" id="name_1"/> </label>
    <label for="image_1"><span>Picture</span><input type="email" id="image_1" /> </label>
    <label for="description_1"><span>Description </span><textarea id="description_1" class="textarea-field"></textarea> </label>

    <div class="center-align">
    <button onclick="component.photoList()" class="btn waves-effect waves-light">Back</button>
    <button onclick="component.photoapp()" class="btn waves-effect waves-light">Upload</button>
    </div>

    </div>
    </form>
    </br>



    





    `;

    this.reRender(`
      ${html}
      `,document.getElementById("uploadPhotos"));
    $('#uploadPhotos').show();
    $('#photoList').hide();
    $('#viewPhotos').hide();
    $('#recentPhotos').hide();  
    $('#Memoriesoflovedones').hide(); 
    $('#homepage').hide();    
         $('#updatePhotoId').hide();     
  }

   updatePhotoId(id){

    id = id - 1;
    let html = `
    


    <center>
    <form>
    <div class="row">
    
    <center><h1>Update Pictures</h1></center>
    <center><label for="id_1"><span>Number of Photo <span class="required">*</span></span><input disabled value="${this.photo.length+1}" id="id_1" type="text" ></label></center>
    <center><label for="images">  <span>Update Photo</span><input type="email" id="images"value="${this.photo[id].image}"/> </label></center>
    <center><label for="names">  <span>Update Activity</span><input type="email" id="names"value="${this.photo[id].name}"/> </label></center>
    <center><label for="descriptions"><span>Update Description:</span><textarea id="descriptions" class="textarea-field"value="${this.photo[id].description}"></textarea> </label></center>

    <div class="center-align">
    <button onclick="component.photoList()" class="btn waves-effect waves-light">Back</button>
    <a onclick="component.updatePhoto(${id})" class="waves-effect blue waves-light btn">Update</a>
    </div>
    </div>


    </div>
    </center>
      </form>





    `;  
    this.reRender(`

      ${html}

      `,document.getElementById("updatePhotoId"));   

      $('#uploadPhotos').hide();
    $('#photoList').hide();
    $('#viewPhotos').hide();
    $('#recentPhotos').hide();  
    $('#Memoriesoflovedones').hide(); 
    $('#homepage').hide();   
        $('#updatePhotoId').show();         
    
    
  }






  homepage(){
    let html=`


    `;
    this.reRender(`
      ${html}
      `,document.getElementById("uploadPhotos"));
    $('#uploadPhotos').hide();
    $('#photoList').hide();
    $('#viewPhotos').hide();
    $('#recentPhotos').show(); 
    $('#homepage').hide();  
     $('#updatePhotoId').hide();     



  }


} 
let component = new Component();
component.photoDesign();
