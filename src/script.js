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

const movie = prompt('Masukkan Film yang ingin dicari: ')

getDataMovie(
  "http://www.omdbapi.com/?apikey=dca61bcc&s=" + movie,
  (results) => {
    // console.log(JSON.parse(results));
    // olah hasilnya
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
  },
  () => {
    console.log("Data tidak ditemukan");
  }
);
