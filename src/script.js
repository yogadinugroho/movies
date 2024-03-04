function getDataMovie(url, succes, error) {
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        succes(xhr.response);
      } else {
        error(xhr.status);
      }
    }
  };

  xhr.open("GET", url);
  xhr.send();
}

// awalnya hidden
// begitu prompt
// skeleton

const movie = prompt("Masukkan Nama Film: ");
// setTimeout(() => {
//   const skeleton = document
//     .querySelector(".skeleton")
//     .classList.remove("hidden");
// }, 1000);

getDataMovie(
  "http://www.omdbapi.com/?apikey=dca61bcc&s=" + movie,
  (results) => {
    const skeletonWrapper = document.querySelector(".skeleton-wrapper");

    skeletonWrapper.innerHTML += `<div class="skeleton px-28 flex animate-pulse">
    <div class="flex-shrink-0">
      <span class="size-12 block bg-gray-200 rounded-full"></span>
    </div>

    <div class="ms-4 mt-2 w-full">
      <h3 class="h-4 bg-gray-200 rounded-full" style="width: 40%"></h3>

      <ul class="mt-5 space-y-3">
        <li class="w-full h-4 bg-gray-200 rounded-full"></li>
        <li class="w-full h-4 bg-gray-200 rounded-full"></li>
        <li class="w-full h-4 bg-gray-200 rounded-full"></li>
        <li class="w-full h-4 bg-gray-200 rounded-full"></li>
      </ul>
    </div>
  </div>`;
    // console.log(JSON.parse(results));
    // olah hasilnya

    setTimeout(() => {
      const cardWrapper = document.querySelector(".card-wrapper");
      const resultParsing = JSON.parse(results);
      const dataResult = resultParsing.Search;
      dataResult.forEach((data) => {
        cardWrapper.innerHTML += `<div
        class="flex flex-col border shadow-sm rounded-2xl drop-shadow-2xl bg-slate-900 border-gray-700 shadow-slate-700/[.7] w-72 hover:scale-105 hover:transition hover:ease-in-out hover:border-green-800 "
      >
      <div class="rounded-t-2xl h-80 bg-slate-200" style="background-image: url(${data.Poster})">
      </div>
        <div class="p-4 md:p-5">
        <div class="h-[85px] ">
            <h3 class="text-lg font-bold text-gray-800 dark:text-white">
            ${data.Title}
            </h3>
        </div>
          <p class="mt-1 text-gray-500 dark:text-gray-400">
            ${data.Year}
          </p>
          <a
            class="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#"
          >
            Selengkapnya
          </a>
        </div>
      </div>`;
      });
    }, 5000);
  },
  () => {
    console.log("Data tidak ditemukan");
  }
);
