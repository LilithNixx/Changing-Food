//captura de elementos:
const btn = document.querySelector('.btn');
const templateImg = document.querySelector('.templateImg').content;
const imgContainer = document.querySelector('.imgContainer');

const fragment = document.createDocumentFragment();

let arrayImg = [
    {
        img: "/img/food1.jpg", 
        title: "chicken, rice, salad and beans",
        uid: 1
    },
    {
        img:  "/img/food2.jpg", 
        title: "Feijoada",
        uid: 2
    },
    {
        img:  "/img/food3.jpg", 
        title: "Feijoada",
        uid: 3
    },
    {
        img:  "/img/food4.jpg", 
        title: "Espetinhos",
        uid: 4
    },
    {
        img:  "/img/food5.jpg", 
        title: "Casquinha de siri and cononut water"
    },
    {
        img:  "/img/food6.jpg", 
        title: "Casquinha de siri"
    },
    {
        img:  "/img/food7.jpg", 
        title: "shrimps with rice"
    },
    {
        img:  "/img/food8.jpg", 
        title: "Moqueta"
    },
    {
        img:  "/img/food9.jpg", 
        title: "Açai and Matcha juice"
    },
];
    
const changeImg = () => {

   let ran = Math.floor(Math.random() * 9);
   
    //Crear clon del template:
    const clone = templateImg.cloneNode(true);

    //capturar elemento y modificar el src:
    clone.querySelector("#img").src = arrayImg[ran].img;
   
    //capturar parrafo y modificar el texto:
    if (arrayImg[ran].img){
        
        clone.querySelector("#foodName").textContent = arrayImg[ran].title;
    }

    fragment.appendChild(clone);
    
   imgContainer.appendChild(fragment);
}

btn.addEventListener('click', changeImg);

//Problema a resolver: las imágenes y los textos se superponen. 