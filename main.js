var btn = document.getElementById("remove");
btn.onclick= function () {
    document.getElementById('remove').innerText="item removed";
    setTimeout(() => {
        document.getElementById('remove').style.display="none";
    }, 3000);
}
 





