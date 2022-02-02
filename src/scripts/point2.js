 const tooltiiips = document.querySelectorAll(".all-tooltiiip .tooltiiip");
   const fullDiv = document.querySelector("section");
   const container = document.querySelector(".container");
   let timeoutId;
   window.addEventListener("resize", contentPosition);
   window.addEventListener("DOMContentLoaded", contentPosition);

   function contentPosition() {
     tooltiiips.forEach((tooltiiip) => {
       const pin = tooltiiip.querySelector(".pin");
       const content = tooltiiip.querySelector(".tooltiiip-content");
       const arrow = tooltiiip.querySelector(".arrow");
       const pinLeft = pin.offsetLeft;
       if (pinLeft + content.offsetWidth / 2 > fullDiv.offsetWidth) {
         const extraLeft =
           fullDiv.offsetWidth - (pinLeft + content.offsetWidth / 2);
         // console.log('right-conflict', tooltiiip)
         content.style.left =
           pinLeft - content.offsetWidth / 2 + extraLeft - 30 + "px";
         content.style.top = pin.offsetTop + 30 + "px";
       } else if (
         pin.offsetLeft + container.offsetLeft <
         content.offsetWidth / 2
       ) {
         // console.log('left conflict', pin.offsetLeft)
         content.style.left = -container.offsetLeft + "px";
         content.style.top = pin.offsetTop + 30 + "px";
       } else {
         content.style.left = pinLeft - content.offsetWidth / 2 + "px";
         content.style.top = pin.offsetTop + 30 + "px";
       }
       arrow.style.left =
         pinLeft - content.offsetLeft + pin.offsetWidth / 2 + "px";
     });
   }
   tooltiiips.forEach((tooltiiip) => {
     const pin = tooltiiip.querySelector(".pin");
     const content = tooltiiip.querySelector(".tooltiiip-content");
     pin.addEventListener("mouseover", () => {
       tooltiiip.classList.add("active");
     });
     pin.addEventListener("mouseleave", () => {
       timeoutId = setTimeout(() => {
         if (!tooltiiip.classList.contains("content-hover")) {
           tooltiiip.classList.remove("active");
         }
       }, 100);
     });
     content.addEventListener("mouseover", () => {
       clearTimeout(timeoutId);
       tooltiiip.classList.add("active");
       tooltiiip.classList.add("content-hover");
     });
     content.addEventListener("mouseleave", () => {
       timeoutId = setTimeout(() => {
         tooltiiip.classList.remove("active");
         tooltiiip.classList.remove("content-hover");
       }, 100);
     });
   });