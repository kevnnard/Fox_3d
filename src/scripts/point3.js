 const tooltiiiiips = document.querySelectorAll(".all-tooltiiiiip .tooltiiiiip");
   const fullDiv = document.querySelector("section");
   const container = document.querySelector(".container");
   let timeoutId;
   window.addEventListener("resize", contentPosition);
   window.addEventListener("DOMContentLoaded", contentPosition);

   function contentPosition() {
     tooltiiiiips.forEach((tooltiiiiip) => {
       const pin = tooltiiiiip.querySelector(".pin");
       const content = tooltiiiiip.querySelector(".tooltiiiiip-content");
       const arrow = tooltiiiiip.querySelector(".arrow");
       const pinLeft = pin.offsetLeft;
       if (pinLeft + content.offsetWidth / 2 > fullDiv.offsetWidth) {
         const extraLeft =
           fullDiv.offsetWidth - (pinLeft + content.offsetWidth / 2);
         // console.log('right-conflict', tooltiiiiip)
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
   tooltiiiiips.forEach((tooltiiiiip) => {
     const pin = tooltiiiiip.querySelector(".pin");
     const content = tooltiiiiip.querySelector(".tooltiiiiip-content");
     pin.addEventListener("mouseover", () => {
       tooltiiiiip.classList.add("active");
     });
     pin.addEventListener("mouseleave", () => {
       timeoutId = setTimeout(() => {
         if (!tooltiiiiip.classList.contains("content-hover")) {
           tooltiiiiip.classList.remove("active");
         }
       }, 100);
     });
     content.addEventListener("mouseover", () => {
       clearTimeout(timeoutId);
       tooltiiiiip.classList.add("active");
       tooltiiiiip.classList.add("content-hover");
     });
     content.addEventListener("mouseleave", () => {
       timeoutId = setTimeout(() => {
         tooltiiiiip.classList.remove("active");
         tooltiiiiip.classList.remove("content-hover");
       }, 100);
     });
   });