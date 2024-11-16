export const makeCard = (image, name, money) =>
  `
            <div class="card">
          <div class="image">
            <img src="${image}" alt="" />
          </div>
          <span class="name">${name}</span>
          <span class="price">${money}</span>
        </div>
  `;
