const main = document.querySelectorAll(".main");

let fetchData;

const fetchIndexPageData = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
    const data = await res.json();
    fetchData = data;
  } catch (error) {
    console.log(error.message);
  }
  main.forEach((item) => {
    for (let dat of fetchData) {
      if (item.id == dat.id) {
        console.log(dat);
        item.querySelector("p").innerText = dat.body.replace(/\r?\n/g, "");
        item.querySelector("h1").innerText = dat.title;
      }
    }
  });
};

fetchIndexPageData();
