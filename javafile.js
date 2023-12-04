document.addEventListener('DOMContentLoaded', function () {
    // Sample data, replace with your own
    const skills = ['HTML', 'CSS', 'JavaScript', 'React'];
    
    const experience = [
        { title: 'Web Developer', company: 'ABC Corp', year: '2021-2023' },
        { title: 'Frontend Developer', company: 'XYZ Inc', year: '2019-2021' }
    ];

    const projects = [
        { name: 'Project A', description: 'Lorem ipsum dolor sit amet.' },
        { name: 'Project B', description: 'Consectetur adipiscing elit.' }
    ];

    // Populate skills
    const skillsList = document.getElementById('skillsList');
    skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        skillsList.appendChild(li);
    });

    // Populate work experience
    const experienceList = document.getElementById('experienceList');
    experience.forEach(exp => {
        const div = document.createElement('div');
        div.classList.add('experience');
        div.innerHTML = `<h3>${exp.title}</h3>
                        <p>${exp.company} | ${exp.year}</p>`;
        experienceList.appendChild(div);
    });

    // Populate projects
    const projectsList = document.getElementById('projectsList');
    projects.forEach(proj => {
        const div = document.createElement('div');
        div.classList.add('project');
        div.innerHTML = `<h3>${proj.name}</h3>
                        <p>${proj.description}</p>`;
        projectsList.appendChild(div);
        document.addEventListener('DOMContentLoaded', function () {
            const subscribeForm = document.getElementById('subscribeForm');
        
            subscribeForm.addEventListener('submit', function (event) {
                event.preventDefault();
        
                // Get the email input value
                const emailInput = document.getElementById('email');
                const email = emailInput.value;
        
                // Check if the email is valid (you might want to enhance this validation)
                if (isValidEmail(email)) {
                    // Call a function to store the email (you'll replace this with your server-side logic)
                    storeEmail(email);
        
                    // Optionally, provide feedback to the user
                    alert('Thanks for subscribing!');
                    
                    // Clear the input field
                    emailInput.value = '';
                } else {
                    alert('Invalid email address. Please try again.');
                }
            });
        
            // Simple email validation function
            function isValidEmail(email) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(email);
            }
        
            // Dummy function to simulate storing email addresses on the server (replace with your server-side logic)
            function storeEmail(email) {
                // Here, you might make an AJAX request to your server to store the email
                // For simplicity, I'm just logging it to the console in this example
                console.log('Email stored:', email);
            }
        });
        
    });
});
