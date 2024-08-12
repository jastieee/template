// Function to get image URL
function getImageUrl(filename) {
    return `assets/${filename}`; // Adjust the path as needed
}

// Create navigation bar
document.addEventListener("DOMContentLoaded", function () {
    const navibar = document.createElement("nav");
    navibar.className = "navibar";

    // Logo
   /* const logoLink = document.createElement("a");
    logoLink.href = "/";
    const logoImg = document.createElement("img");
    logoImg.className = "logo";
    logoImg.src = getImageUrl("logo1.png");
    logoImg.alt = "header";
    logoLink.appendChild(logoImg);
    navibar.appendChild(logoLink); */
 
    // Menu
    const menuDiv = document.createElement("div");
    menuDiv.className = "menu";
    const itemsUl = document.createElement("ul");
    itemsUl.className = "items";

    const menuItems = [
        { href: "#about", text: "About" },
        { href: "#project", text: "Project" },
        { href: "#contact", text: "Contact" },
    ];

    menuItems.forEach(item => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = item.href;
        a.textContent = item.text;
        li.appendChild(a);
        itemsUl.appendChild(li);
    });

    menuDiv.appendChild(itemsUl);
    navibar.appendChild(menuDiv);

    document.body.insertBefore(navibar, document.body.firstChild);
});
