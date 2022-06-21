let div = document.querySelectorAll("div");

let hOnes = Array.from(div);
let url = "https://reqres.in/api/users";

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((result) => {
    let datas = result.data;
    datas.map((data)=> {
       
      console.log(data.first_name);
      console.log(data.last_name);
      console.log(data.avatar);
      demo.innerHTML += `<img src="${data.avatar}" alt="image avatar">`;
     
      demo.innerHTML += `<span> ${data.first_name}</span>`;
      demo.innerHTML += `<span class="span_java"> ${data.last_name}</span> `;
      demo.innerHTML += `<span class="min">5mins ago <span>Public</span> </span>  `;
     
        
      span.style.font="0"
     
     
    //   img.style.borderRadius="50%"
    });
  });

