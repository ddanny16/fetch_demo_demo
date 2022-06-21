let div = document.querySelectorAll("div");

let hOnes = Array.from(div);
let url = "https://reqres.in/api/users";

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((result) => {
    let datas = result.data;
    datas.map((data) => {
      console.log(data.first_name);
      console.log(data.last_name);
      console.log(data.avatar);
      let [usersImages, usersFirstNames, usersLastNames] = ["", "", ""];
      /* data.avatar.map((userimage) => {
      });
      data.first_name.map((userFirstName) => {
      });
      data.last_name.map((userLastName) => {
      }); */
      usersImages = `<img src="${data.avatar}" alt="image avatar">`;
      usersFirstNames = `<span> ${data.first_name} </span>`;
      usersLastNames = `<span> ${data.last_name} </span>`;
      const userComments = ` <section id="lane1">
        <div id="demo">
        ${usersImages}
        ${usersFirstNames}
        ${usersLastNames}
        <span class="min">5mins ago <span>Public</span> </span> </div>
        <div id="demo1">
            <span class="spann">✋</span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eligendi ullam temporibus dolorem 
  a incidunt, explicabo veniam tenetur quam suscipit aliquam perspiciatis, at repudianda
  e maxime. Adipisci, dolor alias suscipit deserunt ad molestiae ratione 
  possimus consequatur eveniet cum fugiat vitae quam perspiciatis
  accusamus aperiam magni sequi iste non quod quibusdam quisquam. Voluptate esse libero iste consequatur rati
  one debitis, sint quisquam obcaecati. Veniam autem quo veritatis repudiandae eaque vero eligendi neque. Sunt?
            <span> 😊</span>
        </div>
        <main>
            <section>
                <div class="kO">
                    <span>❤️</span>
                    25 likes
                </div>
            </section>
            <section>
                <div  class="kO">
                    <span>⌨️</span>
                    10 comments
                </div>
            </section>
            <section>
                <div  class="kO">
                    <span>➡️</span>
                    1 share
                </div>
            </section>
        </main>
    </section>`;
      lane.innerHTML += userComments;
      /*  demo.innerHTML += `<img src="${data.avatar}" alt="image avatar">`;
     
      demo.innerHTML += `<span> ${data.first_name}</span>`;
      demo.innerHTML += `<span class="span_java"> ${data.last_name}</span> `;
      demo.innerHTML += `<span class="min">5mins ago <span>Public</span> </span>  `;
      */

      // span.style.font = "0";

      //   img.style.borderRadius="50%"
    });
  });
