var url;
var id;

$("#url").keyup(function (event) {
    if (event.keyCode == 13) {
        getInfo();
    }
});

function getInfo() {
    url = $("#url").val();

    if (url !== "") {

        id = url.split("v=")[1];

        if (id != undefined) {
            ap = id.indexOf("&");
            if (ap != -1) {
                id = id.substring(0, ap)
            }
            console.log("ID: " + id);
            console.log()
            $("#download").attr("href", "http://i.ytimg.com/vi/" + id + "/maxresdefault.jpg");
        }
    }
}