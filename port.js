document.getElementById('darkmode').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    document.querySelector('.wrapper').classList.toggle('dark-mode'); // Toggle dark mode class on a wrapper
  });
  