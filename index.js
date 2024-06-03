document.addEventListener("DOMContentLoaded", () => {
    const shirtPath = document.getElementById("shirt-path");
    const broekPath = document.getElementById("broek-path");
    const haarPath = document.getElementById("haar-path");
    const shirtOptions = document.getElementById("shirt-opties");
    const pantsOptions = document.getElementById("broek-opties");
    const haarOptions = document.getElementById("haar-opties");
    const h1 = document.querySelector("h1");
    const h2 = document.querySelector("h2"); 
    const tshirts = document.querySelectorAll('.tshirt');
    tshirts.forEach(tshirt => {
        tshirt.addEventListener('click', (event) => {
            const color = event.currentTarget.id;
            switch (color) {
                case 'beige':
                    shirtPath.style.fill = "#ECD2AB";
                    break;
                case 'groen':
                    shirtPath.style.fill = "#8BCC83";
                    break;
                case 'navy':
                    shirtPath.style.fill = "#1E2854";
                    break;
            }
            shirtOptions.style.display = 'none';
            pantsOptions.style.display = 'grid';
        });
    });

    const pants = document.querySelectorAll('.broek');
    pants.forEach(pant => {
        pant.addEventListener('click', (event) => {
            const color = event.currentTarget.id;
            switch (color) {
                case 'groen2':
                    broekPath.style.fill = "#8BCC83";
                    break;
                case 'navy2':
                    broekPath.style.fill = "#1E2854";
                    break;
                case 'beige2':
                    broekPath.style.fill = "#ECD2AB";
                    break;
            }
            pantsOptions.style.display = 'none';
            haarOptions.style.display = 'grid';
        });
    });

    const haar = document.querySelectorAll('.haar');
    haar.forEach(shoe => {
        shoe.addEventListener('click', (event) => {
            const color = event.currentTarget.id;
            switch (color) {
                case 'rood':
                    haarPath.style.fill = "#E97936"; 
                    break;
                case 'blond':
                    haarPath.style.fill = "#E9A135"; 
                    break;
                case 'bruin':
                    haarPath.style.fill = "#3A1908"; 
                    break;
            }
            haarOptions.style.display = 'none';
            h1.textContent = "Eindresultaat!";
            h2.style.display = 'none'; 
        });
    });
});
