const allMobiles = () => {
    const searchedItem = document.getElementById("search-field").value;

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchedItem}`;

    const container = document.getElementById("mobile-container");
    container.textContent = '';

    fetch(url).then(res => res.json()).then(data => showAllMobiles(data.data));
}

const appendData = (data) => {
    for (const mobile of data) {
        const container = document.getElementById("mobile-container");
        const div = document.createElement('div');
        div.innerHTML = `    <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div>
            <img class="rounded-t-lg mx-auto" src="${mobile.image}" alt="" />
        </div>
        <div class="m-2">
            <div>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Name: ${mobile.phone_name}</h5>
            </div>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Brand: ${mobile.brand}</p>
            <button onclick="consoled()" 
                class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Details
                <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                </svg>
            </button>
        </div>
    </div>`;
        container.appendChild(div);
    }
}

const consoled = () => {
    const container = document.getElementById("body");
    const div = document.createElement('div');
    div.innerHTML = ``;
container.appendChild(div);
}




const appendMoreData = (data) => {
    for (const mobile of data) {
        const container = document.getElementById("mobile-container");
        const div = document.createElement('div');
        div.innerHTML = `    <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div>
            <img class="rounded-t-lg mx-auto" src="${mobile.image}" alt="" />
        </div>
        <div class="m-2">
            <div>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Name: ${mobile.phone_name}</h5>
            </div>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Brand: ${mobile.brand}</p>
            <button onclick="consoled()"
                class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Details
                <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                </svg>
            </button>
        </div>
    </div>`;
        container.appendChild(div);
        const moreButton = document.getElementById('show-more');
        moreButton.style.display = 'none';
    }
}




const showAllMobiles = (mobiles) => {
    console.log(mobiles.length);
    let limitedData = mobiles.slice(0, 20);
    let moreData = mobiles.slice(20);
    appendData(limitedData);
    if (mobiles.length > 20) {
        const container = document.getElementById("extra-info");
        container.textContent = '';
        const showMore = document.createElement('div');
        showMore.innerHTML = ` <br> <button id="show-more" onclick="moreData()"
                class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Show More
                <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                </svg>
            </button>`
        container.appendChild(showMore);
        window.moreData = () => appendMoreData(moreData);
    }
}