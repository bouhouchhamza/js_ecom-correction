
const search = document.querySelector("#search")
let initial_products =   [];

async function loadData(data) {
  const renderData = await fetch("./data/" + data + ".json");
  const response = await renderData.json();
  renderProducts(response);
  initial_products = response;


    addFilterByCategorie(initial_products) ;

  // console.log(response);
}
loadData("products");

function renderProducts(products)
{
    
  //create  a table
  // define products properties
  // create table header and table body
  // iterate over product list to create  a table row for each product(and <td> )
  const mainDiv = document.querySelector(".main");
  mainDiv.innerHTML = "";
  const table = document.createElement("table"); 

  // {
  //     "id": 1,
  //     "name": "Wireless Mouse Pro",
  //     "category": "Accessories",
  //     "price": 64,
  //     "stock": 4,
  //     "rating": 4.8
  //   },
  //  const tableHead = ["id","name","category","price","stock","rating"];
  const tableTitles = Object.keys(products[0]);

  const tableHead = document.createElement("thead");
  const tableHeadRow = document.createElement("tr");
  for (i = 0; i < tableTitles.length; i++) {
    const tableHeadRowH = document.createElement("th");
    tableHeadRowH.textContent = tableTitles[i];
    tableHeadRow.appendChild(tableHeadRowH);
  }

  const tablebody = document.createElement("tbody");
  products.forEach((product) => {
    const tablebodyTr = document.createElement("tr");
    tableTitles.forEach((title) => {
      const collumn = document.createElement("td");
      collumn.textContent = product[title];
      tablebodyTr.appendChild(collumn);
    });
    tablebody.appendChild(tablebodyTr);
  });

  table.appendChild(tablebody);
  tableHead.appendChild(tableHeadRow);
  table.appendChild(tableHead);
  mainDiv.appendChild(table);
}


function search_byname( products, word)

{
    if( word === "") return products;

     
    const result =  products.filter( (product) => 
    {
         return product.name.toLowerCase().includes(word.toLowerCase());
         
    })
    return result;

}


search.addEventListener('input' , () =>
{
     const result = search_byname(initial_products ,search.value);

     renderProducts(result);
})

function addFilterByCategorie( products )
{
    const categories = products.map(product => product.category) ;
    const uniqe_categores = categories.reduce((acc,cerr)=>)
}
