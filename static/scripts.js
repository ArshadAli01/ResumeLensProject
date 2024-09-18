window.addEventListener('load', function() {
    // Preloader animation
    gsap.to('.preloader-image', {
      duration: 5,
      scale: 2,
      opacity: 0,
      ease: 'power2.inOut',
      onComplete: function() {
        document.getElementById('preloader').style.display = 'none';
        showContentWithAnimation();
      }
    });
  });
  
  // Function to show content with animation
  function showContentWithAnimation() {
    const items = document.querySelectorAll('#content-container .item');
    
    // Set initial state for each item
    items.forEach(item => {
      gsap.set(item, { opacity: 0, scale: 0.8 });
    });
  
    // Animate each item one by one
    items.forEach((item, index) => {
      gsap.to(item, {
        duration: 0.5,
        opacity: 1,
        scale: 1,
        delay: index * 0.3, // Delay based on index for staggered effect
        ease: 'back.out(1.7)' // Ease for a bouncy effect
      });
    });
  
    // Finally display the content container
    document.getElementById('content-container').style.display = 'block';
  }


  
document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.querySelector('.typewriter');
    const text = textElement.innerHTML;
    
    // Function to create a typewriter effect
    function typeWriter(text, i) {
        if (i <= text.length) {
            textElement.innerHTML = text.substring(0, i);
            setTimeout(() => typeWriter(text, i + 1), 100); // Typing speed
        } else {
            setTimeout(() => deleteWriter(text, text.length), 1000); // Wait before starting to delete
        }
    }

    // Function to create a delete effect
    function deleteWriter(text, i) {
        if (i >= 0) {
            textElement.innerHTML = text.substring(0, i);
            setTimeout(() => deleteWriter(text, i - 1), 50); // Deleting speed
        } else {
            setTimeout(() => typeWriter(text, 0), 500); // Wait before starting to type again
        }
    }

    typeWriter(text, 0); // Start typing
});




