(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    nextYear = yyyy + 1,
    dayMonth = "10/30/",
    birthday = dayMonth + yyyy;

  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end

  const countDown = new Date(birthday).getTime(),
    x = setInterval(function () {
      const now = new Date().getTime(),
        distance = countDown - now;

      (document.getElementById("days").innerText = Math.floor(distance / day)),
        (document.getElementById("hours").innerText = Math.floor(
          (distance % day) / hour
        )),
        (document.getElementById("minutes").innerText = Math.floor(
          (distance % hour) / minute
        )),
        (document.getElementById("seconds").innerText = Math.floor(
          (distance % minute) / second
        ));
      (document.getElementById("days-2").innerText = Math.floor(
        distance / day
      )),
        (document.getElementById("hours-2").innerText = Math.floor(
          (distance % day) / hour
        )),
        (document.getElementById("minutes-2").innerText = Math.floor(
          (distance % hour) / minute
        )),
        (document.getElementById("seconds-2").innerText = Math.floor(
          (distance % minute) / second
        ));
      (document.getElementById("days-3").innerText = Math.floor(
        distance / day
      )),
        (document.getElementById("hours-3").innerText = Math.floor(
          (distance % day) / hour
        )),
        (document.getElementById("minutes-3").innerText = Math.floor(
          (distance % hour) / minute
        )),
        (document.getElementById("seconds-3").innerText = Math.floor(
          (distance % minute) / second
        ));

      //do something later when date is reached
      if (distance < 0) {
        document.getElementById("headline").innerText = "It's my birthday!";
        document.getElementById("countdown").style.display = "none";
        document.getElementById("content").style.display = "block";
        clearInterval(x);
      }
      //seconds
    }, 0);
})();
// Selection
// filterSelection("all")
// function filterSelection(c) {

//   var x, i;
//   x = document.getElementsByClassName("filterDiv");
//   if (c == "all") c = "";
//   for (i = 0; i < x.length; i++) {
//     w3RemoveClass(x[i], "show");
//     if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
//   }
//   console.log("Click ")
// }

// function w3AddClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
//   }
// }

// function w3RemoveClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     while (arr1.indexOf(arr2[i]) > -1) {
//       arr1.splice(arr1.indexOf(arr2[i]), 1);
//     }
//   }
//   element.className = arr1.join(" ");
// }

// // Add active class to the current button (highlight it)
// var btnContainer = document.getElementById("myBtnContainer");
// var btns = btnContainer.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function(){
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }

$(document).ready(function () {
  $(".filter-button").click(function () {
    var value = $(this).attr("data-filter");

    if (value == "all") {
      //$('.filter').removeClass('hidden');
      $(".filter").show("1000");
    } else {
      //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
      //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
      $(".filter")
        .not("." + value)
        .hide("3000");
      $(".filter")
        .filter("." + value)
        .show("3000");
    }
  });

  if ($(".filter-button").removeClass("active")) {
    $(this).removeClass("active");
  }
  $(this).addClass("active");
});

$(function () {
  $(".popup-youtube").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });
});

// const form = document.querySelector("#form");
// const submitButton = document.querySelector("#submit");
// const scriptURL =
//   "https://script.google.com/macros/s/AKfycbxVVSp65YIHGnjI422YOg6paGrU8Y83udcxDM7hAPCqPsTc-ozxDa-v3kTmCfuZdywzIQ/exec";

// form.addEventListener("submit", (e) => {
//   submitButton.disabled = true;
//   e.preventDefault();
//   let requestBody = new FormData(form);
//   fetch(scriptURL, { method: "POST", body: requestBody })
//     .then((response) => {
//       alert("Success!", response);
//       submitButton.disabled = false;
//     })
//     .catch((error) => {
//       alert("Error!", error.message);
//       submitButton.disabled = false;
//     });
// });

const scriptURL =
  "https://script.google.com/macros/s/AKfycbxVVSp65YIHGnjI422YOg6paGrU8Y83udcxDM7hAPCqPsTc-ozxDa-v3kTmCfuZdywzIQ/exec";
const form = document.forms["quote-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
      alert("Thank you! your form is submitted successfully.")
    )
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});
const scriptURL2 =
  "https://script.google.com/macros/s/AKfycbxVVSp65YIHGnjI422YOg6paGrU8Y83udcxDM7hAPCqPsTc-ozxDa-v3kTmCfuZdywzIQ/exec";
const form2 = document.forms["quote-form2"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL2, { method: "POST", body: new FormData(form2) })
    .then((response) =>
      alert("Thank you! your form is submitted successfully.")
    )
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});
