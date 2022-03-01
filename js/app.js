const toggleSpinner = displayStyle => {
    document.getElementById('spinner').style.display = displayStyle
}






/* fetching all the data from api */
const allMobiles = () => {
    const searchedItem = document.getElementById("search-field");
    const detailContainer = document.getElementById("details-phone");
    const extraInfoContainer = document.getElementById("extra-info");
    const warningContainer = document.getElementById("warning");

    const searchText = searchedItem.value;

    extraInfoContainer.innerHTML = '';
    warningContainer.style.display = 'none';

    toggleSpinner('block');

    searchedItem.value = '';
    detailContainer.innerHTML = '';

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;

    const container = document.getElementById("mobile-container");
    container.textContent = '';

    fetch(url).then(res => res.json()).then(data => showAllMobiles(data.data));
}

const dataFound = (data) => {
    if (data == "" || typeof data == 'undefined') {
        return ('No data found')
    } else {
        return (data);
    }
}

/* apend data from api and displaying in 20 */
const appendData = (data) => {
    data.forEach(mobile => {
        const container = document.getElementById("mobile-container");
        const div = document.createElement('div');
        div.innerHTML = `<div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div>
            <img class="rounded-t-lg mx-auto" src="${dataFound(mobile?.image)}" alt="" />
        </div>
        <div class="m-2">
            <div>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Name: ${dataFound(mobile?.phone_name)}</h5>
            </div>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Brand: ${dataFound(mobile?.brand)}</p>
             <button onclick="detailed('${dataFound(mobile?.slug)}')"
                class = "inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800" >
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
    })
    toggleSpinner('none');
}


/* getting detailed data from api */
const detailed = id => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url).then(res => res.json()).then(data => showDetailData(data.data));
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
}

/* displaying detailed data on ui */
const showDetailData = (data) => {
    const container = document.getElementById("details-phone");
    const div = document.createElement('div');
    container.innerHTML = '';
    div.innerHTML = `<div class="md:w-1/2 md:p-6 md:mt-4 mt-12 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-auto w-11/12">
                        <div>
                            <img class="rounded-t-lg mx-auto" src="${dataFound(data?.image)}"
                                alt="" />
                        </div>
                        <div class="m-2">
                            <div>
                                <h5 class=" mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Name: ${dataFound(data?.name)}
                                </h5>
                            </div>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Brand: ${dataFound(data?.brand)}</p>
                        </div>
                        <div class="m-2">
                            <div>
                                <h5 class="mb-2 font-medium font-bold tracking-tight text-gray-900 dark:text-white"> <span class="text-2xl">Main Features:</span> <br> Storage: ${dataFound(data?.mainFeatures?.storage)} <br> Display Size: ${dataFound(data?.mainFeatures?.displaySize)} <br> ChipSet: ${dataFound(data?.mainFeatures?.chipSet)} <br> Memory: ${dataFound(data?.mainFeatures?.memory)}
                                </h5>
                            </div>
                            <p class="mb-3 break-words font-normal text-gray-700 dark:text-gray-400">Sensors: ${dataFound(data?.mainFeatures?.sensors)}</p>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Others: <br> WLAN: ${dataFound(data.others?.WLAN)} <br> Bluetooth: ${dataFound(data.others?.Bluetooth)} <br> GPS: ${dataFound(data.others?.GPS)} <br> NFC: ${dataFound(data.others?.NFC)} <br> Radio: ${dataFound(data.others?.Radio)} <br> USB: ${dataFound(data.others?.USB)}</p>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Realease Data: ${dataFound(data?.releaseDate)}</p>
                        </div>
                    </div>`;
    container.appendChild(div);
}


/* displaying all available data */
const appendMoreData = (data) => {
    data.forEach(mobile => {
        const container = document.getElementById("mobile-container");
        const div = document.createElement('div');
        div.innerHTML = `    <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div>
            <img class="rounded-t-lg mx-auto" src="${dataFound(mobile?.image)}" alt="" />
        </div>
        <div class="m-2">
            <div>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Name: ${dataFound(mobile?.phone_name)}</h5>
            </div>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Brand: ${dataFound(mobile?.brand)}</p>
            <button onclick="detailed('${dataFound(mobile?.slug)}')"
                class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">
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
    })
}

/* validating, slicing and calling all append function from here */
const showAllMobiles = (mobiles) => {
    if (mobiles.length == 0) {
        const detailContainer = document.getElementById("details-phone");
        const mobileContainer = document.getElementById("mobile-container");
        const extraInfoContainer = document.getElementById("extra-info");
        const warningContainer = document.getElementById("warning");

        detailContainer.innerHTML = '';
        mobileContainer.innerHTML = '';
        extraInfoContainer.innerHTML = '';
        warningContainer.style.display = 'block';
        toggleSpinner('none')

    } else {
        const container = document.getElementById("warning");
        container.style.display = 'none'
        let limitedData = mobiles.slice(0, 20);
        let moreData = mobiles.slice(20);
        appendData(limitedData);
        if (mobiles.length > 20) {
            const container = document.getElementById("extra-info");
            container.textContent = '';
            const showMore = document.createElement('div');
            showMore.innerHTML = ` <br> <button id="show-more" onclick="moreData()"
                class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">
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

}