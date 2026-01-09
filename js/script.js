const copyBtn = document.getElementById('copy-number');
const toast = document.getElementById('toast');

copyBtn.addEventListener('click', function(e) {

    e.preventDefault();
    const number = "+639686689357";

    navigator.clipboard.writeText(number).then(function() {

        toast.classList.add('show');
        setTimeout(function() {
            toast.classList.remove('show');
        }, 3000);

    }).catch(function(err) {
        console.error('Could not copy text: ', err);
    });

});

const projects = document.getElementById('project-link');
const toast2 = document.getElementById('project');

projects.addEventListener('click', function(e) {

    e.preventDefault();

    toast2.classList.add('show');
    setTimeout(function() {
        toast2.classList.remove('show');
    }, 3000); 

});