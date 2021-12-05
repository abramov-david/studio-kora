const sliderItem = document.querySelectorAll(".carousel-item");

let fetchData;

const fetchIndexPageData = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
    const data = await res.json();
    fetchData = data;
  } catch (error) {
    console.log(error.message);
  }
  sliderItem.forEach((item) => {
    for (let dat of fetchData) {
      if (item.id == dat.id) {
        console.log(dat);
        item.querySelector("p").innerText = dat.title;
        item.querySelector("h2").innerText = dat.body;
      }
    }
  });
};

fetchIndexPageData();
