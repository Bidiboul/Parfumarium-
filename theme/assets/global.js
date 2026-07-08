/* Parfumarium — interactions globales */

/* Tiroir mobile */
document.querySelectorAll("[data-drawer-open]").forEach(function (btn) {
  btn.addEventListener("click", function () {
    var d = document.getElementById(btn.getAttribute("data-drawer-open"));
    if (d) d.classList.add("is-open");
    document.body.style.overflow = "hidden";
  });
});
document.querySelectorAll("[data-drawer-close]").forEach(function (el) {
  el.addEventListener("click", function () {
    el.closest(".drawer").classList.remove("is-open");
    document.body.style.overflow = "";
  });
});

/* Apparition au scroll */
(function () {
  var obs = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          obs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -50px 0px" }
  );
  document.querySelectorAll(".reveal").forEach(function (el) { obs.observe(el); });
})();

/* Sélecteur de variantes (fiche produit) */
(function () {
  var form = document.querySelector("[data-product-form]");
  if (!form) return;
  var data = JSON.parse(document.getElementById("product-json").textContent);
  var idInput = form.querySelector('input[name="id"]');
  var priceEl = document.querySelector("[data-price]");
  var btn = form.querySelector("[data-add]");
  var btnLabel = btn.getAttribute("data-label");
  var soldLabel = btn.getAttribute("data-soldout");

  function money(cents) {
    return (cents / 100).toLocaleString(document.documentElement.lang || "fr", {
      style: "currency", currency: data.currency || "EUR",
    });
  }
  function update() {
    var checked = form.querySelector('input[name="option-0"]:checked');
    if (!checked) return;
    var v = data.variants.find(function (x) { return String(x.id) === checked.value; });
    if (!v) return;
    idInput.value = v.id;
    if (priceEl) priceEl.textContent = money(v.price);
    btn.disabled = !v.available;
    btn.textContent = v.available ? btnLabel + " — " + money(v.price) : soldLabel;
  }
  form.querySelectorAll('input[name="option-0"]').forEach(function (r) {
    r.addEventListener("change", update);
  });
  update();
})();
