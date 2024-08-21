document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.querySelector('.checkbox');
    const menu = document.querySelector('.menu');
    
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            menu.style.display = 'block';
        } else {
            menu.style.display = 'none';
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let progressBars = document.querySelectorAll('.progress-bar');

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let progress = entry.target.querySelector('.progress');
                progress.style.width = progress.getAttribute('data-width');
                entry.target.classList.add('animate');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, { threshold: 0.5 });

    progressBars.forEach(bar => {
        observer.observe(bar);
    });
});

