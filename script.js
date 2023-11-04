const accessKey = "YOUR API ACCESS KEY HERE"; //The process of getting THe API is stored in the text file HowToGetAPI

const search = document.getElementById("search"),
searchBox = document.getElementById("search-box"),
showResult = document.getElementById("result"),
showMore = document.getElementById("show-more");

let keyword = "", page =1;


async function searchImage(){
    if(page===1){
        showResult.innerHTML = ""; //to clear everything in result If present from before!!
    }

    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response =await fetch(url);
    const data = await response.json();

    const results = data.results;

    results.map((result)=>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement('a');
        imageLink.href = result.links.html;
        imageLink.target = "_blank"; //to open image in new tab

        imageLink.appendChild(image);
        showResult.appendChild(imageLink);
    })
    showMore.style.display="block";
}

search.addEventListener("submit", (e)=>{
    e.preventDefault();
    page=1;
    searchImage();
})

showMore.addEventListener("click", ()=>{
    page += 1;
    searchImage();
});
