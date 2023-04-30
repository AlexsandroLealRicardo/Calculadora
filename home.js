$(".faq-item").on("click", function () {
  $(this).toggleClass("is--active");
  $(this).find(".faq-answer").toggleClass("is--active");
  $(this).find(".p-m-wrap").toggleClass("is--active");
  $(this)
    .closest(".pricing-faq_component")
    .siblings()
    .find(".p-m-wrap")
    .removeClass("is--active");

  $(this)
    .closest(".pricing-faq_component")
    .siblings()
    .find(".faq-answer")
    .removeClass("is--active");

  $(this)
    .closest(".pricing-faq_list-wrapper")
    .siblings()
    .find(".faq-answer")
    .removeClass("is--active");

  $(this)
    .closest(".pricing-faq_list-wrapper")
    .siblings()
    .find(".p-m-wrap")
    .removeClass("is--active");
});
