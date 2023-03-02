
function Loader() {
  document.body.classList.add("overflow-hidden");

  document.onreadystatechange = function () {
    const loader = document.getElementById("loader");

    if (document.readyState !== "complete") {
      document.body.style.display = "none";

      loader.style.display = "flex";
    } else {
      document.body.classList.remove("overflow-hidden");
      document.body.style.display = "block";

      loader.style.display = "none";
    }
  };
}

export default Loader;
