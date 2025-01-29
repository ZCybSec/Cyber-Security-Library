// الحصول على العناصر
const searchInput = document.getElementById('search');
const categoryFilter = document.getElementById('category-filter');
const books = document.querySelectorAll('.book');

// البحث في الكتب
searchInput.addEventListener('input', filterBooks);
categoryFilter.addEventListener('change', filterBooks);

// فلترة الكتب بناءً على النص المدخل والتصنيف
function filterBooks() {
    const searchQuery = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value.toLowerCase();

    books.forEach(book => {
        const title = book.querySelector('h2').textContent.toLowerCase();
        const category = book.getAttribute('data-category').toLowerCase();

        // إظهار الكتاب إذا تطابق مع الفلاتر
        if (
            (title.includes(searchQuery)) &&
            (selectedCategory === 'all' || category.includes(selectedCategory))
        ) {
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    });
}

// إضافة تأثير إظهار التفاصيل عند النقر
const bookCards = document.querySelectorAll('.book');

bookCards.forEach(book => {
    const downloadIcon = book.querySelector('.download-icon');
    const fileLink = book.getAttribute('data-file');
    
    // وظيفة تحميل الكتاب عند النقر على الأيقونة
    downloadIcon.addEventListener('click', function() {
        startDownload(fileLink);
    });
});

// وظيفة لتحميل الكتاب مع التعامل مع الأخطاء
function startDownload(file) {
    // فتح الرابط في نافذة جديدة
    window.open(file, '_blank');
}
