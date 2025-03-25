
function getOS() {
    let userAgent = window.navigator.userAgent,
        platform = window.navigator.platform,
        os = "Nieznany";

    if (/Win/i.test(platform)) os = "Windows";
    if (/Mac/i.test(platform)) os = "MacOS";
    if (/Linux/i.test(platform)) os = "Linux";
    if (/Android/i.test(userAgent)) os = "Android";
    if (/iPhone|iPad|iPod/i.test(userAgent)) os = "iOS";

    return os;
}

let data = {
    os: getOS(),
    timestamp: new Date().toLocaleString()
};

fetch('log.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
});