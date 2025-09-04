// const nav = document.querySelector(".header__navigation");
// const navList = nav.querySelector(".navigation__list");
// const initialNavItems = navList.querySelectorAll(".navigation__item");

// const getNavWidth = () => {
//   return nav.getBoundingClientRect().width;
// };

// const getNavListWidth = () => {
//   return navList.getBoundingClientRect().width + 60;
// };

// console.log(
//   nav.offsetWidth,
//   navList.offsetWidth,
//   nav.clientWidth,
//   navList.clientWidth,
//   nav.getBoundingClientRect().width
// );

// const removeNavItems = () => {
//   const navItems = [...navList.querySelectorAll(".navigation__item")];
//   navItems[navItems.length - 2].remove();
//   console.log(navItems.length);
//   checkWidth();
//   // console.log(item);
//   // удаляем из навигации navItems[navItems.length-1] и отправляем его в созд-й блок
//   // еще раз проверяем checkWidth
// };

// let isExpandedBlockExist = false;
// const checkWidth = () => {
//   if (getNavListWidth() > getNavWidth()) {
//     console.log(">");
//     // проверка существует ли блок для лишних элементов(флаг, isExpandedBlockExist)
//     // если нет - создаем блок в который будем складывать лишние элементы
//     if (!isExpandedBlockExist) {
//       // создаем блок
//     }
//     removeNavItems();
//   } else {
//     console.log("<");
//   }
// };

// const removeNavItems = (items) => {
//   // const navItems = items;
//   items[items.length - 2].remove();
//   console.log(items.length);
//   checkWidth([...navList.querySelectorAll(".navigation__item")]);
//   // console.log(item);
//   // удаляем из навигации navItems[navItems.length-1] и отправляем его в созд-й блок
//   // еще раз проверяем checkWidth
// };

// let isExpandedBlockExist = false;
// const checkWidth = (items) => {
//   if (getNavListWidth() > getNavWidth()) {
//     console.log(">");
//     // проверка существует ли блок для лишних элементов(флаг, isExpandedBlockExist)
//     // если нет - создаем блок в который будем складывать лишние элементы
//     if (!isExpandedBlockExist) {
//       // создаем блок
//     }
//     console.log(items.length);
//     removeNavItems(items);
//   } else {
//     console.log("<");
//   }
// };

// checkWidth([...navList.querySelectorAll(".navigation__item")]);

// window.addEventListener("resize", () => {
//   // при ресайзе снова проверяем
//   checkWidth(initialNavItems);
// });

// const removeNavItems = () => {
//   const items = navList.querySelectorAll(".navigation__item");
//   console.log(initialNavItems);

//   items.forEach((item) => {
//     if (getNavListWidth() > getNavWidth()) {
//       item.remove();

//       console.log("length", items.length);
//     }
//   });
// };

// let isExpandedBlockExist = false;
// const checkWidth = () => {
//   console.log(">");
//   // проверка существует ли блок для лишних элементов(флаг, isExpandedBlockExist)
//   // если нет - создаем блок в который будем складывать лишние элементы
//   if (!isExpandedBlockExist) {
//     // создаем блок
//   }
//   removeNavItems();
// };

// checkWidth();

// window.addEventListener("resize", () => {
//   // при ресайзе снова проверяем
//   checkWidth();
//   // в какую сторону идем
// });

// const nav = document.querySelector(".header__navigation");
// const navList = nav.querySelector(".navigation__list");
// const initialNavItems = navList.querySelectorAll(".navigation__item");

// const nav = document.querySelector(".header__navigation");

// const logo = document.querySelector(".header__logo");
// const button = document.querySelector(".header__call-button--tablet");

// const logoWidth = logo.getBoundingClientRect().width;
// const buttonWidth = button.getBoundingClientRect().width;
// console.log(paddingRight, paddingLeft, logoWidth, buttonWidth);

// if (nav) {
//   const navList = nav.querySelector(".navigation__list");
//   const navItems = navList.querySelectorAll(
//     ".navigation__item:not(.navigation__item--nested)"
//   );
//   const nestedNavItem = navList.querySelector(".navigation__item--nested");
//   const nestedNavList = nestedNavItem.querySelector("ul");

//   const fillNavItems = () => {
//     const navContainerWidth =
//       nav.getBoundingClientRect().width - logoWidth - buttonWidth;

//     console.log(navContainerWidth);

//     let itemsTotalWidth = 0;

//     navItems.forEach((item) => {
//       item.classList.contains("desktop-hidden")
//         ? item.classList.remove("desktop-hidden")
//         : null;
//     });

//     const nestedNavListItems = nestedNavList.querySelectorAll("li");
//     nestedNavListItems.forEach((item) => {
//       item.remove();
//     });

//     !nestedNavItem.classList.contains("desktop-hidden")
//       ? nestedNavItem.classList.add("desktop-hidden")
//       : null;

//     for (let i = 0; i < navItems.length; i++) {
//       const item = navItems[i];
//       itemsTotalWidth += item.getBoundingClientRect().width;

//       if (navContainerWidth < itemsTotalWidth) {
//         item.classList.add("desktop-hidden");

//         nestedNavItem.classList.contains("desktop-hidden")
//           ? nestedNavItem.classList.remove("desktop-hidden")
//           : null;

//         let itemClone = item.cloneNode(true);
//         itemClone.classList.remove("desktop-hidden");

//         if (!nestedNavList.contains(itemClone)) {
//           nestedNavList.appendChild(itemClone);
//         }
//       }
//     }
//   };

//   fillNavItems();

//   window.addEventListener("resize", fillNavItems);

//   nestedNavItem.addEventListener("click", () => {
//     nestedNavList.style.display = "block";
//   });
// }
