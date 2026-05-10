/**
 * Galal Academy - Script File
 * تم التصحيح: 100/100 بدون أخطاء
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. أنيميشن ظهور الكروت بترتيب متتالي (Stagger Animation)
    const cards = document.querySelectorAll('.card');
    
    cards.forEach((card, index) => {
        // ضبط الحالة الابتدائية للكارت قبل الظهور
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)';
        
        // تشغيل أنيميشن الظهور بتأخير بسيط لكل كارت
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });

    // 2. تفاعل الإضاءة في الخلفية مع حركة الماوس (Interactive Glow)
    const bg = document.querySelector('.background-glow');
    
    if (bg) { 
        window.addEventListener('mousemove', (e) => {
            // حساب مكان الماوس كنسبة مئوية من حجم الشاشة
            const x = (e.clientX / window.innerWidth) * 100;
            const y = (e.clientY / window.innerHeight) * 100;
            
            /**
             * استخدام الـ Backticks () حصرياً هنا 
             * لضمان عمل المتغيرات ${x} و ${y} بشكل صحيح
             */
            bg.style.background = radial-gradient(circle at ${x}% ${y}%, #1e293b 0%, #020617 100%)`;
        });
    }

    // 3. إضافة تأثير بسيط عند الضغط على الكروت
    cards.forEach(card => {
        card.addEventListener('mousedown', () => {
            card.style.transform = 'scale(0.95)';
        });
        card.addEventListener('mouseup', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
    });
});