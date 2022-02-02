 const tooltiips = document.querySelectorAll(".all-tooltiip .tooltiip");
   const fullDiv = document.querySelector("section");
   const container = document.querySelector(".container");
   let timeoutId;
   window.addEventListener("resize", contentPosition);
   window.addEventListener("DOMContentLoaded", contentPosition);

   function contentPosition() {
     tooltiips.forEach((tooltiip) => {
       const pin = tooltiip.querySelector(".pin");
       const content = tooltiip.querySelector(".tooltiip-content");
       const arrow = tooltiip.querySelector(".arrow");
       const pinLeft = pin.offsetLeft;
       if (pinLeft + content.offsetWidth / 2 > fullDiv.offsetWidth) {
         const extraLeft =
           fullDiv.offsetWidth - (pinLeft + content.offsetWidth / 2);
         // console.log('right-conflict', tooltiip)
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
   tooltiips.forEach((tooltiip) => {
     const pin = tooltiip.querySelector(".pin");
     const content = tooltiip.querySelector(".tooltiip-content");
     pin.addEventListener("mouseover", () => {
       tooltiip.classList.add("active");
     });
     pin.addEventListener("mouseleave", () => {
       timeoutId = setTimeout(() => {
         if (!tooltiip.classList.contains("content-hover")) {
           tooltiip.classList.remove("active");
         }
       }, 100);
     });
     content.addEventListener("mouseover", () => {
       clearTimeout(timeoutId);
       tooltiip.classList.add("active");
       tooltiip.classList.add("content-hover");
     });
     content.addEventListener("mouseleave", () => {
       timeoutId = setTimeout(() => {
         tooltiip.classList.remove("active");
         tooltiip.classList.remove("content-hover");
       }, 100);
     });
   });