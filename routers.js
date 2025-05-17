const routers = [
    { brand: "TP-Link", ip: "192.168.0.1", support: "https://www.tp-link.com/support/" },
    { brand: "Netgear", ip: "192.168.1.1", support: "https://www.netgear.com/support/" },
    { brand: "Linksys", ip: "192.168.1.1", support: "https://www.linksys.com/support/" },
    { brand: "ASUS", ip: "192.168.1.1", support: "https://www.asus.com/support/" },
    { brand: "D-Link", ip: "192.168.0.1", support: "https://support.dlink.com/" },
    { brand: "Belkin", ip: "192.168.2.1", support: "https://www.belkin.com/support/" },
    { brand: "Google Nest", ip: "192.168.86.1", support: "https://support.google.com/googlenest/" }
];

function filterRouters() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const list = document.getElementById('routerList');
    list.innerHTML = '';

    routers
        .filter(router => router.brand.toLowerCase().includes(searchInput))
        .forEach(router => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${router.brand}</strong>: <a href="http://${router.ip}" target="_blank">${router.ip}</a> | <a href="${router.support}" target="_blank">Support</a>`;
            list.appendChild(li);
        });
}

// Initial render
filterRouters();
