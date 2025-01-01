let shareIcon = document.querySelector(
  ".container .page .two .footer .share > img"
);
let divOne = document.querySelector(
  ".container .page .two .footer .share > .divOne"
);
let divTwo = document.querySelector(
  ".container .page .two .footer .share > .divTwo"
);

shareIcon.onclick = function () {
  divOne.classList.toggle("show");
  divTwo.classList.toggle("show");
  this.classList.toggle("clicked");
};
