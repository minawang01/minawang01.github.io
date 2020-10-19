$("document").ready(function () {
  if ($(".check_hover:hover")) {
    window.onscroll(() => {
      $(window).scroll(() => {
        document
          .querySelector("#page_two")
          .scrollIntoView({ behavior: "smooth" });
      });
    });
  }
});
