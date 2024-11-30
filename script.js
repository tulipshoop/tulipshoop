// إنشاء مصفوفة لحفظ المنتجات في السلة
let cart = [];

// دالة لإضافة المنتجات إلى السلة
function addToCart(productName, productPrice) {
  // إضافة المنتج إلى السلة
  cart.push({ name: productName, price: productPrice });

  // عرض رسالة تأكيد
  alert(`${productName} تمت إضافته إلى السلة بنجاح!`);

  // طباعة محتوى السلة في وحدة التحكم
  console.log(cart);
}

// دالة لاستعراض محتويات السلة
function viewCart() {
  if (cart.length === 0) {
    alert("السلة فارغة!");
  } else {
    let cartContent = "محتويات السلة:\n";
    cart.forEach((item, index) => {
      cartContent += `${index + 1}. ${item.name} - ${item.price} ريال\n`;
    });
    alert(cartContent);
  }
}
// التعامل مع نموذج الاتصال بنا
document.getElementById("contactForm")?.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // التحقق من صحة البيانات
  if (name && email && message) {
    alert("تم إرسال رسالتك بنجاح! شكرًا لتواصلك معنا.");
    // يمكن هنا إرسال البيانات إلى خادم باستخدام AJAX أو Fetch إذا لزم الأمر
    console.log({ name, email, message });
    this.reset(); // إعادة تعيين النموذج
  } else {
    alert("يرجى ملء جميع الحقول.");
  }
});