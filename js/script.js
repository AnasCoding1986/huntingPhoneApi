// Phone Search
// URL Format: https://openapi.programming-hero.com/api/phones?search=${searchText}

// Example: https://openapi.programming-hero.com/api/phones?search=iphone

// Phone detail url:
// URL Format: https://openapi.programming-hero.com/api/phone/${id}

// Example: https://openapi.programming-hero.com/api/phone/apple_iphone_13_pro_max-11089

// const loadPhone = async (searchText) => {
//     const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
//     const data = await res.json();
//     const phones = data.data;
//     displayPhones(phones);
// }

// const displayPhones = phones => {
//     // 1 get the desired div
//     const phoneContainer = document.getElementById("phone-container");

//     // clear div
//     phoneContainer.innerHTML = "";

//     const showAllButton = document.getElementById("show-all-container");
//     if (phones.length > 12) {
//       showAllButton.classList.remove("hidden");
//     } else {
//       showAllButton.classList.add("hidden");
//     }

//     // show only 12
//     phones = phones.slice(0,12);

//     phones.forEach(phone => {
//         console.log(phone);

//         // 2 create a div
//         const phoneCard = document.createElement("div");

//         // 3 set class and innerHTML
//         phoneCard.classList = `card p-4 bg-base-100 shadow-xl`;
//         phoneCard.innerHTML = `
//         <figure><img src="${phone.image}" alt="Shoes" /></figure>
//         <div class="card-body">
//           <h2 class="card-title">${phone.phone_name}</h2>
//           <p>If a dog chews shoes whose shoes does he choose?</p>
//           <div class="card-actions justify-end">
//             <button class="btn btn-primary">Buy Now</button>
//           </div>
//         </div>
//         `

//         // 4 append child
//         phoneContainer.appendChild(phoneCard);


//     });
// }


// // handle search
// const handleSearch = () => {
//     const searchField = document.getElementById("search-field");
//     const searchText = searchField.value;
//     console.log(searchText);
//     loadPhone(searchText);
// }


const loadPhone = async (searchTxt) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchTxt}`);
  const data = await res.json();
  const phones = data.data;
  displayPhone(phones);
}

const displayPhone = (phones) => {

  const phoneContainer = document.getElementById("phone-container");

  const showAllBtn = document.getElementById("show-all-btn");

  if (phones.length > 5) {
    showAllBtn.classList.remove("hidden");
  } else {
    showAllBtn.classList.add("hidden");
  }

  phones = phones.slice(0, 5);

  phoneContainer.innerHTML = "";
  phones.forEach(phone => {
    const phoneDiv = document.createElement("div");
    phoneDiv.classList = `card w-96 bg-base-100 shadow-xl`;
    phoneDiv.innerHTML = `
    <figure><img src="${phone.image}" alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="card-title">${phone.phone_name}</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
    `
    phoneContainer.appendChild(phoneDiv);

    console.log(phone);
  });

  loadinSpinnersFunc(false);
}

const handleSearch = () => {
  loadinSpinnersFunc(true);
  const inpField = document.getElementById("search-field");
  const inpTxt = inpField.value;
  loadPhone(inpTxt)
}

const loadinSpinnersFunc = (isLoading) => {
  const loadingSpinners = document.getElementById("loading-spinner");
  if (isLoading) {
    loadingSpinners.classList.remove("hidden");
  } else {
    loadingSpinners.classList.add("hidden");
  }
}

