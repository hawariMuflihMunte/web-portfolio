
function Loader() {
  document.body.classList.add("overflow-hidden");

  const _header = document.querySelector('header');
  const _main = document.querySelector('main');
  const _footer = document.querySelector('footer');

  _header.classList.add('display-none');
  _main.classList.add('display-none');
  _footer.classList.add('display-none');

  document.onreadystatechange = function () {
    const loader = document.getElementById("loader");

    if (document.readyState !== "complete") {
      document.body.style.display = "none";

      loader.style.display = "flex";
    } else {
      document.body.classList.remove("overflow-hidden");
      document.body.style.display = "block";

      setTimeout(() => {
        _header.classList.remove('display-none');
        _main.classList.remove('display-none');
        _footer.classList.remove('display-none');
      }, 600);

      loader.style.display = "none";
    }
  };
}

export default Loader;
