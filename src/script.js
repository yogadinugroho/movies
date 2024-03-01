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

getDataMovie(
  "http://www.omdbapi.com/?apikey=dca61bcc&s=naruto",
  (results) => {
    // console.log(JSON.parse(results));
    // olah hasilnya
    const cardWrapper = document.querySelector(".card-wrapper");
    const resultParsing = JSON.parse(results);
    const dataResult = resultParsing.Search;
    dataResult.forEach((data) => {
      cardWrapper.innerHTML += `<div
        class="flex flex-col border shadow-sm rounded-2xl drop-shadow-xl bg-slate-900 border-gray-700 shadow-slate-700/[.7] max-w-72"
      >
      <div class="rounded-2xl bg-slate-200">
        <img
            class="w-full rounded-t-2xl"
            src="${data.Poster}"
            alt="Image Description"
        />
      </div>
        <div class="p-4 md:p-5">
          <h3 class="text-lg font-bold text-gray-800 dark:text-white">
            ${data.Title}
          </h3>
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
  },
  () => {
    console.log("Data tidak ditemukan");
  }
);
